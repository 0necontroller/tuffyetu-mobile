import { Redirect } from 'expo-router'

const Page = () => {
  let isSignedIn = false

  if (isSignedIn) return <Redirect href='/(auth)/welcome' />

  return <Redirect href='/(auth)/welcome' />
}

export default Page
