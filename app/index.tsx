import { StatusBar } from 'expo-status-bar'
import { Image, ScrollView, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import CustomButton from '../components/CustomButton'
import { images } from '../constants'
import { router } from 'expo-router'

const App = () => {
  return (
    <SafeAreaView className='h-full bg-primary'>
      <ScrollView contentContainerStyle={{ height: '100%' }}>
        <View className='w-full min-h-[85vh] justify-center items-center px-4'>
          <Image
            source={images.logo}
            resizeMode='contain'
            className='h-[84px] w-[130px]'
          />
          <Image
            source={images.cards}
            resizeMode='contain'
            className='h-[300px] w-[380px]'
          />

          <View className='relative mt-6'>
            <Text className='text-3xl text-white font-bold text-center'>
              Discover Endless Possibilities with{' '}
              <Text className='text-secondary-200'>Aora</Text>
            </Text>
            <Image
              source={images.path}
              resizeMode='contain'
              className='absolute -bottom-2 -right-8 h-[15px] w-[130px]'
            />
          </View>

          <Text className='text-gray-100 text-xs text-center mt-6'>
            Where creativity meets innovation. Embark on a journey of limitless
            exploration with Aora.
          </Text>

          <CustomButton
            title='Continue with Email'
            handlePress={() => router.push('/sign-in')}
            containerStyle='w-full mt-6'
          />
        </View>
      </ScrollView>
      <StatusBar style='light' backgroundColor='#161622' />
    </SafeAreaView>
  )
}

export default App
