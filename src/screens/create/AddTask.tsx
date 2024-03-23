import { AntDesign } from '@expo/vector-icons';
import { AuthContext } from '../../context/AuthContext';
import { IndexPriorities } from '../../modules/requests/Priorities/IndexPriorities';
import { Poppins_400Regular, Poppins_700Bold } from "@expo-google-fonts/poppins";
import { SelectList } from 'react-native-dropdown-select-list'
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import { useFonts } from 'expo-font';
import DateTimePicker from "@react-native-community/datetimepicker";
import React, { useContext, useEffect, useState } from 'react'
import tw from 'twrnc';
import { IndexWorkspace } from '../../modules/requests/workspaces/IndexWorkspace';
import { StoreTask } from '../../modules/requests/Priorities/StoreTask';
import { PriorityMapper } from '../../mappers/Tasks/Index';
import { WorkspaceMapper } from '../../mappers/Tasks/WorkspaceMapper';

export const AddTask = ({ navigation: { navigate } }: any) => {

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [priorities, setPriorities] = useState([]);
  const [priority, setPriority] = useState('');
  const [workspaces, setWorkspaces] = useState([]);
  const [workspace, setWorkspace] = useState('');

  const { user, token, baseUrl }:any = useContext(AuthContext);

  const loadSelectData = async() => {
    let external_identifier = JSON.parse(user).external_identifier;
    let priorities_res = await IndexPriorities(token, baseUrl);
    let workspace_res = await IndexWorkspace(external_identifier, token, baseUrl);
    setPriorities(PriorityMapper(priorities_res));
    setWorkspaces(WorkspaceMapper(workspace_res.data));
  }

  const handleSaveTask = async() => {
    const response = await StoreTask(title, description, null, priority, workspace, date, token, baseUrl);
  }

  useEffect(() => {
    loadSelectData();
  }, []);

  // useEffect(() => {
  //   console.log(workspaces);
  // }, [workspaces]);

  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_700Bold
  });

  if (!fontsLoaded) {
    return null;
  }

  

  return (
    <View style={tw`bg-gray-900 h-full`}>
      <View style={tw`flex ml-4 mt-10 sm:ml-4 sm:mt-5`}>
        <View style={tw`flex flex-row items-center gap-5`}>
          <TouchableOpacity
            onPress={() => { navigate('BottomTabNavigation') }}
          >
            <AntDesign name="left" size={25} color="black" style={tw`bg-neutral-300 rounded-lg p-1`} />

          </TouchableOpacity>
          <Text style={[tw`text-xl text-center text-white`, { fontFamily: "Poppins_700Bold" }]}>Nueva Tarea</Text>
        </View>
        <View>
          <Text style={[tw`leading-8 text-2xl mt-10 text-white`, { fontFamily: "Poppins_700Bold" }]}>Nombre:</Text>
          <TextInput
            style={[tw`w-90 border-b border-gray-400 text-sm mb-5 text-white`, { fontFamily: "Poppins_400Regular" }]}
            placeholder="¿Qué deseas hacer?"
            placeholderTextColor={'#58b4ff'}
            onChangeText={(text) => { setTitle(text) }}
          />
        </View>
        <View>
          <Text style={[tw`leading-8 text-xl mt-2 text-white`, { fontFamily: "Poppins_700Bold" }]}>Descripción:</Text>
          <TextInput
            style={[tw`w-90 border-b border-gray-400 text-sm mb-5 text-white`, { fontFamily: "Poppins_400Regular" }]}
            placeholderTextColor={'#58b4ff'}
            placeholder='¿Qué detalles de la tarea debes recordar?'
            onChangeText={(text) => { setDescription(text) }}
            multiline={true}
            underlineColorAndroid={'transparent'}
            numberOfLines={4}
          />
        </View>
        <View style={tw`w-90`}>
          <Text style={[tw`leading-8 text-2xl mt-1 text-white`, { fontFamily: "Poppins_700Bold" }]}>Prioridad:</Text>
          <SelectList
            data={priorities}
            setSelected={(item:any) => setPriority(item)}
            save='key'
            search={false}
            inputStyles={tw`text-white`}
            dropdownTextStyles={tw`text-white`}
            fontFamily='Poppins_400Regular'
            placeholder='- Selecciona el nivel de prioridad -'
          />
        </View>
        <View style={tw`w-90`}>
          <Text style={[tw`leading-8 text-2xl mt-6 text-white`, { fontFamily: "Poppins_700Bold" }]}>Espacio de trabajo:</Text>
          <SelectList
            data={workspaces}
            setSelected={(item:any) => setWorkspace(item)}
            save='key'
            search={false}
            inputStyles={tw`text-white`}
            dropdownTextStyles={tw`text-white`}
            fontFamily='Poppins_400Regular'
            placeholder='- Selecciona el espacio de trabajo -'
          />
        </View>
        

        <View style={tw`mt-20 justify-center items-center`}>
          <TouchableOpacity onPress={handleSaveTask} style={tw`bg-sky-500 p-3 w-50 rounded-xl`}>
            <Text style={[tw`text-center text-2xl`, { fontFamily: "Poppins_700Bold" }]}>Guardar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}