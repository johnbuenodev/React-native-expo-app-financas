import Ionicons from '@expo/vector-icons/Ionicons';

import { useNavigation } from '@react-navigation/native';

import React, { useState, useContext} from 'react';

import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, Platform, ActivityIndicator } from 'react-native';

import { Container, ButtonMenu, TitleCustom } from './styled';

export default function HeaderCustom(props) {

  const title = props.title;  

  const navigation = useNavigation();

  return(
    <Container>

      <ButtonMenu onPress={() => navigation.openDrawer()} >  
        <Ionicons name="menu" size={32} color="#121212" /> 
      </ButtonMenu>
      
      { title ? <TitleCustom>{title}</TitleCustom> : <Text></Text>}
    
    </Container>
  );

}

/* <Icon name="menu" size={35} color="#121212" />  antigo */
/* <Ionicons name="menu" size={32} color="#121212" />  Novo com o expo icons */