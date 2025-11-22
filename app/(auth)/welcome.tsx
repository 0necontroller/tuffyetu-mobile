import { router } from "expo-router";
import { useRef, useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Swiper from "react-native-swiper";

import { onboarding } from "@/constants";
import CustomButton from "@/components/ui/button";

const Home = () => {
  const swiperRef = useRef<Swiper>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const isLastSlide = activeIndex === onboarding.length - 1;

  return (
    <SafeAreaView className="flex h-full items-center justify-between bg-white">
      <TouchableOpacity
        onPress={() => {
          router.replace("/(auth)/sign-up");
        }}
        className="w-full flex justify-end items-end p-5"
      >
        <Text className="text-black text-md font-JakartaBold dark:text-gray-200">
          Skip
        </Text>
      </TouchableOpacity>

      <Swiper
        ref={swiperRef}
        loop={false}
        dot={
          <View className="w-[32px] h-[4px] mx-1 bg-gray-300 rounded-full" />
        }
        activeDot={
          <View className="w-[32px] h-[4px] mx-1 bg-gray-800 rounded-full" />
        }
        onIndexChanged={(index) => setActiveIndex(index)}
        bounces={true}
      >
        {onboarding.map((item) => (
          <View key={item.id} className="flex items-center justify-center p-5">
            <View className="flex flex-row items-center justify-center w-full">
              <Text className="text-black text-3xl font-JakartaBold mx-4 text-center dark:text-white">
                {item.title}
              </Text>
            </View>
            <View
              style={styles.dashedBorder}
              className="w-full h-[300px] mt-4 rounded-md p-3"
            >
              <Image
                source={item.image}
                className="w-full h-full"
                resizeMode="contain"
              />
            </View>
            <Text className="text-md font-JakartaSemiBold text-center text-gray-500 mx-10 mt-3 dark:text-gray-300">
              {item.description}
            </Text>
          </View>
        ))}
      </Swiper>

      <CustomButton
        title={isLastSlide ? "READY • SET • GO" : "Next"}
        onPress={() =>
          isLastSlide
            ? router.replace("/(auth)/sign-up")
            : swiperRef.current?.scrollBy(1)
        }
        className="w-11/12 mt-10 mb-5"
      />
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  dashedBorder: {
    borderWidth: 1,
    borderColor: "rgba(142,108,239, 0.4)",
    borderStyle: "dashed",
  },
});
