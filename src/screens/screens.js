import { Navigation } from 'react-native-navigation';

// Screens
import App from '../../App';
import Home from './Home/Home';

export function registerScreens(store) {
    //Vistas agregadas a la navegacion
    Navigation.registerComponent( "App.Home", () => Home);
    // Navigation.registerComponentWithRedux( "Agenda.SecondView", () => SecondView, Provider, store);
}