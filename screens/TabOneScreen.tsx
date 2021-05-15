import React, { useEffect, useState } from 'react';
import { StyleSheet,SafeAreaView ,ScrollView,KeyboardAvoidingView,Platform,Alert } from 'react-native';
import { Text, View } from '../components/Themed';
import Input from "../components/Input";
import Button from "../components/Button";
import Colors from '../constants/Colors';
import { useNavigation ,useRoute,RouteProp} from "@react-navigation/native";
import { useApplication } from "../hooks/useApplications";

interface Props{
    id : string,
    username : string,
    experienceTime : string,
    experience : string
}

interface RouteParams {
  item : Props
	
}

type ParamList = {
	params: RouteParams;
};

export default function TabOneScreen() {
  const navigation = useNavigation();
  const { params } = useRoute<RouteProp<ParamList, 'params'>>();
  const { saveItem,update,updateSucess,saveSucess,setSaveSucess,setUpdateSucess } = useApplication();

  const [item,setItem] = useState({
    id:Math.floor(Math.random() * 1000000).toString(),
    username : "",
    experienceTime : "",
    experience : ""
  })

  const saveUpdate = (iten : Props) => {
    if(iten.username.length > 0 && iten.experienceTime.length > 0 && iten.experience.length > 0){
      if(params?.item){
        update(iten)
      }else{
        saveItem(iten)
      }
    }
    
  }
  useEffect(()=>{
      if(params?.item){
        setItem(params.item);
      }
  },[])

  useEffect(()=>{
      if(updateSucess){
        Alert.alert("Parabéns, você atualizou seu cadastro!");
        setUpdateSucess(!updateSucess);
        navigation.goBack();
      }
  },[updateSucess])

  useEffect(()=>{
    if(saveSucess){
      Alert.alert("Parabéns, você está concorrendo a vaga!");
      setSaveSucess(!saveSucess);
      navigation.goBack();
    }
},[saveSucess])

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView  behavior={Platform.OS == 'ios' ? 'height' : 'height'} style={{flex:1}}>
      <ScrollView>
      <Text style={styles.titleHeader}>Preencha as informações</Text>
      <View style={styles.subContainer}>
        <Input
        title="Iae dev, qual seu nome?"
        onChangeText={(username)=>setItem({...item,username})}
        placeholder="Ex : Hallyson Miranda"
        value={item?.username}
        autoCorrect={false}
        />
        <Input
        title="Quanto tempo de experiêcia?"
        onChangeText={(experienceTime)=>setItem({...item,experienceTime})}
        placeholder="Ex : Hallyson Miranda"
        value={item?.experienceTime}
        autoCorrect={false}
        maxLength={20}
        />
        <Input
        title="Qual sua experiência com React Native?"
        onChangeText={(experience)=>setItem({...item,experience})}
        placeholder="Ex : Há muitos anos atrás, quando react-native não era nem gente"
        multiline
        autoCorrect={false}
        maxLength={300}
        style={{height:"auto",minHeight:80,maxHeight:180}}
        value={item?.experience}
        />
        <Button
        title="SALVAR"
        onPress={()=>saveUpdate(item)}
        />
        </View>
        
        </ScrollView>
        </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:Colors.dark.background
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  subContainer : {
    flex: 1,
    paddingHorizontal:30
  },
  titleHeader : {
    color : Colors.dark.titleHeader,
    fontSize:28,
    margin:30
  }
});
