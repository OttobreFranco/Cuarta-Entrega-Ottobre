import { View } from 'react-native'
import styles from './Card.style'

const Card = ({ children, style }) => {
  return (
    <View style={[styles.container, style]}>
        { children }
    </View>
  )
}

export default Card

