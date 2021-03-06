import React, {Component} from 'react';
import {View, StyleSheet,TouchableOpacity,Text,Image,TextInput,ScrollView } from 'react-native';
import {widthPercentageToDP,heightPercentageToDP,} from 'react-native-responsive-screen'
import  {TTText,TRYText} from '../Components/customText'

export const hp = num => {
  return heightPercentageToDP((num / 812) * 100)
}

export const wp = num => {
  return widthPercentageToDP((num / 375) * 100)
}

export default class SignIn extends Component {
  state={
    username:'',
    username_focus:false,
    password:'',
    password_focus:false,
    remember:false
  }
  render() {
    return (
      <View style={styles.container}>

        <Image resizeMode='contain' style={styles.BgImage} source={require('../assets/images/BgImage.png')}/>
        <ScrollView style={styles.bottomView}>
            <TRYText style={styles.welcome}>Welcome Back!</TRYText>
            <TTText style={styles.loginText}>Login to your account</TTText>
            {/* start of username input */}
            <View style={styles.usernameBox}>
                <TTText style={styles.username}>Username</TTText>
                <View style={!this.state.username_focus?styles.blurForm:styles.focusedForm}>
                  <TextInput
                    style={{width:wp(200),fontFamily:'TTNorms',fontWeight:'500',color:'#4A4A4A',fontSize:hp(20)}}
                    value={this.state.username}
                    onChangeText={(text)=>this.setState({username:text})}
                    onFocus={()=> this.setState({username_focus: true})}
                    onBlur={()=> this.setState({username_focus: false})}
                    ref={ (input) => {this.usernameInput = input }}
                    onSubmitEditing={()=>this.passwordInput.focus()}
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
                  style={!this.state.password_focus?styles.blurForm:styles.focusedForm}
                  value={this.state.password}
                  placeholder='Password'
                  onChangeText={(text)=>this.setState({password:text})}
                  onFocus={()=> this.setState({password_focus: true})}
                  onBlur={()=> this.setState({password_focus: false})}
                  ref={ (input) => {this.passwordInput = input }}
            />
            <View style={styles.remfor}>
              <View style={{flexDirection:'row',alignItems:'center'}}>
                  <TouchableOpacity 
                    style={!this.state.remember?styles.remember_false:styles.remember_true} 
                    onPress={()=>this.setState({remember:!this.state.remember})}
                  />
                  <TTText style={styles.remText}>Remember me</TTText>
              </View>
              <TTText style={styles.forgot}>Forgot Password?</TTText>
            </View>
          {/* start of login Button */}
            <TouchableOpacity onPress={()=>this.props.navigation.navigate('Home')} style={styles.loginButton}>
                <TTText style={styles.buttonText}>LOGIN</TTText>
            </TouchableOpacity>
          {/* end of login Button */}
          {/* start of new user */}
          <View style={styles.new}>
              <TTText style={styles.username}>New user?</TTText>
              <TouchableOpacity onPress={()=>this.props.navigation.navigate('SignUp')}>
                <TTText style={styles.signUpText}>Signup</TTText>
              </TouchableOpacity>
          </View>
          {/* end of new user */}
        </ScrollView>
        <View style={styles.bottomBox}>

        </View>

      </View>
    );
  }
}
const styles = StyleSheet.create({
  markView:{
    alignItems:'center',
    justifyContent:'center',
    height:wp(16),
    width:wp(16),
    borderRadius:wp(8),
    marginRight:wp(10),

    backgroundColor:'#73CC0B'
  },
  mark:{
    width:wp(8.31),
    height:(5.82/8.31)*wp(8.31)
  },
  bottomBox:{
    width:wp(375),
    alignSelf:'flex-end',
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
    marginTop:hp(60),
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
    borderColor:'#EAEAEA',
    fontSize:hp(14),
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center'
  },
  focusedForm:{
    width:wp(305),
    borderBottomWidth:hp(1.5),
    borderColor:'#E25F38',
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

