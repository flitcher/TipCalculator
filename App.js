/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, Picker,StyleSheet, Text, TextInput, View, Item} from 'react-native';

// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload, Cmd+D or shake for dev menu',
//   android:
//     'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu buttonsdsdsdsd for dev menu',
// });

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: "",
      value: "",
    }

    // required to access "this" state field    
    this.onChangeText = this.onChangeText.bind(this)
    this.onChangeSatisfaction = this.onChangeSatisfaction.bind(this)
  }


  onChangeText(newText) {
    this.setState({
      value: newText
    })
    if(this.state.selected !== "") {
      this.calculateTips()
    }
  }

  onChangeSatisfaction(satisfaction) {
    this.setState({
      selected: satisfaction
    })
    if(this.state.value !== "") {
      console.log(this.state.selected)
      this.calculateTips()
    }
  }

  handleTips(newTips) {
    console.log("you should tip" + newTips)
    this.setState({
      tips: newTips
    })
  }

  calculateTips = () => {
    switch(this.state.selected) {
      
      case "not happy":
        return("Get up and leave")
      break;
      case "satisfactory":
        return('' + (parseFloat(this.state.value) * 0.05).toFixed(2))
      break;
      case "happy":
        return('' + (parseFloat(this.state.value) * 0.1).toFixed(2)) 
      break;
      case "":
        return('')
    }
    // if(this.satisfaction === "not happy") {
    //   return "0"
    // } else if (this.satisfaction === "satisfactory") {
    //   return '' + (parseInt(this.value) / 2)
    // } else if (this.satisfaction === "happy") {
    //   return '' + (parseFloat(this.value) * 1.12)
    // }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Tip Calculator</Text>
        <Text style={styles.instructions}>How much was your total bill?</Text>
        <TextInput 
          style = {styles.textInputStyle} 
          placeholder = "Amount"
          keyboardType = {'numeric'}
          maxLength = {10}
          onChangeText = {this.onChangeText}
          />
          
        <View>
          <Text style={styles.instructions}>How would you rate your service?</Text>

          <Picker selectedValue = {this.state.selected}
            onValueChange={this.onChangeSatisfaction}>
            <Picker.Item label = {"Not happy"} value = {"not happy"}/>
            <Picker.Item label = {"Satisfactory"} value = {"satisfactory"}/>
            <Picker.Item label = {"Happy"} value = {"happy"}/>
          </Picker>
        </View>
      
      {/* <Text style = {styles.instructions}>You should tip {"\"} {this.state.tips} </Text> */}
      <Text style = {styles.welcome}> {this.calculateTips()}</Text>
      
      </View>
    );
  }
}

const styles = StyleSheet.create({

  container: {
    // paddingTop: ,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 30,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    fontSize: 15,
    textAlign: 'center',
    color: '#333333',
    // marginBottom: 5,
  },
  textInputStyle: {
    textAlign: 'center',
    height: 40,
    marginBottom: 10,
    marginTop: 10
  }
});
