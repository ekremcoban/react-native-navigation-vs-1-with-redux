import { Navigation} from "react-native-navigation";
import { Provider } from "react-redux";

import AuthScreen from "./src/screens/Auth/Auth";
import SharePlaceScreen from "./src/screens/SharePlace/SharePlace";
import FindPlaceScreen from "./src/screens/FindPlace/FindPlace";

import configureStore from "./src/store/configureStore";

const store = configureStore();

//Register Screen
Navigation.registerComponent("navigation.AuthScreen", () => AuthScreen, store, Provider);
Navigation.registerComponent("navigation.SharePlaceScreen", () => SharePlaceScreen, store, Provider);
Navigation.registerComponent("navigation.FindPlaceScreen", () => FindPlaceScreen, store, Provider);

//Start An App
Navigation.startSingleScreenApp({
  screen: {
    screen: "navigation.AuthScreen",
    title: "Test"
  }
});