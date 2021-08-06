import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  KeyboardAvoidingView,
  TouchableOpacity,
  Alert,
  ImageBackground,
  TouchableWithoutFeedback,
  Platform,
  Keyboard,
  ToastAndroid,
  FlatList,
  ScrollView,
  TouchableHighlight,
} from "react-native";
import { TextInput, Button, Divider } from "react-native-paper";
import { Input, Icon, useColorModeValue, Box } from "native-base";

import { CustomText } from "../constants/Text";
import Toast from "react-native-simple-toast";
import Modal from "react-native-modal";

export default function PolicyDetails({ route, navigation }) {
  const { titleText } = route.params;
  console.log("data ===>" + titleText);

  
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/images/home.png")}
        style={styles.image}
      >
        <View style={styles.box1}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              style={{ width: 40, height: 40, marginLeft: 20 }}
              source={require("../assets/images/backBtn.png")}
            />
          </TouchableOpacity>
          <CustomText
            size={20}
            type="ArabicRegular"
            style={styles.subTitleText}
          >
            Policy Details
          </CustomText>

          <Image
            style={{ width: 30, height: 30, marginStart: "-15%" }}
            source={require("../assets/images/policy.png")}
          />
        </View>

        <View style={styles.innerContainer}>
     <View>
     <View>
        <View style={{flexDirection:'row'}}>
               
               <Image style={{width:50,height:50,margin:8,}} source={require("../assets/images/pdf.png")}
               />
               <View style={{margin:8}}>
                <CustomText size={16}>Leave Policy</CustomText>
                <CustomText style={{color:'grey'}} size={14}>Release Date: 20/03/2021</CustomText>
                </View>
                <View >
           <CustomText style={{marginLeft:-10,marginTop:10,color:'#f38434'}} size={15}>Version: HR2021</CustomText>
           </View>
           </View >
          </View>
     </View>
     <ScrollView>
         <CustomText style={styles.innerText}    size={16}
          type="ArabicRegular">
         When an employee seeks a temporary break from 
        their organization due to some personal reasons, they 
write a leave application letter or letter of absence to 
the concerned authority. This not only shows 
professionalism on the employeeʼs part but also gives 
adequate time to the employer to prepare.{"\n"}{"\n"}
If you have important personal work and thus unable 
to go to the office, these samples below will help you 
write a leave application for casual leaveWhen an 
employee seeks a temporary break from their 
organization due to some personal reasons, they 
write a leave application letter or letter of absence to 
the concerned authority. This not only shows 
professionalism on the employeeʼs part but also gives 
adequate time to the employer to prepare.{"\n"}{"\n"}
If you have important personal work and thus unable 
to go to the office, these samples below will help you 
write a leave application for casual leave.
</CustomText>
       
     </ScrollView>
    </View>
      </ImageBackground>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
  },
  box1: {
    flexDirection: "row",
    height: "5%",
    width: " 100%",
    alignItems: "center",
    //backgroundColor: "cyan",
    marginTop: 40,
  },

  subTitleText: {
    width: "70%",
    fontWeight: "bold",
    color: "black",
    textAlign: "center",
  },
  innerText: {
    
    fontWeight: "bold",
    color: "#6f6f6f",
   margin: 16,
  },
  innerContainer:{
    backgroundColor:'#FFF',
    width:"90%",
    height:"80%",
    margin: 20,
    alignSelf:'center',
    borderWidth:1,
    borderColor:"#D3D3D3",
    borderRadius:10, 
    paddingTop: 20,
    shadowColor: "gray",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.9,
    shadowRadius: 1,

},
  
});
