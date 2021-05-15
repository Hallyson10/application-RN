import React from 'react';
import { TextInput,View,Text,StyleSheet,TextInputProps } from 'react-native';
import Colors from '../../constants/Colors';

interface InputProps extends TextInputProps{
    title : string,
    style ?: object
}

const Input: React.FC<InputProps> = ({title,style,...props }) => {
  return (
        <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <TextInput
        {...props}
        style={[styles.input,style]}
        placeholderTextColor={Colors.dark.tabIconDefault}
        />
        </View>
  )
}

export default Input;

const styles = StyleSheet.create({
    container : {
        width: "100%",
        minWidth:"100%",
        alignSelf: "center",
        marginBottom : 20,
    },
    input : {
        backgroundColor : "#fff",
        borderRadius:48,
        paddingLeft : 20,
        paddingRight : 20,
        paddingTop:10,
        paddingBottom:10,
        marginTop: 12,
        width:"100%",
        height : 50,
        maxHeight:50,
         alignSelf: "center",
        fontSize : 18,
        borderWidth: 1,
        color : Colors.dark.text

    },
    title : {
        fontSize : 18,
        color : Colors.dark.tint,
    },

})