import React from "react";
import {View,TouchableOpacity,Image,StyleSheet,ImageBackground,Text,TextInput,StatusBar,Platform,SafeAreaView} from "react-native"



export default class InicialScreen extends Component{
  render(){

    return(
      <View
      style={styles.container}>
        <SafeAreaView >
        <ImageBackground source={require("../assets/Presentes.Vip.png")}style={styles.bgImage}/>
        <View >
        
        <TouchableOpacity style={styles.goButton} >ja sou usuário</TouchableOpacity>
        <TouchableOpacity style={styles.goButton} >sou novo aqui</TouchableOpacity>
        </View>
        </SafeAreaView>
      </View>
    )
  }
}


const bgImage = require("../assets/Presentes.Vip.png");
render() 


const styles = StyleSheet.create({
  container:{
    flex:1

  },
  bgImage:{
    flex:1,
    resizeMode:"cover",
  },
  goButton:{
    fontSize:30,
    fontWeight:"bold",
    color:"red",
    ImageTop:75,
    paddingLeft:30,
    borderRadius:20
  }
  }
);
