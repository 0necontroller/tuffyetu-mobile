import {
  TextInput,
  View,
  Text,
  Image,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
} from 'react-native'

import { InputFieldProps } from '@/types/type'

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
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View className='my-2 w-full'>
          {label && (
            <Text
              className={`text-md font-JakartaSemiBold mb-3 ${labelStyle} dark:text-gray-200`}
            >
              {label}
            </Text>
          )}
          <View
            className={`flex flex-row justify-start items-center relative rounded-lg border focus:border-primary  ${containerStyle} ${colorScheme == 'light' ? 'bg-primary/5 border-primary/30' : 'bg-primary/20 border-primary/50'}`}
          >
            {icon && (
              <Image source={icon} className={`w-6 h-6 ml-4 ${iconStyle}`} />
            )}
            <TextInput
              className={`rounded-full p-4 font-JakartaSemiBold text-[15px] flex-1 ${inputStyle} text-left ${colorScheme == 'light' ? 'text-gray-500' : 'text-gray-200'}`}
              secureTextEntry={secureTextEntry}
              selectionColor='#8E6CEF'
              placeholderTextColor={'#9ca3af'}
              {...props}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  )
}

export default InputField
