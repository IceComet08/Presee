import React from "react";
import {View,TouchableOpacity,Image,StyleSheet,ImageBackground,Text,TextInput,StatusBar,Platform,SafeAreaView} from "react-native"
import {createBottomTabNavigator} from react-navigation/bottom-tabs


export default class RegisterScreen extends Component{
  render(){

    return(
      <View
      style={styles.container}>
        <SafeAreaView >
        <ImageBackground source={require("../assets/4.png")}style={styles.bgImage}/>
        <View >
        <TextInput style={styles.input}></TextInput>
        <TouchableOpacity style={styles.goButton} >vamos lá</TouchableOpacity>
        
        </View>
        </SafeAreaView>
      </View>
    )
  }
}


const bgImage = require("../assets/4.png");
render() 


const styles = StyleSheet.create({
  goButton:{
    fontSize:30,
    fontWeight:"bold",
    color:"red",
    ImageTop:75,
    paddingLeft:30,
    borderRadius:20
  },
  bgImage:{
    flex:1,
    resizeMode:"cover"
  },
  input:{
    width:200,
    height:30,
    color:rgb(77,87,95),
    fontSize: 13,
    borderRadius:4,
  },
  container:{
    flex:1
  }

  }
);
