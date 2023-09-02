import { createDrawerNavigator } from '@react-navigation/drawer';

import React from "react";

import Home from '../pages/Home';
import New from '../pages/New';
import Profile from '../pages/Profile';

const AppStack = createDrawerNavigator();

export default function AppRoutes() {
    return(
        <AppStack.Navigator
         screenOptions={{ 
          headerShown: false,

          drawerStyle: {
            backgroundColor: '#FFFFFF',
            paddingTop: 20,
          },
          drawerActiveBackgroundColor: '#3b3dbf', //background menu activo
          drawerActiveTintColor: '#fff', //cor de dentro do menu activo
          drawerInactiveBackgroundColor: '#121212', //background inativo menu
          drawerInactiveTintColor: '#F0F2FF'  
        }}
        >
          <AppStack.Screen
           name="Home"
           component={Home}
          >
          </AppStack.Screen>
          <AppStack.Screen
           name="Novo Registro"
           component={New}
          >
          </AppStack.Screen>
          <AppStack.Screen
           name="Perfil"
           component={Profile}
          >
          </AppStack.Screen>
        </AppStack.Navigator>
    );

}