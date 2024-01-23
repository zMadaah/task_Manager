/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {
  KeyboardAvoidingView, 
  StyleSheet, 
  Text, 
  View, 
  TextInput, 
  TouchableOpacity, 
  Keyboard,
  ScrollView,
  Platform
} from 'react-native';
import Task from './Components/Task';


function App() {
  const [task, setTask] = useState('');
  const [taskItems, setTaskItems] = useState([]);

  const handleAddTask = () =>{
    Keyboard.dismiss();
    setTaskItems([...taskItems, task])
    setTask(null);
  }


  const completeTask = (index)=>{
    let itemsCopy = ([...taskItems,task])
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);

  }

  return (
    <View style={style.container}>
      {/*Adicionar um scrollView pra quando a lista ficar grande*/}
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1
        }}
        keyboardShouldPersistTaps='handled'
      >

        {/* Task do dia */}
        <View style={style.tasksWrapper}>
          <Text style={style.sectionTitle}>Today's Task </Text>

          <View style={style.items}>
            {/*Aqui onde as task vão aparecer */}
            {
            taskItems.map((item, index) => {
              return (
                <TouchableOpacity key={index}  onPress={() => completeTask(index)}>
                  <Task text={item} /> 
                </TouchableOpacity>
              )
            })
          }
            {/*<Task text={'Task 1'}/>
            <Task text={'Task 2'}/>
            <Task text={'Task 3'}/>*/}

          </View>

        </View>

        {/*Escrecer a task*/}
        <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={style.writeTaskWrapper}
        >
          <TextInput style={style.input} placeholder={'Adicionar tarefa'} value={task}  onChangeText={text => setTask(text)}/>
          <TouchableOpacity onPress={() => handleAddTask()}>
            <View style={style.addWrapper}>
              <Text style={style.addText}>+</Text>
            </View>
          </TouchableOpacity>

        </KeyboardAvoidingView>

      </ScrollView>
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  tasksWrapper: {
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    paddingTop: 20,
  },
  items: {
    marginTop: 30,
  },
  writeTaskWrapper: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#FFF',
    borderRadius: 60,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    width: 250,
    marginLeft:20,
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#FFF',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C0C0C0',
    borderWidth: 1,
  },
  addText: {},
});


export default App;
