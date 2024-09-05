import { View, Text, FlatList, Image } from 'react-native'
import React, { useEffect } from 'react'
import { GetPhotoRef } from '../../services/GooglePlaceApi';
import HotelCard from './HotelCard';

export default function HotelList({hotelList}) {


  return (

    <View style={{
        marginTop:20,
    }}>

      <Text style={{
        fontFamily:'outfit-bold',
        fontSize:20
      }}>🏨 Hotel Recommendations</Text>


      <FlatList 
        style={{
            marginTop:8
        }}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={hotelList}
        renderItem={({item , index}) => (

            <HotelCard item={item} />

        )} 
      />

    </View>
  )
}