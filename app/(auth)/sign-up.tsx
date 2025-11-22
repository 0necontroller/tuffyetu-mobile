import { useState } from "react";
import { router } from "expo-router";
import { icons, images } from "@/constants";
import InputField from "@/components/ui/input";
import CustomButton from "@/components/ui/button";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, useColorScheme, Image } from "react-native";
import { ThemedText } from "@/components/ui/text";

export default function SignUp() {
  const colorScheme = useColorScheme();
  const [form, setForm] = useState({
    email: "",
  });
  return (
    <SafeAreaView className="pt-10 px-4 h-full items-center bg-white dark:bg-black justify-center">
      <View className="items-center">
        {/* logo placeholder */}
        <Image
          source={images.turfYetuLogo}
          className="w-[200px]"
          resizeMode="contain"
        />
      </View>

      <View className="w-full px-2 mt-4">
        <ThemedText type="title" className="mx-auto mb-4">
          Log in or sign up
        </ThemedText>
        <InputField
          placeholder="Enter email"
          icon={icons.email}
          textContentType="emailAddress"
          value={form.email}
          onChangeText={(value) => setForm({ ...form, email: value })}
          colorScheme={colorScheme ?? "light"}
          keyboardType="email-address"
          className="w-full"
          autoCapitalize="none"
          autoCorrect={false}
          clearButtonMode="while-editing"
        />

        <CustomButton
          title="Continue"
          onPress={() => router.push("/email-sent")}
          className="mt-2 w-full rounded-lg"
          textClassName="font-JakartaSemiBold"
        />

        <View className="flex flex-row items-center justify-center my-4">
          <View className="h-[1px] bg-gray-200 flex-1 mx-2" />
          <Text className="text-gray-400">or</Text>
          <View className="h-[1px] bg-gray-200 flex-1 mx-2" />
        </View>

        <CustomButton
          title="Continue with Google"
          onPress={() => {
            router.push("/(root)/(tabs)");
          }}
          className={
            "bg-transparent border border-gray-300 flex-row items-center justify-center p-4 rounded-lg w-full"
          }
          textClassName={
            "text-black dark:text-white ml-2 font-JakartaSemiBold text-base"
          }
          IconLeft={() => <Image source={icons.google} className="w-6 h-6" />}
        />
      </View>
    </SafeAreaView>
  );
}
