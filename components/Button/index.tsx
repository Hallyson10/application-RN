import React from 'react';
import { StyleSheet,Text,TouchableHighlightProps,TouchableHighlight } from "react-native";

import Colors from "../../constants/Colors";

interface ButtonProps extends TouchableHighlightProps {
  title : string
}

const Button: React.FC<ButtonProps> = ({title,...rest}) => (
  <TouchableHighlight style={styles.container} {...rest}>
    <Text style={styles.title}>{title}</Text>
  </TouchableHighlight>
);

export default Button;

const styles = StyleSheet.create({
    container : {
        width : "100%",
        height: 50,
        backgroundColor : Colors.dark.button,
        alignItems:"center",
        justifyContent: "center",
        borderRadius : 48,
        marginTop:20
    },
    title : {
        color : Colors.dark.background,
        fontSize : 18
    }
})
