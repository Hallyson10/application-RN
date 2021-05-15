import React, { useState } from 'react';
import { StyleSheet,Text,FlatList } from 'react-native';

import Colors from '../constants/Colors';
import Card from "../components/Card";
import {  View } from '../components/Themed';
import { useNavigation } from "@react-navigation/native";
import { useApplication } from "../hooks/useApplications";

export default function TabTwoScreen() {
  const navigation = useNavigation();
  const { items,remove } = useApplication();

  return (
    <View style={styles.container}>
            <Text onPress={()=>navigation.navigate("application")} style={styles.titleHeader}> +Me candidatar</Text>
            <FlatList
            data={items}
            renderItem={({item,index})=>(
              <Card
              username={item.username}
              experience={item.experience}
              experienceTime={item.experienceTime}
              editar={()=>navigation.navigate("application",{ item : item})}
              remover={()=>remove(item.id)}
              />
            )}
            />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:Colors.dark.background,
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
    marginTop:40,
    marginBottom:20,
    textAlign:"center"
  }
});
