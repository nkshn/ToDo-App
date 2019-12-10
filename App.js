import React, { useState } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';

import TaskItem from './components/TaskItem';
import HeaderItem from './components/HeaderItem';
import TaskInput from './components/TaskInput';

export default function App() {
  const [taskInList, setTaskInList] = useState([]);
 
  const outputAddTask = taskTitle => {
    setTaskInList(currentTask => [...currentTask, {id: Math.random().toString(), value: taskTitle}]);
  };
  const deleteTask = taskId => {
    setTaskInList(currentTask => {
      return currentTask.filter((task) => task.id !== taskId);
    })
  };

  return (
    <View style={styles.container}>
      <HeaderItem title="ToDo List" />
      <TaskInput addTask={outputAddTask} />
      <View style={styles.tasksView}>
        <FlatList
          keyExtractor={(item, index) => item.id}
          data={taskInList}
          renderItem={itemData => <TaskItem onDelete={deleteTask} id={itemData.item.id} text={itemData.item.value} />} />
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
    marginTop: 15,
    flex: 1,
    justifyContent: "flex-start",
    alignContent: "center",
  },
});