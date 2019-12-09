import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const TaskItem = props => {
  return (
    <View style={styles.tasksItem}>
      <Text style={styles.tasksText}>{props.text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  tasksItem: {
    backgroundColor: '#3da4ab',
    paddingHorizontal: 20,
    paddingVertical: 13,
    marginVertical: 5,
    width: "100%",
    borderRadius: 10,
    borderColor: "#fe8a71",
    borderWidth: 1.5,
  },
  tasksText: {
    color: '#f6cd61',
    fontWeight: "700",
    fontSize: 20,
  },
});

export default TaskItem;