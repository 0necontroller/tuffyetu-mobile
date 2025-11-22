import { router } from 'expo-router'
import { images } from '@/constants'
import { Image, Text } from 'react-native'
import CustomButton from '@/components/ui/button'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function EmailSent() {
  return (
    <SafeAreaView className='pt-6 gap-6 px-4 h-full items-center justify-center'>
      <Image
        source={images.emailSent}
        className='w-[100px] h-[100px] mt-4 rounded-lg'
        resizeMode='contain'
      />

      <Text className='font-JakartaSemiBold text-xl text-center dark:text-white'>
        We sent an Email to reset your password
      </Text>

      <CustomButton
        title='Continue'
        onPress={() => router.replace('/about-you')}
        className='w-10/12'
      />
    </SafeAreaView>
  )
}
