import { Text } from "react-native"
import { View } from "react-native"
import AppText from "~/components/AppText"

const Header = ()=>{
    return (
        <View className="bg-red-400">
     <AppText textKey="My Wallet"  FValue={16} className="font-bold text-blue-400 my-4 px-4"/>
         
      </View>
    )
}

export default Header