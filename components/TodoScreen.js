import React, {useState, useEffect} from "react";
import {Button, Text, View, StyleSheet, ScrollView} from "react-native";

const TodoScreen = () => {
const [todo, setTodo] = useState([]);
const [isLoading, setIsLoading] = useState(true);

const fetchTodos = () => {
    fetch("https://jsonplaceholder.typicode.com/todos")
    .then((response) => response.json())
    .then((json) => setTodo(json))
    .catch((error) => console.error(error))
    .finally(() => setIsLoading(false))
}


    return (
      <ScrollView>
        <View style={styles.container}>
        <Text>Todo list</Text>
        <Button
          title="Get to do list"
          onPress={fetchTodos}
        />

        {
          todo.map((todos) => (
            <View>
              <Text>{todos.title}</Text>
            </View>
          ))
        }
      </View>
      </ScrollView>
      
    );
  } 

  //Local styling
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

  export default TodoScreen