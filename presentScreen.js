import React from "react";
import Carousel from "react-native-reanimated-carousel";
import "react-native-reanimated";
import {View,TouchableOpacity,Image,StyleSheet,ImageBackground, Dimensions} from "react-native"
const bgImage = require("../assets/3.png");
const {width} = Dimensions.get("window")
render() 

export default function PresentScreen(){
return(
  
  <View style={{flex:1}}>
    <Carousel 
      loop
      width={width}
      height={width/2}
      autoPlay={true}
      data={[...new Array(6).keys()]}
      scrollAnimationDuration = {1000}
      onSnapToItem={(index:number) => console.log('current index:', index)}
      renderItem={({index}:{index:number})=>(
        <View style ={styles.Carrousel}>
          <Text style={styles.CarrouselText}>
        {index}
          </Text>
        </View>
      )}
    />
  </View>

)


}
const styles = StyleSheet.create({
  Carrousel:{
    felx:1,
    borderWidth:1,
    justifyContent:"center",
  },
  CarrouselText:{
    textAlign:"center",
    fontSize:30,
  }
  }
);
