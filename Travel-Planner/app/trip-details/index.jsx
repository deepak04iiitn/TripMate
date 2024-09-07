import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useLocalSearchParams, useNavigation } from 'expo-router';
import { Colors } from '../../constants/Colors';
import moment from 'moment';
import FlightInfo from '../../components/TripDetails/FlightInfo';
import HotelList from '../../components/TripDetails/HotelList';
import PlanTrip from '../../components/TripDetails/PlanTrip';

export default function TripDetails() {
  const navigation = useNavigation();
  const { trip } = useLocalSearchParams();

  const parsedTrip = trip ? JSON.parse(trip) : null;
  const [tripDetails, setTripDetails] = useState(parsedTrip || {});

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTransparent: true,
      headerTitle: '',
    });
  }, []);

  const formatData = (data) => {
    try {
      return JSON.parse(data);
    } catch (e) {
      return null;
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Image
        source={{
          uri: formatData(tripDetails?.tripData)?.locationInfo?.photoRef
            ? `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=${formatData(tripDetails?.tripData)?.locationInfo?.photoRef}&key=${process.env.EXPO_PUBLIC_GOOGLE_MAP_KEY}`
            : require('./../../assets/images/placeholder.jpg'),
        }}
        style={styles.headerImage}
      />

      <View style={styles.detailsContainer}>
        <Text style={styles.destinationText}>
          {tripDetails?.tripPlan?.trip?.destination}
        </Text>

        <View style={styles.dateContainer}>
          <Text style={styles.dateText}>
            {moment(formatData(tripDetails?.tripData)?.startDate).format('DD MMM yyyy')}
          </Text>
          <Text style={styles.dateText}>
             {moment(formatData(tripDetails?.tripData)?.endDate).format('DD MMM yyyy')}
          </Text>
          <Text style={styles.travellerInfo}>
            🚍 {formatData(tripDetails?.tripData)?.traveller?.title}
          </Text>
        </View>

        {/* Flight Info */}
        <View style={styles.card}>
          <FlightInfo flightData={tripDetails?.tripPlan?.flights} />
        </View>

        {/* Hotels List */}
        <View style={styles.card}>
          <HotelList hotelList={tripDetails?.tripPlan?.hotels} />
        </View>

        {/* Trip Day Planner */}
        <View style={styles.card}>
          <PlanTrip details={tripDetails?.tripPlan?.daily_plans} />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.LIGHT_GRAY,
  },
  headerImage: {
    width: '100%',
    height: 330,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    marginBottom: -30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 7,
  },
  detailsContainer: {
    padding: 20,
    backgroundColor: Colors.WHITE,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    marginTop: -30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.1,
    shadowRadius: 7,
  },
  destinationText: {
    fontSize: 28,
    fontFamily: 'outfit-bold',
    color: Colors.DARK_GRAY,
    marginBottom: 10,
  },
  dateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 5,
  },
  dateText: {
    fontFamily: 'outfit',
    fontSize: 16,
    color: Colors.GRAY,
  },
  travellerInfo: {
    fontFamily: 'outfit',
    fontSize: 16,
    color: Colors.GRAY,
    marginLeft: 10, // Adds spacing between the date and traveler info
  },
  card: {
    backgroundColor: Colors.WHITE,
    borderRadius: 20,
    padding: 15,
    marginTop: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.1,
    shadowRadius: 7,
    elevation: 3,
  },
});
