import React from 'react';
import { View, Text, Button } from 'react-native';

const HomeScreen = (props) => {
    console.log(props);
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button title='Profile' onPress={()=>props.navigation.navigate('Profile',{
        name:'Javed'
      })} />
    </View>
  );
};

export default HomeScreen;
