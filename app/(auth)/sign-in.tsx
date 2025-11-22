import { useState } from 'react'
import { Link } from 'expo-router'
import { icons } from '@/constants'
import InputField from '@/components/ui/input'
import CustomButton from '@/components/ui/button'
import { SafeAreaView } from 'react-native-safe-area-context'
import {
  View,
  Text,
  ScrollView,
  useColorScheme,
} from 'react-native'

export default function SignIn() {
  const colorScheme = useColorScheme()
  const [form, setForm] = useState({
    email: '',
    password: '',
  })
  return (
    <ScrollView className='flex-1'>
      <SafeAreaView className='pt-14 px-4'>
        <View className='flex gap-4'>
          <Text className='dark:text-white font-bold text-3xl'>
            Sign In
          </Text>
        </View>

        <View className='mt-6'>
          <InputField
            label='Email'
            placeholder='Enter email'
            icon={icons.email}
            textContentType='emailAddress'
            value={form.email}
            onChangeText={(value) => setForm({ ...form, email: value })}
            colorScheme={colorScheme ?? 'light'}
            keyboardType='email-address'
          />
          <InputField
            label='Password'
            placeholder='Enter password'
            icon={icons.lock}
            secureTextEntry={true}
            textContentType='password'
            value={form.password}
            colorScheme={colorScheme ?? 'light'}
            onChangeText={(value) => setForm({ ...form, password: value })}
          />

          <View className='mt-4 flex items-start pt-2 gap-2'>
            <Text className='text-sm text-center font-JakartaMedium dark:text-gray-200'>
              Don't have an account?&nbsp;&nbsp;
              <Link href='/sign-up' className='font-JakartaSemiBold'>
                Sign up
              </Link>
            </Text>
            <Text className='text-sm text-center font-JakartaMedium dark:text-gray-200'>
              Forgot password?&nbsp;&nbsp;
              <Link href='/forgot' className='font-JakartaSemiBold'>
                Reset
              </Link>
            </Text>
          </View>
          <CustomButton title='Continue' onPress={() => {}} className='mt-8' />
        </View>
      </SafeAreaView>
    </ScrollView>
  )
}
