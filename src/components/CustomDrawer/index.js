import { DrawerItemList, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';

import React, { useState, useContext} from 'react';

import { Image } from 'react-native';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, Platform, ActivityIndicator } from 'react-native';

import { AuthContext } from '../../contexts/auth';

import { MessageCustom, NameCustom } from './styled';

export default function CustomDrawer(props) { //recebe a props e repassa

  const { user, logoff } = useContext(AuthContext);

  return(
    <DrawerContentScrollView {...props} >

      <View style={{ alignItems:'center', justifyContent: 'center', marginTop: 25 }}>
        <Image 
          source={require('../../assets/Logo.png')}
          style={{ width:90, height:90 }}
          resizeMode="contain"
        />
         
        <View style={{ flexDirection:"row", justifyContent:"flex-start", paddingHorizontal: 4, marginBottom: 20 }}>
          <MessageCustom>
            Bem-vindo!
          </MessageCustom>
        </View>

      </View>

      <DrawerItemList {...props} />
        
      <DrawerItem  
       {...props}
       label="Sair do App"
       onPress={() => logoff()}
       style={{ marginTop: 350 }}
      />
      
    </DrawerContentScrollView>
  );

}

      /* 
        <View style={{ marginBottom: 20 , paddingHorizontal: 4}}>
         <NameCustom numberOfLines={1}>
         { user && user.name }
         </NameCustom>
        </View> */

      /* ESSE BOTÃO ESTA COMENTADO CASO PRECISE EM OUTRA APLICAÇÃO <DrawerItem  
       {...props}
       label="Sair do App"
       onPress={() => logoff()}
       style={{  }}
      /> */