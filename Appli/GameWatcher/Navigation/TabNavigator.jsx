import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
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
                    tabBarActiveTintColor: "#4EF5B9",
                    tabBarInactiveTintColor: "#C9FAE8",
                    tabBarStyle: {
                        position: "absolute",
                        height: 90,
                        borderTopRightRadius: 40,
                        borderTopLeftRadius: 40,
                        borderTopWidth: 0,
                        bottom: 0,
                        left: 0,
                        right: 0,
                        backgroundColor: "#302F37",
                        opacity: 0.98,
                    },
                }
            )}
        >

            <Tab.Screen name={wishlistPage} component={WishlistStack} options={{
                tabBarIcon: ({ focused, color}) => (
                    <View style={{
                        alignItems: "center",
                        justifyContent: "center",
                        top: 10,
                    }}>
                        <Ionicons name={focused ? "md-heart" : "md-heart-outline"} color={color} size={32} style={styles.shadow}/>
                        <Text style={{color: focused ? "#4EF5B9" : "#C9FAE8", fontSize: 12}}>Wishlist</Text>
                    </View>
                )
            }}
            />

            <Tab.Screen name={homePage} component={HomeStack} options={{
                tabBarIcon: ({ focused, color}) => (
                    <View style={{alignItems: "center", justifyContent: "center", top: 10}}>
                        <Ionicons name={focused ? "home" : "home-outline"} color={color} size={32} style={styles.shadow}/>
                        <Text style={{color: focused ? "#4EF5B9" : "#C9FAE8", fontSize: 12}}>Home</Text>
                    </View>
                )
            }}
            />

            <Tab.Screen name={incomingPage} component={IncomingStack} options={{
                tabBarIcon: ({ focused, color}) => (
                    <View style={{alignItems: "center", justifyContent: "center", top: 10}}>
                        <Ionicons name={focused ? "calendar" : "calendar-outline"} color={color} size={32} style={styles.shadow}/>
                        <Text style={{color: focused ? "#4EF5B9" : "#C9FAE8", fontSize: 12}}>Incoming</Text>
                    </View>
                )
            }}
            />

        </Tab.Navigator>
    );
};

const styles = StyleSheet.create({
    shadow: {
        shadowColor: "#4EF5B9",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.3,
        shadowRadius: 4,
    }
});

export default TabNavigator;



