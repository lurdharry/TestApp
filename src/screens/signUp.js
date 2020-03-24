import React, {Component} from 'react';
import {View, StyleSheet,TouchableOpacity,Text,Image,TextInput,ScrollView } from 'react-native';
import {widthPercentageToDP,heightPercentageToDP,} from 'react-native-responsive-screen'
import {hp,wp} from './signIn'

export default class SignUp extends Component {
  state={
    username:'',
    username_focus:false,
    password:'',
    password_focus:false,
    remember:false,
    email:'',
    email_focus:false,
    showModal:false
  }
  render() {
    return (
      <View style={styles.container}>

        <Image resizeMode='contain' style={styles.BgImage} source={require('../assets/images/BgImage.png')}/>
        <ScrollView style={styles.bottomView}>
            <Text style={styles.welcome}>Create your Account</Text>
            <Text>It’s free and easy to set up!</Text>
            {/* start of username input */}
            <View style={styles.usernameBox}>
                <Text>Username</Text>
                <View style={!this.state.username_focus?styles.blurForm:styles.focusedForm}>
                  <TextInput
                    style={{width:wp(250)}}
                    value={this.state.username}
                    onChangeText={(text)=>this.setState({username:text})}
                    onFocus={()=> this.setState({username_focus: true})}
                    onBlur={()=> this.setState({username_focus: false})}
                    ref={ (input) => {this.usernameInput = input }}
                    onSubmitEditing={()=>this.email.focus()}
                  />
                  {
                    this.state.username.length>1&&
                    <View style={styles.markView}>
                      <Image style={styles.mark} resizeMode='contain' source={require('../assets/images/mark.png')}/>
                    </View>
                  }
                </View>
            </View>
            {/* end of username input */}
            <TextInput
                  style={!this.state.email_focus?styles.blurForm:styles.focusedForm}
                  value={this.state.email}
                  placeholder='Email'
                  onChangeText={(text)=>this.setState({email:text})}
                  onFocus={()=> this.setState({email_focus: true})}
                  onBlur={()=> this.setState({email_focus: false})}
                  ref={ (input) => {this.email = input }}
                  onSubmitEditing={()=>this.passwordInput.focus()}

            />

            <TextInput
                  style={!this.state.password_focus?styles.blurForm:styles.focusedForm}
                  value={this.state.password}
                  placeholder='Password'
                  onChangeText={(text)=>this.setState({password:text})}
                  onFocus={()=> this.setState({password_focus: true})}
                  onBlur={()=> this.setState({password_focus: false})}
                  ref={ (input) => {this.passwordInput = input }}
            />

          {/* start of login Button */}
            <TouchableOpacity style={styles.loginButton}
                onPress={()=>this.setState({showModal:true})}
            >
                <Text style={styles.buttonText}>SIGNUP</Text>
            </TouchableOpacity>
          {/* end of login Button */}
          {/* start of existing user */}
          <View style={styles.new}>
              <Text style={styles.username}> Existing user?</Text>
              <TouchableOpacity onPress={()=>this.props.navigation.navigate('SignIn')}><Text style={styles.signUpText}>Signin</Text></TouchableOpacity>
          </View>
          {/* end of existing user */}
        </ScrollView>
        <View style={styles.bottomBox}/>

        {/* start of modal */}
        {
            this.state.showModal&&
            <View style={styles.modalContainer}>
                <View style={styles.modal}>
                    <View style={styles.rectangele}/>
                    <Image
                        resizeMode='contain'
                        style={styles.illustration}
                        source={require('../assets/images/illustration.png')}
                    />
                    <Text style={styles.defaultText}>Default Wallet Selection</Text>
                    <Text style={styles.instruction}>If you proceed, All cards transactions will be charged from the selected wallet.</Text>
                    <TouchableOpacity style={styles.confirmButton}>
                        <Text style={[styles.buttonText,{color:'#E25F38'}]}>CONFIRM</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>this.setState({showModal:false})} style={{alignSelf:'center',marginTop:hp(15)}}>
                        <Text style={styles.cancel}>Click here to cancel</Text>
                    </TouchableOpacity>
                </View>
            </View>
        }
        {/* end of modal */}


      </View>
    );
  }
}
const styles = StyleSheet.create({
    cancel:{
        color:'#E25F38',
        fontSize:hp(12)
    },
    confirmButton:{
        width:wp(326),
        alignItems:'center',
        justifyContent:'center',
        alignSelf:'center',
        height:(52/326)*wp(326),
        backgroundColor:'#FDF3F1',
        borderRadius:hp(4),
        marginTop:hp(30)
    },
    instruction:{
        marginHorizontal:wp(44),
        color:'#9DA8B6',
        opacity:.6,
        textAlign:'center',
        marginTop:hp(15)
    },
    defaultText:{
        alignSelf:'center',
        color:'#575A65',
        fontSize:hp(20),
        fontWeight:'500'
    },
    illustration:{
        width:wp(160),
        height:(120/160)*wp(160),
        alignSelf:'center',
        marginTop:hp(24)
    },
    rectangele:{
        alignSelf:'center',
        width:wp(36),
        height:(5/36)*wp(36),
        backgroundColor:'#E0E6ED',
        borderRadius:hp(10)
    },
    modal:{
        paddingTop:hp(15),
        top:hp(320),
        bottom:0,
        height:(450/375)*wp(375),
        backgroundColor:'#fff',
        borderTopLeftRadius:hp(35),
        borderTopRightRadius:hp(35)
    },
    modalContainer:{
        position:'absolute',
        height:'100%',
        width:'100%',
        // bottom:0,
        backgroundColor:'rgba(0, 0, 0, 0.2)'
    },
    markView:{
        alignItems:'center',
        justifyContent:'center',
        height:wp(16),
        width:wp(16),
        backgroundColor:'#73CC0B',
        marginRight:wp(10),
        borderRadius:wp(8)
      },
      mark:{
        width:wp(8.31),
        height:(5.82/8.31)*wp(8.31)
      },
  bottomBox:{
    width:wp(375),
    // alignSelf:'flex-end',
    position:'absolute',
    bottom:0,
    height:(50/375)*wp(375),
    backgroundColor:'#FDF3F1',
    marginTop:hp(20)
  },
  signUpText:{
    fontSize:hp(14),
    color:'#E25F38'
  },
  username:{
    fontSize:hp(14),
    color:'#4A4A4A'
  },
  new:{
    alignSelf:'center',
    flexDirection:'row'
  },
  buttonText:{
    color:'#fff',
    fontSize:hp(14),
    fontWeight:'500',
  },
  loginButton:{
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#E25F38',
    borderRadius:hp(9),
    marginTop:hp(30),
    marginBottom:hp(20),
    width:wp(300),
    height:(50/300)*wp(300),
  },
  forgot:{
    color:'#E25F38',
    marginLeft:wp(8),
    fontSize:hp(14),
    letterSpacing:wp(.28),
  },
  remText:{
    color:'#4A4A4A',
    marginLeft:wp(8),
    fontSize:hp(14),
    
    letterSpacing:wp(.28),
  },
  remember_false:{
    width:wp(13),
    height:wp(13),
    borderRadius:wp(6.5),
    borderColor:'#979797',
    backgroundColor:'#fff',
    borderWidth:1
  },
  remember_true:{
    width:wp(13),
    height:wp(13),
    borderRadius:wp(6.5),
    // borderColor:'#979797',
    backgroundColor:'#E25F38',
    // borderWidth:1
  },
  remfor:{
    marginTop:hp(26),
    flexDirection:'row',
    justifyContent:'space-between',

  },
  blurForm:{
    width:wp(305),
    borderBottomWidth:hp(1.5),
    // color:'#E25F38',
    fontSize:hp(14),
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center'
  },
  focusedForm:{
    width:wp(305),
    borderBottomWidth:hp(1.5),
    // borderColor:'#E25F38',
    fontSize:hp(14),
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center'  
  },
  usernameBox:{
    marginTop:hp(53),
    marginBottom:hp(25)
  },
  loginText:{
    color:'#4A4A4A',
    fontSize:hp(14),
    
    letterSpacing:wp(.28),
    marginTop:hp(8),
    fontWeight:'normal'
  },
  welcome:{
    fontStyle:'normal',
    fontWeight:'bold',
    fontSize:hp(26),
    letterSpacing:wp(.52)
  },
  bottomView:{
    paddingHorizontal:wp(37),
    marginTop:hp(220),
    flex:1
    // flex:1
    // paddingTop

  },
  BgImage:{
    position:'absolute',
    right:wp(-21),
    top:0,
    width:wp(220),
    height:wp(220)
  },
  imageContainer:{
    position:'absolute'
  },
  container: {
    // justifyContent: 'center',
    // alignItems: 'center',
    flex: 1,
    backgroundColor:'#fff'
  },
});