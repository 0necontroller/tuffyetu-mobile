import { images } from "@/constants";
import { Alert, Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AppleOTPInput from "../../components/ui/opt-input";
import { ThemedText } from "@/components/ui/text";
import { Link, useRouter } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function EmailSent() {
  const router = useRouter();

  const handleComplete = (code: string) => {
    router.push("/(root)/(tabs)/home");
  };

  return (
    <SafeAreaView className="gap-6 px-4 h-full bg-white">
      <TouchableOpacity className="bg-gray-100 h-10 w-10 flex items-center justify-center rounded-full p-1">
        <Link dismissTo href="/(auth)/sign-up">
          <Ionicons name="arrow-back" size={24} color="black" />
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
