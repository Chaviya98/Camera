
import Camera from  '/hms/apps/AwesomeProject/src/Camera.js';
import Home from '/hms/apps/AwesomeProject/src/Home.js';
import { createStackNavigator, createAppContainer } from 'react-navigation';

const Navigator = createStackNavigator({
    Home : { screen : Home },
    Camera : { screen: Camera },
});

const AppNavigator = createAppContainer(Navigator);

export default AppNavigator;
