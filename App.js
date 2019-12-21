import React, { useState } from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native';

import TaskItem from './components/TaskItem';
import HeaderItem from './components/HeaderItem';
import TaskInput from './components/TaskInput';

export default function App() {
  const [taskInList, setTaskInList] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  const addTaskHandler = taskTitle => {
    if(taskTitle == 0) {
      return;
    }
    setTaskInList(currentTask => [...currentTask, {id: Math.random().toString(), value: taskTitle}]);
    setModalVisible(false);
  };
  const deleteTaskHandler = taskId => {
    setTaskInList(currentTask => {
      return currentTask.filter((task) => task.id !== taskId);
    })
  };

  const cancelButtonCloseModal = () => {
    setModalVisible(false);
  }

  return (
    <View style={styles.container}>
      <HeaderItem title="ToDo List" />
      <Button title="Plusik" color="purple" onPress={() => {setModalVisible(true)}} />
      <TaskInput visible={modalVisible} addTask={addTaskHandler} cancelBtn={cancelButtonCloseModal} />
      <View style={styles.tasksView}>
        <FlatList
          keyExtractor={(item, index) => item.id}
          data={taskInList}
          renderItem={itemData => <TaskItem onDelete={deleteTaskHandler} id={itemData.item.id} text={itemData.item.value}/>} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 55,
    paddingHorizontal: 20,
    backgroundColor: '#4a4e4d',
  },
  tasksView: {
    flex: 1,
    marginTop: 15,
    justifyContent: "flex-start",
    alignContent: "center",
  },
});