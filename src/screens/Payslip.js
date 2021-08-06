import React, { useState,useEffect } from "react";
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
} from "react-native";
import { TextInput, Button, Divider } from "react-native-paper";
import { Input, Icon, useColorModeValue, Box } from "native-base";

import { CustomText } from "../constants/Text";
import Toast from "react-native-simple-toast";
import Modal from "react-native-modal";

import CalendarPicker from "react-native-calendar-picker";
import { format } from "date-fns";

import { Buffer } from 'buffer';
//import XMLParser from 'react-xml-parser';
//import {parseString} from 'xml2js'
//const parseString = require('xml2js').parseString;
import { parse } from 'fast-xml-parser';
export default function Payslip({ route, navigation }) {
  const { titleText } = route.params;
  console.log("data ===>" + titleText);

  const [isModalVisible, setModalVisible] = useState(false);

  const [isCalendarModalVisible, setCalendarModalVisible] = useState(false);
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const baseUrl = 'https://api23preview.sapsf.com/odata/v2/EmployeePayrollRunResults';
  
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
    console.log("is MODAL " + isModalVisible);
    // if (isModalVisible)
    // {
    //   navigation.navigate("Otp", {
    //     userEmail: email,
    //   });
    // }
  };
  const toggleCalendarModal = () => {
    setCalendarModalVisible(!isCalendarModalVisible);
    console.log("is Calendar MODAL " + isCalendarModalVisible);
  };
  const onFromDateChange = (date) => {
    
    
    setFromDate(date)

    var date = new Date(date);
    var formattedDate = format(date, "MMMM yyyy");
    console.log("FROM DATE == "+formattedDate);

   // console.log("FROM DATE == "+format(date, "MMM YYY").);
  };
  const onToDateChange = (date) => {
  
    setToDate(date)
    var date = new Date(date);
    var formattedDate = format(date, "MMM yyyy");
    console.log("FROM DATE == "+formattedDate);
    //console.log("TO DATE == "+date);
  };



const ShowCurrentDate=()=>{
  let montArr = ['January','Ferbruary','March', 'April', 'May', 'June', 'July','August','September','October','November','December'];
  var date = new Date().getDate();
  var month = new Date().getMonth();
  var year = new Date().getFullYear();
//var fullDate = new Date()

  Alert.alert(date + '-' + montArr[month] + '-' + year);

  // var formattedDate = format(month, "MMMM");
  //   //console.log("FFFFFF "+formattedDate);
  // Alert.alert(formattedDate + '');

 }
  const data = [
    {
      id:"0",
      date: "1 Apr 2021-12:13 pm",
      price: "2000 SAR",
      month: "April",
    },
    {
      id:"1",
      date: "1 Mar 2021-12:13 pm",
      price: "3000 SAR",
      month: "March",
    },
    {
      id:"2",
      date: "1 Feb 2021-12:13 pm",
      price: "4000 SAR",
      month: "February",
    },
    {
      id:"3",
      date: "1 Jan 2021-12:13 pm",
      price: "5000 SAR",
      month: "January",
    },
    {
      id:"4",
      date: "1 Dec 2021-12:13 pm",
      price: "6000 SAR",
      month: "December",
    },
    {
      id:"5",
      date: "1 Nov 2021-12:13 pm",
      price: "7000 SAR",
      month: "November",
    },
    {
      id:"6",
      date: "1 Oct 2021-2:13 pm",
      price: "8000 SAR",
      month: "October",
    },
    {
      id:"7",
      date: "1 Sep 2021-12:13 pm",
      price: "9000 SAR",
      month: "September",
    },
    {
      id:"8",
      date: "1 Aug 2021-12:13 pm",
      price: "10000 SAR",
      month: "August",
    },
    {
      id:"9",
      date: "1 Jul 2021-12:13 pm",
      price: "11000 SAR",
      month: "July",
    },
    {
      id:"10",
      date: "1 Jun 2021-12:13 pm",
      price: "12000 SAR",
      month: "June",
    },
    {
      id:"11",
      date: "1 May 2021-12:13 pm",
      price: "13000 SAR",
      month: "May",
    },
  ];

  const Item = ({ id, price, date, month }) => {
    return (
      <View style={styles.item}>
        <CustomText
          size={22}
          type="ArabicRegular"
          style={styles.subTitleText}
          style={{ color: "gray" }}
        >
          {month}
        </CustomText>

        <View style={styles.v2}>
          <TouchableOpacity onPress={toggleModal}>
            <View style={{ flexDirection: "row", width: "75%", marginLeft: 5 }}>
              <CustomText
                size={20}
                type="ArabicRegular"
                style={styles.subTitleLowerText}
              >
                {String(date).split("-")[0]}
              </CustomText>
              <CustomText
                size={18}
                type="ArabicRegular"
                style={styles.subTitleLowerText}
                style={{ color: "gray", margin: 2 }}
              >
                {"  " + String(date).split("-")[1]}
              </CustomText>
              <TouchableOpacity onPress={downloadFile}>
                <Image
                  style={{
                    width: 70,
                    height: 70,
                    position: "absolute",
                    top: -40,
                    right: -180,
                    shadowColor: "gray",
                    shadowOffset: { width: 0, height: 1 },
                    shadowOpacity: 0.9,
                    shadowRadius: 5,
                  }}
                  source={require("../assets/images/downloadIcon.png")}
                />
              </TouchableOpacity>
              {/* <CustomText>{String(date).slice(0,11)}</CustomText> */}
              {/* <CustomText style={{lineHeight:14,fontSize:10,position:'relative',margin:10}}>{String(date).slice(12,20)}</CustomText> */}
            </View>

            <View style={{ flexDirection: "row" }}>
              <View style={{ flexDirection: "row", width: "75%" }}>
                {/* <CustomText>{String(price).slice(0,4)}</CustomText>
            <CustomText style={{lineHeight:0, fontSize:10}}>{String(price).slice(4,9)}</CustomText> */}
                <CustomText
                  size={22}
                  type="ArabicRegular"
                  style={styles.subTitleLowerText}
                  style={{ margin: 5, color: "#3F71DE" }}
                >
                  {String(price).split(" ")[0]}
                </CustomText>
                <CustomText
                  size={15}
                  type="ArabicRegular"
                  style={styles.subTitleLowerText}
                  style={{ margin: 14, marginLeft: 0, color: "black" }}
                >
                  {String(price).split(" ")[1]}
                </CustomText>
              </View>

              <CustomText
                size={16}
                type="ArabicRegular"
                style={styles.subTitleLowerText}
                style={{ position: "relative" }}
                style={{ color: "#3F71DE" }}
              >
                View Detail
              </CustomText>
            </View>
          </TouchableOpacity>
          <Modal isVisible={isModalVisible}>
            <View style={styles.popUpContainer}>
              <View style={{ flexDirection: "row" }}>
                <CustomText
                  size={21}
                  type="ArabicRegular"
                  style={styles.popUpTitleText}
                  style={{ color: "red", marginLeft: 8 }}
                >
                  Payslip Details{id}
                </CustomText>
                <CustomText
                  size={21}
                  type="ArabicRegular"
                  style={styles.popUpTitleText}
                >
                  {" (" + month + " 2021)"}
                </CustomText>
              </View>
              <View style={styles.popUpTable}>
                <View style={styles.popUpTableCell}>
                  <CustomText
                    size={17}
                    type="ArabicRegular"
                    style={styles.popUpSubTitleText}
                  >
                    Basic Salary
                  </CustomText>
                  <CustomText
                    size={17}
                    type="ArabicRegular"
                    style={styles.popUpSubTitleText}
                  >
                    12000
                  </CustomText>
                </View>
                <Divider />
                <View style={styles.popUpTableCell}>
                  <CustomText
                    size={17}
                    type="ArabicRegular"
                    style={styles.popUpSubTitleText}
                  >
                    House Allowence
                  </CustomText>
                  <CustomText
                    size={17}
                    type="ArabicRegular"
                    style={styles.popUpSubTitleText}
                  >
                    2500
                  </CustomText>
                </View>
                <Divider />
                <View style={styles.popUpTableCell}>
                  <CustomText
                    size={17}
                    type="ArabicRegular"
                    style={styles.popUpSubTitleText}
                  >
                    Travel Allowence
                  </CustomText>
                  <CustomText
                    size={17}
                    type="ArabicRegular"
                    style={styles.popUpSubTitleText}
                  >
                    3000
                  </CustomText>
                </View>
                <Divider />
                <View style={styles.popUpTableCell}>
                  <CustomText
                    size={17}
                    type="ArabicRegular"
                    style={styles.popUpSubTitleText}
                  >
                    Medical Insurance
                  </CustomText>
                  <CustomText
                    size={17}
                    type="ArabicRegular"
                    style={styles.popUpSubTitleText}
                  >
                    500
                  </CustomText>
                </View>
                <Divider />
              </View>
              <View style={styles.popUpBottomView}>
                <TouchableOpacity onPress={downloadFile}>
                  <Image
                    style={{
                      width: 55,
                      height: 55,
                      position: "relative",
                      marginTop: 2.5,
                      shadowColor: "gray",
                      shadowOffset: { width: 0, height: 1 },
                      shadowOpacity: 0.9,
                      shadowRadius: 2,
                      marginLeft:-15,
                    }}
                    source={require("../assets/images/downloadIcon.png")}
                  />
                </TouchableOpacity>
                <CustomText
                  size={15}
                  type="ArabicRegular"
                  style={styles.popUpTitleTextBottomView}
                  style={{ position: "relative" }}
                >
                  Download Slip
                </CustomText>
                <CustomText
                  size={16}
                  type="ArabicRegular"
                  style={styles.popUpTitleTextBottomView}
                  style={{ position: "relative" }}
                >
                  Total :
                </CustomText>
                <CustomText
                  size={24}
                  type="ArabicRegular"
                  style={styles.popUpTitleTextBottomView}
                  style={{
                    position: "relative",
                    color: "#3F71DE",
                    marginTop: -6,
                  }}
                >
                  2000
                </CustomText>
                <CustomText
                  size={16}
                  type="ArabicRegular"
                  style={styles.popUpTitleTextBottomView}
                  style={{ position: "relative" }}
                >
                  SAR
                </CustomText>
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
    );
  };

  const renderItem = ({ item , index}) => (
    <Item id={item.id} price={item.price} date={item.date} month={item.month} />
  );
  const openFromDateCalendar = () => {
    console.log("FROM DATE");
    toggleCalendarModal();
  };
  const openToDateCalendar = () => {
    console.log("TO DATE");
    toggleCalendarModal();
  };
  const downloadFile = () => {
    console.log("DOWNLOAD");
    ShowCurrentDate();
  };
  const [title1,setTitle] = useState('');
  const [id1,setId] = useState('');
  const [updatedDate1,setupdatedDate] = useState('');

  // const [values,setValues] = useState({
  //   title1 : "",
  //   id1 : "",
  //   updatedDate1 : "",
  // });

  useEffect(() => {
    // write your code here, it's like componentWillMount
    console.log("HIT API..");
  
  let data = 'SFADMIN@national06T1:Nupco@1234';
  let buff = new Buffer(data);
  let stringToBase64 = buff.toString('base64');
  console.log("BASE64 == >"+ stringToBase64)
    fetch(baseUrl, {
      method: 'GET',
     headers:{
      "Authorization":"Basic "+ stringToBase64,
      "Content-Type":"application/json",
      "x-csrf-token":"Fetch"
    }
  })
 
.then(parseResponseAsText)
.then(logResponse)
.then(parseTextResponse)
    .catch((error) => {console.error(error)});


    
    });

    
    parseTextResponse = (text) => {
      let doc = parse(text);
     
    //   let title = doc.feed.title;
    //   let id = doc.feed.id;
    //   let updated=doc.feed.updated;
    //  setTitle(title)
    //  setId(id)
    //  setupdatedDate(updated)
    // setValues({
    //    title1 : title, id1 : id, updatedDate1 : updated
      
    // })

    const items = doc.feed.entry.map((item, i) => {
      // console.log(item.id);
      // console.log(item.feed.title);
      // console.log(item.feed.updated);
      
      return item;
    });

console.log("ITEMS "+items[0].id);
    //  console.log("Title "+title1);
    //  console.log("Id "+id1);
    //  console.log("UpdateDate "+updatedDate1);
    }
  
    parseResponseAsText = (response) => {
      return response.text();
    }
  
    logResponse = (response) => {
      console.log(response);
      return response;
    }
    
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
            style={{ width: 30, height: 30, marginStart: "-25%" }}
            source={require("../assets/images/payslip.png")}
          />
        </View>

        <View style={styles.dateContainer}>
          <View style={styles.dateInner}>
            <CustomText
              size={16}
              type="ArabicRegular"
              style={styles.subTitleLowerText}
              style={{ color: "gray" }}
            >
              From
            </CustomText>
            <View style={styles.dateButton}>
              <TouchableOpacity
                style={styles.btnStyle}
                onPress={openFromDateCalendar}
              >
                <CustomText>January 2021</CustomText>
                <Image
                  style={{ width: 26, height: 26 }}
                  source={require("../assets/images/calendar.png")}
                />
              </TouchableOpacity>
              <Modal isVisible={isCalendarModalVisible}>
                <View style={styles.popUpCalendarContainer}>
                  <CalendarPicker
                    // startFromMonday={true}
                    // allowRangeSelection={true}

                    //todayBackgroundColor="#e6ffe6"
                    // selectedDayColor="#66ff33"
                    //selectedDayTextColor="#000000"
                    //scaleFactor={375}
                    onDateChange={onFromDateChange}
                    previousTitle={"     \u276E"}
                    nextTitle={"\u276F     "}
                  />
                  <TouchableOpacity
                    style={styles.popUpButtonStyle}
                    onPress={toggleCalendarModal}
                  >
                    <Text style={styles.popUpButtonTextStyle}>Select Date</Text>
                  </TouchableOpacity>
                </View>
              </Modal>
            </View>
          </View>
          <View style={styles.dateInner}>
            <CustomText
              size={16}
              type="ArabicRegular"
              style={styles.subTitleLowerText}
              style={{ color: "gray" }}
            >
              To
            </CustomText>
            <View style={styles.dateButton}>
              <TouchableOpacity
                style={styles.btnStyle}
                onPress={openToDateCalendar}
              >
                <CustomText>January 2021</CustomText>
                <Image
                  style={{ width: 26, height: 26 }}
                  source={require("../assets/images/calendar.png")}
                />
              </TouchableOpacity>
              <Modal isVisible={isCalendarModalVisible}>
                <View style={styles.popUpCalendarContainer}>
                  <CalendarPicker
                    // startFromMonday={true}
                    // allowRangeSelection={true}

                    //todayBackgroundColor="#e6ffe6"
                    // selectedDayColor="#66ff33"
                    //selectedDayTextColor="#000000"
                    //scaleFactor={375}
                    onDateChange={onToDateChange}
                    previousTitle={"     \u276E"}
                    nextTitle={"\u276F     "}
                  />
                  <TouchableOpacity
                    style={styles.popUpButtonStyle}
                    onPress={toggleCalendarModal}
                  >
                    <Text style={styles.popUpButtonTextStyle}>Select Date</Text>
                  </TouchableOpacity>
                </View>
              </Modal>
            </View>
          </View>
        </View>

        <View style={styles.listBox}>
          <FlatList data={data} renderItem={renderItem} keyExtractor={(item,index)=>item.index}/>
        </View>
  
      </ImageBackground>
    </View>
  );
}

// keyExtractor={(item, index) => index.toString()}
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
  listBox: {
    height: "75%",
    width: " 100%",
    alignItems: "center",
    //backgroundColor: "yellow",
    marginTop: 5,
  },
  subTitleText: {
    width: "70%",
    fontWeight: "bold",
    color: "black",
    textAlign: "center",
  },
  subTitleLowerText: {
    fontWeight: "normal",
    color: "black",
  },
  dateContainer: {
    flexDirection: "row",
    height: "10%",
    width: " 100%",
    alignItems: "center",
    //backgroundColor: "red",
    marginTop: 0,
  },
  dateInner: {
    //backgroundColor:'white',
    height: "80%",
    width: "40%",
    margin: 20,
    // // alignSelf:'center',
    // justifyContent:'center',
  },
  dateButton: {
    flexDirection: "row",
    backgroundColor: "white",
    borderRadius: 10,
    height: "60%",
    marginTop: 1,

    borderWidth: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
    borderColor: "white",
    borderRadius: 10,
    shadowColor: "gray",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.9,
    shadowRadius: 2,
  },
  btnStyle: {
    //backgroundColor: 'yellow',
    width: "100%",
    flexDirection: "row",
    height: "100%",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  c: {
    flex: 1,

    backgroundColor: "#FBF8F3",
    justifyContent: "flex-start",
  },
  item: {
    backgroundColor: "transparent",
    padding: 0,
    marginVertical: 8,
    marginHorizontal: 18,
  },

  v2: {
    backgroundColor: "white",
    width: "100%",
    height: 90,
    padding: 10,
    marginTop: 8,
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 10,
    shadowColor: "gray",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.9,
    shadowRadius: 2,
    // elevation: 3,

    position: "relative",
  },
  popUpContainer: {
    backgroundColor: "white",
    borderRadius: 20,
    height: 400,
    width: "100%",
    padding: 10,
  },
  popUpCalendarContainer: {
    backgroundColor: "white",
    borderRadius: 20,
    height: 420,
    width: "100%",
  },
  calendarStyle: {
    margin: 10,
    borderWidth: 1,
    borderColor: "red",
    width: "80%",
  },
  popUpButtonStyle: {
    // flex: 1,
    backgroundColor: "red",
    alignSelf: "center",
    borderRadius: 5,
    height: 50,
    width: "40%",
    margin: 5,
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

  popUpTable: {
    position: "relative",
    flexDirection: "column",
    marginTop:15
  },
  popUpTableCell: {
    position: "relative",
    flexDirection: "row",
    justifyContent: "space-between",
  },

  popUpTitleText: {
    fontWeight: "bold",
  },
  popUpSubTitleText: {
    margin: 8,
    fontWeight: "100",
    color: "black",
  },
  popUpBottomView: {
    position: "relative",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",

    height: 60,
    margin: 10,
  },
  popUpTitleTextBottomView: {
    fontWeight: "100",
    color: "black",
  },
});
