import { StyleSheet, Text, TextInput, View } from "react-native"
import AppText from "~/components/AppText"
import { FONT_FAMILY_BOLD, FONT_FAMILY_NORMAL } from "~/constant/styles"
import i18n from "~/localization/localize"
type props =  {
    title:string
    placeholder:string
    text:string
    setText:(text:string)=>void
    keyboardType?:string
    password?:boolean
}


const CustomInput = ({
    title,
    placeholder,
    setText,
    text,
    keyboardType = 'default',
    password= false
}:props) => {

    return (
        <View>
           <AppText textKey={title} FValue={14} style={styles.label}/>
            <TextInput
            value = {text}
    secureTextEntry={password}         
         keyboardType={keyboardType}
            onChangeText={newText => {
                setText(newText)
                console.log(newText)
            }}              
      placeholder={i18n.t(placeholder)}
                style={styles?.textInput}
            />

        </View>
    )
}
export default CustomInput
const styles = StyleSheet.create({
    container:{
        marginTop:20
    },
    textInput:{
        borderWidth:1,
        padding:10,
        marginHorizontal:10,
        borderRadius:10,
        fontSize:20,
        borderColor:'gray',
        fontFamily:FONT_FAMILY_NORMAL,

    },
    label:{
        paddingHorizontal:15,
        marginVertical:20,
        fontSize:20,
        fontFamily:FONT_FAMILY_BOLD,

    }
});