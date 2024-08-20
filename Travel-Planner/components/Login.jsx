import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import { Colors } from '@/constants/Colors'

export default function Login() {
  return (
    <View>

      <Image 
        source={require('./../assets/images/login1.jpg')} 
        style={{
          width: '100%',
          height: 520,
        }} 
      />

      <View style={{
        backgroundColor: Colors.WHITE,
        marginTop: -20,
        height: '100%',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        padding: 25
      }}>

        <View style={{
          flexDirection: 'row',
          justifyContent: 'center'
        }}>

          <Text style={{
            fontSize: 30,
            fontFamily: 'outfit-bold',
            textAlign: 'center',
            marginTop:10
          }}>Trip</Text>

          <Text style={{
            fontSize: 30,
            fontFamily: 'outfit-bold',
            color: Colors.BLUE,
            textAlign: 'center',
            marginTop:10
          }}>Mate</Text>

        </View>

        <Text style={{
            fontFamily : 'outfit',
            fontSize:17,
            textAlign:'center',
            color : Colors.GRAY,
            marginTop:20
        }}>Explore the World Without the Worry - Trust Our AI Travel Planner to Design the Perfect Trip Just for You!</Text>

        <View style={styles.button}>

            <Text style={{
                color:Colors.WHITE,
                textAlign:'center',
                fontFamily:'outfit',
                fontSize:17
            }}>Sign In with Google</Text>

        </View>

      </View>

    </View>
  )
}


const styles = StyleSheet.create({
    button : {
        padding:15,
        backgroundColor:Colors.PRIMARY,
        borderRadius:99,
        marginTop:'25%'
    }
})
