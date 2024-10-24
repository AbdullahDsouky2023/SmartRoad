import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'

type Props = {}

const Header = (props: Props) => {
  return (
    <View style={styles?.container}>
        <Image
        source={require('../../../../assets/AppIcon.png')}
        style={styles?.image}
        />
      <Text style={styles?.text}>Smart Road</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    container:{
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        gap:6,
        marginTop:80
    },
    image:{
        height:80,
        width:80
    },
    text:{
        fontSize:35
    }
});