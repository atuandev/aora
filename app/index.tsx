import { Link } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { Text, View } from 'react-native'

const HomePage = () => {
  return (
    <View className='flex-1 items-center justify-center bg-white'>
      <Text className='text-xl font-pbold'>Aora</Text>
      <StatusBar style='auto' />
      <Link href='/home' className='text-blue-500'>Home</Link>
    </View>
  )
}

export default HomePage
