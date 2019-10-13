import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux'

// Screens
import App from '../../App';
import Home from './Home/Home';

export function registerScreens(store) {
    //Vistas agregadas a la navegacion
    Navigation.registerComponentWithRedux( "App.Home", () => Home, Provider, store);

}