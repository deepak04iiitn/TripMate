import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import { useNavigation, useRouter } from 'expo-router'
import React from 'react'
import { Colors } from './../../../constants/Colors'
import Ionicons from '@expo/vector-icons/Ionicons';

export default function SignUp() {

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
        paddingTop:50,
        backgroundColor:Colors.WHITE,
        height:'100%'
    }}>

      <TouchableOpacity onPress={() => router.back()}>
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>

      <Text style={{
        fontFamily:'outfit-bold',
        fontSize:30,
        marginTop:30
      }}>Create New Account</Text>


      {/* User Full Name */}
      <View style={{
            marginTop:50
      }}>

        <Text style={{
            fontFamily:'outfit'
        }}>Full Name</Text>

        <TextInput placeholder='Enter Full Name'style={styles.input} />

      </View>


      {/* Email */}
      <View style={{
            marginTop:20
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
        
        <Text style={{color:Colors.WHITE , textAlign:'center'}}>Create Account</Text>

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
            onPress={() => router.replace('auth/sign-in')}
        >
        
            <Text style={{color:Colors.PRIMARY , textAlign:'center'}}>Sign In</Text>

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