import React, { useState } from 'react';
import { Button, TextInput, View, StyleSheet } from 'react-native';

const TaskInput = props => {
  const [enteredTask, setEnteredTask] = useState('');
  const getTask = (enteredTask) => { setEnteredTask(enteredTask); }

  return (
    <View style={styles.inputView}>
      <TextInput placeholder="Enter Task" style={styles.textInput} onChangeText = {getTask} />
      <Button title="Add Task" style={styles.buttonAdd} onPress={() => props.qwerty(enteredTask)} />
    </View>
  );
};

const styles = StyleSheet.create({
  inputView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  textInput: {
    flex: 2,
    borderColor: '#fe8a71',
    borderBottomWidth: 1.5,
    paddingHorizontal: 5,
    paddingVertical: 3,
    fontSize: 19,
    fontWeight: '200',
    color: '#fe8a71',
    marginRight: 20,
  },
  buttonAdd: {
    flex: 1,
  },
});

export default TaskInput;