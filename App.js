import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text } from 'react-native';
import { NavigationContainer,useNavigation,DrawerActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import UserScreen from './screens/UserScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Entypo';
import DrawerContent from './DrawerContent';

//Github .com

//Stack Navigation
const StackNav=()=>{
  const Stack = createNativeStackNavigator();
  const navigation =useNavigation();
  return (
    <Stack.Navigator
    
        // If you want to apply this to all screens
        screenOptions={{
          statusBarColor: 'blue',
          headerStyle: {
            backgroundColor: 'blue',
          },
          headerTintColor: 'white',
          headerTitleAlign: 'center',

          //agr hame sab jgah menu icon dikhana ho 

          // headerLeft:()=>{
          //   return(
          //     <Icon
          //     name='menu'
          //     onPress={()=>navigation.dispatch(DrawerActions.openDrawer())}
          //     size={24}
          //     color='white'
          //     />
          //   )
           
          // }
        }}

        //if we want to Hide Drawer header
      
      >
        <Stack.Screen name="Home" component={HomeScreen}
        //agr hame sirf Home page per menu icon dikhana ho 
        options={{
          headerLeft:()=>{
            return(
              <Icon
              name='menu'
              onPress={()=>navigation.dispatch(DrawerActions.openDrawer())}
              size={24}
              color='white'
              />
            )
           
          }
        }}
        
        />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen 
          name="User" 
          component={UserScreen}

           //agr ham user me koi funtionalitt add karna chahate he 
          // options={({ navigation }) => ({
          //   headerShown: true,
          //   headerBackVisible: false,
          //   // Custom back button
          //   headerLeft: () => (
          //     <Text onPress={() => navigation.goBack()} style={{ color: 'white', marginLeft: 10 }}>
          //       Back
          //     </Text>
          //   ),
          // })}
        />
      </Stack.Navigator>
  )
}



//Drawer Navigation
const DrawerNav =()=>{
  const Drawer = createDrawerNavigator();
  return(
    <Drawer.Navigator
    drawerContent={props=><DrawerContent {...props}/>}
    screenOptions={{
     statusBarColor: 'orange',
     headerStyle: {
       backgroundColor: 'orange',
     },
     headerTintColor: 'white',
     headerTitleAlign: 'center',
     headerShown:false
   }}
   
   >



<Drawer.Screen name='Home' component={StackNav}/>


     {/* <Drawer.Screen name='Home' component={HomeScreen}/>
     <Drawer.Screen name='Profile' component={ProfileScreen}/>
     <Drawer.Screen name='User' component={UserScreen}/> */}

   </Drawer.Navigator>
  )
}

export default function App() {
 
  
  return (
    <NavigationContainer>
 
      <DrawerNav/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
