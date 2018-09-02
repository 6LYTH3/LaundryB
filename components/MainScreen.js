import React, { Component } from 'react'
import { View, Text, StyleSheet, Platform } from 'react-native'

import AddItemTab from './AppTabNavigator/AddItemTab'
import HomeTab from './AppTabNavigator/HomeTab'
import { TabNavigator } from 'react-navigation'
import { Icon } from 'native-base'

export default class MainScreen extends Component {
    static navigationOptions = {
        // headerLeft: <Icon name='ios-camera-outline'/>,
        title: "Laundry B",
        // headerRight: <Iron name='ios-send-outline'/>
    }
    render() {
        return (
            <AppTabNavigator />
        )
    }
}

const AppTabNavigator = TabNavigator({
    HomeTab: {
        screen: HomeTab
    },
    AddItemTab: {
        screen: AddItemTab
    }
}, 
{
    animationEnabled: true,
    tabBarPosition: "bottom",
    tabBarOptions: {
        /*
        style: {
            ...Platform.select({
                android: {
                    backgroundColor: 'white'
                }
            })
        },
        */
        // activeTintColor: '#000',
        // inactiveTintColor: '#d1cece',
        // showLabel: false,
        showIcon: true
    }
})

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})