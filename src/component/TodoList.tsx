import React from "react";
// import { todosData } from '../data/todos';
import { FlatList } from "react-native";
import { Todo } from "./Todo";
import tw from 'twrnc';

export const TodoList = ({ todosData }: any) => {
    return (
        <FlatList
            style={tw`h-[85%]`}
            data={todosData}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) =>
                <Todo {...item} />
            }
        />
    );
}