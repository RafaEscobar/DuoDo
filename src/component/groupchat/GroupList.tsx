import React, { useState } from 'react'
import { View, Text, FlatList } from 'react-native'
import { GroupChat } from './GroupChat'
import { userData } from '../../data/user'
import tw from 'twrnc';
import { Input, InputField } from '@gluestack-ui/themed';
import { FontAwesome } from '@expo/vector-icons';

export const GroupList = () => {

    const [searchText, setSearchText] = useState('');

    const filteredData = userData.filter(item => item.name.toLowerCase().includes(searchText.toLowerCase()));

    return (
        <View>
            <View style={tw`flex justify-center items-center mt-2`}>
                <Input style={tw`bg-neutral-200 w-60 p-2 rounded-full flex flex-row gap-2`}>
                    <FontAwesome name="search" size={24} color="black" />
                    <InputField placeholder="Buscar amigo..." onChangeText={text => setSearchText(text)} />
                </Input>
            </View>
            <FlatList
                data={filteredData}
                scrollEventThrottle={16}
                showsVerticalScrollIndicator={false}
                decelerationRate={3}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => <GroupChat {...item} />}
            />

        </View>
    )
}