import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import InitialScreen from './components/InitialScreen';
import Login from './components/Login';
import MedicoScreen from './components/MedicoScreen';
import EnfermeiroScreen from './components/EnfermeiroScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="FirstPage">
        <Stack.Screen name="InitialScreen" component={InitialScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="MedicoScreen" component={MedicoScreen} options={{ headerShown: false }} />
        <Stack.Screen name="EnfermeiroScreen" component={EnfermeiroScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}