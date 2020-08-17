import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

const AppDrawer = createDrawerNavigator();

import Home from '../pages/Home';
import About from '../pages/About';


export default function AppRoutes(){
    return (
        <AppDrawer.Navigator>
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