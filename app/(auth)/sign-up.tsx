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
  TouchableOpacity,
} from 'react-native'

export default function SignUp() {
  const colorScheme = useColorScheme()
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
  })
  return (
    <ScrollView className='flex-1'>
      <SafeAreaView className='pt-6 px-4'>
        <View className='flex gap-4'>
          <TouchableOpacity
            onPress={() => {
              router.replace('/welcome')
            }}
            className='flex items-center justify-center bg-gray-200 w-[40px] h-[40px] rounded-full dark:bg-primary/20'
          >
            <Octicons
              name='chevron-left'
              size={25}
              color={colorScheme == 'dark' ? 'gray' : 'black'}
            />
          </TouchableOpacity>

          <Text className='dark:text-white font-bold text-3xl'>
            Create Account
          </Text>
        </View>

        <View className='mt-6'>
          <InputField
            label='Name'
            placeholder='Enter name'
            icon={icons.person}
            value={form.name}
            colorScheme={colorScheme ?? 'light'}
            onChangeText={(value) => setForm({ ...form, name: value })}
          />
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

          <View className='mt-4 flex flex-row'>
            <Text className='text-sm text-center font-JakartaMedium dark:text-gray-200'>
              Already have an account?&nbsp;
              <Link href='/sign-in' className='font-JakartaSemiBold'>
                Login
              </Link>
            </Text>
          </View>
          <CustomButton title='Sign Up' onPress={() =>router.push("/about-you")} className='mt-8' />
        </View>
      </SafeAreaView>
    </ScrollView>
  )
}
