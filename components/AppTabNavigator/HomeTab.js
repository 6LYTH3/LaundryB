import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

import { Container, Content, Icon } from 'native-base'
import CardComponent from '../CardComponent'

export default class HomeTab extends Component {
    static navigationOptions = {
        title: "รายการทั้งหมด",
        tabBarIcon: ({ tintColor }) => (
            <Icon name="ios-home-outline" style={{ color: tintColor }} />
        )
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.card}>
                    <CardComponent name="Blythe" price="11.00" />
                </View>
                <View style={styles.card}>
                    <CardComponent name="Blythe" price="11.00" />
                </View>
                <View style={styles.card}>
                    <CardComponent name="Blythe" price="11.00" />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexWrap: 'wrap',
        flexDirection: "row",
        backgroundColor: 'white',
    },
    card: {
        // backgroundColor: 'black',
        paddingRight: 10,
        paddingLeft: 10,
        // paddingBottom: 10,
        paddingTop: 10,
    }
})