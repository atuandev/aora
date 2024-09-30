import { useState } from 'react'
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  TextInputProps,
  KeyboardTypeOptions
} from 'react-native'
import { icons } from '../constants'

type FormFieldProps = {
  title: string
  value: string
  placeholder?: string
  handleChangeText: (e: string) => void
  formStyle?: string
  keyBoardType?: KeyboardTypeOptions
  options?: TextInputProps
}

const FormField = ({
  title,
  value,
  placeholder,
  handleChangeText,
  formStyle,
  keyBoardType,
  options
}: FormFieldProps) => {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <View className={`space-y-2 ${formStyle}`}>
      <Text className='text-base text-gray-100 font-pmedium'>{title}</Text>

      <View className='w-full h-14 px-4 bg-black-100 border-2 border-black-200 rounded-2xl focus:border-secondary items-center flex-row'>
        <TextInput
          value={value}
          onChangeText={handleChangeText}
          className='flex-1 text-white font-psemibold text-base'
          placeholder={placeholder}
          placeholderTextColor='#7b7b8b'
          secureTextEntry={title === 'Password' && !showPassword}
          keyboardType={keyBoardType}
          {...options}
        />

        {title === 'Password' && (
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Image
              source={!showPassword ? icons.eye : icons.eyeHide}
              className='w-6 h-6'
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  )
}

export default FormField
