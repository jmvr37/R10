import React from 'react';
import AsyncStorage from '@react-native-community/async-storage';

let favesIds = []

let obj = {
    id: 1, 
    name: "event", 
    time: "10",
}
AsyncStorage.setItem('user',JSON.stringify(obj));


export default class AddFave extends React.Component {


saveData = async = () =>{
try {
    await AsyncStorage.setItem("thisISaKey", JSON.stringify({ value: "Hey!" }));
    const result = await AsyncStorage.getItem("thisISaKey");
  } catch (e) {
    throw e;
  }
  console.log(JSON.parse(result).value);
  
}

removeData = async =() => {
    try{
        await AsyncStorage.removeItem("thisIsaKey,", JSON.stringify({ value: "hi"}));
        const remove = await AsyncStorage.removeItem("thisIsaKey");
    } catch (e) {
        throw e;
    }
}
}
