import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { Colors } from '../../constants/Colors'; 
import Ionicons from '@expo/vector-icons/Ionicons';

export default function PlanTrip({ details }) {
  return (
    <View style={{ marginTop: 20, paddingHorizontal: 15 }}>
      <Text style={{ fontSize: 24, fontFamily: 'outfit-bold', marginBottom: 15, color: Colors.PRIMARY }}>
        📅 Plan Details
      </Text>

      {details.map((plan, index) => (
        <View
          key={index}
          style={{
            marginBottom: 20,
            borderWidth: 1,
            padding: 15,
            borderRadius: 15,
            backgroundColor: Colors.BG_LIGHT,
            borderColor: Colors.BORDER_LIGHT,
          }}
        >
          
          <View style={{
            display:'flex',
            flexDirection:'row',
            justifyContent:'space-between'
          }}>

            <Text style={{ fontWeight: 'bold', fontSize: 18, color: Colors.SECONDARY, marginBottom: 10 }}>
              {plan.day} - {plan.time}
            </Text>

            <TouchableOpacity style={{
              backgroundColor:Colors.PRIMARY,
              height:25,
              width:30,
              borderRadius:10
            }}>
              <Ionicons name="navigate" size={24} color="white" style={{textAlign:'center'}} />
            </TouchableOpacity>
          </View>

          {/* Loop through the activities of each day */}
          {plan.activities.map((activity, activityIndex) => (
            <View key={activityIndex} style={{ marginBottom: 15 }}>
              {/* Main bullet point for activity details */}
              <Text style={{ color: Colors.TEXT_PRIMARY, fontSize: 16 }}>
                ● {activity.details}
              </Text>

              {/* Sub-bullets for activity name and time to spend */}
              <View style={{ marginLeft: 15, marginTop: 5 }}>
                <Text style={{ color: Colors.TEXT_SECONDARY, fontSize: 14 }}>
                  ↳ {activity.name}
                </Text>
                <Text style={{ color: Colors.TEXT_SECONDARY, fontSize: 14 }}>
                  ↳ Time to spend 🕒 : {activity.time_to_spend}
                </Text>
              </View>

              {/* Horizontal line separator */}
              {activityIndex < plan.activities.length - 1 && ( // Only render separator if not the last item
                <View
                  style={{
                    borderBottomWidth: 1,
                    borderBottomColor: Colors.BORDER_LIGHT,
                    marginTop:15
                  }}
                />
              )}
            </View>
          ))}
        </View>
      ))}
    </View>
  );
}
