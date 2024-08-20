import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation, useRouter } from 'expo-router'
import { Colors } from './../../../constants/Colors'
import Ionicons from '@expo/vector-icons/Ionicons';

export default function SignIn() {

    const navigation = useNavigation();
    const router = useRouter();

    useEffect(() => {
        navigation.setOptions({
            headerShown : false
        })
    } , [])

  return (

    <View style={{
        padding:25,
        height:'100%',
        paddingTop:40,
        backgroundColor:Colors.WHITE
    }}>

      <TouchableOpacity onPress={() => router.back()}>
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>

      <Text style={{
         fontFamily:'outfit-bold',
         fontSize:30,
         marginTop:30
      }}>Let's Sign You In</Text>

      <Text style={{
         fontFamily:'outfit',
         fontSize:30,
         color:Colors.GRAY,
         marginTop:20
      }}>Welcome Back</Text>

      <Text style={{
         fontFamily:'outfit',
         fontSize:30,
         color:Colors.GRAY,
         marginTop:10
      }}>You've been missed !</Text>


      {/* Email */}
      <View style={{
            marginTop:50
      }}>

        <Text style={{
            fontFamily:'outfit'
        }}>Email</Text>

        <TextInput placeholder='Enter Email'style={styles.input} />

      </View>


      {/* Password */}
      <View style={{
            marginTop:20
      }}>

        <Text style={{
            fontFamily:'outfit'
        }}>Pasword</Text>

        <TextInput secureTextEntry={true} placeholder='Enter Password'style={styles.input} />

      </View>

      {/* Sign In Button */}
      <View style={{
            padding:20,
            backgroundColor:Colors.PRIMARY,
            borderRadius:15,
            marginTop:50
      }}>
        
        <Text style={{color:Colors.WHITE , textAlign:'center'}}>Sign In</Text>

      </View>


      {/* Create Account Button */}
      <TouchableOpacity 
            style={{
                padding:20,
                backgroundColor:Colors.WHITE,
                borderRadius:15,
                marginTop:20,
                borderWidth:1
            }}
            onPress={() => router.replace('auth/sign-up')}
        >
        
            <Text style={{color:Colors.PRIMARY , textAlign:'center'}}>Create Account</Text>

      </TouchableOpacity>

    </View>
  )
}


const styles = StyleSheet.create({
    input : {
        padding:15,
        borderWidth:1,
        borderRadius:15,
        borderColor:Colors.GRAY,
        fontFamily:'outfit'
    }
})