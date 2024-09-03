import { View, Text, Image } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { Colors } from '../../constants/Colors'
import { CreateTripContext } from '../../context/CreateTripContext';
import { AI_PROMPT } from '../../constants/Options';
import { chatSession } from '../../configs/AiModal';
import { useRouter } from 'expo-router';
import { doc, setDoc } from 'firebase/firestore';
import { auth, db } from '../../configs/FirebaseConfig';

export default function GenerateTrip() {

    const {tripData , setTripData} = useContext(CreateTripContext);

    const [loading , setLoading] = useState(false);

    const router = useRouter();
    const user = auth.currentUser;


    useEffect(() => {
        GenerateAiTrip()
    } , [])


    const GenerateAiTrip = async() => {

        setLoading(true);

        const FINAL_PROMPT = AI_PROMPT
        .replace('{location}' , tripData?.locationInfo?.name)
        .replace('{totalDays}' , tripData?.totalNoOfDays)
        .replace('{totalNight}' , tripData?.totalNoOfDays-1)
        .replace('{traveller}' , tripData?.traveller?.title)
        .replace('{budget}' , tripData?.budget)
        .replace('{totalDays}' , tripData?.totalNoOfDays)
        .replace('{totalNight}' , tripData?.totalNoOfDays-1);

        console.log(FINAL_PROMPT);

        const result = await chatSession.sendMessage(FINAL_PROMPT);
        console.log(result.response.text());

        const tripResp = JSON.parse(result.response.text());

        setLoading(false);

        const docId = (Date.now()).toString();

        const result_ = await setDoc(doc(db , "UserTrips" , docId) , {
            userEmail : user.email,
            tripPlan : tripResp,                         // AI Result
            tripData : JSON.stringify(tripData),         // user selected data
            docId : docId
        })

        router.push('(tabs)/mytrip');

    }

  return (

    <View style={{
        padding:25,
        paddingTop:75,
        backgroundColor:Colors.WHITE,
        height:'100%',
        display:'flex',
        justifyContent:'center'
    }}>

      <Text style={{
        fontFamily:'outfit-bold',
        fontSize:35,
        textAlign:'center'
      }}>Please Wait...</Text>

      <Text style={{
        fontFamily:'outfit-medium',
        fontSize:20,
        textAlign:'center',
        marginTop:40
      }}>We are working to generate your dream trip</Text>

      <Image source={require('./../../assets/images/plane1.gif')} 
        style={{
            width:'100%',
            height:200,
            objectFit:'contain',
            marginTop:20
        }}
    />

    <Text style={{
        fontFamily:'outfit',
        color:Colors.GRAY,
        fontSize:20,
        textAlign:'center',
        marginTop:30
    }}>Do not go back!</Text>

    </View>
  )
}


{/* Generate Travel Plan for Location : New York USA , for 1 Days and 1 Night for Family with a Luxury 
    budget with a flight details , Flight price with Booking url , Hotels opinions list with Hotel Name , 
    Hotel address , Price , Hotel image url , geo coordinates , rating , descriptions and places to visit 
    nearby with Place name , Place details , Place image url , Geo coordinates , ticket pricing , time to 
    travel each of the location for 1 days and 1 night with each day plan with best time to visit in JSON format. */}