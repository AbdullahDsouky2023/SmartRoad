import { Text } from "react-native"
import { View } from "react-native"

const Header = ()=>{
    return (
        <View>
        <Text 
        style={{
            fontSize:25,
            padding:10,
            fontFamily:'BoldBeVietnam',
            color:'blue',
            fontWeight:800
        }}
        >
            My Wallet
        </Text>
      </View>
    )
}

export default Header