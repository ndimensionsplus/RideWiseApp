import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { OpenDrawer } from "../components";

class Settings extends React.Component {
  render() {
    const { navigation } = this.props;

    return (
      <View style={styles.container}>
        <OpenDrawer navigation={navigation} />
        <Text>Settings!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
});

export default Settings;
