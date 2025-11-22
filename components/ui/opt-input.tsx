import { View, Text, Alert } from "react-native";
import { OTPInput, type SlotProps } from "input-otp-native";
import type { OTPInputRef } from "input-otp-native";
import { Fragment, useRef } from "react";

import Animated, {
  useAnimatedStyle,
  withRepeat,
  withTiming,
  withSequence,
  useSharedValue,
} from "react-native-reanimated";
import { useEffect } from "react";
import { cn } from "@/lib/utils";

interface AppleOTPInputProps {
  onComplete: (code: string) => void;
}

export default function AppleOTPInput({ onComplete }: AppleOTPInputProps) {
  const ref = useRef<OTPInputRef>(null);
  const onCompleteInternal = (code: string) => {
    ref.current?.clear();
    onComplete(code);
  };

  return (
    <OTPInput
      ref={ref}
      onComplete={onCompleteInternal}
      maxLength={6}
      render={({ slots }) => (
        <View className="flex-row items-center justify-center my-4">
          {slots.map((slot, idx) => (
            <Fragment key={idx}>
              <Slot {...slot} />
              {idx === 2 && <FakeDash />}
            </Fragment>
          ))}
        </View>
      )}
    />
  );
}

function Slot({ char, isActive, hasFakeCaret }: SlotProps) {
  return (
    <View
      className={cn(
        "w-[50px] h-[50px] items-center justify-center mr-1 border border-gray-600 rounded-lg bg-white",
        {
          "border-gray-800 border-2": isActive,
        }
      )}
    >
      {char !== null && (
        <Text className="text-2xl font-medium text-gray-900">{char}</Text>
      )}
      {hasFakeCaret && <FakeCaret />}
    </View>
  );
}

function FakeDash() {
  return (
    <View className="w-2 items-center mr-1 justify-center">
      <View className="w-2 h-0.5 bg-gray-200 rounded-sm" />
    </View>
  );
}

function FakeCaret() {
  const opacity = useSharedValue(1);

  useEffect(() => {
    opacity.value = withRepeat(
      withSequence(
        withTiming(0, { duration: 500 }),
        withTiming(1, { duration: 500 })
      ),
      -1,
      true
    );
  }, [opacity]);

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
  }));

  const baseStyle = {
    width: 2,
    height: 28,
    backgroundColor: "#000",
    borderRadius: 1,
  };

  return (
    <View className="absolute w-full h-full items-center justify-center">
      <Animated.View style={[baseStyle, animatedStyle]} />
    </View>
  );
}
