import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, FlatList, StyleSheet, Text, TextInput, View } from 'react-native';
interface ITodo {
  id: string,
  title: string
}
interface IItemProps {
  item: ITodo
}
const Item = ({ item }: IItemProps) => (
  <View style={styles.todoItem}>
    <Text style={styles.todoValue}>{`Title : ${item.title}`}</Text>
  </View>
);
export default function App() {
  const [listTodos, setListTodos] = useState<ITodo[]>([])
  const DATA: ITodo[] = [
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
      <TextInput
        style={styles.textInput}
        autoCapitalize='none'
        autoCorrect
      />
      <Button onPress={() => alert("hii")} title='New Todo' />
      <FlatList
        style={styles.todoTable}
        data={DATA}
        renderItem={({ item }) => <Item item={item} />}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
    display: 'flex',
    gap: 10
  },
  textInput: {
    borderColor: "pink",
    borderRadius: 10,
    borderWidth: 1,
    height: 40,
    padding: 10
  },
  todoItem: {
    margin: 10,
  },
  todoValue: {
    borderColor: "pink",
    borderRadius: 10,
    borderWidth: 1,
    height: 40,
    padding: 10
  },
  todoTable: {
    display: 'flex',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'pink'
  }
});
