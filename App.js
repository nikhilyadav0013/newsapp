import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/Screens/HomeScreen';
import News from './src/Screens/News';
import WebViewComponent from './src/Components/WebView';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Trending" component={HomeScreen} />
        <Stack.Screen name='GetNews' component={News} />
        <Stack.Screen name='WebView' component={WebViewComponent} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;