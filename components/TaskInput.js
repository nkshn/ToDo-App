import React, { useState } from 'react';
import { Modal, Button, TextInput, View, StyleSheet } from 'react-native';

const TaskInput = props => {
  const [enteredTask, setEnteredTask] = useState('');
  const getTask = (enteredTask) => { setEnteredTask(enteredTask); }
  
  const addTaskHander = () => {
    props.addTask(enteredTask);
    setEnteredTask('');
  }

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputView}>
        <TextInput placeholder="Enter Task" style={styles.textInput} onChangeText = {getTask} />
        <View style={styles.buttonsView}>
          <View style={{width: '40%'}}><Button title="Add Task" color="green" onPress={addTaskHander} /></View>
          <View style={{width: '40%'}}><Button title="Close" color="red" onPress={props.cancelBtn} /></View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputView: {
    backgroundColor: 'grey',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    alignSelf: 'stretch',
    borderColor: '#fe8a71',
    borderBottomWidth: 1.5,
    paddingHorizontal: 5,
    paddingVertical: 3,
    fontSize: 19,
    fontWeight: '200',
    color: '#fe8a71',
    marginHorizontal: 25,
    marginBottom: 15,
  },
  buttonsView: {
    width: '60%',
    flexDirection: 'row-reverse',
    justifyContent: 'space-around',
  },
});

export default TaskInput;