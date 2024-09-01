import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import { Colors } from '../../constants/Colors';
import { useRouter } from 'expo-router';

export default function StartNewTripCard() {

    const router = useRouter();

  return (

    <View style={{
        padding:20,
        marginTop:20,
        display:'flex',
        alignItems:'center',
        gap:25
    }}>

        <Ionicons name="location-sharp" size={30} color="black" />

        <Text style={{
            fontSize:25,
            fontFamily:'outfit-medium'
        }}>
            No trips planned yet!
        </Text>

        <Text style={{
            fontSize:20,
            fontFamily:'outfit',
            textAlign:'center',
            color:Colors.GRAY
        }}>
            "Feeling adventurous? Start planning your first trip and explore new destinations!"
        </Text>

        <TouchableOpacity 
            style={{
                padding:15,
                backgroundColor:Colors.PRIMARY,
                borderRadius:15,
                paddingHorizontal:30
            }}
            onPress={() => router.push('/create-trip/search-place')}
        >

            <Text style={{
                color:Colors.WHITE,
                fontFamily:'outfit-medium',
                fontSize:17
            }}>

                Start a new Trip
                
            </Text>

        </TouchableOpacity>

        <Image 
            source={require('../../assets/images/startTrip.jpg')} 
            style={{
            width: '100%',
            height: 300,
            }} 
        />

    </View>
  )
}