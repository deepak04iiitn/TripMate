import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import { Colors } from '../../constants/Colors';

export default function StartNewTripCard() {
  return (

    <View style={{
        padding:20,
        marginTop:50,
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

        <TouchableOpacity style={{
            padding:15,
            backgroundColor:Colors.PRIMARY,
            borderRadius:15,
            paddingHorizontal:30
        }}>

            <Text style={{
                color:Colors.WHITE,
                fontFamily:'outfit-medium',
                fontSize:17
            }}>

                Start a new Trip

            </Text>

        </TouchableOpacity>

    </View>
  )
}