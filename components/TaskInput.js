import React, { useState } from 'react';
import { Modal, Button, TextInput, View, StyleSheet } from 'react-native';

const TaskInput = props => {
  const [enteredTask, setEnteredTask] = useState('');
  const getTask = (enteredTask) => { setEnteredTask(enteredTask); }

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputView}>
        <TextInput placeholder="Enter Task" style={styles.textInput} onChangeText = {getTask} />
        <Button title="Add Task" color="green" style={styles.buttonAdd} onPress={() => props.addTask(enteredTask)} />
        <Button title="Close" color="red" style={styles.buttonClose}/>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputView: {
    // backgroundColor: 'red',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    flex: 1,
    borderColor: '#fe8a71',
    borderBottomWidth: 1.5,
    paddingHorizontal: 5,
    paddingVertical: 3,
    fontSize: 19,
    fontWeight: '200',
    color: '#fe8a71',
    marginRight: 20,
    width: 100,
  },
  buttonAdd: {},
  buttonClose: {},
});

export default TaskInput;