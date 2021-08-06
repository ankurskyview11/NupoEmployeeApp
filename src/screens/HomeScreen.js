import { NavigationHelpersContext } from "@react-navigation/core";
import * as React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  TouchableOpacity,
  TextInput,
  Dimensions,
  FlatList,
  Alert,
} from "react-native";
import { Pages } from "react-native-pages";

// import AppleHealthKit, {
//   HealthValue,
//   HealthKitPermissions,
// } from 'react-native-health';

// /* Permission options */
// const permissions = {
//   permissions: {
//     read: [AppleHealthKit.Constants.Permissions.HeartRate],
//     write: [AppleHealthKit.Constants.Permissions.Steps],
//   },
// } as HealthKitPermissions;


// import AppleHealthKit from 'rn-apple-healthkit';
// let options = {
//   permissions: {
//       read: ["Height", "Weight"],
//       write: ["Height", "Weight"]
//   }
// };
const data = [
  {
    id: "ToDoList",
    value: "To-Do List",
    image: require("../assets/images/todolist.png"),
  },
  { 
    id: "Payslip", 
    value: "Payslip", 
    image: require("../assets/images/payslip.png") },
  { 
    id: "Meeting", 
    value: "Meeting", 
    image: require("../assets/images/meeting.png") },
  { 
    id: "Travel", 
    value: "Travel", 
    image: require("../assets/images/travel.png") },
  {
    id: "Directory",
    value: "Directory",
    image: require("../assets/images/directory.png"),
  },
  {
    id: "Attendance",
    value: "Attendance",
    image: require("../assets/images/attendance.png"),
  },
  {
    id: "Approvals",
    value: "Approvals",
    image: require("../assets/images/approval.png"),
  },
  {
     id: "Health", 
     value: "Health", 
     image: require("../assets/images/health.png") },
  {
    id: "Vacation",
    value: "Vacation",
    image: require("../assets/images/vacation.png"),
  },
  {
     id: "Policy", 
     value: "Policies", 
     image: require("../assets/images/policy.png") },
  {
    id: "MyStaff",
    value: "My Staff",
    image: require("../assets/images/myStaff.png"),
  },
];

const numColumns = 3;
const size = Dimensions.get("window").width / numColumns;

export default function HomeScreen({ route, navigation }) {
  // const { name } = route.params;
  const { userName } = route.params;
  console.log("Props value => ", route, userName);
  const userLogout = () => {
    console.log("logout");
  };
//   AppleHealthKit.initHealthKit(options, (err, results) => {
//     if (err) {
//         console.log("error initializing Healthkit: ", err);
//         return;
//     }
 
//     // Height Example
//     AppleHealthKit.getDateOfBirth(null, (err, results) => {
//       console.log(results)
//     });
 
// });


getListViewItem = (item) => {  
  // Alert.alert(item.value);  

  navigation.navigate(item.id, {
    titleText: item.value,
    userName:userName,
  });
  
}  
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/images/home.png")}
        style={styles.image}
      >
        <View style={styles.box1}>
          <View style={styles.innerBox}>
            <Text style={styles.headerText}>Welcome,</Text>
            <Text style={styles.subtitleText}>{userName}</Text>
            {/* <Text>itemId: {JSON.stringify(userName)}</Text> */}
          </View>

          <View style={styles.innerBox}>
            <Image
              style={{ width: 100, height: 100, resizeMode: "contain" }}
              source={require("../assets/images/userProfile.png")}
            />
          </View>
        </View>
        <View style={styles.box2}>
          {/* <Text style={styles.textLabel}>Tell Us Your Feeling Today</Text> */}
          <Text style={styles.textLabel}>Welcome to NUPCO</Text>
          {/* <TouchableOpacity style={styles.buttonStyle} onPress={()=>userLogin()}><Text  style={styles.buttonTextStyle}>Login</Text></TouchableOpacity> */}

          {/* <TouchableOpacity onPress={()=> userLogout()}>
        <Image style={{width:40,height:40, marginTop: 10 }} source={require('../assets/images/logout.png')}/>
        </TouchableOpacity> */}
        </View>
        {/* <View style ={{borderColor :'red' ,borderWidth:4  ,opacity:0.0 }}> */}
        <View style={{ width : "100%" , height :"55%", paddingBottom: 10}}>
          <View style={{ marginLeft: 20 }}>
            <Text style={styles.headerText}>Employee Dashboard</Text>
          </View>
          <View style={styles.listBox}>
            <FlatList
              data={data}
              renderItem={({ item }) => (
                <View style={styles.itemContainer}>
                  <View style={styles.itemInnerContainer}>
                  <TouchableOpacity onPress={this.getListViewItem.bind(this, item)}>
                    <Image
                      style={{
                        width: 50,
                        height: 50,
                        resizeMode: "contain",
                        alignContent: "center",
                        alignSelf: "center",
                        margin: 25,
                      }}
                      source={item.image}
                    />
                    </TouchableOpacity>
                  </View>
                  <Text style={styles.item}>{item.value}</Text>
                  
                </View>
              )}
              keyExtractor={(item) => item.id}
              numColumns={numColumns}
            />
          </View>
        </View>
        <View style={styles.bottomBox}>
          
          <Pages indicatorColor="#3F71DE">
            <View style={{ flex: 1, backgroundColor: "transparent" }}>
              <Image
                style={{ width: "100%", height: "90%", resizeMode: "contain" }}
                source={require("../assets/images/tips.png")}
              />
            </View>
            <View style={{ flex: 1, backgroundColor: "transparent" }}>
              <Image
                style={{ width: "100%", height: "90%", resizeMode: "contain" }}
                source={require("../assets/images/tips.png")}
              />
            </View>
            <View style={{ flex: 1, backgroundColor: "transparent" }}>
              <Image
                style={{ width: "100%", height: "90%", resizeMode: "contain" }}
                source={require("../assets/images/tips.png")}
              />
            </View>
          </Pages>
        </View>
      </ImageBackground>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
   // backgroundColor: "cyan",
    // alignItems: 'center',
    justifyContent: "center",
  },
  box1: {
    flexDirection: "row",
    height: "20%",
    alignItems: "center",
    justifyContent: "space-between",
    //  backgroundColor:'cyan'
    
  },
  box2: {
    backgroundColor: "#3F71DE",
    flexDirection: "column",
    marginLeft: 20,
    marginRight: 20,
    marginTop: 5,
    height: "7%",
    borderRadius: 8,
    
  },

  listBox: {
    marginTop: 10,
    paddingTop : 10,
    height: "100%",
    paddingBottom : 25,
   // backgroundColor: "green",
   
  },

  bottomBox: {
    height: "18%",
    backgroundColor: 'transparent',
   
  },
  innerBox: {
    margin: 30,
    marginTop: 80,
  },

  headerText: {
    fontSize: 20,
    margin: 1,
    fontFamily: "CoHeadlineW23-ArabicRegular",
    fontWeight: "bold",
    color: "gray",
  },
  subtitleText: {
    fontSize: 20,
    margin: 5,
    // marginLeft:40,
    fontFamily: "CoHeadlineW23-ArabicRegular",
    fontWeight: "bold",
    color: "#3F71DE",
  },
  textLabel: {
    fontSize: 15,
    margin: 16,
    marginLeft: 30,
    fontFamily: "CoHeadlineW23-ArabicRegular",
    fontWeight: "normal",
    color: "white",
  },
  buttonStyle: {
    // flex: 1,
    backgroundColor: "gray",
    marginLeft: 2,
    marginRight: 2,
    borderRadius: 10,
    height: 60,
  },
  buttonTextStyle: {
    fontSize: 15,
    margin: 12,
    marginLeft: 30,
    fontFamily: "CoHeadlineW23-ArabicRegular",
    fontWeight: "normal",
    color: "black",
  },
  itemContainer: {
    width: size,
    height: size,
  },
  itemInnerContainer: {
    width: 100,
    height: 100,
    borderWidth: 0.4,
    alignSelf: "center",
    borderRadius: 10,
    borderColor: "#fff",
    shadowColor: "gray",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.9,
    shadowRadius: 1,
    elevation: 3,
  },
  item: {
    fontSize: 14,
    flex: 1,
    margin: 5,
    marginTop: 1,
    // backgroundColor: 'yellow',
    alignContent: "center",
    alignSelf: "center",
    fontFamily: "CoHeadlineW23-ArabicRegular",
    fontWeight: "normal",
    color: "black",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
  },
});
