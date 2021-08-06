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

export default function Policy({ route, navigation }) {
  const { titleText } = route.params;
  console.log("data ===>" + titleText);

  // constructor = (props) =>{
  //   super(props);
  //   this.state = {
  //     scrollViewWidth:0,
  //     currentXOffset:0
  //   }
  // }
  // const constructor=(props)=>{
  //  // super(props);
  //   this.state = {
  //     scrollViewWidth:0,
  //     currentXOffset:0
  //   }
  // }
  const DATA = [
    {
     policy:"Leave Policy",
     releasedate:"20/03/2021",
     version:"HR2021",
     pdfUrl:"https://reactnative.dev/img/tiny_logo.png",
     pdfIcon: require("../assets/images/pdf.png"),
    },
    {
     policy:"Vacation Policy",
     releasedate:"20/03/2021",
     version:"HR0123",
     pdfUrl:"https://reactnative.dev/img/tiny_logo.png",
     pdfIcon: require("../assets/images/pdf.png"),
    },
    {
     policy:"Travel Policy",
     releasedate:"20/03/2021",
     version:"HR0325",
     pdfUrl:"https://reactnative.dev/img/tiny_logo.png",
     pdfIcon: require("../assets/images/pdf.png"),
    },
    {
     policy:"Increment Policy",
     releasedate:"20/03/2021",
     version:"HR0657",
     pdfUrl:"https://reactnative.dev/img/tiny_logo.png",
     pdfIcon: require("../assets/images/pdf.png"),
    },
    {
     policy:"Insuarance Policy",
     releasedate:"20/03/2021",
     version:"HR01478",
     pdfUrl:"https://reactnative.dev/img/tiny_logo.png",
     pdfIcon: require("../assets/images/pdf.png"),
    },
    {
     policy:"Insuarance Policy",
     releasedate:"20/03/2021",
     version:"HR01478",
     pdfUrl:"https://reactnative.dev/img/tiny_logo.png",
     pdfIcon: require("../assets/images/pdf.png"),
    },
    {
     policy:"Insuarance Policy",
     releasedate:"20/03/2021",
     version:"HR01478",
     pdfUrl:"https://reactnative.dev/img/tiny_logo.png",
     pdfIcon: require("../assets/images/pdf.png"),
    },
    {
     policy:"Insuarance Policy",
     releasedate:"20/03/2021",
     version:"HR01478",
     pdfUrl:"https://reactnative.dev/img/tiny_logo.png",
     pdfIcon: require("../assets/images/pdf.png"),
 
    },
    {
     policy:"Insuarance Policy",
     releasedate:"20/03/2021",
     version:"HR01478",
     pdfUrl:"https://reactnative.dev/img/tiny_logo.png",
     pdfIcon: require("../assets/images/pdf.png"),
 
    },
    {
     policy:"Insuarance Policy",
     releasedate:"20/03/2021",
     version:"HR01478",
     pdfUrl:"https://reactnative.dev/img/tiny_logo.png",
     pdfIcon: require("../assets/images/pdf.png"),
    },
    {
     policy:"Insuarance Policy",
     releasedate:"20/03/2021",
     version:"HR01478",
     pdfUrl:"https://reactnative.dev/img/tiny_logo.png",
     pdfIcon: require("../assets/images/pdf.png"),
 
    }
 ];
  const [state, setState] = useState("");

  const _handleScroll = (event) => {
    console.log("currentXOffset =", event.nativeEvent.contentOffset.x);
    newXOffset = event.nativeEvent.contentOffset.x;
    setState({ currentXOffset: newXOffset });
  };

  const leftArrow = () => {
    eachItemOffset = scrollViewWidth / 10; // Divide by 10 because I have 10 <View> items
    _currentXOffset = currentXOffset - eachItemOffset;
    refs.scrollView.scrollTo({ x: _currentXOffset, y: 0, animated: true });
  };

  const rightArrow = () => {
    eachItemOffset = scrollViewWidth / 10; // Divide by 10 because I have 10 <View> items
    _currentXOffset = currentXOffset + eachItemOffset;
    refs.scrollView.scrollTo({ x: _currentXOffset, y: 0, animated: true });
  };
  const navigateToPolicyDetail = () => {
console.log("POLICY DETAILS")

navigation.navigate('PolicyDetails', {

});
  };
  const Item = ({policy,releasedate,version,pdfUrl, pdfIcon}) => {
    return( 
      <View style={styles.item}>
          <View style={styles.v2}>
           <View style={{flexDirection:'row'}}>
               
               <Image style={{width:50,height:50,margin:10,alignSelf:'center'}} source={pdfIcon}/>
               <View style={{marginLeft:6, marginTop:16}}>
                <CustomText >{policy}</CustomText>
                <CustomText style={{fontSize:12,color:'grey'}}>Release Date: {releasedate}</CustomText>
                </View>
           </View >
           <View >
           <CustomText style={{fontSize:11,marginRight:10,marginTop:5,color:'#f38434'}}>Version: {version}</CustomText>
           <TouchableOpacity onPress={navigateToPolicyDetail}>
           <View style={{backgroundColor:'#3F71DE', width:"100%",height:30,borderTopLeftRadius:19,borderBottomRightRadius:7,marginTop:30,}}>
           <CustomText style={{alignSelf:'center', margin:0,fontSize:14,color:'white'}}>View</CustomText>
           </View>  
           </TouchableOpacity>
           </View>
          </View>   
      </View>
    );
    }
    const renderItem = ({item,policy,releasedate,version,pdfUrl, pdfIcon})=>( 
      <Item
           policy={item.policy}
           releasedate={item.releasedate}
           version={item.version}
           pdfUrl={item.pdfUrl}
           pdfIcon={item.pdfIcon}
      />
    )
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
            source={require("../assets/images/policy.png")}
          />
        </View>

        <View style={styles.scrollerContainer}>
          <View
            style={{
              justifyContent: "center",
              width: 50,
              height: 50,
              alignSelf: "center",
              marginBottom: 20,
            }}
          >
            <TouchableOpacity
              style={{ backgroundColor: "transparent" }}
              onPress={leftArrow}
            >
              <Image
                style={{ width: 30, height: 30, margin: 10 }}
                source={require("../assets/images/prevArrow.png")}
              />
            </TouchableOpacity>
          </View>
          <ScrollView
            contentContainerStyle={{
              backgroundColor: "transparent",
              alignItems: "center",
            }}
            horizontal={true}
            pagingEnabled={true}
            // ref="scrollView"
            onContentSizeChange={(w, h) => setState({ scrollViewWidth: w })}
            scrollEventThrottle={16}
            scrollEnabled={true} // remove if you want user to swipe
            onScroll={_handleScroll}
            showsHorizontalScrollIndicator={false}
          >
            <View style={styles.scrollItemsStyle}>
              <View style={styles.scrollInnerContainer}>
              <TouchableOpacity
              style={{ backgroundColor: "transparent" }}
              onPress={leftArrow}
            >
              <Image
                style={{ width: 40, height: 40, margin: 10 }}
                source={require("../assets/images/myStaff.png")}
              />
            </TouchableOpacity>
              </View>
              <CustomText>HR</CustomText>
            </View>
            <View style={styles.scrollItemsStyle}>
              <View style={styles.scrollInnerContainer}>
              <TouchableOpacity
              style={{ backgroundColor: "transparent" }}
              onPress={leftArrow}
            >
              <Image
                style={{ width: 40, height: 40, margin: 10 }}
                source={require("../assets/images/myStaff.png")}
              />
            </TouchableOpacity>
              </View>
              <CustomText>IT</CustomText>
            </View>
            <View style={styles.scrollItemsStyle}>
              <View style={styles.scrollInnerContainer}>
              <TouchableOpacity
              style={{ backgroundColor: "transparent" }}
              onPress={leftArrow}
            >
              <Image
                style={{ width: 40, height: 40, margin: 10 }}
                source={require("../assets/images/myStaff.png")}
              />
            </TouchableOpacity>
              </View>
              <CustomText>Operations</CustomText>
            </View>
            <View style={styles.scrollItemsStyle}>
              <View style={styles.scrollInnerContainer}>
              <TouchableOpacity
              style={{ backgroundColor: "transparent" }}
              onPress={leftArrow}
            >
              <Image
                style={{ width: 40, height: 40, margin: 10 }}
                source={require("../assets/images/myStaff.png")}
              />
            </TouchableOpacity>
              </View>
              <CustomText>Others</CustomText>
            </View>
            <View style={styles.scrollItemsStyle}>
              <View style={styles.scrollInnerContainer}>
              <TouchableOpacity
              style={{ backgroundColor: "transparent" }}
              onPress={leftArrow}
            >
              <Image
                style={{ width: 40, height: 40, margin: 10 }}
                source={require("../assets/images/myStaff.png")}
              />
            </TouchableOpacity>
              </View>
              <CustomText>HR</CustomText>
            </View>
            <View style={styles.scrollItemsStyle}>
              <View style={styles.scrollInnerContainer}>
              <TouchableOpacity
              style={{ backgroundColor: "transparent" }}
              onPress={leftArrow}
            >
              <Image
                style={{ width: 40, height: 40, margin: 10 }}
                source={require("../assets/images/myStaff.png")}
              />
            </TouchableOpacity>
              </View>
              <CustomText>HR</CustomText>
            </View>
            <View style={styles.scrollItemsStyle}>
              <View style={styles.scrollInnerContainer}>
              <TouchableOpacity
              style={{ backgroundColor: "transparent" }}
              onPress={leftArrow}
            >
              <Image
                style={{ width: 40, height: 40, margin: 10 }}
                source={require("../assets/images/myStaff.png")}
              />
            </TouchableOpacity>
              </View>
              <CustomText>HR</CustomText>
            </View>
            <View style={styles.scrollItemsStyle}>
              <View style={styles.scrollInnerContainer}>
              <TouchableOpacity
              style={{ backgroundColor: "transparent" }}
              onPress={leftArrow}
            >
              <Image
                style={{ width: 40, height: 40, margin: 10 }}
                source={require("../assets/images/myStaff.png")}
              />
            </TouchableOpacity>
              </View>
              <CustomText>HR</CustomText>
            </View>
            <View style={styles.scrollItemsStyle}>
              <View style={styles.scrollInnerContainer}>
              <TouchableOpacity
              style={{ backgroundColor: "transparent" }}
              onPress={leftArrow}
            >
              <Image
                style={{ width: 40, height: 40, margin: 10 }}
                source={require("../assets/images/myStaff.png")}
              />
            </TouchableOpacity>
              </View>
              <CustomText>HR</CustomText>
            </View>
            <View style={styles.scrollItemsStyle}>
              <View style={styles.scrollInnerContainer}>
              <TouchableOpacity
              style={{ backgroundColor: "transparent" }}
              onPress={leftArrow}
            >
              <Image
                style={{ width: 40, height: 40, margin: 10 }}
                source={require("../assets/images/myStaff.png")}
              />
            </TouchableOpacity>
              </View>
              <CustomText>HR</CustomText>
            </View>
          </ScrollView>
          <View
            style={{
              justifyContent: "center",
              width: 50,
              height: 50,
              alignSelf: "center",
              marginBottom: 20,
            }}
          >
            <TouchableOpacity
              style={{
                backgroundColor: "transparent",
                // shadowColor: "gray",
                // shadowOffset: { width: 0, height: 1 },
                // shadowOpacity: 0.9,
                // shadowRadius: 3,borderRadius:25
              }}
              onPress={rightArrow}
            >
              <Image
                style={{ width: 30, height: 30, margin: 10 }}
                source={require("../assets/images/nextArrow.png")}
              />
            </TouchableOpacity>
          </View>
        </View>
        {/* <Divider /> */}
        <View style={styles.filterContainer}>
          <CustomText
            size={20}
            type="ArabicRegular"
            style={styles.subTitleText}
            style={{
              marginLeft: 20,
              position: "absolute",
              alignContent: "center",
            }}
          >
            Policy List
          </CustomText>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              style={{
                width: 30,
                height: 30,
                position: "absolute",
                right: 20,
                top: 5,
              }}
              source={require("../assets/images/filterIcon.png")}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.listContainer}>
        <View style={styles.FlatList}>
    <FlatList
       data={DATA}
       renderItem={renderItem}
      // keyExtractor={item => item.id}
    /> 
    </View>
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
  scrollerContainer: {
    //backgroundColor:'red',
    height: "15%",
    //flex:1,
    flexDirection: "row",
    justifyContent: "center",
  },
  filterContainer: {
    backgroundColor: "transparent",
    height: "5%",
  },
  listContainer: {
    //backgroundColor: "green",
    height: "70%",
    position: "relative",
  },
  scrollItemsStyle: {
    paddingVertical: 10,
    paddingHorizontal: 5,
    margin: 5,

    alignItems: "center",
    // borderWidth:1,
    // borderRadius:1,
    // borderColor:'black',
  },
  scrollInnerContainer: {
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "white",
    height: 60,
    width: 60,
    borderRadius: 10,
    shadowColor: "gray",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.9,
    shadowRadius: 3,
  },
  FlatList:{
    borderRadius:8,
    width:"100%",
    marginTop:10,
    marginRight:8,
    marginLeft:8,
  },
  item: {
    backgroundColor:'transparent',
    marginVertical:5,
    marginBottom:19,
    //marginHorizontal:15,
  },
  v2:{
    backgroundColor:'#FFF',
    width:"95%",
    height:90,
    flexDirection:'row',
    justifyContent:'space-between',
    borderWidth:1,
    borderColor:"#afafaf",
    borderRadius:10, 
    shadowColor: "gray",
                shadowOffset: { width: 0, height: 1 },
                shadowOpacity: 0.5,
                shadowRadius: 0.5
  },
});
