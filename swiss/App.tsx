import React from 'react';
import { NavigationContainer } from '@react-navigation/native'; // ✅ You missed this
import AuthNavigator from './src/Navigation/AuthNavigator';

const App = () => {
  return (
    <NavigationContainer>
      <AuthNavigator />
    </NavigationContainer>
  );
};

export default App;


