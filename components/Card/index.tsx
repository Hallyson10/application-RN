import React from 'react';
import { View, StyleSheet,Text,TouchableOpacity,TouchableOpacityProps,GestureResponderEvent } from 'react-native';
import Colors from "../../constants/Colors";

interface Props extends TouchableOpacityProps{
    experience : string,
    experienceTime : string,
    username : string,
    editar : (event: GestureResponderEvent) => void,
    remover : (event: GestureResponderEvent) => void
}
const Card: React.FC<Props> = ({ experience,username,experienceTime,editar,remover,...rest }) => {
  return (
        <View style={styles.cardContainer}>
            <Text style={styles.username}>{username}</Text>
            <Text style={styles.experienceTitleHeader}>Experiência com React Native</Text>
            <Text style={styles.experience}>{experience}</Text>
            <Text style={styles.timeExperience}>Tempo de experiência  {experienceTime}</Text>
            <View style={{flex:1,justifyContent:"flex-end"}}>
            <View  style={styles.buttonHorizontal}>
            <TouchableOpacity activeOpacity={1} onPress={editar} {...rest} style={styles.buttonEdit}>
                <Text style={styles.titleButton}>EDITAR</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={1} onPress={remover} {...rest} style={styles.buttonRemove}>
                <Text style={styles.titleButton}>EXCLUIR</Text>
            </TouchableOpacity>
            </View>

            </View>
        </View>
  )
}

export default Card;

const styles = StyleSheet.create({
    cardContainer : {
        minHeight:200,
        height:"auto",
        backgroundColor:"#FFF",
        padding:20
    },
    username : {
        fontSize:20,
        color : Colors.dark.background,
        fontWeight:"bold"
    },
    experienceTitleHeader:{
        fontSize:18,
        color : Colors.dark.background,
        fontWeight:"500",
        marginTop:10
    },
    experience : {
        fontSize:14,
        color : Colors.dark.background,
        fontWeight:"400",
        textAlign:"justify",
        marginBottom:10,
        marginTop:5
    },
    buttonHorizontal : {
        height : 48,
        justifyContent:"space-between",
        flexDirection:"row"
    },
    timeExperience : {
        fontSize:18,
        color : Colors.dark.background,
        fontWeight:"500",
        marginBottom:20
    },
    buttonEdit :{
        flex:1,
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:Colors.dark.button,
        borderTopLeftRadius : 48,
        borderBottomLeftRadius : 48
    },
    buttonRemove :{
        flex:1,
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:Colors.dark.red,
        borderTopRightRadius : 48,
        borderBottomRightRadius : 48
    },
    titleButton :{
        fontSize:18,
        color : Colors.dark.background,
        fontWeight : "400"
    }

})