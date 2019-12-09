import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const HeaderMain = props => {
  return (
    <View style={styles.headerView}>
      <Text style={styles.headerText}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerView: { marginBottom: 24, },
  headerText: {
    textAlign: "center",
    color: '#fe8a71',
    fontWeight: "900",
    fontSize: 35,
  },
});

export default HeaderMain;