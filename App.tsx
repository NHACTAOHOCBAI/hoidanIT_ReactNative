import { useState } from 'react';
import { Button, FlatList, StyleSheet, Text, TextInput, View } from 'react-native';
import TodoInput from './components/todoList/todoInput';
import TodoTable from './components/todoList/todoTable';
interface IItemProps {
  item: ITodo
}
export default function App() {
  const [listTodos, setListTodos] = useState<ITodo[]>([])
  const todoData: ITodo[] = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
  ];
  return (
    <View style={styles.container}>
      <TodoInput />
      <TodoTable
        todoData={todoData}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
    display: 'flex',
    gap: 10
  }
});
