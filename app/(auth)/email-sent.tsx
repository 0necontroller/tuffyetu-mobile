import { images } from "@/constants";
import { Alert, Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AppleOTPInput from "../../components/ui/opt-input";
import { ThemedText } from "@/components/ui/text";
import { Link, useRouter } from "expo-router";
import Entypo from "@expo/vector-icons/Entypo";

export default function EmailSent() {
  const router = useRouter();

  const handleComplete = (code: string) => {
    router.push("/(auth)/favourite-sport");
  };

  return (
    <SafeAreaView className="gap-6 py-2 px-4 h-full bg-white">
      <TouchableOpacity className="p-0.5">
        <Link dismissTo href="/(auth)/sign-up">
          <Entypo name="chevron-thin-left" size={20} color="black" />
        </Link>
      </TouchableOpacity>

      <View className="flex-1 items-center justify-center gap-6">
        <Image
          source={images.emailSent}
          className="w-[100px] h-[100px] mt-4 rounded-lg"
          resizeMode="contain"
        />
        <ThemedText
          type="title"
          className="w-full font-JakartaMedium text-center"
        >
          Check your email
        </ThemedText>
        <Text className="text-center text-gray-500 mx-10">
          We have sent a 6-digit verification code to your email address.
        </Text>
        <AppleOTPInput onComplete={handleComplete} />
        <TouchableOpacity>
          <Text className="text-center underline font-JakartaMedium text-black">
            Didn't receive a code ?
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
