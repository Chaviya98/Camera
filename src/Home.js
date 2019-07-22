import React, {Component} from 'react';
import { Text, View, TouchableHighlight,Linking} from 'react-native';
import Camera from  '/hms/apps/AwesomeProject/src/Camera.js';
import {WebView} from 'react-native-webview';


const LoacalWebURL = require('/hms/apps/AwesomeProject/resources/index.html');
export default class Home extends Component {

    render() {

        return (

            <View style={{flex: 1}}>
                <WebView
                    originWhitelist={['*']}
                    onLoad={this.onLoad}
                    source={{
                        uri: 'http://localhost:63342/AwesomeProject/resources/index.html?_ijt=8edqtrcsceboaakp0skue4f9uq'}
                    }
                    dataDetectorTypes={'none'}
                    ref='webview'
                    onMessage={e => this.onMessage(JSON.parse(e.nativeEvent.data))}
                    onShouldStartLoadWithRequest={this.onShouldStartLoadWithRequest}
                    onNavigationStateChange={this.onShouldStartLoadWithRequest}
                    useWebKit={true}

                />

              {/*  <WebView
                    source={{
                        uri: 'https://www.google.com'}
                    }
                    injectedJavaScript={'render(' + JSON.stringify() + ');'}
                    javaScriptEnabledAndroid={true}
                    scrollEnabled={false}
                    bounces={false}
                    renderLoading={() => <Camera/>}
                />*/}
               {/* <WebView
                    source={{uri: 'https://www.google.com'}}
                    style={{marginTop: 0}}
                    injectedJavaScript={"alert('hello')"}
                />*/}
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
