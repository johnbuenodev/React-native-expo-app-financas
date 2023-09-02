import Ionicons from '@expo/vector-icons/Ionicons';

import { useMemo } from "react";

import { Alert, Keyboard, TouchableWithoutFeedback } from 'react-native';

import { TouchableOpacity } from 'react-native-gesture-handler';

import api from "../../services/api";

import { Container, IconView, Tipo, TipoText, ValorText } from "./styled";

export default function HistoricoList({data, deleteFunc}) {

    // function deleteItem(dados) {
      
    //   Alert.alert('Deseja deletar esse registro?', `Tipo: ${dados.type} - Valor: ${dados.value}`,
    //   [
    //     {
    //      text: 'Cancelar',
    //      style: `cancel`
    //     },
    //     {
    //       text: 'Deletar',
    //       onPress: () => deleteRegister(dados.id)
    //     }
    //   ])

    // }

    async function deleteRegister() {

      Alert.alert('Deseja remover o regitro:', `Tipo: ${data.type} - Valor: ${data.value}`,
      [
        {
         text: 'Cancelar',
         style: `cancel`
        },
        {
          text: 'Continuar',
          onPress: () => deleteFunc(data.id)
        }
      ])

      // Keyboard.dismiss();
      
      // await api.delete("/receives/delete", {
      //   params: { //chamada delete com parametros / parameters
      //     item_id: id
      //   }
      // }).then(
      //   async (res) => {
      //     console.log(res);
      //   }
  
      // ).catch((err) => {
      //   console.log(err); 
      // });  

    }

    return(
      <TouchableWithoutFeedback onLongPress={() => deleteRegister()} >

      <Container>
  
       <Tipo>
        <IconView data={data}>
          { 
            (data?.type == 'despesa') 
            ? <Ionicons name="arrow-up-outline" color="#FFF" size={22}/> 
            : <Ionicons name="arrow-down-outline" color="#FFF" size={22}/>
          } 
          {/* <TipoText>{data?.description}</TipoText> */}
          <TipoText>{data?.type}</TipoText>
        </IconView>
       </Tipo>

       <ValorText>
        R$ {data?.value}
       </ValorText>
       
       </Container>
       
      </TouchableWithoutFeedback>
    );
  
  }  