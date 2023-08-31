import { useNavigation } from "@react-navigation/native";

import React, { useContext, useState, useEffect} from 'react';

import { Keyboard, View } from 'react-native';
import { TouchableWithoutFeedback, Alert } from 'react-native';

import { format } from 'date-fns';

import SwitchTypes from '../../components/SwitchTypes';
import HeaderCustom from "../../components/header";
import api from "../../services/api";

import { BackgroundCustom, SafeAreaViewCustom, 
  InputCustom, SubmitText, Submitbutton 
} from "./styled";

export default function New() { // {data} props 
    
    const navigation = useNavigation();

    const [ labelInput, setLabelInput ] = useState('');
    const [ valueInput, setValueInput ] = useState('');
    const [ type, setType ] = useState('receita');


    async function confirmSaveRegister() {
      console.log(labelInput);
      console.log(valueInput);
      console.log(type);
      

      //isNaN(parseFloat(valueInput))
      if(valueInput === '' || labelInput === '') { //|| type === null 
        alert('Preencha todos os campos');
        return;
      }

      //Titulo: ${labelInput} - 
      Alert.alert('Confirmando dados:', `Tipo: ${type} - Valor: ${valueInput}`,
      [
        {
         text: 'Cancelar',
         style: `cancel`
        },
        {
          text: 'Continuar',
          onPress: () => saveRegister()
        }
      ])
      
    }

    async function saveRegister() {
      //await alert('SALVAR')

      Keyboard.dismiss();
      
      await api.post("/receive", {
        description: labelInput,
        value: Number(valueInput),
        type: type,
        date: format(new Date(), 'dd/MM/yyyy')
      }).then(
        async (res) => {
          //console.log(res);
          await resetFields();
          //await navigation.navigate('Home');
        }
  
      ).catch((err) => {
        console.log(err); 
      });  

    }

    function resetFields() {
      setValueInput('');
      setLabelInput('');
    }

    return(
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss() }>
      <BackgroundCustom>
        <HeaderCustom title="Registrando" />

        <SafeAreaViewCustom>

          <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center' }}>
            
          <InputCustom
           placeholder="Descrição desse registro"
           value={labelInput}
           onChangeText={(text) => setLabelInput(text)}
          >
          
          </InputCustom>

          <InputCustom
           placeholder="Valor desejado"
           keyboardType="numeric"
           value={valueInput}
           onChangeText={(text) => setValueInput(text)}
          >
          
          </InputCustom> 

          <SwitchTypes selected={type} sendTypeChanged={(item) => setType(item)} />

          </View>
   
          <Submitbutton onPress={() => confirmSaveRegister() }>
            <SubmitText>Salvar</SubmitText>
          </Submitbutton>

        </SafeAreaViewCustom>
        
      </BackgroundCustom>
      </TouchableWithoutFeedback>
    );
  
  }
