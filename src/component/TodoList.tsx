import React from "react";
import { FlatList } from "react-native";
import { Todo } from "./Todo";

export const TodoList = (props:any) => {
    const { tasks } = props;
    console.log(tasks);
    return (
        <FlatList
            data={tasks}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) =>
                <Todo {...item} />
            }
        />
    );
}