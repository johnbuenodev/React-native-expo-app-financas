import Ionicons from '@expo/vector-icons/Ionicons';

import { useIsFocused } from '@react-navigation/native';

import React, { useContext, useEffect, useState} from 'react';

import { StyleSheet, Text, TextInput, TouchableOpacity, Alert, View } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

import { format } from 'date-fns';

import { Keyboard, Modal } from 'react-native';

import BalanceItem from '../../components/BalanceItem';
import CalendarModal from '../../components/CalendarModal';
import HistoricoList from '../../components/HistoricoList';
import HeaderCustom from '../../components/header';
import api from "../../services/api";
import { Container } from '../../components/header/styled';

import { Area, List, ListBalance, ListHistoricoArea, Title } from './styled';

export default function Home() { 

    const isFocused = useIsFocused();

    const [listBalance, setListBalance] = useState([]);

    const [openModal, setOpenModal] = useState(false);

    const [listHistorico, setListHistorico] = useState([]);
    
    const [dateCurrent, setDateCurrent] = useState(new Date());

    //ciclo de vida inicial

    useEffect(() => {
      async function getMovements() {
        
        // let isActive = true;

        //Está data gerada tem o timezone incluso
        //let dateFormated = format(dateCurrent, 'dd/MM/yyyy');

        //gerando data nova sem o timezone
        let date = new Date(dateCurrent);
        let onlyDate = date.valueOf() + date.getTimezoneOffset() * 60 * 1000; 
        let dateFormated = format(onlyDate, 'dd/MM/yyyy');

        //somente a data agora
        console.log(dateFormated);

        try {
            
          const response = await api.get("/balance", {
            params: { //chamada get com parametros / parameters
                date: dateFormated
            }
          }); 

          // if(isActive) {
            setListBalance(response.data);
          //}

          //console.log(response.data); 
        } catch(err) {
            console.log(err);
        }

        try {
          
          const responseReceives = await api.get("/receives", {
            params: { //chamada get com parametros / parameters
                date: dateFormated
            }
          });

            setListHistorico(responseReceives.data);

            console.log(responseReceives.data[0]); 
        } catch(err) {
            console.log(err);
        }

      } 

      getMovements();

      //sempre q o componente for desmontado ele vai fazer as chamadas no effect
      //retorna o isActive para false para não refazer a chamada do balance
      // return () => isActive = false;  

    }, [isFocused, dateCurrent]); //isfocused para confirmar q o usuario está na tela

    async function deleteRegister(id) {

      Keyboard.dismiss();
      
      await api.delete("/receives/delete", {
        params: { //chamada delete com parametros / parameters
          item_id: id
        }
      }).then(
        async (res) => {
          console.log(res);
    
          setDateCurrent(new Date());
        }
  
      ).catch((err) => {
        console.log(err); 
      });  

    }

    return(
        <SafeAreaView>
            
            <HeaderCustom title="Minhas Movimentações"></HeaderCustom>
            
            <ListBalance 
              data={listBalance}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              keyExtractor={ item => item.tag }
              renderItem={({item}) => 
                (<BalanceItem data={item} />)}           
            />

            <Area>
             <TouchableOpacity onPress={() => { setOpenModal(true)}}>
              <Ionicons name="calendar-outline" color="#121212" size={30}/>
             </TouchableOpacity>
             <Title>{format(dateCurrent, 'dd/MM/yyyy')}  -  Movimentações</Title>
            </Area>

            <List 
             data={listHistorico}
             showsVerticalScrollIndicator={true}
             keyExtractor={ item => item.id }
             renderItem={
              ({item}) => (
               <HistoricoList data={item} deleteFunc={deleteRegister} />
              )
             }
             contentContainerStyle={{ paddingBottom: 20 }}
             
            />
           
           <Modal visible={openModal} animationType='fade' transparent={true}>
             <CalendarModal sendDateChanged={(dateValue) => setDateCurrent(dateValue) } setVisible={() => setOpenModal(false)} />
           </Modal>

        </SafeAreaView>
    );

}
