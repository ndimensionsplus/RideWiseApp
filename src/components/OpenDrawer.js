import React from 'react';
import PropTypes from 'prop-types';
import { Text, TouchableOpacity, StyleSheet, Platform } from 'react-native';

//IOS : Font Family : Font Awesome 5 Free
//Android : Font Family : fontawesome
class OpenDrawer extends React.PureComponent {

  openDrawer = () => {
    this.props.navigation.openDrawer();
  }

  render() {
    return (
      <TouchableOpacity onPress={this.openDrawer} style={styles.iconBars}>
        <Text style={{ fontFamily: Platform.OS === 'android' ? 'fontawesome' : 'Font Awesome 5 Free', fontSize: 20 }}>&#xf0c9;</Text>
      </TouchableOpacity>
    );
  }
}

OpenDrawer.propTypes = {
  navigation: PropTypes.object
};

const styles = StyleSheet.create({
  iconBars: {
    ...StyleSheet.absoluteFill,
    left: 30,
    top: 50,
    width: 20,
    height:20,
    zIndex: 100
  },
});

export default OpenDrawer;
