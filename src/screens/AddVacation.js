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
import Accordion from 'react-native-collapsible/Accordion';
import * as Animatable from 'react-native-animatable';
import Collapsible from 'react-native-collapsible';
import ModalDropdown from 'react-native-modal-dropdown';

export default function AddVacation({ route, navigation }) {
  //   const { titleText } = route.params;
  //   console.log("data ===>" + titleText);
//   const BACON_IPSUM =
//   'Bacon ipsum dolor amet chuck turducken landjaeger tongue spare ribs. Picanha beef prosciutto meatball turkey shoulder shank salami cupim doner jowl pork belly cow. Chicken shankle rump swine tail frankfurter meatloaf ground round flank ham hock tongue shank andouille boudin brisket. ';

// const CONTENT = [
//   {
//     title: 'First',
//     content: BACON_IPSUM,
//   },
//   {
//     title: 'Second',
//     content: BACON_IPSUM,
//   },
//   {
//     title: 'Third',
//     content: BACON_IPSUM,
//   },
//   {
//     title: 'Fourth',
//     content: BACON_IPSUM,
//   },
//   {
//     title: 'Fifth',
//     content: BACON_IPSUM,
//   },
// ];

// const SELECTORS = [
//   {
//     title: 'First',
//     value: 0,
//   },
//   {
//     title: 'Third',
//     value: 2,
//   },
//   {
//     title: 'None',
//   },
// ];
  
//   state = {
//     activeSections: [],
//     collapsed: true,
//     multipleSelect: false,
//   };

//   const toggleExpanded = () => {
//     setState({ collapsed: !state.collapsed });
//   };

//   setSections = (sections) => {
//     setState({
//       activeSections: sections.includes(undefined) ? [] : sections,
//     });
//   };

//   const renderHeader = (section, _, isActive) => {
//     return (
//       <Animatable.View
//         duration={400}
//         style={[styles.header, isActive ? styles.active : styles.inactive]}
//         transition="backgroundColor"
//       >
//         <Text style={styles.headerText}>{section.title}</Text>
//       </Animatable.View>
//     );
//   };

//   const renderContent = (section, _, isActive) =>{
//     return (
//       <Animatable.View
//         duration={400}
//         style={[styles.content, isActive ? styles.active : styles.inactive]}
//         transition="backgroundColor"
//       >
//         <Animatable.Text animation={isActive ? 'bounceIn' : undefined}>
//           {section.content}
//         </Animatable.Text>
//       </Animatable.View>
//     );
//   };
  //const { multipleSelect, activeSections } = this.state;
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
            {"New Vacation"}
          </CustomText>

          <Image
            style={{ width: 30, height: 30, marginStart: "-15%" }}
            source={require("../assets/images/vacation.png")}
          />
        </View>

        <View style={styles.formViewContainer}>
        <KeyboardAvoidingView behavior="position">
            <View style={styles.leaveType}>
              <View style={{flexDirection:'row', flex:1}}>
                <View style={{backgroundColor: "transparent", height :"80%", width:"20%", margin:10}}>
                <Image
            style={{ width: 50, height: 50,alignSelf:'center', margin:15}}
            source={require("../assets/images/vacation.png")}
          />
                </View>
                <View style={{backgroundColor: "transparent", height:"80%",width:"70%", margin:10, marginLeft:0}}>
                  <View style={{backgroundColor:"transparent",height:"50%",width:"100%"}}>
                    <CustomText  size={18}
            type="ArabicRegular"
            style={styles.subTitleText} style={{marginLeft:0, color:"#d3d3d3"}}>Type</CustomText>
                  </View>
                  <View style={{backgroundColor:"yellow",height:"50%",width:"100%"}}>
                    <ModalDropdown options={['Casual', 'Annual', 'Privilege','Sick','Maternity','Emergency']}
             dropdownStyle={{width:"50%",height:"25%"}}
             scrollEnabled={false}
             
             
             >
               

            </ModalDropdown>
                  </View>
                </View>
              </View>

            
            </View>
            <Divider/>
            <View style={styles.leaveCause}>
            <View style={{flexDirection:'row', flex:1}}>
                <View style={{backgroundColor: "blue", height :"80%", width:"20%", margin:10}}></View>
                <View style={{backgroundColor: "red", height:"80%",width:"70%", margin:10, marginLeft:0}}>
                  <View style={{backgroundColor:"cyan",height:"50%",width:"100%"}}></View>
                  <View style={{backgroundColor:"white",height:"50%",width:"100%"}}></View>
                </View>
              </View>
            </View>
            <Divider/>
            <View style={styles.dateContainer}>
            {/* <ScrollView contentContainerStyle={{ paddingTop: 30 }}>
          <Text style={styles.title}>Accordion Example</Text>

          <View style={styles.multipleToggle}>
            <Text style={styles.multipleToggle__title}>Multiple Select?</Text>
            <Switch
              value={multipleSelect}
              onValueChange={(a) => this.setState({ multipleSelect: a })}
            />
          </View>

          <View style={styles.selectors}>
            <Text style={styles.selectTitle}>Select:</Text>

            {SELECTORS.map((selector) => (
              <TouchableOpacity
                key={selector.title}
                onPress={() => setSections([selector.value])}
              >
                <View style={styles.selector}>
                  <Text
                    style={
                      activeSections.includes(selector.value) &&
                      styles.activeSelector
                    }
                  >
                    {selector.title}
                  </Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>

          <TouchableOpacity onPress={this.toggleExpanded}>
            <View style={styles.header}>
              <Text style={styles.headerText}>Single Collapsible</Text>
            </View>
          </TouchableOpacity>
          <Collapsible collapsed={state.collapsed} align="center">
            <View style={styles.content}>
              <Text>
                Bacon ipsum dolor amet chuck turducken landjaeger tongue spare
                ribs
              </Text>
            </View>
          </Collapsible>
          <Accordion
            activeSections={activeSections}
            sections={CONTENT}
            touchableComponent={TouchableOpacity}
            expandMultiple={multipleSelect}
            renderHeader={renderHeader}
            renderContent={renderContent}
            duration={400}
            onChange={setSections}
            renderAsFlatList={false}
          />
        </ScrollView> */}
            </View>
            </KeyboardAvoidingView>
            
        </View>
        <View style={styles.leaveApplyView}>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => userLoginWithAzure()}
          >
            <Text style={styles.buttonTextStyle}>
              Apply For {"1"} Day Leave
            </Text>
          </TouchableOpacity>
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
  formViewContainer: {
    backgroundColor: "white",
    height: "75%",
    margin: 10,
    borderRadius: 20,
    borderWidth: 0.5,
    borderColor: "gray",
  },
  leaveApplyView: {
    //backgroundColor:'blue',
    height: "10%",
    margin: 10,
  },
  buttonStyle: {
    // flex: 1,
    backgroundColor: "red",
    marginLeft: 2,
    marginRight: 2,
    borderRadius: 5,
    height: 60,
    alignItems: "center",
    marginTop: 8,
  },
  buttonTextStyle: {
    alignSelf: "center",
    textAlign: "center",
    color: "white",
    fontSize: 22,
    fontWeight: "600",
    paddingTop: 8,
    fontFamily: "CoHeadlineW23-ArabicRegular",
    fontWeight: "bold",
  },
  leaveType:{
      backgroundColor:'transparent',
      height:"15%",
      margin:10,

  },
  leaveCause:{
    backgroundColor:'green',
    height:"15%",
    margin:10,

},
dateContainer:{
    backgroundColor:'green',
    height:"60%",
    margin:10,
},
content: {
    padding: 20,
    backgroundColor: '#fff',
  },
  active: {
    backgroundColor: 'rgba(255,255,255,1)',
  },
  inactive: {
    backgroundColor: 'rgba(245,252,255,1)',
  },
  selectors: {
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  selector: {
    backgroundColor: '#F5FCFF',
    padding: 10,
  },
  activeSelector: {
    fontWeight: 'bold',
  },
  selectTitle: {
    fontSize: 14,
    fontWeight: '500',
    padding: 10,
  },
  multipleToggle: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 30,
    alignItems: 'center',
  },
  multipleToggle__title: {
    fontSize: 16,
    marginRight: 8,
  },
  headerText: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '500',
  },
  title: {
    textAlign: 'center',
    fontSize: 22,
    fontWeight: '300',
    marginBottom: 20,
  },
  header: {
    backgroundColor: '#F5FCFF',
    padding: 10,
  },
});
