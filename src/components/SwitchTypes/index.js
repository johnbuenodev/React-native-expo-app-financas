// import Ionicons from '@expo/vector-icons/Ionicons';

import Ionicons from '@expo/vector-icons/Ionicons'; 

import React, { useState, useContext} from 'react';

import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, Platform, ActivityIndicator } from 'react-native';

import { RegisterLabel, RegisterTypeButton, SwitchTypesContainer } from './styled';

export default function SwitchTypes({selected, sendTypeChanged}) {

  const [statusSwitch, setStatusSwitch] = useState(selected);

  function changeType(name) {
   setStatusSwitch(name);
   sendTypeChanged(name);
  }

  return(
    <SwitchTypesContainer>
      <RegisterTypeButton 
       checked={ statusSwitch === 'receita' ? true : false}
       onPress={() => changeType('receita')}
      >
        <Ionicons name="arrow-down" size={32} color="#121212" style={(selected == 'receita') ? 'backgroundColor: purple' : 'backgroundColor: white'} /> 
        <RegisterLabel>
          Receita
        </RegisterLabel>
      </RegisterTypeButton>  

      <RegisterTypeButton 
       checked={ statusSwitch === 'despesa' ? true : false}
       onPress={() => changeType('despesa')} 
      >
        <Ionicons name="arrow-up" size={32} color="#121212" /> 
        <RegisterLabel>
          Despesa
        </RegisterLabel>
      </RegisterTypeButton> 

    </SwitchTypesContainer>
  );

}