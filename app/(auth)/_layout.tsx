import { Stack } from "expo-router";

const Layout = () => {
  return (
    <Stack>
      <Stack.Screen name="welcome" options={{ headerShown: false }} />
      <Stack.Screen name="sign-up" options={{ headerShown: false }} />
      <Stack.Screen name="email-sent" options={{ headerShown: false }} />
      <Stack.Screen name="about-you" options={{ headerShown: false }} />
    </Stack>
  );
};

export default Layout;
