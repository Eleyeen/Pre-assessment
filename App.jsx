/* eslint-disable react/react-in-jsx-scope */
import './global.css';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import SplashScreen from './src/screen/splash-screen';
import LoginScreen from './src/screen/auth/login';
import SignUpScreen from './src/screen/auth/sign-up';
import HomeScreen from './src/screen/home';
import AuthProvider from './src/context/AuthContext';

const Stack = createNativeStackNavigator();

const App = () => {

  return (
    <AuthProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="splashscreen">
          <Stack.Screen component={SplashScreen} name="splashscreen"
            options={{
              headerShown: false,
            }}
          />

          <Stack.Screen component={LoginScreen} name="LoginScreen"
            options={{
              headerShown: false,
            }}
          />

          <Stack.Screen component={SignUpScreen} name="SignUpScreen"
            options={{
              headerShown: false,
            }}
          />

          <Stack.Screen component={HomeScreen} name="HomeScreen"
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </AuthProvider>
  );
};

export default App;
