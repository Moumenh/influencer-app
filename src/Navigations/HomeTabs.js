import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeStacks from "./HomeStacks";

const Tab = createBottomTabNavigator();

const HomeTabs = () => {
    return (
        <Tab.Navigator
        // tabBarOptions={{
        //     activeTintColor: colors.brand.primary,
        //     inactiveTintColor: colors.text.secondary,
        //     activeBackgroundColor: colors.bg.primary,
        //     inactiveBackgroundColor: colors.bg.primary,
        // }}
    >
        {/* Ticket Stacks */}

        {/* Home Stacks */}
        <Tab.Screen
                    name="home-stacks"
                    component={HomeStacks}
                />
        {/* Profile Stacks */}

    </Tab.Navigator>
    )
}

export default HomeTabs