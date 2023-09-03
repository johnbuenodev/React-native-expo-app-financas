import React, { useContext, useState, useEffect} from 'react';

import { TouchableWithoutFeedback } from 'react-native';
import { View } from 'react-native';

import { ButtonFilterCustom, Container, ModalContent, TextButton} from "./styled";

export default function CalendarModal({setVisible}) {

    return(
      <Container>
 
        <TouchableWithoutFeedback onPress={() => setVisible() } >
            <View style={{ flex:1 }}></View>
        </TouchableWithoutFeedback>

        <ModalContent>
        <ButtonFilterCustom>
          <TextButton>Filtrar</TextButton>
        </ButtonFilterCustom>
        </ModalContent>
        
      </Container>
    );
  
}

