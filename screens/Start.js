import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import React from 'react';
import { SafeAreaView } from "react-native-safe-area-context";
import COLORS from '../constants/colors';

const Start = ({ navigation }) => {
  return (  
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.hazel }}>
      <View style={{ flex: 1}}>
               
        <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}>
          <View style={{ alignItems: 'center', marginVertical: 22 }}>
            <TouchableOpacity
            onPress={() => navigation.navigate("Homepage")}>
            <Image source={require('../images/anemo.png')}
              style={{
                width: 150,
                height: 160,
              }}/>
              </TouchableOpacity>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text style ={{
                fontSize: 32,
                fontWeight: 'bold',
                marginTop: 10,
                marginRight: 5,
                color: COLORS.white,
              }}>
                Swirl
              </Text>
              </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Start;