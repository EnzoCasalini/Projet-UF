import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Pages
import WishlistStack from "./Stacks/WishlistStack";
import HomeStack from "./Stacks/HomeStack";
import IncomingStack from "./Stacks/IncomingStack";


// Pages name
const homePage = "HomePage";
const incomingPage = "IncomingPage";
const wishlistPage = "WishlistPage";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    return(
        <Tab.Navigator
            initialRouteName={homePage}
            screenOptions={({ route }) => ({
                    headerShown: false,
                    tabBarShowLabel: false,
                    tabBarActiveTintColor: "#FF77AC",
                    tabBarInactiveTintColor: "#004A8A",
                    tabBarStyle: [
                        {
                            position: "absolute",
                            elevation: 0,
                            backgroundColor: "#FFFFFF",
                            borderTopLeftRadius: 40,
                            borderTopRightRadius: 40,
                            height: 90,
                            ...styles.shadow
                        },
                    ]
                }
            )}
        >

            <Tab.Screen name={wishlistPage} component={WishlistStack} options={{
                tabBarIcon: ({ focused, color}) => (
                    <View style={{alignItems: "center", justifyContent: "center", top: 10}}>
                        <Ionicons name={focused ? "md-heart" : "md-heart-outline"} color={color} size={32} />
                        <Text style={{color: focused ? "#FF77AC" : "#004A8A", fontSize: 12}}>Wishlist</Text>
                    </View>
                )
            }}
            />

            <Tab.Screen name={homePage} component={HomeStack} options={{
                tabBarIcon: ({ focused, color}) => (
                    <View style={{alignItems: "center", justifyContent: "center", top: 10}}>
                        <Ionicons name={focused ? "home" : "home-outline"} color={color} size={32} />
                        <Text style={{color: focused ? "#FF77AC" : "#004A8A", fontSize: 12}}>Home</Text>
                    </View>
                )
            }}
            />

            <Tab.Screen name={incomingPage} component={IncomingStack} options={{
                tabBarIcon: ({ focused, color}) => (
                    <View style={{alignItems: "center", justifyContent: "center", top: 10}}>
                        <Ionicons name={focused ? "calendar" : "calendar-outline"} color={color} size={32} />
                        <Text style={{color: focused ? "#FF77AC" : "#004A8A", fontSize: 12}}>Incoming</Text>
                    </View>
                )
            }}
            />

        </Tab.Navigator>
    );
};

const styles = StyleSheet.create({
    shadow: {
        shadowColor: "#004A8F",
        shadowOffset: {
            width: 0,
            height: -2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5,
    }
});

export default TabNavigator;



