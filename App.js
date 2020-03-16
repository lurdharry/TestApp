import React, {Component} from 'react'
import {SafeAreaView, StyleSheet, StatusBar} from 'react-native';
// import 'react-native-gesture-handler';
// import SplashScreen from 'react-native-splash-screen'

import AuthNav from './src/navigation/index'

class App extends Component {

  render () {
  
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar   barStyle='light-content' />
          <AuthNav />
      </SafeAreaView>
    )
  }
}
export default App
export const toMoney =(num)=>{
  return  num.toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
  }
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
