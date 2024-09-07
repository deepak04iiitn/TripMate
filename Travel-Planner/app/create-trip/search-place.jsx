import { View, Text, Image } from 'react-native';
import React, { useContext, useEffect } from 'react';
import { useNavigation, useRouter } from 'expo-router';
import { Colors } from '../../constants/Colors';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { CreateTripContext } from '../../context/CreateTripContext';

export default function SearchPlace() {

  const navigation = useNavigation();
  const { tripData, setTripData } = useContext(CreateTripContext);
  const router = useRouter();

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTransparent: true,
      headerTitle: 'Search'
    });
  }, []);

  useEffect(() => {
    console.log(tripData);
  }, [tripData]);

  return (
    <View style={{
      flex: 1, // Ensures the view takes the full height of the screen
      justifyContent: 'center', // Centers content vertically
      alignItems: 'center', // Centers content horizontally
      backgroundColor: Colors.WHITE,
      padding: 25,
      paddingTop: 75,
    }}>

    <View>

    <Image
        source={require('./../../assets/images/location.png')}
        style={{
          height: 100,
          width: 100,  
          alignSelf: 'center' ,
          marginTop:40
        }}
      />

      <Text style={{
        fontFamily: 'outfit-bold',
        fontSize: 25,
        marginBottom: 20, // Adds space between the text and search bar
        textAlign: 'center',
        marginTop:30
      }}>Search Destination</Text>


      <View>
        
      </View>

      <GooglePlacesAutocomplete
        placeholder='Search Place'
        fetchDetails={true}
        onPress={(data, details = null) => {
          setTripData({
            locationInfo: {
              name: data.description,
              coordinates: details?.geometry.location,
              photoRef: details?.photos[0]?.photo_reference,
              url: details?.url
            }
          });

          router.push('/create-trip/selectTraveller');
        }}
        query={{
          key: process.env.EXPO_PUBLIC_GOOGLE_MAP_KEY,
          language: 'en',
        }}
        styles={{
          textInputContainer: {
            borderWidth: 1,
            borderRadius: 5,
            marginTop: 25,
            width: '100%',
            
          },
          textInput: {
            height: 40,
            fontSize: 16,
            paddingLeft: 10,
          },
          listView: {
            marginTop: 10,
          },
        }}
      />

    </View>

    </View>
  );
}
