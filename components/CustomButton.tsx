import { Text, TouchableOpacity } from 'react-native'

type CustomButtonProps = {
  title: string
  handlePress: () => void
  containerStyle?: string
  textStyle?: string
  isLoading?: boolean
}

const CustomButton = ({
  title,
  handlePress,
  containerStyle,
  isLoading,
  textStyle
}: CustomButtonProps) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={0.7}
      className={`bg-secondary rounded-xl min-h-[62px] items-center justify-center ${containerStyle} ${
        isLoading ? 'opacity-50' : ''
      }`}
      disabled={isLoading}
    >
      <Text className={`text-primary font-psemibold text-lg ${textStyle}`}>
        {title}
      </Text>
    </TouchableOpacity>
  )
}

export default CustomButton
