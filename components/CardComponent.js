import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

import { Card, CardItem, Thumbnail, Body, Left, Right, Button, Icon } from 'native-base'

export default class CardComponent extends Component {
    render() {
        return (
            <Card>
                <CardItem>
                    <Left>
                        <Body>
                            <Text>ป้าน้อย</Text>
                            <Text>30 บาท</Text>
                        </Body>
                    </Left>
                </CardItem>
            </Card>
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