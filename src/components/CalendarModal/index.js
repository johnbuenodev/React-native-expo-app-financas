import React, { useContext, useState, useEffect} from 'react';

import { TouchableWithoutFeedback } from 'react-native';
import { View } from 'react-native';

import { Calendar, LocaleConfig } from 'react-native-calendars';

import { ButtonFilterCustom, Container, ModalContent, TextButton} from "./styled";

export default function CalendarModal({setVisible, sendDateChanged}) {

    const [dateCurrent, setDateCurrent] = useState(new Date());
    const [marketDate, setMarketDate] = useState({});

    function handleOnDayPress(date) {
        console.log(date.dateString);
        setDateCurrent(new Date(date.dateString));

        let markedDayObj = {};

        markedDayObj[date.dateString] = {
         selected: true,
         selectedColor: '#4169E1',
         textColor: '#FFF'
        }

        setMarketDate(markedDayObj);

    }

    async function closeCalendar() {

      await sendDateChanged(dateCurrent);
      await setVisible();  
    }
    
    return(
      <Container>
 
        <TouchableWithoutFeedback onPress={() => setVisible() } >
            <View style={{ flex:1 }}></View>
        </TouchableWithoutFeedback>

        <ModalContent>

        <Calendar  
          onDayPress={handleOnDayPress}
          markedDates={marketDate}
          enableSwipeMonths={true}
          theme={{ 
            todayTextColor:'#FFF',
            todayBackgroundColor: '#32CD32',
            selectedDayBackgroundColor: '#4169E1',
            selectedDayTextColor: '#FFF'
           }}
        />
      
        <ButtonFilterCustom onPress={() => closeCalendar()}>
          <TextButton>Filtrar</TextButton>
        </ButtonFilterCustom>
        </ModalContent>
        
      </Container>
    );
  
}

