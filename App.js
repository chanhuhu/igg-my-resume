import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ResumeFormScreen from './screen/ResumeForm'
import ResumeDetailsScreen from './screen/ResumeDetails'

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="ResumeForm" options={{title:"Resume Form"}} component={ResumeFormScreen} />
        <Stack.Screen name="ResumeDetails" options={{title:"Resume Details"}} component={ResumeDetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
