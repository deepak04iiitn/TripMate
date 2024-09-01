import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigation, useRouter } from 'expo-router'
import { Colors } from '../../constants/Colors';
import { SelectTravellerList } from '../../constants/Options';
import OptionCard from '../../components/CreateTrip/OptionCard';
import { CreateTripContext } from '../../context/CreateTripContext';

export default function SelectTraveller() {

    const navigation  = useNavigation();

    const [selectedOption , setSelectedOption] = useState();
    const {tripData , setTripData} = useContext(CreateTripContext);
    
    useEffect(() => {
        navigation.setOptions({
            headerShown : true,
            headerTransparent : true,
            headerTitle : 'Select Traveller'
        })
    } , [])


    useEffect(() => {
        setTripData({...tripData , 
            traveller : selectedOption
        })
    } , [selectedOption])


    useEffect(() => {
      console.log(tripData);
    } , [tripData])


  return (

    <View style={{
        padding:25,
        paddingTop:75,
        backgroundColor:Colors.WHITE,
        height:'100%'
    }}>

      <Text style={{
        fontSize:35,
        fontFamily:'outfit-bold',
        marginTop:20,
        textAlign:'center'
      }}>
        Who's Travelling?
      </Text>


      <View style={{
        marginTop:20
      }}>

        <Text style={{
            fontFamily:'outfit-bold',
            fontSize:23,
            textAlign:'center'
        }}>Choose your TravelMate!</Text>

        <FlatList 
            data={SelectTravellerList}
            style={{
              marginTop:25
            }}
            renderItem={({item , index}) => (

                <TouchableOpacity 
                    onPress={() => setSelectedOption(item)}
                    style={{
                        marginVertical:10
                    }}>
                        <OptionCard option={item} selectedOption={selectedOption} />

                </TouchableOpacity>

            )} 
        />

      </View>

      <TouchableOpacity
        style={{
          padding:15,
          backgroundColor:Colors.PRIMARY,
          borderRadius:15,
          marginTop:20
        }}
      >
          <Link href={'/create-trip/select-dates'} style={{width:'100%' , textAlign:'center'}}>
            <Text style={{
              textAlign:'center',
              color:Colors.WHITE,
              fontFamily:'outfit-medium',
              fontSize:20
            }}>Continue</Text>
          </Link>

      </TouchableOpacity>

    </View>
  )
}