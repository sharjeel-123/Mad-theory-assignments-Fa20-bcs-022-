import React, { useState } from 'react';
import { View, Text, TextInput, Button, AsyncStorage } from 'react-native';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      // Retrieve user information from local storage
      const user = await AsyncStorage.getItem('user');
      const userData = JSON.parse(user);
      
      // Check if user exists and the provided credentials match
      if (userData && userData.email === email && userData.password === password) {
        // Navigate to the Profile screen
        navigation.navigate('Profile');
      } else {
        console.log('Invalid credentials');
      }
    } catch (error) {
      console.log('Error retrieving user data:', error);
    }
  };

  return (
    <View>
      <Text>Login Screen</Text>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button
        title="Login"
        onPress={handleLogin}
      />
    </View>
  );
};

export default LoginScreen;
