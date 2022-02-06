import React, { useEffect, useState } from "react";
import { DarkTheme, NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeTabs from "./HomeTabs";

const Stack = createStackNavigator();

const Router = () => {
    return (
        <NavigationContainer theme={DarkTheme}>
            <Stack.Navigator>
                {/* Loading Screen */}
                {/* Banner Video Screen */}
                {/* Authentications Screen */}
                {/* Home Tabs */}
                <Stack.Screen
                    name={"home-tabs"}
                    component={HomeTabs}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Router