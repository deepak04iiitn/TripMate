import { View, Text, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { Colors } from '../../constants/Colors';
import Ionicons from '@expo/vector-icons/Ionicons';
import StartNewTripCard from '../../components/MyTrips/StartNewTripCard';

export default function MyTrip() {

  const [userTrips, setUserTrips] = useState([]);

  return (
    
    <ScrollView
      style={{
        padding: 25,
        paddingTop: 55,
        backgroundColor: Colors.WHITE,
        height: '100%',
      }}
    >
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderBottomWidth: 2,
          borderBottomColor: Colors.PRIMARY,
          paddingBottom: 15,
        }}
      >
        <Text
          style={{
            fontFamily: 'outfit-bold',
            fontSize: 35,
            color: Colors.PRIMARY,
          }}
        >
          My Trips

        </Text>

        <Ionicons name="add-circle" size={50} color={Colors.SECONDARY} />

      </View>

      {userTrips?.length === 0 ? (
        <StartNewTripCard />
      ) : (
        <View>
          <Text>
            You have {userTrips.length} trip(s) planned!
          </Text>
        </View>
      )}

    </ScrollView>
  );
}
