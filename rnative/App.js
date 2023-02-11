import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {

  const [enteredGoalText, setEnteredGoalText] = useState("")
  const [goalList, setGoalList] = useState([])

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText)
  }

  function addGoalHandler() {
    setGoalList((currGoals) => [
      ...currGoals, 
      enteredGoalText
    ])
  }

  return (
    <View style = {styles.appContainer}>
      <View style = {styles.inputContainer}>
        <TextInput style = {styles.textInput} placeholder='your course goal...' onChangeText={goalInputHandler} />
        <Button title='Add Goal' onPress={addGoalHandler} />
      </View>
      <View style = {styles.goalsContainer}>
        {goalList.map(goal => <Text key = {goal}>{goal}</Text> )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },

  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc"
  },

  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    borderRadius: 5,
    padding:  10,
    width: '70%',
    marginRight: 8
  },

  goalsContainer: {
    flex: 6,
  }

});
