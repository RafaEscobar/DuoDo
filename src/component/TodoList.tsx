import React from "react";
// import { todosData } from '../data/todos';
import { View, Text, FlatList } from "react-native";
import { Todo } from "./Todo";

export const TodoList = ({todosData}: any) => {
    return (
        <FlatList
            data={todosData}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => <Todo {...item}/>} 
        />
    );
}