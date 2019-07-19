import React, {Component} from 'react';
import {StyleSheet, Text, TouchableOpacity, View, Image, TouchableHighlight} from 'react-native';
import {RNCamera} from 'react-native-camera';
import {WebView} from 'react-native-webview';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            img: null,

        };
    }


    takePicture = async function (camera) {
        const options = {quality: 0.5, base64: true};
        const data = await camera.takePictureAsync(options);

        this.setState({
            img: data.uri,
        });
    };
    handleData = () => {
        alert('Hello');
        return (
            <WebView
                source={{uri: 'https://facebook.github.io/react-native/docs/getting-started.html'}}
                style={{marginTop: 20}}/>

        );
    };
    handleCamera = () => {
        const {img} = this.state;
        return (
            <View style={styles.container}>
                <RNCamera
                    style={styles.preview}
                    type={RNCamera.Constants.Type.back}
                    flashMode={RNCamera.Constants.FlashMode.off}
                    permissionDialogTitle={'Permission to use camera'}
                    permissionDialogMessage={'We need your permission to use your camera phone'}
                >
                    {({camera}) => {

                        return (
                            <View style={{flex: 0, flexDirection: 'row', justifyContent: 'center'}}>
                                <TouchableOpacity onPress={() => this.takePicture(camera)} style={styles.capture}>
                                    <Text style={{fontSize: 14}}> SNAP </Text>
                                </TouchableOpacity>
                            </View>
                        );
                    }}
                </RNCamera>
                <View style={{flex: 2, justifyContent: 'center', alignItems: 'center'}}>
                    <Image source={{uri: img}} style={{width: 150, height: 150, marginTop: 90}}/>
                </View>
            </View>
        );
    };

    render() {

        return (

            /*       <WebView
                       source={{ uri: "https://www.google.com" }} style={{ marginTop: 20  }} />*/
            <View style={{flex: 1}}>
                <WebView
                    source={{uri: 'https://www.google.com'}}
                    style={{marginTop: 0}}
                    scalesPageToFit={Platform.OS !== 'ios'}
                    onMessage={this.onMessage}
                    postMessage={'Hello from RN'}
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
                        underlayColor='#ff7043' onPress={() => this.handleData(this)}>
                        <Text style={{fontSize: 50, color: 'black'}}>*</Text>
                    </TouchableHighlight>
                </View>
            </View>

        );
    }


}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    preview: {
        flex: 2,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    capture: {
        backgroundColor: 'green',
        borderRadius: 10,
        padding: 15,
        paddingHorizontal: 20,
        alignSelf: 'center',
        margin: 20,
    },
});
