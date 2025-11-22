import { useState } from 'react'
import { Link, router } from 'expo-router'
import { icons } from '@/constants'
import InputField from '@/components/ui/input'
import CustomButton from '@/components/ui/button'
import Octicons from '@expo/vector-icons/Octicons'
import { SafeAreaView } from 'react-native-safe-area-context'
import {
  View,
  Text,
  ScrollView,
  useColorScheme,
} from 'react-native'

export default function ForgotPassword() {
  const colorScheme = useColorScheme()
  const [form, setForm] = useState({
    email: '',
  })
  return (
    <ScrollView className='flex-1'>
      <SafeAreaView className='pt-6 px-4'>
        <View className='flex gap-4'>
          <Link href='/sign-in'>
            <View className='flex items-center justify-center bg-gray-200 w-[40px] h-[40px] rounded-full dark:bg-primary/20'>
              <Octicons
                name='chevron-left'
                size={25}
                color={colorScheme == 'dark' ? 'gray' : 'black'}
              />
            </View>
          </Link>

          <Text className='dark:text-white font-bold text-3xl'>
            Forgot Password
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

          <View className='mt-4 flex flex-row'>
            <Text className='text-sm text-center font-JakartaMedium dark:text-gray-200'>
              Don't have an account?&nbsp;&nbsp;
              <Link href='/sign-up' className='font-JakartaSemiBold'>
                Create One
              </Link>
            </Text>
          </View>
          <CustomButton title='Continue' onPress={() =>router.replace("/email-sent") } className='mt-8' />
        </View>
      </SafeAreaView>
    </ScrollView>
  )
}
