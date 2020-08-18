import React from 'react';
import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
    DrawerContentComponentProps
  } from '@react-navigation/drawer';

const AppDrawer = createDrawerNavigator();

import Home from '../pages/Home';
import About from '../pages/About';

import { useAuth } from '../contexts/authContext';

function CustomDrawerContent(props: DrawerContentComponentProps) {
    const { signOut } = useAuth();
    return (
      <DrawerContentScrollView {...props}>
          <DrawerItemList {...props}  />
        <DrawerItem 
            inactiveBackgroundColor="#6495ED"
            inactiveTintColor='#fff'
            label="Logout" 
            onPress={() => signOut() } 
        />
      </DrawerContentScrollView>
    );
  }



export default function AppRoutes(){
    return (
        <AppDrawer.Navigator drawerContent={props => <CustomDrawerContent {...props} />} >
            <AppDrawer.Screen
               name="Home"
               component={Home}
            />
             <AppDrawer.Screen
               name="About"
               component={About}
            />
        </AppDrawer.Navigator>
    )
}