import { View, Text, ToastAndroid } from 'react-native';
import React, { useContext, useEffect, useState } from 'react';
import { useNavigation, useRouter } from 'expo-router';
import { Colors } from '../../constants/Colors';
import CalendarPicker from 'react-native-calendar-picker';
import { TouchableOpacity } from 'react-native';
import moment from 'moment';
import { CreateTripContext } from '../../context/CreateTripContext';

export default function SelectDates() {
  const navigation = useNavigation();
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const { tripData, setTripData } = useContext(CreateTripContext);

  const router = useRouter();

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTransparent: true,
      headerTitle: 'Select Dates',
    });
  }, []);

  const onDateChange = (date, type) => {
    if (type === 'START_DATE') {
      setStartDate(moment(date)); // moment converts any date into a proper format
    } else {
      setEndDate(moment(date));
    }
  };

  const OnDateSelectionContinue = () => {
    // Ensure both dates are selected
    if (!startDate || !endDate) {
      ToastAndroid.show('Please select Start and End Date!', ToastAndroid.LONG);
      return;
    }

    const totalNoOfDays = endDate.diff(startDate, 'days');
    setTripData({
      ...tripData,
      startDate: startDate,
      endDate: endDate,
      totalNoOfDays: totalNoOfDays + 1,
    });

    // Navigate to the select budget page
    router.push('/create-trip/select-budget');
  };

  return (
    <View
      style={{
        padding: 25,
        paddingTop: 75,
        backgroundColor: Colors.WHITE,
        height: '100%',
      }}
    >
      <Text
        style={{
          fontFamily: 'outfit-bold',
          fontSize: 35,
          marginTop: 20,
          textAlign:'center'
        }}
      >
        Select Travel Dates
      </Text>

      <View
        style={{
          marginTop: 30,
        }}
      >
        <CalendarPicker
          onDateChange={onDateChange} // Correct function reference
          allowRangeSelection={true}
          minDate={new Date()}
        />
      </View>

      <TouchableOpacity
        onPress={OnDateSelectionContinue}
        style={{
          padding: 15,
          backgroundColor: Colors.PRIMARY,
          borderRadius: 15,
          marginTop: 35,
        }}
      >
        <Text
          style={{
            textAlign: 'center',
            color: Colors.WHITE,
            fontFamily: 'outfit-medium',
            fontSize: 20,
          }}
        >
          Continue
        </Text>
      </TouchableOpacity>
    </View>
  );
}
