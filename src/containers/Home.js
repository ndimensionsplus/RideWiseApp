import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import MapView from 'react-native-maps';
import { OpenDrawer } from "../components";

class Home extends React.Component {

  onWhereTo = () => {
    this.props.navigation.navigate('Where To');
  }

  render() {
    const { navigation } = this.props;
    
    return (
      <View style={styles.container}>
        <View style={{flex: 2}}>
          <MapView
            style={{...StyleSheet.absoluteFillObject, zIndex:90}}
            initialRegion={{
              latitude: 37.78825,
              longitude: -122.4324,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
          />
          <OpenDrawer navigation={navigation} />
        </View>
        <View style={{flex: 1, margin: 20}}>
          <TouchableOpacity onPress={this.onWhereTo} style={styles.whereToButton}>
            <View>
              <Text>Where To</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  whereToButton: {
    borderWidth: 1,
    borderStyle: 'solid',
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderRadius: 5
  }
});

export default Home;
