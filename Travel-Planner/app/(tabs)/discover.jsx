import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import React from 'react';
import { Colors } from '../../constants/Colors'; // Assuming you have a color constants file

export default function discover() {
  return (
    <ScrollView style={styles.container}>
      {/* Header Image */}
      <Image 
        source={require('./../../assets/images/login1.jpg')} 
        style={styles.bannerImage} 
      />

      {/* Title */}
      <Text style={styles.title}>About TripMate</Text>

      {/* Introduction Section */}
      <Text style={styles.introduction}>
        Welcome to TripMate, your ultimate AI-powered travel companion! Our mission is to make travel planning easy, personalized, and enjoyable. With TripMate, you can explore new destinations, find the best deals, and create unforgettable memories.
      </Text>

      {/* Features Section */}
      <View style={styles.featuresSection}>
        <Text style={styles.subTitle}>Why Choose TripMate?</Text>
        <View style={styles.featureItem}>
          <Image 
            source={require('./../../assets/images/ai.png')} 
            style={styles.icon} 
          />
          <Text style={styles.featureText}>AI-Powered Travel Assistant</Text>
        </View>
        <View style={styles.featureItem}>
          <Image 
            source={require('./../../assets/images/deals.png')} 
            style={styles.icon} 
          />
          <Text style={styles.featureText}>Best Deals and Recommendations</Text>
        </View>
        <View style={styles.featureItem}>
          <Image 
            source={require('./../../assets/images/iternary.png')}  
            style={styles.icon} 
          />
          <Text style={styles.featureText}>Custom Itineraries for Every Trip</Text>
        </View>
        <View style={styles.featureItem}>
          <Image 
            source={require('./../../assets/images/community.png')}  
            style={styles.icon} 
          />
          <Text style={styles.featureText}>Join a Global Travel Community</Text>
        </View>
      </View>

      {/* Team Section */}
      <View style={styles.teamSection}>
        <Text style={styles.subTitle}>Meet Our Team</Text>
        <Text style={styles.teamText}>
          TripMate is built by a passionate team of travelers and tech enthusiasts dedicated to creating the best travel experiences. We believe that travel should be accessible, fun, and unforgettable.
        </Text>
      </View>

      {/* Footer Section */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>Let's Plan Your Next Adventure!</Text>
        <Text style={styles.contactText}>Contact Us: support@tripmate.com</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.LIGHT_GRAY, // Use a background color to enhance the design
    paddingHorizontal: 20,
  },
  bannerImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginVertical: 20,
    marginTop:70
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: Colors.PRIMARY,
    textAlign: 'center',
    marginBottom: 20,
    fontFamily: 'outfit-bold', // Assuming you are using a custom font
  },
  introduction: {
    fontSize: 16,
    color: Colors.DARK_GRAY,
    textAlign: 'center',
    lineHeight: 24,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  featuresSection: {
    marginVertical: 20,
    paddingHorizontal: 10,
  },
  subTitle: {
    fontSize: 22,
    fontWeight: '600',
    color: Colors.PRIMARY,
    marginBottom: 10,
    textAlign: 'center',
  },
  featureItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  icon: {
    width: 40,
    height: 40,
    marginRight: 15,
  },
  featureText: {
    fontSize: 16,
    color: Colors.DARK_GRAY,
  },
  teamSection: {
    marginVertical: 20,
    paddingHorizontal: 10,
    backgroundColor: Colors.WHITE,
    borderRadius: 10,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5,
  },
  teamText: {
    fontSize: 16,
    color: Colors.DARK_GRAY,
    lineHeight: 24,
    textAlign: 'center',
  },
  footer: {
    marginTop: 30,
    paddingVertical: 20,
    backgroundColor: Colors.PRIMARY,
    alignItems: 'center',
    borderRadius: 10,
  },
  footerText: {
    fontSize: 18,
    color: Colors.WHITE,
    marginBottom: 5,
  },
  contactText: {
    fontSize: 14,
    color: Colors.LIGHT_GRAY,
  },
});
