import { useNavigation } from "@react-navigation/native";

import React, { useContext, useState, useEffect} from 'react';

import { Keyboard, View } from 'react-native';
import { TouchableWithoutFeedback, Alert } from 'react-native';

import { format } from 'date-fns';

import SwitchTypes from '../../components/SwitchTypes';
import HeaderCustom from "../../components/header";
import { AuthContext } from "../../contexts/auth";
import api from "../../services/api";

import { BackgroundCustom, LogoutButton, LogoutText, MessageCustom, NameCustom } from "./styled";

export default function Profile() {

    const { logoff, user } = useContext(AuthContext);

    return(
      <BackgroundCustom>
        <HeaderCustom title="Meu Perfil" />
        
        <View style={{ width: '90%',flexDirection:"row", justifyContent:"flex-start"}}>
          <MessageCustom>
            Bem-vindo!
          </MessageCustom>
        </View>
       
        <View>

        <NameCustom numberOfLines={1}>
        { user.name } 
        </NameCustom>


        </View>
      
       
        <LogoutButton onPress={() => logoff() }>
          <LogoutText>Sair</LogoutText>
        </LogoutButton>
        
      </BackgroundCustom>
    );
  
}

