import { Link } from 'expo-router'
import { useState, useTransition } from 'react'
import { Image, ScrollView, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import CustomButton from '../../components/CustomButton'
import FormField from '../../components/FormField'
import { images } from '../../constants'

const SignUp = () => {
  const [form, setForm] = useState({
    username: '',
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
            Sign up to Aora
          </Text>

          <FormField
            title='Username'
            value={form.username}
            handleChangeText={e => setForm({ ...form, username: e })}
            formStyle='mt-10'
            options={{ maxLength: 20 }}
          />

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
            title='Sign up'
            handlePress={handleLogin}
            containerStyle='mt-6'
            isLoading={isPending}
          />

          <View className='justify-center pt-5 flex-row gap-2'>
            <Text className='text-lg text-gray-100 font-pregular'>
              Already have an account?
            </Text>
            <Link
              href='/sign-in'
              className='text-lg font-psemibold text-secondary'
            >
              Sign in
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignUp
