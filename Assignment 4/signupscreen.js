import React, { useState } from 'react';
import { View, Text, TextInput, Button, AsyncStorage } from 'react-native';

const SignUpScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = async () => {
    try {
      const user = {
        name,
        email,
        password,
      };
      
      // Save user information to local storage
      await AsyncStorage.setItem('user', JSON.stringify(user));
      
      // Navigate to the Profile screen
      navigation.navigate('Profile');
    } catch (error) {
      console.log('Error saving user data:', error);
    }
  };

  return (
    <View>
      <Text>Sign Up Screen</Text>
      <TextInput
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
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
        title="Sign Up"
        onPress={handleSignUp}
      />
    </View>
  );
};

export default SignUpScreen;
