import { AntDesign } from '@expo/vector-icons';
import { AuthContext } from '../../context/AuthContext';
import { IndexPriorities } from '../../modules/requests/Priorities/IndexPriorities';
import { Poppins_400Regular, Poppins_700Bold } from "@expo-google-fonts/poppins";
import { SelectList } from 'react-native-dropdown-select-list'
import { Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { useFonts } from 'expo-font';
import DateTimePicker from "@react-native-community/datetimepicker";
import React, { useContext, useEffect, useState } from 'react'
import tw from 'twrnc';
import { IndexWorkspace } from '../../modules/requests/workspaces/IndexWorkspace';
import { StoreTask } from '../../modules/requests/Priorities/StoreTask';
import { PriorityMapper } from '../../mappers/Tasks/Index';
import { WorkspaceMapper } from '../../mappers/Tasks/WorkspaceMapper';
import Checkbox from 'expo-checkbox';
import { IndexFriends } from '../../modules/requests/Friends/IndexFriends';
import { FriendListMapper } from '../../mappers/Friends/FriendListMapper';

export const AddTask = ({ navigation: { navigate } }: any) => {

  const [title, setTitle] = useState(null)
  const [description, setDescription] = useState(null)
  const [priorities, setPriorities] = useState([]);
  const [priority, setPriority] = useState(null);
  const [workspaces, setWorkspaces] = useState([]);
  const [workspace, setWorkspace] = useState(null);
  const [thereIsResponsable, setThereIsResponsable] = useState(false);

  const [date, setDate] = useState(null);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [isDatePickerVisible, setIsDatePickerVisible] = useState(false);
  const [friends, setFriends] = useState([]);
  const [time, setTime] = useState(null);
  const [selectedTime, setSelectedTime] = useState<Date | undefined>(undefined);
  const [isTimePickerVisible, setIsTimePickerVisible] = useState(false);

  const { user, token, baseUrl }:any = useContext(AuthContext);
  const currentUser = JSON.parse(user);

  const options = [
    {
      key: 1,
      value: 'Si'
    },
    {
      key: 2,
      value: 'No'
    }
  ];

  const loadSelectData = async() => {
    let external_identifier = JSON.parse(user).external_identifier;
    let priorities_res = await IndexPriorities(token, baseUrl);
    let workspace_res = await IndexWorkspace(external_identifier, token, baseUrl);
    setPriorities(PriorityMapper(priorities_res));
    setWorkspaces(WorkspaceMapper(workspace_res.body.data));
  }

  const handleSaveTask = async() => {
    if (title != null && description != null && priority != null && workspace != null && date != null && time != null) {
      let formatedDate = `${date} ${time}`;
      const response = await StoreTask(title, description, null, priority, workspace, formatedDate, token, baseUrl);
      console.log(response);
      // navigate('BottomTabNavigation');
    } else {
      console.log("Llena todos los campos.");
    }
  }

  const loadFriends = async() => {
    const friends_res = await IndexFriends(currentUser.external_identifier, token, baseUrl);
    setFriends(FriendListMapper(friends_res.body.data));
  }

  useEffect(() => {
    loadSelectData();
  }, []);

  useEffect(() => {
    console.log(thereIsResponsable);
  }, [thereIsResponsable]);

  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_700Bold
  });

  if (!fontsLoaded) {
    return null;
  }

  const buildDate = (date:any) => {
    return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
  }

  const buildTime = (date:any) => {
    return `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
  }

  const handleDateChange = (event: any, selectedDate: Date | undefined) => {
    setDate(buildDate(selectedDate));
    setSelectedDate(selectedDate);
    setIsDatePickerVisible(false);
  };

  const handleTimeChange = (event: any, selectedDate: Date | undefined) => {
    setTime(buildTime(selectedDate));
    setSelectedTime(selectedDate);
    setIsTimePickerVisible(false);
  };

  return (
    <ScrollView style={tw`h-full`}>
      <View style={tw`bg-gray-900 h-full pb-10`}>
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
              notFoundText="No tienes espacios de trabajo, crea uno antes."
            />
          </View>
          <View>
            <Text style={[tw`leading-8 text-xl mt-6 text-white`, { fontFamily: "Poppins_700Bold" }]}>¿Deseas asignar a alguien más esta tarea?</Text>
            <SelectList
              data={options}
              setSelected={(item:any) => setThereIsResponsable(item)}
              save='key'
              search={false}
              inputStyles={tw`text-white`}
              dropdownTextStyles={tw`text-white`}
              fontFamily='Poppins_400Regular'
              placeholder='- Elige una opción -'
              notFoundText="No tienes espacios de trabajo, crea uno antes."
            />
          </View>
          <View>
            <Text style={[tw`leading-8 text-xl mt-6 text-white`, { fontFamily: "Poppins_700Bold" }]}>Responsable</Text>
            <SelectList
              data={options}
              setSelected={(item:any) => setThereIsResponsable(item)}
              save='key'
              search={false}
              inputStyles={tw`text-white`}
              dropdownTextStyles={tw`text-white`}
              fontFamily='Poppins_400Regular'
              placeholder='- Elige una opción -'
              notFoundText="No tienes espacios de trabajo, crea uno antes."
            />
          </View>
          <View>
            <Text style={[tw`leading-8 text-2xl mt-6 text-white`, { fontFamily: "Poppins_700Bold" }]}>Fecha:</Text>
            <TouchableOpacity onPress={() => setIsDatePickerVisible(true)}>
              <TextInput
                style={[tw`w-90 border-b border-gray-400 text-sm mb-5 text-white`, { fontFamily: "Poppins_400Regular" }]}
                placeholder='Establecer fecha límite'
                placeholderTextColor={'#58b4ff'}
                value={date}
                editable={false}
              />
            </TouchableOpacity>
            {isDatePickerVisible && (
              <DateTimePicker
                value={selectedDate || new Date()}
                mode="date"
                display="default"
                onChange={handleDateChange}
              />
            )}
            <Text style={[tw`leading-8 text-2xl mt-2 text-white`, { fontFamily: "Poppins_700Bold" }]}>Hora:</Text>
            <TouchableOpacity onPress={() => setIsTimePickerVisible(true)}>
              <TextInput
                style={[tw`w-90 border-b border-gray-400 text-sm mb-5 text-white`, { fontFamily: "Poppins_400Regular" }]}
                placeholder='Establecer hora límite'
                placeholderTextColor={'#58b4ff'}
                value={time}
                editable={false}
              />
            </TouchableOpacity>
            {isTimePickerVisible && (
              <DateTimePicker
                value={selectedTime || new Date()}
                mode="time"
                display="default"
                onChange={handleTimeChange}
              />
            )}
          </View>
          <View style={tw`mt-10 justify-center items-center`}>
            <TouchableOpacity onPress={handleSaveTask} style={tw`bg-sky-500 p-3 w-50 rounded-xl text-white`}>
              <Text style={[tw`text-center text-2xl`, { fontFamily: "Poppins_700Bold" }]}>Guardar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}