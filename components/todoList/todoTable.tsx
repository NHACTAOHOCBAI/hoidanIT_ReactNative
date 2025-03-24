import { FlatList, StyleSheet, Text, View } from "react-native"
interface IItemProps {
    item: ITodo
}
const Item = ({ item }: IItemProps) => (
    <View style={styles.todoItem}>
        <Text style={styles.todoValue}>{`Title : ${item.title}`}</Text>
    </View>
);
interface ITodoTableProps {
    todoData: ITodo[]
}
const TodoTable = ({ todoData }: ITodoTableProps) => {
    return (
        <>
            <FlatList
                style={styles.todoTable}
                data={todoData}
                renderItem={({ item }) => <Item item={item} />}
                keyExtractor={item => item.id}
            />
        </>
    )
}
export default TodoTable
const styles = StyleSheet.create({
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
