import {
  TextInput,
  View,
  Text,
  Image,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
} from "react-native";

import { InputFieldProps } from "@/types/type";
import { APP_CONFIG } from "@/constants/config";

const InputField = ({
  label,
  icon,
  secureTextEntry = false,
  labelStyle,
  containerStyle,
  inputStyle,
  iconStyle,
  colorScheme,
  className,
  ...props
}: InputFieldProps) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View className="my-2 w-full">
          {label && (
            <Text
              className={`text-md font-JakartaSemiBold mb-3 ${labelStyle} dark:text-gray-200`}
            >
              {label}
            </Text>
          )}
          <View
            className={`flex flex-row justify-start items-center relative rounded-lg border border-gray-300  ${containerStyle}`}
          >
            {icon && (
              <Image source={icon} className={`w-5 h-5 ml-4 ${iconStyle}`} />
            )}
            <TextInput
              style={{ borderWidth: 0 }}
              className={`font-Jakarta placeholder:font-medium mb-0.5 text-[15px] flex-1 ${inputStyle} text-left ${
                colorScheme == "light" ? "text-gray-500" : "text-gray-200"
              }`}
              secureTextEntry={secureTextEntry}
              selectionColor={APP_CONFIG.colors.primary}
              placeholderTextColor={"#9ca3af"}
              {...props}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default InputField;
