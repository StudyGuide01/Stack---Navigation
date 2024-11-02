import React from 'react';
import { View, Text, Button } from 'react-native';

const ProfileScreen = ({navigation}) => {
    // console.log(props)
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Profile Screen</Text>
      {/* <Text>{props.route.params.name}</Text> */}
        <Button title='Setting' onPress={()=>navigation.navigate('Setting')} />

    </View>
  );
};

export default ProfileScreen;
