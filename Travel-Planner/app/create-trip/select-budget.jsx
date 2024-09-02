import { View, Text, FlatList, TouchableOpacity, ToastAndroid } from 'react-native';
import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigation, useRouter } from 'expo-router';
import { SelectBudgetOptions } from '../../constants/Options';
import OptionCard from '../../components/CreateTrip/OptionCard';
import { Colors } from '../../constants/Colors';
import { CreateTripContext } from '../../context/CreateTripContext';

export default function SelectBudget() {

  const navigation = useNavigation();
  const [selectedOption, setSelectedOption] = useState();
  const router = useRouter();

  const {tripData , setTripData} = useContext(CreateTripContext);

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTransparent: true,
      headerTitle: 'Select Budget',
    });
  }, []);


  useEffect(() => {

    selectedOption && setTripData({
        ...tripData,
        budget:selectedOption?.title
    })

  } , [selectedOption])


  const onClickContinue = () => {

        if(!selectedOption)
        {
            ToastAndroid.show('Please select your budget!' , ToastAndroid.LONG);
            return;
        }

        router.push('/create-trip/review-trip');
  }

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
        Select Budget
      </Text>

      <View
        style={{
          marginTop: 20,
        }}
      >
        <Text
          style={{
            fontFamily: 'outfit-bold',
            fontSize: 20,
          }}
        >
          Choose spending habits for your trip
        </Text>

        <FlatList
          data={SelectBudgetOptions}
          style={{
            marginTop: 25,
          }}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={{ marginVertical: 10 }}
              onPress={() => setSelectedOption(item)}
            >
              <OptionCard option={item} selectedOption={selectedOption} />
            </TouchableOpacity>
          )}
        />

      </View>

      <TouchableOpacity
        onPress={() => onClickContinue()}
        style={{
          padding:15,
          backgroundColor:Colors.PRIMARY,
          borderRadius:15,
          marginTop:20
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
  );
}
