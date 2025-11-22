import { cn } from '@/lib/utils'
import { useState } from 'react'
import { router } from 'expo-router'
import { StyleSheet, Text } from 'react-native'
import CustomButton from '@/components/ui/button'
import Octicons from '@expo/vector-icons/Octicons'
import {  View, useColorScheme } from 'react-native'
import { Dropdown } from 'react-native-element-dropdown'
import { SafeAreaView } from 'react-native-safe-area-context'

const data = [
  { label: '17 to 21 years', value: '17-21' },
  { label: '22 to 26 years', value: '22-26' },
  { label: '28+ years', value: '28+' },
]

const schoolData = [
  { label: 'Jomo Kenyatta University', value: 'jkuat' },
  { label: 'Kenyatta University', value: 'ku' },
  { label: 'University of Nairobi', value: 'uon' },
  { label: 'Mt. Kenya University', value: 'mku' },
  { label: 'Zetech University', value: 'zetech' },
  { label: 'Maasai Mara University', value: 'mmu' },
]

export default function EmailSent() {
  const colorScheme = useColorScheme()
  const [isFocus, setIsFocus] = useState({
    age: false,
    school: false,
  })
  const [form, setForm] = useState({
    gender: 'woman',
    age: '',
    school: '',
  })

  const styles = getStyles(colorScheme ?? 'light')

  return (
      <SafeAreaView className='pt-24 h-full'>
        <Text className='font-JakartaBold text-xl px-4 dark:text-gray-100'>
          Tell us About yourself
        </Text>

        <View className='mt-8 px-4'>
          <Text className='font-JakartaMedium dark:text-gray-200'>
            Your gender
          </Text>
          <View className='flex flex-row items-center gap-4 mt-1 justify-center w-full'>
            <CustomButton
              title='Gent'
              onPress={() => setForm({ ...form, gender: 'man' })}
              className={cn(
                  'flex-1 text-gray-600 dark:text-white bg-slate-200 dark:bg-secondary p-4',
                  {
                      'bg-primary text-white': form.gender == 'man',
                  },
              )}
              textClassName={cn('text-gray-500 dark:text-white', {
                  'text-white': form.gender == 'man',
              })}
              />
              <CustomButton
              title='Lady'
              onPress={() => setForm({ ...form, gender: 'woman' })}
              className={cn(
                  'flex-1 text-gray-600 dark:text-white bg-slate-200 dark:bg-secondary p-4',
                  {
                      'bg-primary text-white': form.gender == 'woman',
                  },
              )}
              textClassName={cn('text-gray-500 dark:text-white', {
                  'text-white': form.gender == 'woman',
              })}
              />
          </View>
        </View>

        <View className='mt-6 px-4'>
          <Text className='font-JakartaMedium dark:text-gray-200'>
            What is your school?
          </Text>

          <Dropdown
            style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
            iconStyle={styles.iconStyle}
            placeholderStyle={styles.placeholderStyle}
            containerStyle={styles.container}
            selectedTextStyle={styles.selectedTextStyle}
            activeColor={
              colorScheme == 'light'
                ? 'rgba(142, 108, 239,0.1)'
                : 'rgba(142, 108, 239,0.1)'
            }
            itemContainerStyle={styles.itemContainer}
            itemTextStyle={styles.itemText}
            data={schoolData}
            maxHeight={250}
            labelField='label'
            valueField='value'
            placeholder={!isFocus.school ? 'Your school' : 'Select your school'}
            searchPlaceholder='Search...'
            value={form.school}
            onFocus={() => setIsFocus({ ...isFocus, school: true })}
            onBlur={() => setIsFocus({ ...isFocus, school: false })}
            onChange={(item) => {
              setForm({ ...form, school: item.value })
              setIsFocus({ ...isFocus, school: false })
            }}
            renderRightIcon={() => (
              <Octicons
                name='chevron-down'
                size={25}
                color={colorScheme == 'dark' ? 'gray' : 'black'}
              />
            )}
          />
        </View>

        <View className='mt-6 px-4'>
          <Text className='font-JakartaMedium dark:text-gray-200'>
            How old are you?
          </Text>

          <Dropdown
            style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
            iconStyle={styles.iconStyle}
            placeholderStyle={styles.placeholderStyle}
            containerStyle={styles.container}
            selectedTextStyle={styles.selectedTextStyle}
            activeColor={
              colorScheme == 'light'
                ? 'rgba(142, 108, 239,0.1)'
                : 'rgba(142, 108, 239,0.1)'
            }
            itemContainerStyle={styles.itemContainer}
            itemTextStyle={styles.itemText}
            data={data}
            maxHeight={250}
            labelField='label'
            valueField='value'
            placeholder={!isFocus.age ? 'Age range' : 'Select Age range'}
            searchPlaceholder='Search...'
            value={form.age}
            onFocus={() => setIsFocus({ ...isFocus, age: true })}
            onBlur={() => setIsFocus({ ...isFocus, age: false })}
            onChange={(item) => {
              setForm({ ...form, age: item.value })
              setIsFocus({ ...isFocus, age: false })
            }}
            renderRightIcon={() => (
              <Octicons
                name='chevron-down'
                size={25}
                color={colorScheme == 'dark' ? 'gray' : 'black'}
              />
            )}
          />
        </View>

        <View className='mt-auto p-4'>
          <CustomButton
            title='Finish'
            onPress={() => router.replace('/(root)/home')}
            className='w-11/12 mx-auto'
          />
        </View>
      </SafeAreaView>
  )
}

const getStyles = (theme: 'light' | 'dark') => {
  const styles = StyleSheet.create({
    container: {
      backgroundColor: theme == 'light' ? 'rgb(226 232 240)' : 'rgb(14,11,24)',
      padding: 16,
      marginTop: 4,
      borderRadius: 16,
      borderColor: 'rgba(142, 108, 239,0.2)',
    },
    dropdown: {
      height: 60,
      marginTop: 12,
      borderRadius: 60,
      fontFamily: 'JakartaMedium',
      backgroundColor:
        theme == 'light' ? 'rgb(226, 232, 240)' : 'rgb(14,11,24)',
      paddingHorizontal: 20,
      shadowOpacity: 0,
    },
    icon: {
      marginRight: 5,
    },
    label: {
      position: 'absolute',
      backgroundColor: 'white',
      left: 22,
      top: 8,
      zIndex: 999,
      paddingHorizontal: 8,
      fontSize: 14,
    },
    placeholderStyle: {
      fontSize: 16,
      fontFamily: 'JakartaMedium',
      color: theme == 'dark' ? 'rgb(229, 231, 235)' : 'rgb(75, 85, 99)',
    },
    selectedTextStyle: {
      fontSize: 16,
      fontFamily: 'JakartaMedium',
      color: theme == 'dark' ? 'rgb(229, 231, 235)' : 'rgb(75, 85, 99)',
    },
    iconStyle: {
      width: 20,
      height: 20,
    },
    itemContainer: {
      backgroundColor:
        theme == 'light' ? 'rgb(226, 232, 240)' : 'rgba(142, 108, 239)',
      fontFamily: 'JakartaMedium',
    },
    itemText: {
      fontSize: 16,
      fontFamily: 'JakartaMedium',
      color: theme == 'dark' ? 'rgb(229, 231, 235)' : 'rgb(55, 65, 81)',
    },
  })

  return styles
}
