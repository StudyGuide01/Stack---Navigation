import React from 'react';
import { View, Text, Button } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Profile from 'react-native-vector-icons/AntDesign'

const HomeScreen = ({navigation}) => {
    // console.log(props);
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <View>
        <TouchableOpacity>
          <Profile 
          onPress={()=>navigation.navigate('Profile')}
          name='Profile'
          color={'green'}
          size={30}
          
          />
        </TouchableOpacity>
      </View>
      <Button title='Profile' onPress={()=>navigation.navigate('Profile',{
        name:'Javed'
      })} />
    </View>
  );
};

export default HomeScreen;
