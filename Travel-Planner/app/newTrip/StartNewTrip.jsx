import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import StartNewTripCard from '../../components/MyTrips/StartNewTripCard'
import { useNavigation } from 'expo-router';

export default function StartNewTrip() {

    const navigation = useNavigation();

    useEffect(() => {
        navigation.setOptions({
          headerShown: true,
          headerTransparent: true,
          headerTitle: 'Start Your Trip',
        });
      }, []);


  return (
        <View style={{
            marginTop:90
        }}>
            <StartNewTripCard />
        </View>
  )
}