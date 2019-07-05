import React, { Component } from 'react';
import { StyleSheet, View, ScrollView, ImageBackground, Button, Text, Alert, TouchableOpacity } from 'react-native';
import { Font, Constants } from 'expo';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navshow: false
    };
  }
  toggleLeftNav = () => {
    Alert.alert('You tapped the button!');
    this.setState({navshow: !this.state.navshow});
  }
  componentDidMount() {
    Font.loadAsync({
      'Font Awesome': require('./assets/fonts/fontawesome.otf')
    });
  }
  render() {
    const { navshow } = this.state;

    return (
      <View style={styles.container}>
        <View style={styles.navside(navshow)} collapsable={true} />
        <View style={styles.navsidemask(navshow)} collapsable={true} />

        <TouchableOpacity onPress={this.toggleLeftNav}>
          <View style={{left: 30, top: 50}}>
            <Text style={{ fontFamily: 'Font Awesome', fontSize: 20}}>&#xf0c9;</Text>
          </View>
        </TouchableOpacity>
        <ScrollView style={styles.contentbody}>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    //paddingTop: Constants.statusBarHeight,
  },
  navside: (show) => ({
    ...StyleSheet.absoluteFill,
    width: '70%',
    height: '100%',
    backgroundColor: 'black',
    zIndex: 100,
    display: show ? '' : 'none'
  }),
  navsidemask: (show) => ({
    ...StyleSheet.absoluteFill,
    width: '100%',
    height: '100%',
    backgroundColor: 'grey',
    zIndex: 95,
    opacity: 0.3,
    display: show ? '' : 'none'
  }),
  contentbody: {
    color: 'black',
  },
});
