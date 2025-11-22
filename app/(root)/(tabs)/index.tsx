import { Text } from 'react-native'
import { router } from 'expo-router'
import CustomButton from '@/components/ui/button'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function Home() {
  return (
    <SafeAreaView className='pt-6 gap-6 px-4 h-full items-center justify-center'>

      <Text className='font-JakartaSemiBold text-xl text-center dark:text-white'>
      Welcome to the college app
      </Text>

      <CustomButton
        title='Onboarding'
        onPress={() => router.replace('/(auth)/welcome')}
        className='w-6/12'
      />
    </SafeAreaView>
  )
}
