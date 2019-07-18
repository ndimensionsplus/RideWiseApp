import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, SafeAreaView, ScrollView, Dimensions, Consta } from 'react-native';

class WhereTo extends React.Component {
  
  goBack = () => {
    this.props.navigation.navigate('Home')
  }

  render() {
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: '#ebebeb'}}>
        <View style={styles.container}>
          <View>
            <TouchableOpacity onPress={this.goBack}>
              <Text style={{ fontFamily: Platform.OS === 'android' ? 'fontawesome' : 'Font Awesome 5 Free', fontSize: 20 }}>&#xf104;</Text>
            </TouchableOpacity>
          </View>
          <View style={{flex: 1, paddingTop: 20}}>
            <Text>Where To</Text>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
});

export default WhereTo;
