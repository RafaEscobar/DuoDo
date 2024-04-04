import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { Agenda } from 'react-native-calendars';

export const Calendar = () => {
    const [items, setItems] = useState({});

    const loadItems = (day) => {
        setTimeout(() => {
            for (let i = -15; i < 85; i++) {
                const time = day.timestamp + i * 24 * 60 * 60 * 1000;
                const strTime = new Date(time).toISOString().split('T')[0];
                if (!items[strTime]) {
                    items[strTime] = [];
                    const numItems = Math.floor(Math.random() * 5);
                    for (let j = 0; j < numItems; j++) {
                        items[strTime].push({
                            name: 'Item for ' + strTime + ' #' + j,
                            height: Math.max(50, Math.floor(Math.random() * 150))
                        });
                    }
                }
            }
            const newItems = {};
            Object.keys(items).forEach(key => { newItems[key] = items[key]; });
            setItems(newItems);
        }, 1000);
    };

    const renderItem = (item: any) => {
        return (
            <View>
                <Text>{item.name}</Text>
            </View>
        );
    }

    return (
        <View style={{ flex: 1, paddingTop: 30 }}>
            <Agenda
                items={items}
                loadItemsForMonth={loadItems}
                selected={'2022-05-16'}
                renderItem={renderItem}
            />
        </View>
    );
};

