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
import { BottomSheet } from "react-native-btr";
import ProgressCircle from "react-native-progress-circle";

import SegmentedControlTab from "react-native-segmented-control-tab";

import CheckBox from "react-native-check-box";
import { id, tr } from "date-fns/locale";
export default function Vacation({ route, navigation }) {
  const { titleText } = route.params;
  console.log("data ===>" + titleText);

  const [visible, setVisible] = useState(false);

  const [isModalVisible, setModalVisible] = useState(false);

  // const [checked, setChecked] = useState({"Annual Leave":false,"Privilege Leave":false,"Casual Leave":false,"Sick Leave":false,"Maternity Leave":false,"Emergency Leave":false});

  // this.state = {
  //   isChecked:true
  // }

  const [annChecked, setAnnChecked] = useState(false);
  const [privChecked, setPrivhecked] = useState(false);
  const [casChecked, setCasChecked] = useState(false);
  const [sickChecked, setSickChecked] = useState(false);
  const [matChecked, setMatChecked] = useState(false);
  const [emerChecked, setEmerChecked] = useState(false);

  const navigateToAddVacation = () => {
    console.log("ADD VACATION");
    navigation.navigate("AddVacation");
  };
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  console.log("is MODAL " + isModalVisible);


   if (!isModalVisible)
    {
      setAnnChecked(false);
      setPrivhecked(false);
      setCasChecked(false);
      setSickChecked(false);
      setMatChecked(false);
      setEmerChecked(false);
      
    }
  console.log(annChecked);
  console.log(privChecked);
  console.log(casChecked);
  console.log(sickChecked);
  console.log(matChecked);
  console.log(emerChecked);

  };
  const toggleBottomNavigationView = () => {
    //Toggling the visibility state of the bottom sheet
    setVisible(!visible);
  };
  const openBalancedLeavesView = () => {
    console.log("Balanced Leaves");
    toggleBottomNavigationView();
  };
  const [customStyleIndex, setCustomStyleIndex] = useState(0);

  const handleCustomIndexSelect = (index) => {
    // Tab selection for custom Tab Selection
    setCustomStyleIndex(index);
  };

  // const LEAVE_DATA = [
  //   {
  //     leavetype2: "Annual Leave",
  //   },
  //   {
  //     leavetype2: "Privilege Leave",
  //   },
  //   {
  //     leavetype2: "Casual Leave",
  //   },
  //   {
  //     leavetype2: "Sick Leave",
  //   },
  //   {
  //     leavetype2: "Maternity Leave",
  //   },
  //   {
  //     leavetype2: "Emergency Leave",
  //   },
  // ];

  // const Item2 = ({ leavetype2 }) => {
  //   return (
  //     <View>
  //       <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
  //         <CustomText size={18}
  //             type="ArabicRegular"
  //             style={styles.subTitleText} style={{marginLeft: 8, margin: 6}}> {leavetype2} </CustomText>
  //       </View>
  //       <CheckBox
  //         style={{ flex: 1, padding: 8 }}
  //         onClick={() => {
  //           setIsChecked(!isChecked);
         
  //         }}
  //         isChecked={isChecked}
  //         leftText={
  //           <CustomText
  //             size={17}
  //             type="ArabicRegular"
  //             style={styles.subTitleText}
  //             style={{ marginLeft: 8, margin: 6 }}
  //           >
  //             {" "}
  //             {leavetype2}{" "}
  //           </CustomText>
  //         }
  //         checkedCheckBoxColor="#3F71DE"
  //         uncheckedCheckBoxColor="#3F71DE"
  //       />
  //     </View>
  //   );
  // };
  // const renderItem2 = ({ item, leavetype2 }) => (
  //   <Item2 leavetype2={item.leavetype2} />
  // );

  const DATA = [
    {
      Applied_date: "Applied Date ( 12 April 2021)",
      leaveType: "Casual",
      day: "1 Day",
      date: "Wed, 16 Feb 2021",
      status: "Awaiting",
    },
    {
      Applied_date: "Applied Date ( 22 March 2021)",
      leaveType: "Emergency",
      day: "3 Days",
      date: "28 Mar- 30 Mar 2021",
      status: "Approved",
    },
    {
      Applied_date: "Applied Date ( 12 Feb 2021)",
      leaveType: "sick",
      day: "4 Days",
      date: "22 Apr - 25 Apr 2021",
      status: "Approved",
    },
    {
      Applied_date: "Applied Date ( 12 Feb 2021)",
      leaveType: "Maternity Leave",
      day: "1 Day",
      date: "Wed, 16 Apr 2021",
      status: "Decline",
    },
    {
      Applied_date: "Applied Date ( 12 Feb 2021)",
      leaveType: "Casual",
      day: "6 Days",
      date: "Wed, 16 Feb 2021",
      status: "Decline",
    },
    {
      Applied_date: "Applied Date ( 12 Feb 2021)",
      leaveType: "Casual",
      day: "1 Day",
      date: "Wed, 16 Feb 2021",
      status: "Decline",
    },
    {
      Applied_date: "Applied Date ( 12 Feb 2021)",
      leaveType: "Casual",
      day: "1 Day",
      date: "Wed, 16 Feb 2021",
      status: "Approved",
    },
    {
      Applied_date: "Applied Date ( 12 Feb 2021)",
      leaveType: "Casual",
      day: "1 Day",
      date: "Wed, 16 Feb 2021",
      status: "Approved",
    },
    {
      Applied_date: "Applied Date ( 12 Feb 2021)",
      leaveType: "Casual",
      day: "1 Day",
      date: "Wed, 16 Feb 2021",
      status: "Decline",
    },
    {
      Applied_date: "Applied Date ( 12 Feb 2021)",
      leaveType: "Casual",
      day: "1 Day",
      date: "Wed, 16 Feb 2021",
      status: "Decline",
    },
    {
      Applied_date: "Applied Date ( 12 Feb 2021)",
      leaveType: "Casual",
      day: "1 Day",
      date: "Wed, 16 Feb 2021",
      status: "Decline",
    },
    {
      Applied_date: "Applied Date ( 12 Feb 2021)",
      leaveType: "Casual",
      day: "1 Day",
      date: "Wed, 16 Feb 2021",
      status: "Decline",
    },
  ];
  const Item = ({ leaveType, day, date, status, Applied_date }) => {
    return (
      <View style={styles.item}>
        <CustomText
          size={18}
          type="ArabicRegular"
          style={styles.subTitleText}
          style={{ marginBottom: 10, color: "gray" }}
        >
          {Applied_date}
        </CustomText>
        <View style={styles.v2}>
          <View style={{ flexDirection: "row" }}>
            <CustomText
              size={18}
              type="ArabicRegular"
              style={styles.subTitleText}
              style={{ color: "orange", marginLeft: 12 }}
            >
              {leaveType}
            </CustomText>
            <View style={styles.dayContainer}>
              <CustomText
                size={12}
                type="ArabicRegular"
                style={styles.subTitleText}
                style={{
                  marginTop: -2,
                  position: "relative",
                  textAlign: "center",
                  color: "black",
                }}
              >
                {day}
              </CustomText>
            </View>
          </View>
          <View style={{ flexDirection: "row" }}>
            <View style={{ width: "75%" }}>
              <CustomText
                size={20}
                type="ArabicRegular"
                style={styles.subTitleText}
                style={{ marginTop: 2, marginLeft: 12 }}
              >
                {date}
              </CustomText>
            </View>
            <View style={styles.statusContainer}>
              <CustomText
                size={16}
                type="ArabicRegular"
                style={styles.subTitleText}
                style={{ alignSelf: "center", color: "orange", marginTop: 0 }}
              >
                {status}
              </CustomText>
            </View>
          </View>
        </View>
      </View>
    );
  };
  const renderItem = ({ item, leaveType, day, date, status, Applied_dat }) => (
    <Item
      leaveType={item.leaveType}
      day={item.day}
      date={item.date}
      status={item.status}
      Applied_date={item.Applied_date}
    />
  );
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
            {titleText}
          </CustomText>

          <Image
            style={{ width: 30, height: 30, marginStart: "-20%" }}
            source={require("../assets/images/vacation.png")}
          />
          <TouchableOpacity onPress={() => navigateToAddVacation()}>
            <Image
              style={{ width: 40, height: 40, marginLeft: 50 }}
              source={require("../assets/images/add.png")}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.filterContainer}>
          <View style={styles.filterInnerView}>
            <View style={styles.segmentView}>
              <SegmentedControlTab
                values={["All", "Annual Leaves"]}
                selectedIndex={customStyleIndex}
                onTabPress={handleCustomIndexSelect}
                borderRadius={10}
                tabsContainerStyle={{
                  height: "100%",
                  backgroundColor: "#D3D3D3",
                  borderRadius: 10,
                }}
                tabStyle={{
                  backgroundColor: "#D3D3D3",
                  borderWidth: 0,
                  borderColor: "transparent",
                }}
                activeTabStyle={{
                  backgroundColor: "white",
                  borderRadius: 10,
                  margin: 1,
                }}
                tabTextStyle={{ color: "#444444", fontWeight: "bold" }}
                activeTabTextStyle={{ color: "#888888" }}
              />
              {/* {customStyleIndex === 0 && (
          <Text style={styles.tabContent}> Tab one</Text>
        )}
        {customStyleIndex === 1 && (
          <Text style={styles.tabContent}> Tab two</Text>
        )} */}
            </View>
            <View style={styles.filterView}>
              <TouchableOpacity onPress={toggleModal}>
                <Image
                  style={{
                    width: 30,
                    height: 30,
                    alignSelf: "center",
                    margin: 10,
                  }}
                  source={require("../assets/images/filterIcon.png")}
                />
              </TouchableOpacity>
              <Modal isVisible={isModalVisible}>
                <View style={styles.popUpContainer}>
                  <View style={{ flexDirection: "row" }}>
                    <CustomText
                      size={23}
                      type="ArabicRegular"
                      style={styles.popUpTitleText}
                      style={{ color: "black", marginLeft: 10 }}
                    >
                      Select Leaves
                    </CustomText>
                  </View>

                  <View style={styles.FlatListFilter}>
                    {/* <FlatList
                      data={LEAVE_DATA}
                      renderItem={renderItem2}
                      scrollEnabled={false}
                    /> */}
                    <View style={{ height: "16%", margin: 1 }}>
                      <CheckBox
                        style={{ flex: 1, padding: 8 }}
                        onClick={() => {
                          setAnnChecked(!annChecked);
                        }}
                        isChecked={annChecked}
                        leftText={
                          <CustomText
                            size={17}
                            type="ArabicRegular"
                            style={styles.subTitleText}
                            style={{ marginLeft: 8, margin: 6 }}
                          >
                            Annual Leave
                          </CustomText>
                        }
                        checkedCheckBoxColor="#3F71DE"
                        uncheckedCheckBoxColor="#3F71DE"
                      />
                    </View>
                    <View style={{ height: "16%", margin: 1 }}>
                      <CheckBox
                        style={{ flex: 1, padding: 8 }}
                        onClick={() => {
                          setPrivhecked(!privChecked);
                        }}
                        isChecked={privChecked}
                        leftText={
                          <CustomText
                            size={17}
                            type="ArabicRegular"
                            style={styles.subTitleText}
                            style={{ marginLeft: 8, margin: 6 }}
                          >
                            Privilege Leave
                          </CustomText>
                        }
                        checkedCheckBoxColor="#3F71DE"
                        uncheckedCheckBoxColor="#3F71DE"
                      />
                    </View>
                    <View style={{ height: "16%", margin: 1 }}>
                      <CheckBox
                        style={{ flex: 1, padding: 8 }}
                        onClick={() => {
                          setCasChecked(!casChecked);
                        }}
                        isChecked={casChecked}
                        leftText={
                          <CustomText
                            size={17}
                            type="ArabicRegular"
                            style={styles.subTitleText}
                            style={{ marginLeft: 8, margin: 6 }}
                          >
                            Casual Leave
                          </CustomText>
                        }
                        checkedCheckBoxColor="#3F71DE"
                        uncheckedCheckBoxColor="#3F71DE"
                      />
                    </View>
                    <View style={{ height: "16%", margin: 1 }}>
                      <CheckBox
                        style={{ flex: 1, padding: 8 }}
                        onClick={() => {
                          setSickChecked(!sickChecked);
                        }}
                        isChecked={sickChecked}
                        leftText={
                          <CustomText
                            size={17}
                            type="ArabicRegular"
                            style={styles.subTitleText}
                            style={{ marginLeft: 8, margin: 6 }}
                          >
                            Sick Leave
                          </CustomText>
                        }
                        checkedCheckBoxColor="#3F71DE"
                        uncheckedCheckBoxColor="#3F71DE"
                      />
                    </View>
                    <View style={{ height: "16%", margin: 1 }}>
                      <CheckBox
                        style={{ flex: 1, padding: 8 }}
                        onClick={() => {
                          setMatChecked(!matChecked);
                        }}
                        isChecked={matChecked}
                        leftText={
                          <CustomText
                            size={17}
                            type="ArabicRegular"
                            style={styles.subTitleText}
                            style={{ marginLeft: 8, margin: 6 }}
                          >
                            Maternity Leave
                          </CustomText>
                        }
                        checkedCheckBoxColor="#3F71DE"
                        uncheckedCheckBoxColor="#3F71DE"
                      />
                    </View>
                    <View style={{ height: "16%", margin: 1 }}>
                      <CheckBox
                        style={{ flex: 1, padding: 8 }}
                        onClick={() => {
                          setEmerChecked(!emerChecked);
                        }}
                        isChecked={emerChecked}
                        leftText={
                          <CustomText
                            size={17}
                            type="ArabicRegular"
                            style={styles.subTitleText}
                            style={{ marginLeft: 8, margin: 6 }}
                          >
                            Emergency Leave
                          </CustomText>
                        }
                        checkedCheckBoxColor="#3F71DE"
                        uncheckedCheckBoxColor="#3F71DE"
                      />
                    </View>
                  </View>

                  <TouchableOpacity
                    style={styles.popUpButtonStyle}
                    onPress={toggleModal}
                  >
                    <Text style={styles.popUpButtonTextStyle}>Ok</Text>
                  </TouchableOpacity>
                </View>
              </Modal>
            </View>
          </View>
        </View>
        <View style={styles.dataListContainer}>
          <View style={styles.FlatList}>
            <FlatList
              data={DATA}
              renderItem={renderItem}
              // keyExtractor={item => item.id}
            />
          </View>
        </View>
        <View style={styles.balanceLeaveBtnView}>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => openBalancedLeavesView()}
          >
            {/* <Image
              style={{ width: 25, height: 25, marginLeft: 4 }}
              source={require("../assets/images/upArrow.png")}
            /> */}
            <CustomText
              size={20}
              type="ArabicRegular"
              style={styles.buttonTextStyle}
            >
              {"\u21E7"} Balanced Leaves
            </CustomText>
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
              {/* <ImageBackground
        source={require("../assets/images/home.png")}
        style={{width:"100%", height:"100%", resizeMode:"contain"}}
      > */}
              <View
                style={{
                  backgroundColor: "transparent",
                  height: "80%",
                  marginTop: 50,
                  width: "100%",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <View
                  style={{
                    backgroundColor: "transparent",
                    width: "47%",
                    height: "90%",
                    margin: 5,
                  }}
                >
                  <View
                    style={{
                      alignItems: "center",
                      backgroundColor: "transparent",
                      marginTop: 45,
                    }}
                  >
                    <ProgressCircle
                      percent={50}
                      radius={90}
                      borderWidth={9}
                      color="red"
                      shadowColor="#D3D3D3"
                      bgColor="white"
                    >
                      <CustomText
                        size={45}
                        type="ArabicRegular"
                        style={styles.subTitleText}
                        style={{ color: "black", textAlign: "center" }}
                      >
                        {"14"}
                      </CustomText>
                      <CustomText
                        size={15}
                        type="ArabicRegular"
                        style={styles.subTitleText}
                        style={{
                          color: "gray",
                          textAlign: "center",
                          marginTop: -8,
                        }}
                      >
                        {"Leaves Balance"}
                      </CustomText>
                    </ProgressCircle>
                  </View>
                </View>
                <View
                  style={{
                    backgroundColor: "transparent",
                    width: "47%",
                    height: "90%",
                    margin: 5,
                  }}
                >
                  <View
                    style={{
                      backgroundColor: "#D3D3D3",
                      height: "15%",
                      width: "50%",
                      margin: 10,
                      borderRadius: 10,
                      alignSelf: "center",
                    }}
                  >
                    <TouchableOpacity onPress={() => openBalancedLeavesView()}>
                      <CustomText
                        size={16}
                        type="ArabicRegular"
                        style={styles.subTitleText}
                        style={{
                          alignSelf: "center",
                          paddingTop: 5,
                          color: "white",
                        }}
                      >
                        Hide
                      </CustomText>
                    </TouchableOpacity>
                  </View>
                  <View
                    style={{
                      backgroundColor: "transparent",
                      height: "30%",
                      margin: 10,
                    }}
                  >
                    <CustomText
                      size={14}
                      type="ArabicRegular"
                      style={styles.subTitleText}
                      style={{ marginLeft: 5, color: "gray" }}
                    >
                      {"\u2b24"} Total leave accured
                    </CustomText>

                    <CustomText
                      size={26}
                      type="ArabicRegular"
                      style={styles.subTitleText}
                    >
                      20
                    </CustomText>
                  </View>
                  <View
                    style={{
                      backgroundColor: "transparent",
                      height: "30%",
                      margin: 10,
                    }}
                  >
                    <CustomText
                      size={14}
                      type="ArabicRegular"
                      style={styles.subTitleText}
                      style={{ marginLeft: 5, color: "red" }}
                    >
                      {"\u2b24"} Leaves used
                    </CustomText>
                    <CustomText
                      size={26}
                      type="ArabicRegular"
                      style={styles.subTitleText}
                    >
                      06
                    </CustomText>
                  </View>
                </View>
              </View>
              {/* / </ImageBackground> */}
            </View>
          </BottomSheet>
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
  filterContainer: {
    backgroundColor: "transparent",
    height: "7%",
    marginLeft: 8,
  },
  dataListContainer: {
    backgroundColor: "transparent",
    height: "75%",
  },
  filterInnerView: {
    backgroundColor: "transparent",
    height: "80%",
    margin: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  filterView: {
    width: "20%",
    height: "100%",
    backgroundColor: "transparent",
  },
  segmentView: {
    width: "80%",
    height: "100%",
    backgroundColor: "transparent",
    borderRadius: 10,
  },
  balanceLeaveBtnView: {
    height: "6%",
    //backgroundColor: "brown",
    marginTop: 3,
  },
  buttonStyle: {
    // flex: 1,
    backgroundColor: "red",

    alignSelf: "center",
    borderRadius: 20,
    height: 40,
    width: 200,
  },
  buttonTextStyle: {
    alignSelf: "center",
    textAlign: "center",
    color: "white",
    fontSize: 20,
    fontWeight: "600",
    paddingTop: 0,
    //paddingBottom: 20,
    fontFamily: "CoHeadlineW23-ArabicRegular",
    fontWeight: "bold",
  },
  bottomNavigationView: {
    backgroundColor: "#fff",
    width: "100%",
    height: "40%",
    // justifyContent: 'center',
    // alignItems: 'center',
    borderRadius: 50,
    shadowColor: "gray",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.9,
    shadowRadius: 5,
  },
  FlatList: {
    borderRadius: 8,
    width: "100%",
    marginTop: 6,

    // marginRight:8,
    // marginLeft:8,
  },
  item: {
    backgroundColor: "transparent",
    padding: 0,
    marginVertical: 8,
    marginHorizontal: 18,
  },
  v2: {
    backgroundColor: "#FFF",
    width: "100%",
    height: 90,
    padding: 10,
    borderWidth: 1,
    borderColor: "#D3D3D3",
    borderRadius: 10,
    shadowColor: "gray",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 1,
  },
  statusContainer: {
    width: 100,
    height: 30,
    borderRadius: 5,

    marginLeft: -20,

    marginTop: -15,
    backgroundColor: "pink",
  },
  dayContainer: {
    borderRadius: 10,
    backgroundColor: "#D3D3D3",
    marginLeft: 20,
    marginTop: 6,
    width: 60,
    height: 20,
  },
  popUpContainer: {
    backgroundColor: "white",
    borderRadius: 20,
    height: 400,
    width: "100%",
    padding: 10,
  },
  popUpTitleText: {
    fontWeight: "bold",
  },

  FlatListFilter: {
    // backgroundColor: "cyan",
    height: "70%",
  },
  popUpButtonStyle: {
    // flex: 1,
    backgroundColor: "red",
    alignSelf: "center",
    borderRadius: 5,
    height: 50,
    width: "40%",
    margin: 15,
  },
  popUpButtonTextStyle: {
    alignSelf: "center",
    textAlign: "center",
    color: "white",
    fontSize: 18,
    paddingTop: 8,
    fontFamily: "CoHeadlineW23-ArabicRegular",
    fontWeight: "bold",
  },
});
