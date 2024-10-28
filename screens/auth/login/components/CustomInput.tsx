import { StyleSheet, Text, TextInput, View } from "react-native"
import { FONT_FAMILY_BOLD, FONT_FAMILY_NORMAL } from "~/constant/styles"
type props =  {
    title:string
    placeholder:string
    text:string
    setText:(text:string)=>void
    keyboardType?:string
}


const CustomInput = ({
    title,
    placeholder,
    setText,
    text,
    keyboardType = 'default'
}:props) => {

    return (
        <View>
            <Text style={styles.label}>
              {title}
            </Text>
            <TextInput
            value = {text}
            keyboardType={keyboardType}
            onChangeText={newText => {
                setText(newText)
                console.log(newText)
            }}              
      placeholder={placeholder}
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