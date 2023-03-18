import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Pages
import HomePage from './Pages/HomePage/HomePage';
import IncomingPage from './Pages/IncomingPage/IncomingPage';
import WishlistPage from './Pages/WishlistPage/WishlistPage';

// Pages name
const homePageName = "Home";
const incomingPageName = "Incoming";
const wishlistPageName = "Wishlist";

const Tab = createBottomTabNavigator();


const NavBar = () => {
    return(
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName={homePageName}
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
                                borderRadius: 40,
                                height: 90,
                                ...styles.shadow
                            },
                        ]
                    }
                )}
            >

                <Tab.Screen name={wishlistPageName} component={WishlistPage} options={{
                    tabBarIcon: ({ focused, color}) => (
                        <View style={{alignItems: "center", justifyContent: "center", top: 10}}>
                            <Ionicons name={focused ? "md-heart" : "md-heart-outline"} color={color} size={32} />
                            <Text style={{color: focused ? "#FF77AC" : "#004A8A", fontSize: 12}}>Profile</Text>
                        </View>
                    )
                }}
                />

                <Tab.Screen name={homePageName} component={HomePage} options={{
                    tabBarIcon: ({ focused, color}) => (
                        <View style={{alignItems: "center", justifyContent: "center", top: 10}}>
                            <Ionicons name={focused ? "home" : "home-outline"} color={color} size={32} />
                            <Text style={{color: focused ? "#FF77AC" : "#004A8A", fontSize: 12}}>To-Do</Text>
                        </View>
                    )
                }}
                />

                <Tab.Screen name={incomingPageName} component={IncomingPage} options={{
                    tabBarIcon: ({ focused, color}) => (
                        <View style={{alignItems: "center", justifyContent: "center", top: 10}}>
                            <Ionicons name={focused ? "calendar" : "calendar-outline"} color={color} size={32} />
                            <Text style={{color: focused ? "#FF77AC" : "#004A8A", fontSize: 12}}>Events</Text>
                        </View>
                    )
                }}
                />

            </Tab.Navigator>
        </NavigationContainer>
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

export default NavBar;



