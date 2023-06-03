import React from 'react';
import { View, Text, Button } from 'react-native';

const SignupScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Signup Screen</Text>
      <Button
        title="Go to Profile"
        onPress={() => navigation.navigate('Profile')}
      />
    </View>
  );
};

export default SignupScreen;
