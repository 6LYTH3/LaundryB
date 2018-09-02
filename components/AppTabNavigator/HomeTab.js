import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

import { Container, Content, Icon } from 'native-base'
import CardComponent from '../CardComponent'

export default class HomeTab extends Component {
    static navigationOptions = {
        title: "รายการทั้งหมด",
        tabBarIcon: ({tintColor}) => (
            <Icon name="ios-home-outline" style={{ color: tintColor}} />
        )
    }
    render() {
        return (
            <Container style={styles.container}>
                <Content>
                    <CardComponent />
                </Content>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    }
})