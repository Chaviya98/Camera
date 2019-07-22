import React, {Component} from 'react';
import {StyleSheet, Text, TouchableOpacity, View, Image, TouchableHighlight} from 'react-native';

import {WebView} from 'react-native-webview';


export default class Home extends Component {

    render() {

        return (

            <View style={{flex: 1}}>
                <WebView
                    source={{uri: 'https://www.google.com'}}
                    style={{marginTop: 0}}
                />
                <View style={{
                    position: 'absolute',
                    right: 0,
                    marginTop: 90,
                    marginRight: 10,
                    zIndex: 1,
                    height: 50,
                    width: 50,
                }}>
                    <TouchableHighlight
                        underlayColor='#ff7043' onPress={() =>
                        this.props.navigation.navigate('Camera')
                    }
                    >
                        <Text style={{fontSize: 50, color: 'red'}}>*</Text>
                    </TouchableHighlight>
                </View>
            </View>

        );
    }
}
