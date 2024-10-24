import { StyleSheet, Text, TextInput, View } from "react-native"
type props =  {
    title:string
    placeholder:string
    text:string
    setText:(text:string)=>void
}


const CustomInput = ({
    title,
    placeholder,
    setText,
    text
}:props) => {

    return (
        <View>
            <Text style={styles.label}>
              {title}
            </Text>
            <TextInput
            value = {text}
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
        borderColor:'gray'
    },
    label:{
        paddingHorizontal:15,
        marginVertical:20,
        fontSize:20
    }
});