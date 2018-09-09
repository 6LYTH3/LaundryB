import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default class CardComponent extends Component {
    render() {
        return (
            <View style={styles.card}>
                <View style={styles.cardBody}>
                    <Text style={styles.lblName}>{this.props.name}</Text>
                    <Text style={styles.lblPrice}>ราคา: {this.props.price} บาท</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    card: {
        borderRadius: 10,
        height: 100,
        width: 180,
        backgroundColor: "red",
    },
    cardBody: {
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 10,
    }, 
    lblName: {
        fontSize: 30,
        color: "white"
    }, 
    lblPrice: {
        fontSize: 16,
        color: 'white',
    }
})