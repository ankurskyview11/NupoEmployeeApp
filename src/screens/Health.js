import React, { useState, useEffect, Object } from "react";
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
  NativeModules,
  DatePickerIOSComponent,
  ScrollView,
} from "react-native";
import { TextInput, Button, Divider } from "react-native-paper";
import { Input, Icon, useColorModeValue, Box, Slide } from "native-base";

import { CustomText } from "../constants/Text";
import Toast from "react-native-simple-toast";
import Modal from "react-native-modal";

import CalendarPicker from "react-native-calendar-picker";
import SegmentedControlTab from "react-native-segmented-control-tab";

import ReactNative from "react-native";

import Fitness, { getSteps } from "@ovalmoney/react-native-fitness";

//import RBSheet from "react-native-raw-bottom-sheet";
import { BottomSheet } from "react-native-btr";
import ProgressCircle from "react-native-progress-circle";
import CalendarStrip from "react-native-calendar-strip";
import Ruler from "react-native-animated-ruler";
import { format } from "date-fns";
import DateTimePickerModal from "react-native-modal-datetime-picker";

import AppleHealthKit from "rn-apple-healthkit";

import {
  initFitnessSdk,
  getHeight,
  getWeight,
  getHeartRate,
  //getSteps,
  getDistanceWalkingRunning,
  getDistances,
  getCalories,
} from "react-native-fitness-sdk";

const permissions = [
  {
    kind: Fitness.PermissionKinds.Steps,
    access: Fitness.PermissionAccesses.Read,
  },
];

let options = {
  permissions: {
    // read: ["Height", "Weight", "DateOfBirth"],
    // write: ["Height", "Weight"],
    read: [
      "Height",
      "Weight",
      "StepCount",
      "DateOfBirth",
      "BodyMassIndex",
      "HeartRate",
    ],
    write: ["Weight", "StepCount", "BodyMassIndex"],
  },
};

export default function Health({ route, navigation }) {
  const { titleText } = route.params;
  console.log("data ===>" + titleText);

  const { userName } = route.params;
  console.log(userName);

  //const refRBSheet = useState();

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [heightState, setHeightState] = useState("");
  const [weightState, setWeightState] = useState("");

  const [stepCountState, setStepCountState] = useState("");

  const [heartRateValue, setHeartRateValue] = useState("");
  const [stepCountValue, setStepCountValue] = useState("");

  const [visible, setVisible] = useState(false);
  const [isKg, setIsKg] = useState(false);
  const [isFeet, setIsFeet] = useState(false);

  const [selectedDateStr, setSelectedDateStr] = useState("");

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    console.log("A date has been picked: ", date);
    
    var formattedDate = format(date, "dd-MM-yyyy");
  
    console.log("FORMATTED DATE ==" + formattedDate);
    setDOB(formattedDate);

    calculateAge(date);
    hideDatePicker();
  };

  const calculateAge = (date) => {
   
   

    var today = new Date();
    var birthDate = new Date(date);
    var formattedToday = format(today, "dd-MM-yyyy");
    
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    console.log("Your AGE == " + age);
    setAge(age);
  };

  const toggleBottomNavigationView = () => {
    //Toggling the visibility state of the bottom sheet
    
    
    if (age != '' && heightState != '')
    {
      setVisible(!visible);
      calculateHeartRate();
      calculateSteps();
    }
    else 
    {
      Alert.alert("Please enter details");
    }
   
    
  };
  state = {
    heightState: 38,
    weightState: 34,
  };
  const [DOB, setDOB] = useState("");
  const [age, setAge] = useState("");
  

  const onValueChangedH = (heightValue) => setHeightState({ heightValue });
  // const onValueChangedW = (weightState) => setWeightState({ weightState });
  const calculate = () => {
    console.log("CALCULATE");
    //refRBSheet.current.open()
    toggleBottomNavigationView();
  };
  useEffect(() => {
    // write your code here, it's like componentWillMount
    //getHealthData();
    // getNewHealth();
    initFitnessSdk().then(() => {
      let date = "2021-07-20"; // Date must be this format

      // getHeight(date).then(res => console.log("H VALUE SDK ", res));
      // getWeight(date).then(res => console.log("W VALUE SDK ", res));
      // getHeartRate(date).then(res => console.log("HR VALUE SDK ", res));
      //getSteps(date).then(res => console.log("ST VALUE SDK ", res));
    });

    // var date = new Date().getDate();
    // var month = new Date().getMonth() + 1;
    // var year = new Date().getFullYear();
    // console.log("current date "+year+"-"+month+"-"+date);
    // let currentdate = year+"-"+month.padStart(2, "0");+"-"+date;
    // console.log("PAD "+currentdate);

    var dt = new Date();

    var year = dt.getFullYear();
    var month = (dt.getMonth() + 1).toString().padStart(2, "0");
    var day = dt.getDate().toString().padStart(2, "0");

    console.log(year + "-" + month + "-" + day);
    let currentdate = year + "-" + month + "-" + day;
    setSelectedDateStr(currentdate.toString());
  }, []);

  const [weightUnit, setWeightUnit] = useState("Pound");
  const [heightUnit, setHeightUnit] = useState("Feet");
  const keyboardVerticalOffset = Platform.OS === "ios" ? -10 : 0;

  const convertIntoKG = () => {
    if (!isKg) {
      setIsKg(true);
      setWeightUnit("Kg");
      let weightKg = weightState / 2.2;
      weightKg = weightKg.toFixed(2);
      setWeightState(weightKg);
    }
  };
  const convertIntoPound = () => {
    if (isKg) {
      setIsKg(false);
      setWeightUnit("Pound");
      let weightPound = weightState * 2.2;
      weightPound = weightPound.toFixed(2);
      setWeightState(weightPound);
    }
  };

  const convertIntoFeet = () => {
    if (isFeet) {
      setIsFeet(false);
      setHeightUnit("Feet");
      let heightFeet = heightState * 12;
      heightFeet = heightFeet.toFixed(2);
      setHeightState(heightFeet);
    }
  };

  const convertIntoInch = () => {
    if (!isFeet) {
      setIsFeet(true);
      setHeightUnit("Inch");
      let heightInch = heightState / 12;
      heightInch = heightInch.toFixed(2);
      setHeightState(heightInch);
    }
  };
  onDateSelected = (selectedDate) => {
    // setState({ selectedDate });
    // setState({ formattedDate: selectedDate.format('YYYY-MM-DD')});
    setSelectedDateStr(selectedDate);

    console.log("SELECTED DATE " + selectedDate.format("YYYY-MM-DD"));
  };
  const calculateHeartRate = () => {
    console.log("CURRENT AGE == ", age);
    let heartRate = 220 - age;
    let bpmValue = heartRate * 0.64;
    console.log("CALCULATED HEART RATE == ", bpmValue.toFixed(2));
    setHeartRateValue(bpmValue.toFixed(2));
  };

  const calculateSteps = () => {
    console.log("CURRENT HEIGHT == ", heightState);
    let heigtStride = heightState * 0.413;
    let convertedHeightInFeet = heigtStride / 12;
    let stepsCountPerMile = 5280 / convertedHeightInFeet;
    console.log("CALCULATED STEP COUNT == ", stepsCountPerMile.toFixed(2));
    setStepCountValue(stepsCountPerMile.toFixed(2));
  };
  const getNewHealth = () => {
    Fitness.isAuthorized(permissions).then((authorized) => {
      // Do something
      console.log(authorized);
      console.log("NEW FIT 00000000000000000000");
      console.log("VARRRRRRRR " + JSON.stringify(Fitness));
      //console.log(Fitness.PermissionKind, Fitness.PermissionAccess)

      var Obj = {
        startDate: "2021-07-20",
        endDate: "2021-07-20",
        interval: "5",
      };

      const getCalories = (Obj) =>
        NativeModules.Fitness.getCalories(
          Date.parse(Obj.startDate),
          Date.parse(Obj.endDate),
          Obj.interval
        );
      console.log("given date formate ==" + selectedDateStr);
      let dateSleep = { startDate: "2021-07-23", endDate: "2021-07-23" };
      Fitness.getHeartRate(dateSleep)
        .then((records) => {
          console.log("here came", JSON.stringify(records));
          //console.log("here",Fitness.SleepAnalysis.records)
          // Do something
        })
        .catch((error) => {
          console.log("here", error);
          // Do something
        });
    });
  };

  const getHealthData = () => {
    AppleHealthKit.initHealthKit(options, (err, results) => {
      if (err) {
        console.log("error initializing Healthkit: ", err);
        return;
      }

      // DOB Example
      AppleHealthKit.getDateOfBirth(null, (err, results) => {
        console.log(results);
        // Alert.alert('DOB '+ results.value)
        var date = new Date(results.value);
        var formattedDate = format(date, "dd-MM-yyyy");
        console.log(formattedDate);
        // Alert.alert('DOB '+ formattedDate)
        setDOB(formattedDate);
        setAge(results.age);
      });

      // Weight Example
      AppleHealthKit.getLatestWeight(null, (err, results) => {
        console.log("WWWWW ==  " + results.value.toFixed(2));
        // Alert.alert('Weight '+ results.value.toFixed(2))
        setWeightState(results.value.toFixed(2));
      });

      // Height Example
      AppleHealthKit.getLatestHeight(null, (err, results) => {
        console.log("HHHH === " + results.value);
        // Alert.alert('Height '+ results.value)
        setHeightState(results.value.toFixed(2));
      });
    });

    //   AppleHealthKit.getStepCount(null, (err, results) => {
    //     console.log("SSSS === "+results.value);
    //     //Alert.alert('Height '+ results.value)
    //     setStepCountState(results.value);

    //  });

    // AppleHealthKit.getHeartRateSamples(null, (err, results) => {

    //   // use samples ...
    //   console.log("HRRRR === "+results.value);
    // });
    let options2 = {
      unit: "bpm", // optional; default 'bpm'
      startDate: new Date(2021, 7, 13).toISOString(), // required
      endDate: new Date().toISOString(), // optional; default now
      ascending: false, // optional; default false
      limit: 10, // optional; default no limit
    };
    // AppleHealthKit.getHeartRateSamples(options2, (err, results) => {
    //   if (err) {
    //     return;
    //   }
    //   console.log("HRRRR === "+results);
    //   console.log("HRRRR === "+results.value);
    // });

    var Obj = {
      startDate: "1626728400000",
      endDate: "1626728400000",
      interval: "5",
    };
    AppleHealthKit.getHeartRateSamples(options2, (err, results) => {
      console.log("HEART RATE BEFORE " + err);
      if (err) {
        return;
      }
      console.log("HEART RATE " + results);
    });
  };
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/images/home.png")}
        style={styles.image}
      >
        <ScrollView>
          <KeyboardAvoidingView
            style={{ flex: 1 }}
            keyboardVerticalOffset={10}
            behavior={"position"}
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
                {titleText}
              </CustomText>

              <Image
                style={{ width: 30, height: 30, marginStart: "-25%" }}
                source={require("../assets/images/health.png")}
              />
            </View>

            <View style={styles.profileContainer}>
              <View style={styles.profileInnerContainer}>
                <Image
                  style={{
                    width: 120,
                    height: 120,
                    resizeMode: "contain",
                    alignSelf: "center",
                    marginTop: -50,
                  }}
                  source={require("../assets/images/userProfile.png")}
                />

                <View style={styles.profileContentContainer}>
                  <CustomText
                    size={20}
                    type="ArabicRegular"
                    style={styles.subTitleText}
                    style={{ alignSelf: "center" }}
                  >
                    Welcome
                  </CustomText>
                  <CustomText
                    size={20}
                    type="ArabicRegular"
                    style={styles.subTitleText}
                    style={{ alignSelf: "center", color: "#3F71DE" }}
                  >
                    {userName}
                  </CustomText>

                  <View
                    style={{
                      backgroundColor: "white",
                      width: "60%",
                      alignSelf: "center",
                      height: 50,
                      borderRadius: 25,
                      shadowColor: "gray",
                      shadowOffset: { width: 0, height: 1 },
                      shadowOpacity: 0.9,
                      shadowRadius: 3,
                      marginTop: 10,
                    }}
                  >
                    <SegmentedControlTab
                      borderRadius={25}
                      tabsContainerStyle={styles.tabsContainerStyle}
                      activeTabStyle={styles.activeTabStyle}
                      tabStyle={styles.tabStyle}
                      values={["Male", "Female"]}
                      selectedIndex={selectedIndex}
                      // onTabPress={setSelectedIndex}
                    />
                  </View>
                  <CustomText
                    size={18}
                    type="ArabicRegular"
                    style={styles.subTitleText}
                    style={{ marginLeft: 20, marginTop: 15 }}
                  >
                    DOB*
                  </CustomText>
                  <TouchableOpacity onPress={() => showDatePicker()}>
                    <View style={styles.dobContainer}>
                      <CustomText
                        size={18}
                        type="ArabicRegular"
                        style={styles.subTitleText}
                        style={{
                          alignSelf: "center",
                          color: "gray",
                          marginLeft: 15,
                        }}
                      >
                        {DOB}           Your Age {age}
                      </CustomText>
                      <Image
                        style={{
                          width: 25,
                          height: 25,
                          alignSelf: "center",
                          position: "relative",
                          marginRight: 15,
                        }}
                        source={require("../assets/images/calendar.png")}
                      />
                    </View>
                  </TouchableOpacity>
                  <DateTimePickerModal
                    isVisible={isDatePickerVisible}
                    mode="date"
                    maximumDate={new Date(Date.now() + 10 * 60 * 1000)}
                    onConfirm={handleConfirm}
                    onCancel={hideDatePicker}
                  />

                  {/* Height View */}
                  <View>
                    <View style={styles.itemContainer}>
                      <View style={{ width: "50%", backgroundColor: "white" }}>
                        <CustomText
                          size={18}
                          type="ArabicRegular"
                          style={styles.subTitleText}
                          style={{ marginLeft: 0 }}
                        >
                          Height
                        </CustomText>
                      </View>
                      <View
                        style={{
                          flex: 1,
                          flexDirection: "row",
                          margin: 2,
                          backgroundColor: "transparent",

                          justifyContent: "center",
                        }}
                      >
                        <View
                          style={{
                            margin: 5,
                            width: "40%",
                            backgroundColor: "#3F71DE",
                            borderRadius: 4,
                            height: 28,
                          }}
                        >
                          <TouchableOpacity onPress={() => convertIntoFeet()}>
                            <CustomText
                              size={14}
                              type="ArabicRegular"
                              style={styles.subTitleText}
                              style={{ alignSelf: "center", color: "white" }}
                            >
                              Feet
                            </CustomText>
                          </TouchableOpacity>
                        </View>
                        <View
                          style={{
                            margin: 5,
                            width: "40%",
                            backgroundColor: "gray",
                            borderRadius: 4,
                          }}
                        >
                          <TouchableOpacity onPress={() => convertIntoInch()}>
                            <CustomText
                              size={14}
                              type="ArabicRegular"
                              style={styles.subTitleText}
                              style={{ alignSelf: "center", color: "white" }}
                            >
                              Inch
                            </CustomText>
                          </TouchableOpacity>
                        </View>
                      </View>
                    </View>
                    <View>
                      {/* <Ruler
                    style={{
                      borderRadius: 10,
                      elevation: 3,
                      alignSelf: "center",
                      marginTop: 15,
                    }}
                    width={350}
                    height={80}
                    vertical={false}
                    onChangeValue={(heightState) => alert(heightState)}
                    minimum={0}
                    
                    maximum={100}
                    segmentWidth={2}
                    segmentSpacing={20}
                    indicatorColor="#FF0000"
                    indicatorWidth={100}
                    indicatorHeight={40}
                    indicatorBottom={20}
                    step={10}
                    stepColor="#333333"
                    stepHeight={40}
                    normalColor="#999999"
                    normalHeight={20}
                    backgroundColor="#FFFFFF"
                    numberFontFamily="System"
                    numberSize={30}
                    numberColor="#000000"
                    unit="cm"
                    unitBottom={20}
                    unitFontFamily="System"
                    unitColor="#888888"
                    unitSize={16}
                  />
                 */}
                      {/* <CustomText  size={40}
                      type="ArabicRegular"
                      style={styles.subTitleText} style={{alignSelf:'center'}}>{heightState} {heightUnit}</CustomText> */}
                      <TextInput
                        style={{ width: "90%", alignSelf: "center" }}
                        label="Enter your height"
                        value={heightState}
                        mode="outlined"
                        keyboardType="number-pad"
                        secureTextEntry={false}
                        returnKeyType="done"
                        onChangeText={(text) => setHeightState(text)}
                      />
                    </View>
                  </View>
                  <View>
                    <View style={styles.itemContainer}>
                      <View style={{ width: "50%", backgroundColor: "white" }}>
                        <CustomText
                          size={18}
                          type="ArabicRegular"
                          style={styles.subTitleText}
                          style={{ marginLeft: 0 }}
                        >
                          Weight
                        </CustomText>
                      </View>
                      <View
                        style={{
                          flex: 1,
                          flexDirection: "row",
                          margin: 2,
                          backgroundColor: "transparent",

                          justifyContent: "center",
                        }}
                      >
                        <View
                          style={{
                            margin: 5,
                            width: "40%",
                            backgroundColor: "#3F71DE",
                            borderRadius: 4,
                            height: 28,
                          }}
                        >
                          <TouchableOpacity onPress={() => convertIntoKG()}>
                            <CustomText
                              size={14}
                              type="ArabicRegular"
                              style={styles.subTitleText}
                              style={{ alignSelf: "center", color: "white" }}
                            >
                              Kg
                            </CustomText>
                          </TouchableOpacity>
                        </View>
                        <View
                          style={{
                            margin: 5,
                            width: "40%",
                            backgroundColor: "gray",
                            borderRadius: 4,
                          }}
                        >
                          <TouchableOpacity onPress={() => convertIntoPound()}>
                            <CustomText
                              size={14}
                              type="ArabicRegular"
                              style={styles.subTitleText}
                              style={{ alignSelf: "center", color: "white" }}
                            >
                              Pound
                            </CustomText>
                          </TouchableOpacity>
                        </View>
                      </View>
                    </View>
                    <View>
                      {/* <Ruler
                    style={{
                      borderRadius: 10,
                      elevation: 3,
                      alignSelf: "center",
                      marginTop: 15,
                    }}
                    width={350}
                    height={80}
                    vertical={false}
                    //onChangeValue={(weightValue) => alert(weightValue)}
                    minimum={0}
                    maximum={100}
                    segmentWidth={2}
                    segmentSpacing={20}
                    indicatorColor="#FF0000"
                    indicatorWidth={100}
                    indicatorHeight={40}
                    indicatorBottom={20}
                    step={10}
                    stepColor="#333333"
                    stepHeight={40}
                    normalColor="#999999"
                    normalHeight={20}
                    backgroundColor="#FFFFFF"
                    numberFontFamily="System"
                    numberSize={30}
                    numberColor="#000000"
                    unit="kg"
                    unitBottom={20}
                    unitFontFamily="System"
                    unitColor="#888888"
                    unitSize={16}
                    
                  /> */}
                      {/* <CustomText  size={40}
                      type="ArabicRegular"
                      style={styles.subTitleText} style={{alignSelf:'center'}}>{weightState} {weightUnit}</CustomText> */}
                      <TextInput
                        style={{ width: "90%", alignSelf: "center" }}
                        label="Enter your weight"
                        value={weightState}
                        mode="outlined"
                        keyboardType="number-pad"
                        secureTextEntry={false}
                        returnKeyType="done"
                        onChangeText={(text) => setWeightState(text)}
                      />
                    </View>
                  </View>
                  <TouchableOpacity
                    style={styles.buttonStyle}
                    onPress={() => calculate()}
                  >
                    <Text style={styles.buttonTextStyle}>Calculate</Text>
                  </TouchableOpacity>
                  <BottomSheet
                    visible={visible}
                    //setting the visibility state of the bottom shee
                    onBackButtonPress={toggleBottomNavigationView}
                    //Toggling the visibility state
                    onBackdropPress={toggleBottomNavigationView}
                    //Toggling the visibility state
                  >
                    {/*Bottom Sheet inner View*/}
                    <View style={styles.bottomNavigationView}>
                      <View
                        style={{
                          flex: 1,
                          flexDirection: "column",
                          justifyContent: "space-between",
                        }}
                      >
                        <CustomText
                          style={{
                            textAlign: "center",
                            padding: 10,
                            fontSize: 20,
                            backgroundColor: "transparent",
                            color: "white",
                          }}
                        >
                          remove space
                        </CustomText>
                        <View
                          style={{
                            //backgroundColor: "yellow",
                            height: "100%",
                          }}
                        >
                          <View
                            style={{
                              // backgroundColor: "pink",
                              margin: 5,
                              height: "90%",
                            }}
                          >
                            <View
                              style={{
                                backgroundColor: "white",
                                height: "10%",
                              }}
                            >
                              {/* <CalendarStrip
                            scrollable={true}
                            style={{
                              height: 120,
                              paddingTop: 0,
                              paddingBottom: 10,
                            }}
                            calendarAnimation={{
                              type: "sequence",
                              duration: 30,
                            }}
                            daySelectionAnimation={{
                              type: "border",
                              duration: 200,
                              borderWidth: 2,
                              borderHighlightColor: "red",
                            }}
                            calendarHeaderStyle={{ color: "black" }}
                            //calendarColor={'#7743CE'}
                            dateNumberStyle={{ color: "black" }}
                            dateNameStyle={{ color: "black" }}
                            highlightDateNumberStyle={{ color: "red" }}
                            highlightDateNameStyle={{ color: "red" }}
                            disabledDateNameStyle={{ color: "grey" }}
                            disabledDateNumberStyle={{ color: "grey" }}
                            iconContainer={{ flex: 0.1 }}
                            onDateSelected={onDateSelected}
                          /> */}
                            </View>

                            <View
                              style={{
                                // backgroundColor: "yellow",
                                height: "75%",
                                margin: 5,
                              }}
                            >
                              <View>
                                <CustomText
                                  size={22}
                                  type="ArabicRegular"
                                  style={styles.subTitleText}
                                  style={{ marginLeft: 10 }}
                                >
                                  How are you feeling?
                                </CustomText>
                              </View>
                              <View
                                style={{
                                  flex: 1,
                                  flexDirection: "row",
                                  width: "100%",
                                  height: "100%", //backgroundColor:'black'
                                }}
                              >
                                <View
                                  style={{
                                    // backgroundColor: "gray",
                                    width: "50%",
                                  }}
                                >
                                  <View
                                    style={{
                                      backgroundColor: "#fc5468",
                                      margin: 15,
                                      height: "70%",
                                      width: "85%",
                                      borderRadius: 10,
                                    }}
                                  >
                                    <CustomText
                                      size={16}
                                      type="ArabicRegular"
                                      style={styles.subTitleText}
                                      style={{
                                        marginLeft: 15,
                                        marginTop: 5,
                                        color: "white",
                                      }}
                                    >
                                      Heart Rate
                                    </CustomText>
                                    <Image
                                      source={require("../assets/images/pulserate.gif")}
                                      style={{
                                        width: "100%",
                                        height: "60%",
                                        resizeMode: "contain",
                                      }}
                                    />
                                    <CustomText
                                      size={18}
                                      type="ArabicRegular"
                                      style={styles.subTitleText}
                                      style={{ marginLeft: 15, color: "white" }}
                                    >
                                      {heartRateValue} bpm
                                    </CustomText>
                                  </View>
                                  <View
                                    style={{
                                      backgroundColor: "#2fdbeb",
                                      margin: 15,
                                      height: "0%",
                                      width: "85%",
                                      borderRadius: 10,
                                    }}
                                  >
                                    <CustomText
                                      size={16}
                                      type="ArabicRegular"
                                      style={styles.subTitleText}
                                      style={{
                                        marginLeft: 15,
                                        marginTop: 5,
                                        color: "white",
                                      }}
                                    >
                                      Water
                                    </CustomText>
                                    <Image
                                      source={require("../assets/images/wave.gif")}
                                      style={{
                                        width: "100%",
                                        height: "50%",
                                        resizeMode: "contain",
                                      }}
                                    />
                                    <CustomText
                                      size={18}
                                      type="ArabicRegular"
                                      style={styles.subTitleText}
                                      style={{
                                        marginLeft: 15,
                                        marginTop: -5,
                                        color: "white",
                                      }}
                                    >
                                      7 cups
                                    </CustomText>
                                  </View>
                                </View>
                                <View
                                  style={{
                                    backgroundColor: "white",
                                    width: "50%",
                                  }}
                                >
                                  <View
                                    //fba541
                                    style={{
                                      backgroundColor: "#fba541",
                                      margin: 0,
                                      height: "0%",
                                      width: "85%",
                                      borderRadius: 10,
                                    }}
                                  >
                                    <CustomText
                                      size={16}
                                      type="ArabicRegular"
                                      style={styles.subTitleText}
                                      style={{
                                        marginLeft: 15,
                                        marginTop: 5,
                                        color: "white",
                                      }}
                                    >
                                      Sleep
                                    </CustomText>
                                    <Image
                                      source={require("../assets/images/wave.gif")}
                                      style={{
                                        width: "100%",
                                        height: "50%",
                                        resizeMode: "contain",
                                      }}
                                    />
                                    <CustomText
                                      size={18}
                                      type="ArabicRegular"
                                      style={styles.subTitleText}
                                      style={{
                                        marginLeft: 15,
                                        marginTop: -5,
                                        color: "white",
                                      }}
                                    >
                                      7 hours
                                    </CustomText>
                                  </View>
                                  <View
                                    style={{
                                      backgroundColor: "#346adb",
                                      margin: 15,
                                      height: "70%",
                                      width: "85%",
                                      borderRadius: 10,
                                    }}
                                  >
                                    {/* <View style={{flexDirection:'row'}}>
                                <Image
                                  source={require("../assets/images/health.png")}
                                  style={{
                                    width: 25,
                                    height: 25,
                                    resizeMode: "contain",
                                    marginLeft:8,
                                    marginTop:8
                                  }}
                                /> */}
                                    <CustomText
                                      size={16}
                                      type="ArabicRegular"
                                      style={styles.subTitleText}
                                      style={{
                                        marginLeft: 10,
                                        marginTop: 5,
                                        color: "white",
                                      }}
                                    >
                                      Steps
                                    </CustomText>
                                    {/* </View> */}
                                    <View
                                      style={{
                                        alignItems: "center",
                                        margin: 5,
                                      }}
                                    >
                                      <ProgressCircle
                                        percent={70}
                                        radius={55}
                                        borderWidth={7}
                                        color="cyan"
                                        shadowColor="purple"
                                        bgColor="#346adb"
                                      >
                                        <CustomText
                                          size={18}
                                          type="ArabicRegular"
                                          style={styles.subTitleText}
                                          style={{ color: "white" }}
                                        >
                                          {stepCountState}
                                        </CustomText>
                                      </ProgressCircle>
                                    </View>
                                    <CustomText
                                      size={18}
                                      type="ArabicRegular"
                                      style={styles.subTitleText}
                                      style={{ marginLeft: 15, color: "white" }}
                                    >
                                      {stepCountValue} mi
                                    </CustomText>
                                  </View>
                                </View>
                              </View>
                            </View>
                          </View>
                        </View>
                      </View>
                    </View>
                  </BottomSheet>
                </View>
              </View>
            </View>
          </KeyboardAvoidingView>
        </ScrollView>
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
  profileContainer: {
    backgroundColor: "transparent", //transparent
    height: "100%",
  },
  profileInnerContainer: {
    backgroundColor: "white",
    height: "100%",
    marginTop: 50,
    // borderWidth: 2,
    // borderColor: "blue",
    borderRadius: 50,
    shadowColor: "gray",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.9,
    shadowRadius: 5,
  },
  profileContentContainer: {
    backgroundColor: "white",
    margin: 5,
    height: "80%",
  },
  tabsContainerStyle: {
    //custom styles
    height: "100%",
  },
  activeTabStyle: {
    backgroundColor: "red",
    borderRadius: 25,
  },
  tabStyle: {
    borderColor: "transparent",
    borderWidth: 0.0,
  },
  dobContainer: {
    borderWidth: 1,
    padding: 10,
    borderColor: "#3F71DE",
    marginLeft: 20,
    borderRadius: 8,
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    marginRight: 20,
    height: 60,
  },

  itemContainer: {
    width: "90%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: 20,
    marginTop: 20,
    marginBottom: 10,
    // borderColor: "red",
    // borderWidth: 3,
  },
  buttonStyle: {
    // flex: 1,
    backgroundColor: "red",
    marginLeft: 2,
    marginRight: 2,
    borderRadius: 5,
    height: 56,
    width: "80%",
    alignSelf: "center",
    // borderColor:'blue',
    // borderWidth:2,
    marginTop: 20,
    shadowColor: "gray",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.9,
    shadowRadius: 3,
  },
  buttonTextStyle: {
    alignSelf: "center",
    textAlign: "center",
    color: "white",
    fontSize: 22,
    fontWeight: "600",
    paddingTop: 6,

    fontFamily: "CoHeadlineW23-ArabicRegular",
    fontWeight: "bold",
  },
  bottomNavigationView: {
    backgroundColor: "#fff",
    width: "100%",
    height: "50%",
    // justifyContent: 'center',
    // alignItems: 'center',
    borderRadius: 50,
    shadowColor: "gray",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.9,
    shadowRadius: 5,
  },
});
