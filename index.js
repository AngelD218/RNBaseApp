import { Navigation } from "react-native-navigation";
import { registerScreens } from './src/screens/screens';

registerScreens(); // this is where you register all of your app's screens

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [{
          component: {
            name: "App.Home",
            options: {
                topBar: {
                  visible: false,
                  height: 0,
                  drawBehind: true
                }
            }
          }
        }]
      }
    }
  });
});