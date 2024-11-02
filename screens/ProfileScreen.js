import React from 'react';
import { View, Text, Button } from 'react-native';

const ProfileScreen = (props) => {
    console.log(props)
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Profile Screen</Text>
      {/* <Text>{props.route.params.name}</Text> */}
        <Button title='User' onPress={()=>props.navigation.navigate('User')} />

    </View>
  );
};

export default ProfileScreen;
