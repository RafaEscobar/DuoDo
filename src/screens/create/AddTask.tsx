import { Text, View, TextInput, TouchableOpacity, Switch } from 'react-native';
import React, { useState } from 'react'
import tw from 'twrnc';
import { Comfortaa_700Bold, Comfortaa_500Medium } from "@expo-google-fonts/comfortaa";
import { useFonts } from 'expo-font';
import DateTimePicker from "@react-native-community/datetimepicker";


export const AddTask = () => {

  const [fontsLoaded] = useFonts({
    Comfortaa_700Bold,
    Comfortaa_500Medium
  });

  if (!fontsLoaded) {
    return null;
  }

  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [date, setDate] = useState(new Date())
  const [isToday, setIsToday] = useState(false)

  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [isDatePickerVisible, setIsDatePickerVisible] = useState(false);

  const handleDateChange = (event: any, selectedDate: Date | undefined) => {
    setSelectedDate(selectedDate);
    setIsDatePickerVisible(false); // Cerrar el DateTimePicker
  };

  return (
    <View style={tw`flex ml-6 mt-14 sm:ml-4 sm:mt-5`}>
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
      <View>
        <Text style={[tw`leading-8 text-xl mt-1`, { fontFamily: "Comfortaa_700Bold" }]}>Asignar a:</Text>
        <TextInput
          style={[tw`w-80 border-b border-gray-400 text-lg mb-5`, { fontFamily: "Comfortaa_700Bold" }]}
          placeholder="select"
          onChangeText={(text) => { setName(text) }}
        />
      </View>
      <View>
        <Text style={[tw`leading-8 text-xl mt-1`, { fontFamily: "Comfortaa_700Bold" }]}>Prioridad:</Text>
        <TextInput
          style={[tw`w-80 border-b border-gray-400 text-lg mb-5`, { fontFamily: "Comfortaa_700Bold" }]}
          placeholder="select"
          onChangeText={(text) => { setName(text) }}
        />
      </View>
      <View>
        <Text style={[tw`leading-8 text-xl mt-1`, { fontFamily: "Comfortaa_700Bold" }]}>Fecha:</Text>
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
      <View style={tw`flex-row pb-4 justify-around items-center w-70`}>
        <View>
          <Text style={[tw`text-2xl `, { fontFamily: "Comfortaa_700Bold" }]}>Hoy</Text>
         <Text style={[tw`text-sm w-60`, { fontFamily: "Comfortaa_700Bold" }]}>Si desactivas hoy, la tarea se considerará mañana.</Text>
        </View>

        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isToday ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={() => setIsToday(!isToday)}
          value={isToday}
        />
      </View>
      <View style={tw`mt-10 justify-center items-center`}>
        <TouchableOpacity style={tw`bg-sky-500 p-4 w-50 rounded-xl`}>
          <Text style={tw`text-center`}>Guardar</Text>
        </TouchableOpacity>

      </View>
    </View>
  )
}