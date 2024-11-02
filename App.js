import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text } from 'react-native';
import { NavigationContainer, useNavigation, DrawerActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import UserScreen from './screens/UserScreen';
import DrawerContent from './DrawerContent';
import SettingScreen from './screens/SettingScreen';
import DetailsScreen from './screens/DetailsScreen';
import Login from './screens/Login';
import Register from './screens/Register';
import AdminScreen from './screens/AdminScreen';
import { useState } from 'react';
import User from 'react-native-vector-icons/MaterialCommunityIcons'

// Stack Navigation
const StackNav = () => {
  const Stack = createNativeStackNavigator();
  const navigation = useNavigation();

  return (
    <Stack.Navigator
      screenOptions={{
        statusBarColor: 'blue',
        headerStyle: {
          backgroundColor: 'blue',
        },
        headerTintColor: 'white',
        headerTitleAlign: 'center',
      }}
    >
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerLeft: () => (
            <Icon
              name='menu'
              onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
              size={24}
              color='white'
            />
          ),
        }}
      />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="User" component={UserScreen} />
    </Stack.Navigator>
  );
};

// Drawer Navigation
const DrawerNav = () => {
  const Drawer = createDrawerNavigator();

  return (
    <Drawer.Navigator
      drawerContent={(props) => <DrawerContent {...props} />}
      screenOptions={{
        statusBarColor: 'orange',
        headerStyle: {
          backgroundColor: 'orange',
        },
        headerTintColor: 'white',
        headerTitleAlign: 'center',
        headerShown: false,
      }}
    >

      {/* tab ko implement karne ke bad  */}
      <Drawer.Screen name='Home' component={TabNav} />

      {/* <Drawer.Screen name='Home' component={StackNav} /> */}
    </Drawer.Navigator>
  );
};
const TabNav =()=>{
  const Tab = createBottomTabNavigator();
  return(
    <Tab.Navigator
    screenOptions={{
      headerShown:false,
      tabBarActiveTintColor:'white',
      tabBarInactiveTintColor:'white',
      tabBarLabelStyle:{
        marginBottom:5,fontSize:15
      },
      tabBarStyle:{backgroundColor:'blue'}
    }}
    
    
    
    
    >

      <Tab.Screen name='Home' component={StackNav}
      options={{
        tabBarIcon:({focused,color,size})=>(
          <Ionicons 
          name={focused ? 'home' :'home-outline'}
          size={28}
          color={'white'}
          
          
          />
        )
      }}
      
      />

      <Tab.Screen
      name='User'
      component={UserScreen}
      options={{
        tabBarIcon:({focused,color,size})=>(
         <User
         
         name={focused ? 'account-multiple': 'account-multiple-outline'}
         size={28}
         color={'white'}



         />
        )
      }}
      
      />

    </Tab.Navigator>
  )
}



//Login Nav
const LoginNav=()=>{
  const Stack = createNativeStackNavigator();
  return(
    <Stack.Navigator screenOptions={{
      headerShown:false
    }}>
      <Stack.Screen name='Login' component={Login}/>
      <Stack.Screen name='Register' component={Register}/>
      <Stack.Screen name='Home' component={DrawerNav}/>
      <Stack.Screen name='AdminScreen' component={AdminStack}/>

    </Stack.Navigator>
  )
}



//Admin Stack 
const AdminStack =()=>{
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
      options={{
        statusBarColor:'blue',
        headerShown:true,
        headerBackVisible:false,
        headerStyle:{
          backgroundColor:'blue'
        },
        headerTintColor:"#fff",
        headerTitleAlign:'center'
      }}

      name='AdminScreen'
      component={AdminScreen}
      
      
      />
      <Stack.Screen options={{
        headerShown:false
      }} 

name='Login'
component={LoginNav}

      />
      
    </Stack.Navigator>
  )
}

export default function App() {
  const TabNav = createBottomTabNavigator();

  const tabConfig = [
    {
      name: 'Home',
      component: HomeScreen,
      focusedIcon: 'home',
      unfocusedIcon: 'home-outline',
      iconComponent: Ionicons,
    },
    {
      name: 'Profile',
      component: ProfileScreen,
      focusedIcon: 'user',
      unfocusedIcon: 'user-o',
      iconComponent: FontAwesome,
    },
    {
      name: 'Details',
      component: DetailsScreen,
      focusedIcon: 'file-text',
      unfocusedIcon: 'file-text-o',
      iconComponent: FontAwesome,
    },
    {
      name: 'Setting',
      component: SettingScreen,
      focusedIcon: 'settings',
      unfocusedIcon: 'settings-outline',
      iconComponent: Ionicons,
    },
    {
      name: 'Settings',
      component: SettingScreen,
      focusedIcon: 'settings',
      unfocusedIcon: 'settings-outline',
      iconComponent: Ionicons,
    },
  ];

  const screenOptions = ({ route }) => ({
    tabBarIcon: ({ focused, color, size }) => {
      const routeConfig = tabConfig.find((config) => config.name === route.name);
      const iconName = focused ? routeConfig.focusedIcon : routeConfig.unfocusedIcon;
      const IconComponent = routeConfig.iconComponent;
      return <IconComponent name={iconName} color={color} size={size} />;
    },
    tabBarLabelStyle: {
      fontSize: 14,
      paddingBottom: 5,
      fontWeight: '600',
    },
    tabBarStyle: {
      height: 60,
      paddingTop: 0,
    },
    tabBarActiveTintColor: 'orange',
    tabBarInactiveTintColor: 'black',
  });


  const [isLogedIn,setIsLogedIn]=useState(false);
  const [userType,setUserType]=useState('Admin');
  return (
    <NavigationContainer>
     {
      isLogedIn && userType == 'Admin' ? (
        <AdminStack/>
      ):isLogedIn ? (
        <DrawerNav/>
      ):(
        <LoginNav/>
      )
     }
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
