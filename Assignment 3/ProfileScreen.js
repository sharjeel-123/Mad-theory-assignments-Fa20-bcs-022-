import React from 'react';
import { View, Text, Button } from 'react-native';

const ProfileScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Profile Screen</Text>
      <Button
        title="Go back to Login"
        onPress={() => navigation.navigate('Login')}
      />
    </View>
  );
};

export default ProfileScreen;
