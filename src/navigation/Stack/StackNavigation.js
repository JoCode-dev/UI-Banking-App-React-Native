import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// Screen
import HomeScreen from '../../containers/Home/HomeScreen';
import OnBoarding from '../../containers/OnBoarding/OnBoarding';
import SendMoney from '../../containers/SendMoney/SendMoney';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="OnBoarding">
        <Stack.Screen name="OnBoarding" component={OnBoarding} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="SendMoney" component={SendMoney} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
