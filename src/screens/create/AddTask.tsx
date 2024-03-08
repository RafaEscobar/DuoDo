import { Comfortaa_700Bold, Comfortaa_500Medium } from "@expo-google-fonts/comfortaa";
import { SelectList } from 'react-native-dropdown-select-list'
import { Text, View, TextInput, TouchableOpacity, Switch } from 'react-native';
import { todosData } from '../../data/todos';
import { useFonts } from 'expo-font';
import DateTimePicker from "@react-native-community/datetimepicker";
import React, { useState } from 'react'
import tw from 'twrnc';

export const AddTask = ({ navigation: { navigate } }: any) => {

  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [date, setDate] = useState(new Date())
  const [isToday, setIsToday] = useState(false)
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [isDatePickerVisible, setIsDatePickerVisible] = useState(false);
  const [select, setSelect] = useState([]);

  const [fontsLoaded] = useFonts({
    Comfortaa_700Bold,
    Comfortaa_500Medium
  });

  if (!fontsLoaded) {
    return null;
  }


  const handleDateChange = (event: any, selectedDate: Date | undefined) => {
    setSelectedDate(selectedDate);
    setIsDatePickerVisible(false); // Cerrar el DateTimePicker
  };

  return (
    <View style={tw`flex ml-6 mt-14 sm:ml-4 sm:mt-5`}>
      <TouchableOpacity
        onPress={() => { navigate('BottomTabNavigation') }}
      >
        <Text>Regresar</Text>
      </TouchableOpacity>
      <Text style={[tw`text-4xl mb-8 mt-2.5`, { fontFamily: "Comfortaa_700Bold" }]}>Crear Tarea</Text>
      <View>
        <Text style={[tw`leading-8 text-xl mt-1`, { fontFamily: "Comfortaa_700Bold" }]}>Nombre:</Text>
        <TextInput
          style={[tw`w-80 border-b border-gray-400 text-lg mb-5`, { fontFamily: "Comfortaa_700Bold" }]}
          placeholder="nombre de la tarea"
          onChangeText={(text) => { setName(text) }}
        />
      </View>
      <View>
        <Text style={[tw`leading-8 text-xl mt-1`, { fontFamily: "Comfortaa_700Bold" }]}>Descripcion:</Text>
        <TextInput
          style={[tw`w-80 border-b border-gray-400 text-lg mb-5`, { fontFamily: "Comfortaa_700Bold" }]}
          placeholder="descripcion de la tarea"
          onChangeText={(text) => { setDescription(text) }}
        />
      </View>
      <View style={tw`w-80`}>
        <Text style={[tw`leading-8 text-xl mt-1`, { fontFamily: "Comfortaa_700Bold" }]}>Asignar a:</Text>
        <SelectList
          data={todosData.map((item) => item.text)}
          setSelected={setSelect}
          save='value'
          search={false}
        />
      </View>
      <View style={tw`w-80`}>
        <Text style={[tw`leading-8 text-xl mt-3`, { fontFamily: "Comfortaa_700Bold" }]}>Prioridad:</Text>
        <SelectList
          data={todosData.map((item) => item.text)}
          setSelected={setSelect}
          save='value'
          search={false}
        />
      </View>
      <View>
        <Text style={[tw`leading-8 text-xl mt-4`, { fontFamily: "Comfortaa_700Bold" }]}>Fecha:</Text>
        <TouchableOpacity onPress={() => setIsDatePickerVisible(true)}>
          <TextInput
            style={[tw`w-80 border-b border-gray-400 text-lg mb-5`, { fontFamily: "Comfortaa_700Bold" }]}
            placeholder='Añadir fecha'
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
        <TouchableOpacity onPress={() => navigate('AllTask')} style={tw`bg-sky-500 p-3 w-50 rounded-xl`}>
          <Text style={[tw`text-center text-4xl`, {fontFamily: "Comfortaa_700Bold"}]}>Guardar</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}