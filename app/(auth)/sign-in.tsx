import { Link } from 'expo-router'
import { useState, useTransition } from 'react'
import { Image, ScrollView, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import CustomButton from '../../components/CustomButton'
import FormField from '../../components/FormField'
import { images } from '../../constants'

const SignIn = () => {
  const [form, setForm] = useState({
    email: '',
    password: ''
  })
  const [isPending, startTransition] = useTransition()

  const handleLogin = () => {
    startTransition(() => {
      console.log(form)
    })
  }

  return (
    <SafeAreaView className='bg-primary h-full'>
      <ScrollView>
        <View className='w-full min-h-[72vh] justify-center px-4 my-4'>
          <Image
            source={images.logo}
            resizeMode='contain'
            className='w-[112px]'
          />
          <Text className='text-2xl text-white font-psemibold mt-4'>
            Log in to Aora
          </Text>

          <FormField
            title='Email'
            value={form.email}
            handleChangeText={e => setForm({ ...form, email: e })}
            formStyle='mt-6'
            keyBoardType='email-address'
            options={{ maxLength: 50 }}
          />

          <FormField
            title='Password'
            value={form.password}
            handleChangeText={e => setForm({ ...form, password: e })}
            formStyle='mt-6'
          />

          <CustomButton
            title='Log in'
            handlePress={handleLogin}
            containerStyle='mt-6'
            isLoading={isPending}
          />

          <View className='justify-center pt-5 flex-row gap-2'>
            <Text className='text-lg text-gray-100 font-pregular'>
              Don't have an account?
            </Text>
            <Link
              href='/sign-up'
              className='text-lg font-psemibold text-secondary'
            >
              Sign up
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignIn
