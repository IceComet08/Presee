import React from "react";
import {View,TouchableOpacity,Image,StyleSheet,ImageBackground,Text,TextInput} from "react-native"
const bgImage = require("../assets/2.png");
export default class DreamScreen extends Component{
    render(){
  
      return(
        <View
        style={styles.container}>
          <SafeAreaView >
          <ImageBackground source={require("../assets/2.png")}style={styles.bgImage}/>
          <View >
          <TextInput style={styles.input}></TextInput>
        
          </View>
          </SafeAreaView>
        </View>
      )
    }
  }
  const bgImage = require("../assets/2.png");
const styles = StyleSheet.create({
  input:{
    width:200,
    height:50,
    color:rgb(242,242,242),
    fontSize: 13,
    borderRadius:4,
    borderWidth:1,
   textColor:"#4394d6"
  },
  bgImage:{
    flex:1,
    resizeMode:cover
  },
  container:{
    flex:1
  }
  }
);
