import { View, Text, Image } from 'react-native'
import React from 'react'
import { Colors } from '../../constants/Colors'
import moment from 'moment';
import { TouchableOpacity } from 'react-native';
import UserTripCard from './UserTripCard';

export default function UserTripList({userTrips}) {

    const LatestTrip = JSON.parse(userTrips[0]?.tripData);



  return (

    <View>

      <View style={{
        marginTop:20,
      }}>

        {LatestTrip?.locationInfo?.photoRef? 
        <Image source={{uri : 'https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference='+LatestTrip?.locationInfo?.photoRef+'&key=' + process.env.EXPO_PUBLIC_GOOGLE_MAP_KEY}}
            style={{
                width:'100%',
                height:240,
                objectFit:'cover',
                borderRadius:15
            }} 
        />
        :
        <Image source={require('./../../assets/images/placeholder.jpg')} 
            style={{
                width:'100%',
                height:240,
                objectFit:'cover',
                borderRadius:15
            }} 
        />}


        <View style={{
            marginTop:10
        }}>

            <Text style={{
                fontFamily:'outfit-medium',
                fontSize:20
            }}>{userTrips[0]?.tripPlan?.trip?.destination}</Text>


            <View style={{
                display:'flex',
                flexDirection:'row',
                justifyContent:'space-between',
                marginTop:5
            }}>

                <Text style={{
                    fontFamily:'outfit',
                    fontSize:17,
                    color:Colors.GRAY
                }}>
                    {moment(LatestTrip.startDate).format('DD MMM yyyy')}
                </Text>

                <Text style={{
                    fontFamily:'outfit',
                    fontSize:17,
                    color:Colors.GRAY
                }}>🚍{LatestTrip?.traveller?.title}</Text>

            </View>

            <TouchableOpacity style={{
                backgroundColor:Colors.PRIMARY,
                padding:15,
                borderRadius:15,
                marginTop:10,
            }}>
                <Text style={{
                    color:Colors.WHITE,
                    textAlign:'center',
                    fontFamily:'outfit-medium',
                    fontSize:15
                }}>See your Plan</Text>

            </TouchableOpacity>
            
        </View>


        {userTrips.map((trip,index) => (

            <UserTripCard trip={trip} key={index} />
            
        ))}

      </View>

    </View>
  )
}