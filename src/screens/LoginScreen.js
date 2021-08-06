import React ,{useState} from 'react'
import qs, { stringify } from 'qs';
import { View, Text, Image,StyleSheet,KeyboardAvoidingView,TouchableOpacity,Alert , ImageBackground, Linking} from 'react-native'
import { TextInput,Button} from 'react-native-paper'
import axios from 'axios'
import {
    Input,
    Icon,
    useColorModeValue,
    Box,
  } from 'native-base'


  import { MaterialIcons } from '@expo/vector-icons'
  import emaillll from 'react-native-email'

  import Communications from 'react-native-communications';

  import AzureAuth from 'react-native-azure-auth';
  import Toast from 'react-native-simple-toast';
  

// import AppleHealthKit from 'rn-apple-healthkit';
// let options = {
 
//   permissions: {
//       read: ["Height", "Weight", "DateOfBirth"],
//       write: ["Height", "Weight"]
//   }
// };

  function AzureAuthentication() {
    return new AzureAuth({
      clientId: '14f2ddd6-d857-42eb-a040-1af5a9528691'
    });
  }
  
  async function authentication() {
    try {
      let azureAuth = AzureAuthentication();
      let tokens = await azureAuth.webAuth.authorize({ scope: 'openid profile User.Read Mail.Read' });
      this.setState({ accessToken: tokens.accessToken });
      let info = await azureAuth.auth.msGraphRequest({ token: tokens.accessToken, path: '/users' });
      this.setState({ user: info.displayName, userId: tokens.userId });
      console.log(tokens);
    } catch (error) {
      console.log(error)
    }
  }
  
  export async function sendEmail(to, subject, body, options = {}) {
    const { cc, bcc } = options;

    let url = `mailto:${to}`;

    // Create email link query
    const query = qs.stringify({
        subject: subject,
        body: body,
        cc: cc,
        bcc: bcc
    });

    if (query.length) {
        url += `?${query}`;
    }

    // check if we can use this link
    const canOpen = await Linking.canOpenURL(url);

    if (!canOpen) {
        throw new Error('Provided URL can not be handled');
    }

    return Linking.openURL(url);
}

// handleEmail = () => {
//     const to = ['tiaan@email.com', 'foo@bar.com'] // string or array of email addresses
//     email(to, {
//         // Optional additional arguments
//         cc: ['bazzy@moo.com', 'doooo@daaa.com'], // string or array of email addresses
//         bcc: 'mee@mee.com', // string or array of email addresses
//         subject: 'Show how to use',
//         body: 'Some body right here'
//     }).catch(console.error)
// }
 export default function LoginScreen({navigation}) {
   // const sendEmail = "mobile_app_developer@nupco.com";
    const [email,setEmail] = useState('ankur.skyview11@gmail.com')
    const [password,setPassword] = useState('123456')

    const [emailN,setEmailN] = useState('ldap.connector')
    const [passwordN,setPasswordN] = useState('Nup%2030L')

    const _validateEmail =( email) =>{
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
          return true
        }
        return false
      }
    const data = {
        email : email,
    }
    const authenticateWithLDAP = () => {
      const baseUrl = 'http://10.1.56.37/ldap/new.php'

console.log("UN "+emailN+"  PAS "+passwordN);
console.log("URL "+baseUrl);


const formData = new FormData();
formData.append('username', "riemann");
formData.append('password', "password");
axios({
  url    : baseUrl,
  method : 'POST',
  data   : formData,
  headers: {
               Accept: 'application/json',
               'Content-Type': 'multipart/form-data',
           }
       })
       .then(function (response) {
               console.log("response :", JSON.stringify(response.data));
      })
      
      .catch(function (error) {
               console.log("error from image :");
      })

    }
    const userLogin = ()=>{
        // if(!email||!password){
        //   Alert.alert("Please fill all the fields")  
        //   return
        // }
        if(email == ''){
            Toast.show('Enter your email');
           
            return false
          }
          else if (!_validateEmail(email)){
            Toast.show('Invalid Email');
          
            return false
          }
          else if(password == ''){
            Toast.show('Enter password');
           
            return false
          }
        else{

            const baseUrl = 'https://skyviewads.com/confirm_mail_php/login.php'

            fetch(baseUrl, {
                method: 'POST',
                body: JSON.stringify({'email' : email, 'password' : password})
            })
            .then(res => res.json())
            .then(data => {
                const status = data.success
                if(!status){
                    Alert.alert(data.msg)
                }
                else if(status){
                    console.log('FROM LOGIN == '+ data.name)
                    
                    navigation.navigate('Main', {
                        screen: 'Home',
                        params: { userName: data.name },
                      });
                }
                console.log(data)})
            .catch(err => console.log("this is the error " , err))
        }
          

            
        
     
    }
   // const { authenticate } = require('ldap-authentication')
    // async function auth() {
    //   // auth with admin
    //   let options = {
    //     ldapOpts: {
    //       url: 'ldap://ldap.forumsys.com',
    //       // tlsOptions: { rejectUnauthorized: false }
    //     },
    //     adminDn: 'cn=read-only-admin,dc=example,dc=com',
    //     adminPassword: 'password',
    //     userPassword: 'password',
    //     userSearchBase: 'dc=example,dc=com',
    //     usernameAttribute: 'uid',
    //     username: 'gauss',
    //     // starttls: false
    //   }
    
    //   let user = await authenticate(options)
    //   console.log(user)
    
    //   // auth with regular user
    //   options = {
    //     ldapOpts: {
    //       url: 'ldap://ldap.forumsys.com',
    //       // tlsOptions: { rejectUnauthorized: false }
    //     },
    //     userDn: 'uid=einstein,dc=example,dc=com',
    //     userPassword: 'password',
    //     userSearchBase: 'dc=example,dc=com',
    //     usernameAttribute: 'uid',
    //     username: 'einstein',
    //     // starttls: false
    //   }
    
    //   user = await authenticate(options)
    //   console.log(user)
    // }
    
    // auth()
    
     const userLoginWithAzure = async()=>{
       // authentication()
       
      //  var options = {
      //   url: 'ldaps://ldap.example.org:636',
        
      // };
      // var auth = new LdapAuth(options);
      // auth.on('error', function (err) {
      //   console.error('LdapAuth: ', err);
      // });
      
      // auth.authenticate(username, password, function(err, user) {  });
      
      // auth.close(function(err) {  })

      authenticateWithLDAP()
        
    }
    
    const getHealthData = ()=> {
    //   AppleHealthKit.initHealthKit(options, (err, results) => {
    //     if (err) {
    //         console.log("error initializing Healthkit: ", err);
    //         return;
    //     }
     
    //     // DOB Example
    //     AppleHealthKit.getDateOfBirth(null, (err, results) => {
    //       console.log(results)
    //       Alert.alert('DOB '+ results.age) 
    //     });

    //     // Weight Example
    //     AppleHealthKit.getLatestWeight(null, (err, results) => {
    //       console.log(results)
    //       Alert.alert('Weight '+ results.value.toFixed(2)) 
    //     });

    //     // Height Example
    //     AppleHealthKit.getLatestHeight(null, (err, results) => {
    //       console.log(results)
    //       Alert.alert('Height '+ results.value) 
    //     });
     
    // });
    }
  

    return (
        <View style={styles.container}>
        <ImageBackground source={require('../assets/images/login.png')} style={styles.image}>
        
        <KeyboardAvoidingView behavior="position">
           
           <View style={styles.box1}>
              <Image style={{width:400,height:200, resizeMode: 'contain', marginTop: 60}} source={require('../assets/images/demoUser.png')}/>
              <Text style={styles.headerText } >Welcome</Text>
           </View>
           <View><Text style={styles.subTitleText} >Sign In</Text></View>
           <View style={styles.box2}>
               <View style={{flexDirection:'row', position: 'relative'}}>
           <TextInput style={{width : '100%'}}
               label="Company Email"
               value={email}
               mode="outlined"
               autoCapitalize='none'
               onChangeText={text => setEmail(text)}
               />
               <Image
          style={{width:20,height:20, resizeMode: 'contain', marginLeft: 10, marginTop: 25, position:'absolute', right: 20, top:0}}
          source={require('../assets/icons/userEmail.png')}
        /> 
               </View>

           <View style={{flexDirection:'row' , position : 'relative'}}>
           <TextInput style={{width : '100%' }}
               label="Password"
               value={password}
               mode="outlined"
               secureTextEntry={true}
               onChangeText={text => setPassword(text)}
               />
               <Image
          style={{width:20,height:20, resizeMode: 'contain', marginLeft: 10, marginTop: 25 , position 
        : "absolute" ,right : 20 , top : 0}}
          source={require('../assets/icons/unhide.png')}
        /> 
        
               </View>
                <TouchableOpacity onPress={()=>getHealthData()}><Text style={{textAlign:"right", fontFamily:'CoHeadlineW23-ArabicRegular', 
        fontWeight:'100',
        color:'black'}}>Forgot your password?</Text></TouchableOpacity>

                
                <TouchableOpacity style={styles.buttonStyle} onPress={() => userLogin()
            
          }><Text  style={styles.buttonTextStyle}>Login</Text></TouchableOpacity>

<TouchableOpacity style={styles.buttonStyle} onPress={() => userLoginWithAzure()
            
        }><Text  style={styles.buttonTextStyle}>Login with Microsoft</Text></TouchableOpacity>
   
                <TouchableOpacity onPress={()=>navigation.navigate("Signup")}><Text style={{textAlign:"center", fontFamily:'CoHeadlineW23-ArabicRegular', 
        fontWeight:'bold',
        color:'black', fontSize: 18}}>Don't have an account?</Text></TouchableOpacity>
   
           </View>
          
       </KeyboardAvoidingView>

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
        fontSize:30,
        marginTop:1,
        marginLeft:40,
        fontFamily:'CoHeadlineW23-ArabicRegular', 
        fontWeight:'bold',
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
