import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../Screens/HomeScreens/HomeScreen";

const Stack = createStackNavigator();

const HomeStacks = () => {
    return(
        <Stack.Navigator>
             <Stack.Screen name='Home' component={HomeScreen}  />
        </Stack.Navigator>
    )
}

export default HomeStacks