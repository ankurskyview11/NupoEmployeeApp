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

export default function SignUpScreen({ navigation }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cPassword, setCPassword] = useState("");

  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
    console.log("is MODAL "+ isModalVisible);
    if (isModalVisible)
    {
      navigation.navigate("Otp", {
        userEmail: email,
      });
    }
  };

  const keyboardVerticalOffset = Platform.OS === "ios" ? -280 : 0;
  const _validateEmail = (email) => {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      return true;
    }
    return false;
  };
  const userSignUp = async () => {
    // toggleModal()// temp
    const domainStr = email.split("@");
    console.log(domainStr);

    if (name == "") {
      Toast.show("Enter your name");
      return false;
    } else if (email == "") {
      Toast.show("Enter your email");

      return false;
    } else if (!_validateEmail(email)) {
      Toast.show("Invalid Email");

      return false;
    } else if (domainStr[1] != "nupco.com") {
      Toast.show("Please use email with @nupco.com domain only");

      return false;
    } else if (password == "") {
      Toast.show("Enter password");

      return false;
    } else if (cPassword == "") {
      Toast.show("Enter confirm password");

      return false;
    } else if (password != cPassword) {
      Alert.alert("Password and Confirm password does not match");
      return;
    } else {
      const baseUrl = "https://skyviewads.com/confirm_mail_php/index3.php";

      fetch(baseUrl, {
        method: "POST",
        body: JSON.stringify({ name: name, email: email, password: password }),
      })
        .then((res) => res.json())
        .then((data) => {
          const status = data.success;
          if (!status) {
            Alert.alert(data.msg);
          } else if (status) {
            // navigation.navigate("Otp", {
            //   userEmail: email,
            // });
             toggleModal()
          }
          console.log(data);
        })
        .catch((err) => console.log("this is the error ", err));
    }
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/images/SignUp.png")}
        style={styles.image}
      >
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            style={{ width: 40, height: 40, marginTop: 80, marginLeft: 20 }}
            source={require("../assets/images/backBtn.png")}
          />
        </TouchableOpacity>

        <KeyboardAvoidingView
          behavior="position"
          keyboardVerticalOffset={keyboardVerticalOffset}
        >
          {/* <TouchableWithoutFeedback onPress={Keyboard.dismiss}> */}
          <View style={styles.box1}>
            <Image
              style={{
                width: 400,
                height: 0,
                resizeMode: "contain",
                marginTop: 0,
                opacity: 0.0,
              }}
              source={require("../assets/images/demoUser.png")}
            />
          </View>
          <View>
            <CustomText
              size={40}
              type="ArabicRegular"
              style={styles.subTitleText}
            >
              Sign Up
            </CustomText>
            <CustomText
              size={18}
              type="ArabicRegular"
              style={styles.subTitleLowerText}
            >
              Signup and start arranging your activities
            </CustomText>
          </View>

          <View style={styles.box2}>
            <View style={{ flexDirection: "row", position: "relative" }}>
              <TextInput
                style={{ width: "100%" }}
                label="Your Name"
                value={name}
                mode="outlined"
                onChangeText={(text) => setName(text)}
              />
              <Image
                style={{
                  width: 20,
                  height: 20,
                  resizeMode: "contain",
                  marginLeft: 10,
                  marginTop: 25,
                  position: "absolute",
                  top: 0,
                  right: 20,
                }}
                source={require("../assets/icons/userEmail.png")}
              />
            </View>
            <View style={{ flexDirection: "row", position: "relative" }}>
              <TextInput
                style={{ width: "100%" }}
                label="youremail@nupco.com"
                value={email}
                mode="outlined"
                autoCapitalize="none"
                onChangeText={(text) => setEmail(text)}
                keyboardType="email-address"
              />
              <Image
                style={{
                  width: 20,
                  height: 20,
                  resizeMode: "contain",
                  marginLeft: 10,
                  marginTop: 25,
                  position: "absolute",
                  top: 0,
                  right: 20,
                }}
                source={require("../assets/icons/userEmail.png")}
              />
            </View>

            <View style={{ flexDirection: "row", position: "relative" }}>
              <TextInput
                style={{ width: "100%" }}
                label="Enter Password"
                value={password}
                mode="outlined"
                secureTextEntry={true}
                onChangeText={(text) => setPassword(text)}
              />
              <Image
                style={{
                  width: 20,
                  height: 20,
                  resizeMode: "contain",
                  marginLeft: 10,
                  marginTop: 25,
                  position: "absolute",
                  top: 0,
                  right: 20,
                }}
                source={require("../assets/icons/unhide.png")}
              />
            </View>
            <View style={{ flexDirection: "row", position: "relative" }}>
              <TextInput
                style={{ width: "100%" }}
                label="Enter Confirm Password"
                value={cPassword}
                mode="outlined"
                secureTextEntry={true}
                onChangeText={(text) => setCPassword(text)}
              />
              <Image
                style={{
                  width: 20,
                  height: 20,
                  resizeMode: "contain",
                  marginLeft: 10,
                  marginTop: 25,
                  position: "absolute",
                  right: 20,
                  top: 0,
                }}
                source={require("../assets/icons/unhide.png")}
              />
            </View>
            {/* <TouchableOpacity onPress={()=>navigation.navigate("Signup")}><Text style={{textAlign:"right", fontFamily:'CoHeadlineW23-ArabicRegular', 
        fontWeight:'100',
        color:'black'}}>Forgot your password?</Text></TouchableOpacity> */}

            {/* this.onPressHandle.bind(this) */}

            {/* userSignUp() */}
            <View style={{ flex: 1, margin :20 }}>
              <TouchableOpacity
                style={styles.buttonStyle}
                onPress={() => userSignUp()}
              >
                <Text style={styles.buttonTextStyle}>Sign Up Now</Text>
              </TouchableOpacity>
              <Modal isVisible={isModalVisible}>
                <View style={styles.popUpContainer}>
                <Image
            style={{ width: 80, height: 80, marginTop: 20 , alignSelf: 'center'}}
            source={require("../assets/images/emailC.png")}
          />
                  <CustomText size={25}
              type="ArabicRegular"
              style={styles.popUpSubTitleText}>Verification code sent on</CustomText>
                  <CustomText size={18}
              type="ArabicRegular"
              style={styles.popUpSubTitleLowerText}>{email}</CustomText>

                  <TouchableOpacity
                    style={styles.popUpButtonStyle}
                    onPress={toggleModal}
                  >
                    <Text style={styles.popUpButtonTextStyle}>Ok</Text>
                  </TouchableOpacity>
                </View>
              </Modal>
            </View>

            {/* <TouchableOpacity onPress={()=>navigation.navigate("Signup")}><Text style={{textAlign:"center", fontFamily:'CoHeadlineW23-ArabicRegular', 
        fontWeight:'bold',
        color:'black', fontSize: 18}}>Don't have an account ?</Text></TouchableOpacity> */}
            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
              <Text
                style={{
                  textAlign: "center",
                  fontFamily: "CoHeadlineW23-ArabicRegular",
                  fontWeight: "bold",
                  color: "black",
                  fontSize: 18,
                }}
              >
                Already have an account? Sign In
              </Text>
            </TouchableOpacity>
          </View>
          {/* </TouchableWithoutFeedback> */}
        </KeyboardAvoidingView>
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
  box1: {
    alignItems: "center",
  },
  box2: {
    paddingHorizontal: 40,
    height: "66%",
    justifyContent: "space-evenly",
  },

  subTitleText: {
    marginTop: 1,
    marginLeft: 40,
    fontWeight: "bold",
    color: "black",
  },
  subTitleLowerText: {
    margin: 2,
    marginLeft: 40,
    marginRight: 20,
    fontWeight: "normal",
    color: "black",
  },
  buttonStyle: {
    // flex: 1,
    backgroundColor: "red",
    marginLeft: 2,
    marginRight: 2,
    borderRadius: 5,
    height: 60,
  },
  buttonTextStyle: {
    alignSelf: "center",
    textAlign: "center",
    color: "white",
    fontSize: 22,
    fontWeight: "600",
    paddingTop: 8,
    //paddingBottom: 20,
    fontFamily: "CoHeadlineW23-ArabicRegular",
    fontWeight: "bold",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
  },
  popUpContainer: {
    
    backgroundColor: "white",
    borderRadius: 20,
    height: 300,
    width: "100%",
    padding : 10,
  },

  popUpButtonStyle: {
    // flex: 1,
    backgroundColor: "red",
    alignSelf:'center',
    borderRadius: 5,
    height: 40,
    width : "40%",
    margin: 10,
  },
  popUpButtonTextStyle: {
    alignSelf: "center",
    textAlign: "center",
    color: "white",
    fontSize: 18,
    paddingTop: 4,
    //paddingBottom: 20,
    fontFamily: "CoHeadlineW23-ArabicRegular",
    fontWeight: "bold",
    
  },
  popUpSubTitleText: {
    margin: 10,
    alignSelf:'center',
    fontWeight: "bold",
    color: "black",
  },
  popUpSubTitleLowerText: {
    margin: 10,
   alignSelf:'center',
    fontWeight: "normal",
    color: "#3F71DE",
  },
});
