import React,{Component} from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import PresentScreen from "../presentesVip/screens/presentScreen"
import DreamScreen from "../presentesVip/screens/dreamScreen"
import RegisterScreen from "../presentesVip/screens/registerScreen"
import InicialScreen from "../presentesVip/screens/initialScreen"
 
const Tab = createBottomTabNavigator();
export default class BottomTabNavigator extends Component{
    render(){

        return(
            <NavigationContainer>
                <Tab.Navigator>
                    <Tab.Screen image="/assets/icon/blue.png"component = {PresentScreen} />
                    <Tab.Screen image="/assets/icon/present.png" component = {InicialScreen} />
                    <Tab.Screen image="/assets/icon/register.png" component = {RegisterScreen} />
                    <Tab.Screen image="/assets/icon/dream.png" component = {DreamScreen} />
                </Tab.Navigator>
            </NavigationContainer>
        )

    }
}