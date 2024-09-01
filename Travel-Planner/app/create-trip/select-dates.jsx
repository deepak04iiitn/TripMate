import { View, Text, ToastAndroid } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { useNavigation } from 'expo-router'
import { Colors } from '../../constants/Colors';
import CalendarPicker from "react-native-calendar-picker";
import { TouchableOpacity } from 'react-native';
import moment from 'moment';
import { CreateTripContext } from '../../context/CreateTripContext';

export default function SelectDates() {

    const navigation = useNavigation();
    const [startDate , setStartDate] = useState();
    const [endDate , setEndDate] = useState();

    const {tripData , setTripData} = useContext(CreateTripContext);

    useEffect(() => {
        navigation.setOptions({
            headerShown : true,
            headerTransparent : true,
            headerTitle : ''
        })
    } , [])


    const onDateChange = (date , type) => {

        if(type == 'START_DATE')
        {
            setStartDate(moment(date));          // moment converts any date into proper format
        }
        else
        {
            setEndDate(moment(date));
        }

    }


    const OnDateSelectionContinue = () => {

        if(!startDate && !endDate)
        {
            ToastAndroid.show('Please select Start and End Date!' , ToastAndroid.LONG);
            return;
        }

        const totalNoOfDays = endDate.diff(startDate , 'days');
        // console.log(totalNoOfDays + 1)
        setTripData({
            ...tripData,
            startDate:startDate,
            endDate:endDate,
            totalNoOfDays:totalNoOfDays+1
        })

    }


  return (

    <View style={{
        padding:25,
        paddingTop:75,
        backgroundColor:Colors.WHITE,
        height:'100%'
    }}>

      <Text style={{
        fontFamily:'outfit-bold',
        fontSize:35,
        marginTop:20
      }}>Select Travel Dates</Text>

      <View style={{
        marginTop:30
      }}>

        <CalendarPicker 
            onDateChange={this.onDateChange}
            allowRangeSelection={true} 
            minDate={new Date()}
        />

      </View>

      <TouchableOpacity
        onPress={OnDateSelectionContinue}
        style={{
          padding:15,
          backgroundColor:Colors.PRIMARY,
          borderRadius:15,
          marginTop:35
        }}
      >
          
            <Text style={{
              textAlign:'center',
              color:Colors.WHITE,
              fontFamily:'outfit-medium',
              fontSize:20
            }}>Continue</Text>
          

      </TouchableOpacity>

    </View>
  )
}