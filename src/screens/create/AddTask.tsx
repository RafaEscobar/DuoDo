import { SelectList } from 'react-native-dropdown-select-list'
import { Text, View, TextInput, TouchableOpacity, Switch } from 'react-native';
import { todosData } from '../../data/todos';
import { Poppins_400Regular, Poppins_700Bold } from "@expo-google-fonts/poppins";
import { useFonts } from 'expo-font';
import DateTimePicker from "@react-native-community/datetimepicker";
import React, { useContext, useEffect, useState } from 'react'
import tw from 'twrnc';
import { AntDesign } from '@expo/vector-icons';
import { AuthContext } from '../../context/AuthContext';
import { IndexPriorities } from '../../modules/requests/Priorities/IndexPriorities';

export const AddTask = ({ navigation: { navigate } }: any) => {

  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [date, setDate] = useState(new Date())
  const [isToday, setIsToday] = useState(false)
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [isDatePickerVisible, setIsDatePickerVisible] = useState(false);
  const [select, setSelect] = useState([]);
  const [priorities, setPriorities] = useState({});
  const [workspaces, setWorkspaces] = useState({});

  const { user, token, baseUrl }:any = useContext(AuthContext);

  const loadSelectData = async() => {
    let external_identifier = JSON.parse(user).external_identifier;
    let priorities_res = IndexPriorities(token, baseUrl);
    setPriorities(priorities_res);
  }

  useEffect(() => {
    loadSelectData();
    if (priorities.data) {
      priorities.data.map((nose:any) => {
        console.log(nose);
      });
    }
  }, []);

  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_700Bold
  });

  if (!fontsLoaded) {
    return null;
  }


  const handleDateChange = (event: any, selectedDate: Date | undefined) => {
    setSelectedDate(selectedDate);
    setIsDatePickerVisible(false); // Cerrar el DateTimePicker
  };

  return (
    <View style={tw`bg-gray-900 h-full`}>
      <View style={tw`flex ml-4 mt-10 sm:ml-4 sm:mt-5`}>
        <View style={tw`flex flex-row items-center gap-5`}>
          <TouchableOpacity
            onPress={() => { navigate('Task') }}
          >
            <AntDesign name="left" size={25} color="black" style={tw`bg-neutral-300 rounded-lg p-1`} />

          </TouchableOpacity>
          <Text style={[tw`text-2xl text-center text-white`, { fontFamily: "Poppins_700Bold" }]}>Crear Tarea</Text>
        </View>
        <View>
          <Text style={[tw`leading-8 text-2xl mt-10 text-white`, { fontFamily: "Poppins_700Bold" }]}>Nombre:</Text>
          <TextInput
            style={[tw`w-90 border-b border-gray-400 text-sm mb-5 text-white`, { fontFamily: "Poppins_400Regular" }]}
            placeholder="nombre de la tarea"
            placeholderTextColor={'#58b4ff'}
            onChangeText={(text) => { setName(text) }}
          />
        </View>
        <View>
          <Text style={[tw`leading-8 text-xl mt-2 text-white`, { fontFamily: "Poppins_700Bold" }]}>Descripcion:</Text>
          <TextInput
            style={[tw`w-90 border-b border-gray-400 text-sm mb-5 text-white`, { fontFamily: "Poppins_400Regular" }]}
            placeholder="descripcion de la tarea"
            placeholderTextColor={'#58b4ff'}
            onChangeText={(text) => { setDescription(text) }}
            multiline={true}
            underlineColorAndroid={'transparent'}
            numberOfLines={4}
          />
        </View>
        <View style={tw`w-90`}>
          <Text style={[tw`leading-8 text-2xl mt-1 text-white`, { fontFamily: "Poppins_700Bold" }]}>Asignar a:</Text>
          <SelectList
            data={priorities.data}
            setSelected={setPriorities}
            save='value'
            search={false}
            inputStyles={tw`text-white`}
            dropdownTextStyles={tw`text-white`}
            fontFamily='Poppins_400Regular'
          />
        </View>
        <View style={tw`w-90`}>
          <Text style={[tw`leading-8 text-2xl mt-6 text-white`, { fontFamily: "Poppins_700Bold" }]}>Prioridad:</Text>
          <SelectList
            data={todosData.map((item) => item.text)}
            setSelected={setSelect}
            save='value'
            search={false}
            inputStyles={tw`text-white`}
            dropdownTextStyles={tw`text-white`}
            fontFamily='Poppins_400Regular'
          />
        </View>
        <View>
          <Text style={[tw`leading-8 text-2xl mt-6 text-white`, { fontFamily: "Poppins_700Bold" }]}>Fecha:</Text>
          <TouchableOpacity onPress={() => setIsDatePickerVisible(true)}>
            <TextInput
              style={[tw`w-90 border-b border-gray-400 text-sm mb-5 text-white`, { fontFamily: "Poppins_400Regular" }]}
              placeholder='Añadir fecha'
              placeholderTextColor={'#58b4ff'}
              value={selectedDate?.toString() || ''}
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
        </View>
        <View style={tw`mt-20 justify-center items-center`}>
          <TouchableOpacity onPress={() => navigate('Task')} style={tw`bg-sky-500 p-3 w-50 rounded-xl`}>
            <Text style={[tw`text-center text-2xl`, { fontFamily: "Poppins_700Bold" }]}>Guardar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}