import React, {Component} from 'react';
import {View, StyleSheet,TouchableOpacity,Text,Image,TextInput,ScrollView } from 'react-native';
import {widthPercentageToDP,heightPercentageToDP,} from 'react-native-responsive-screen'

export const hp = num => {
  return heightPercentageToDP((num / 812) * 100)
}

export const wp = num => {
  return widthPercentageToDP((num / 375) * 100)
}
export default class SignUp extends Component {
  state={
    username:'',
    username_focus:false,
    password:'',
    password_focus:false,
    remember:false,
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
                    onSubmitEditing={()=>this.passwordInput.focus()}
                  />
                  {
                    this.state.username.length>1&&
                    <Image style={styles.mark} resizeMode='contain' source={require('../assets/images/mark.png')}/>
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
                  <Text style={styles.remText}>Remember me</Text>
              </View>
              <Text style={styles.forgot}>Forgot Password?</Text>
            </View>
          {/* start of login Button */}
            <TouchableOpacity style={styles.loginButton}>
                <Text style={styles.buttonText}>SIGNUP</Text>
            </TouchableOpacity>
          {/* end of login Button */}
          {/* start of new user */}
          <View style={styles.new}>
              <Text style={styles.username}> Existing user?</Text>
              <TouchableOpacity onPress={()=>this.props.navigation.navigate('SignIn')}><Text style={styles.signUpText}>Signin</Text></TouchableOpacity>
          </View>
          {/* end of new user */}
        </ScrollView>
        <View style={styles.bottomBox}/>

        {/* start of modal */}
        {
            this.state.showModal&&
            <View style={styles.modalContainer}>
                <View style={styles.modal}>

                </View>
            </View>
        }
        {/* end of modal */}


      </View>
    );
  }
}
const styles = StyleSheet.create({
    modal:{
        position:'absolute',
        top:hp(380),
        bottom:0,
        backgroundColor:'#fff',
        borderTopLeftRadius:hp(35),
        borderTopRightRadius:hp(35)
    },
    modalContainer:{
        height:'100%',
        width:'100%',
        color:'rgba(0, 0, 0, 0.2)'
    },
  mark:{
    width:wp(16),
    height:wp(16)
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
    color:'#E25F38',
    fontSize:hp(24),
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center'
  },
  focusedForm:{
    width:wp(305),
    borderBottomWidth:hp(1.5),
    borderColor:'#E25F38',
    fontSize:hp(24),
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