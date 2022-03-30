import { AppRegistry } from 'react-native';
import App from './App';
import Login from './src/screens/login';
import Register from './src/screens/register';
import ForgotPassword from './src/screens/forgotPassword';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => App);
AppRegistry.registerComponent(appName, () => Login);
AppRegistry.registerComponent(appName, () => Register);
AppRegistry.registerComponent(appName, () => ForgotPassword);