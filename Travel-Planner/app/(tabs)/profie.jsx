import { View, Text, FlatList, TouchableOpacity, Image, Share, ToastAndroid } from 'react-native';
import React, { useEffect } from 'react';
import { auth } from '../../configs/FirebaseConfig'; // Use the correct import for Firebase auth
import { useNavigation, useRouter } from 'expo-router';
import { Colors } from '../../constants/Colors';

export default function Profile() {

  const user = auth.currentUser;

  const menuList = [
    {
      id: 1,
      name: 'Add Trip',
      icon: require('./../../assets/images/add.jpg'),
      path: '/newTrip/StartNewTrip',
    },
    {
      id: 2,
      name: 'My Trips',
      icon: require('./../../assets/images/mybusiness1.jpg'),
      path: '/mytrip'
    },
    {
      id: 3,
      name: 'Share App',
      icon: require('./../../assets/images/shareapp.png'),
      path: 'share'
    },
    {
      id: 4,
      name: 'Logout',
      icon: require('./../../assets/images/logout.png'),
      path: '/redirectLogout/logout'
    }
  ];

  const router = useRouter();

  const onMenuClick = async (item) => {
    if (item.path === 'logout') {
      try {
        await auth.signOut(); 
         ToastAndroid.show('You have been logged out successfully!' , ToastAndroid.LONG)
      } catch (error) {
        console.error("Logout failed: ", error);
      }
      return;
    }

    if (item.path === 'share') {
      Share.share({
        message: 'Download the TripMate App!'
      });
      return;
    }

    router.push(item.path);
  };

  // Function to generate a color based on email
  const generateColorFromEmail = (email) => {
    let hash = 0;
    for (let i = 0; i < email.length; i++) {
      hash = email.charCodeAt(i) + ((hash << 5) - hash);
    }
    const color = `hsl(${hash % 360}, 70%, 50%)`; // Generates a unique HSL color
    return color;
  };

  // Extracts the username from the email
  const getUsernameFromEmail = (email) => {
    return email.split('@')[0]; // Extracts the part before the '@' symbol
  };



  return (
    <View style={{ marginTop: 100 }}>

      <Text style={{
        fontFamily: 'outfit-bold',
        fontSize: 30,
        textAlign: 'center'
      }}>PROFILE</Text>

      {/* Larger Circular DP with Centered Username */}
      <View style={{
        alignSelf: 'center',
        backgroundColor: generateColorFromEmail(user?.email || ''),
        width: 120, // Increased width
        height: 120, // Increased height
        borderRadius: 60, // Half of width/height to make it circular
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
        marginTop:30
      }}>
        <Text style={{
          color: '#fff',
          fontSize: 40, // Increased font size
          fontFamily: 'outfit-bold',
          textAlign: 'center',
        }}>
          {getUsernameFromEmail(user?.email || '')[0].toUpperCase()} {/* Shows the first letter of the username */}
        </Text>
      </View>

      

      <Text style={{
        fontFamily: 'outfit-medium',
        fontSize: 15,
        textAlign: 'center',
        marginTop: 20
      }}>Your email: {user?.email}</Text>

      <View style={{ marginTop: 50 }}>
        <FlatList
          style={{
            marginLeft: 20,
            marginRight: 20
          }}
          data={menuList}
          numColumns={2}
          columnWrapperStyle={{ justifyContent: 'space-between' }}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => onMenuClick(item)}
              style={{
                flex: 1,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'flex-start',
                padding: 15,
                borderRadius: 10,
                marginBottom: 20,
                backgroundColor: '#fff',
                borderColor: Colors.PRIMARY,
                borderWidth: 1,
                marginHorizontal: 5,
              }}
            >
              <Image source={item.icon}
                style={{
                  width: 40,
                  height: 40,
                  marginRight: 10
                }}
              />
              <Text style={{
                fontFamily: 'outfit-medium',
                fontSize: 16,
                flex: 1
              }}>{item.name}</Text>
            </TouchableOpacity>
          )}
        />
        <Text style={{
          fontFamily: 'outfit',
          textAlign: 'center',
          marginTop: 40,
          color: Colors.GRAY
        }}>Developed by Deepak Yadav © 2024</Text>
      </View>
    </View>
  );
}
