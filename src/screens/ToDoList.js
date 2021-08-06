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
} from "react-native";
import { TextInput, Button } from "react-native-paper";
import { Input, Icon, useColorModeValue, Box } from "native-base";

import { CustomText } from "../constants/Text";
import Toast from "react-native-simple-toast";
import Modal from "react-native-modal";

export default function ToDoList({ route, navigation }) {
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
              style={{ width: 40, height: 40, marginLeft: 20  }}
              source={require("../assets/images/backBtn.png")}
            />
          </TouchableOpacity>
          <CustomText
            size={20}
            type="ArabicRegular"
            style={styles.subTitleText}
          >
            {titleText}
          </CustomText>
          <Image
              style={{ width: 25, height: 25, marginStart:"-20%"  }}
              source={require("../assets/images/todolist.png")}
            />
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
   // backgroundColor: "cyan",
    marginTop: 40,
  },
  subTitleText: {
      width : "70%" ,
    fontWeight: "bold",
    color: "black",
    textAlign:'center',
  },
});
