import React, {Component} from 'react';
import {StyleSheet, Text, TouchableOpacity, View, Image, TouchableHighlight} from 'react-native';
import {RNCamera} from 'react-native-camera';


export default class Camera extends Component {
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

    render() {
        const {img} = this.state;
        return (
            <View style={styles.container}>
                <RNCamera
                    style={styles.preview}
                    type={RNCamera.Constants.Type.back}
                    flashMode={RNCamera.Constants.FlashMode.off}
                >
                    {({camera}) => {

                        return (
                            <View style={{flex: 0, flexDirection: 'row', justifyContent: 'center'}}>
                                <TouchableOpacity onPress={() => this.takePicture(camera)} style={styles.capture}>
                                    <Text style={{fontSize: 14}}> SNAP </Text>
                                </TouchableOpacity>
                                <TouchableHighlight
                                    underlayColor='#ff7043' onPress={() =>
                                    this.props.navigation.navigate('Home')
                                }
                                >
                                    <Text style={{fontSize: 50, color: 'red'}}>*</Text>
                                </TouchableHighlight>
                            </View>

                        );
                    }}
                </RNCamera>
                <View style={{flex: 2, justifyContent: 'center', alignItems: 'center'}}>
                    <Image source={{uri: img}} style={{width: 150, height: 150, marginTop: 90}}/>
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
