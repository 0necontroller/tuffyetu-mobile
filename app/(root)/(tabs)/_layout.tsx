import { icons } from '@/constants'
import { cn } from '@/lib/utils'
import { Tabs } from 'expo-router'
import { Image, ImageSourcePropType, Platform, View, useColorScheme } from 'react-native'

const TabIcon = ({
  source,
  focused,
}: {
  source: ImageSourcePropType
  focused: boolean
}) => (
  <View
    className={`flex flex-row justify-center items-center rounded-full ${focused ? 'bg-general-300' : ''}`}
  >
    <View
      className={cn(`rounded-full w-12 h-12 items-center justify-center ${focused ? 'bg-general-400' : ''}`,{"w-9 h-9":Platform.OS == 'android'})}
    >
      <Image
        source={source}
        tintColor='white'
        resizeMode='contain'
        className={cn('w-7 h-7',{'w-4 h-4':Platform.OS == 'android'})}
      />
    </View>
  </View>
)

export default function Layout() {
    const colorScheme = useColorScheme()
  return (
    <Tabs
      initialRouteName='index'
      screenOptions={{
        tabBarActiveTintColor: 'white',
        tabBarInactiveTintColor: 'white',
        tabBarShowLabel: false,
        tabBarStyle: {
          paddingBottom: Platform.OS == 'ios' ? 20 : 0,
          backgroundColor: colorScheme == 'light' ? 'white' : '#1D182A',
          borderTopWidth: 0,
          elevation: 0,
          overflow: 'hidden',
          height: Platform.OS == 'ios' ? 100 : 70,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexDirection: 'row',
          position: 'absolute',
        },
      }}
    >
      <Tabs.Screen
        name='home'
        options={{
          title: 'Home',
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon source={icons.home} focused={focused} />
          ),
        }}
      />
    </Tabs>
  )
}
