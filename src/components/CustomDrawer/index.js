import Ionicons from '@expo/vector-icons/Ionicons';

import React, { useState, useContext} from 'react';

import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, Platform, ActivityIndicator } from 'react-native';

import { Container, ButtonMenu, TitleCustom } from './styled';

export default function CustomDrawer() {

  return(
    <Container>

      <ButtonMenu onPress={() => navigation.openDrawer()} >  
        <Ionicons name="menu" size={32} color="#121212" /> 
      </ButtonMenu>
      
      { title ? <TitleCustom>{title}</TitleCustom> : <Text></Text>}
    
    </Container>
  );

}