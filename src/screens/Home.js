import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { cssHome } from '../styles/cssHome';
import { imgHome } from '../resoures/img';

export class HomeScreen extends Component {
    render() {
        return (
            <View style={cssHome.container}>
                <Image
                    style={cssHome.imgReactLog}
                    source={imgHome} />
                <Text> Welcome to HomeScreen </Text>
            </View>
        )
    }
}