import React ,{useState} from 'react'
import { View, Text, Image,StyleSheet,KeyboardAvoidingView,TouchableOpacity,Alert , ImageBackground} from 'react-native'
import { TextInput,Button} from 'react-native-paper'
import {
    Input,
    Icon,
    useColorModeValue,
    Box,
  } from 'native-base'


  import { MaterialIcons } from '@expo/vector-icons'

 export default function OtpScreen({route,navigation}) {
    const [otp,setOtp] = useState('')
    const { userEmail } = route.params;
    console.log('data ===>'+userEmail)
    
    const submitOtp = ()=>{
        if(!otp){
          Alert.alert("Please enter OTP.")  
          return
        }
        else{
            const baseUrl = 'https://skyviewads.com/confirm_mail_php/verify.php'

            fetch(baseUrl, {
                method: 'POST',
                body: JSON.stringify({'email' : userEmail,'otp':otp})
            })
            .then(res => res.json())
            .then(data => {
                const status = data.success
                if(!status){
                    Alert.alert(data.msg)
                   //navigation.navigate("Home")
                
                }
                else if(status){
                    navigation.navigate('Main', {
                        screen: 'Home',
                        params: { userName: data.name },
                      });

                }
                console.log(data)})
            .catch(err => console.log("this is the error " , err))

              

     

            }
     
    }
    return (
        <View style={styles.container}>
        <ImageBackground source={require('../assets/images/SignUp.png')} style={styles.image}>
        <TouchableOpacity onPress={()=>navigation.goBack()}>
        <Image style={{width:40,height:40, marginTop: 80, marginLeft : 20 }} source={require('../assets/images/backBtn.png')}/>
        </TouchableOpacity>
        <View behavior="position">
           
           <View style={styles.box1}>
              <Image style={{width:400,height:40, resizeMode: 'contain', marginTop: 0,opacity:0.0}} source={require('../assets/images/demoUser.png')}/>
           
           </View>
           <View>
               <Text style={styles.subTitleText} >Verification</Text>
               <Text style={styles.subTitleLowerText} >Enter verification code</Text>
           </View>
           <View style={styles.box2}>
               <View style={{flexDirection:'row' , position : "relative"}}>
           <TextInput style={{width : '100%'}}
               label="Enter Code"
               value={otp}
               mode="outlined"
               onChangeText={text => setOtp(text)}
               keyboardType = 'number-pad'
               />
         
               </View>

                  <TouchableOpacity style={styles.buttonStyle} onPress={()=>submitOtp()}><Text  style={styles.buttonTextStyle}>Submit</Text></TouchableOpacity>
   
               
       
   
           </View>
          
       </View>

        </ImageBackground>
    </View>
    
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
         backgroundColor: 'white',
       // alignItems: 'center',
        justifyContent: 'center',
      },
    box1:{
        alignItems:"center",
    },
    box2:{
        paddingHorizontal:40,
        height:"50%",
        justifyContent:"space-evenly"
    },
    headerText:{
        fontSize:40,
        margin:5,
        fontFamily:'CoHeadlineW23-ArabicRegular', 
        fontWeight:'bold',
        color:'black'
    },
    subTitleText:{
        fontSize:40,
        marginTop:1,
        marginLeft:40,
        fontFamily:'CoHeadlineW23-ArabicRegular', 
        fontWeight:'bold',
        color:'black'
    },
    subTitleLowerText:{
        fontSize:18,
        margin:2,
        marginLeft:40,
        marginRight:20,
        fontFamily:'CoHeadlineW23-ArabicRegular', 
        fontWeight:'normal',
        color:'black'
    },
    buttonStyle:{
        // flex: 1,
        backgroundColor: 'red',
        marginLeft: 2,
        marginRight: 2,
        borderRadius: 5,
        height : 60
    },
    buttonTextStyle: {
        alignSelf: 'center',
        textAlign: 'center',
        color: 'white',
        fontSize: 22,
        fontWeight: '600',
        paddingTop: 8,
        //paddingBottom: 20,
        fontFamily:'CoHeadlineW23-ArabicRegular', 
        fontWeight:'bold'
    },
    image: {
        flex: 1,
        resizeMode: "cover"
      }
 });
