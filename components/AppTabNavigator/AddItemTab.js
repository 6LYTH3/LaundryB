import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

import { Container, Content, Icon } from 'native-base'

export default class AddItemTab extends Component {
    static navigationOptions = {
        title: 'เพิ่มรายการ',
        tabBarIcon: ({tintColor}) => (
            <Icon name="ios-add-outline" style={{ color: tintColor}} />
        )
    }
    render() {
        return (
            <View style={styles.container}>
                <Text>AddItemTab</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})