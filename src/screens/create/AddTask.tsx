import { ALERT_TYPE, AlertNotificationRoot } from 'react-native-alert-notification';
import { AntDesign } from '@expo/vector-icons';
import { AuthContext } from '../../context/AuthContext';
import { FriendSelectMapper } from '../../mappers/Friends/FriendSelectMapper';
import { IndexCollaborators } from '../../modules/requests/Collaborators/IndexCollaborators';
import { IndexPriorities } from '../../modules/requests/Priorities/IndexPriorities';
import { IndexWorkspace } from '../../modules/requests/workspaces/IndexWorkspace';
import { LoadingComponent } from '../../component/LoadingComponent';
import { Poppins_400Regular, Poppins_700Bold } from "@expo-google-fonts/poppins";
import { PriorityMapper } from '../../mappers/Tasks/Index';
import { SelectList } from 'react-native-dropdown-select-list'
import { StoreTask } from '../../modules/requests/Priorities/StoreTask';
import { Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { useAlert } from '../../hooks/useAlert';
import { useFonts } from 'expo-font';
import { WorkspaceMapper } from '../../mappers/Tasks/WorkspaceMapper';
import DateTimePicker from "@react-native-community/datetimepicker";
import React, { useContext, useEffect, useState } from 'react'
import tw from 'twrnc';

export const AddTask = ({ navigation: { navigate } }: any) => {

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('')
  const [priority, setPriority] = useState(null);
  const [workspace, setWorkspace] = useState(null);
  const [collaborator, setCollaborator] = useState(null);
  const [date, setDate] = useState(null);
  const [time, setTime] = useState(null);

  const [collaborators, setCollaborators] = useState([]);
  const [isDatePickerVisible, setIsDatePickerVisible] = useState(false);
  const [isTimePickerVisible, setIsTimePickerVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [priorities, setPriorities] = useState([]);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [selectedTime, setSelectedTime] = useState<Date | undefined>(undefined);
  const [workspaces, setWorkspaces] = useState([]);

  const [titleError, setTitleError] = useState('');
  const [descriptionError, setDescriptionError] = useState('');


  const { user, token, baseUrl }:any = useContext(AuthContext);
  const currentUser = JSON.parse(user);

  const loadSelectData = async() => {
    let external_identifier = JSON.parse(user).external_identifier;
    let priorities_res = await IndexPriorities(token, baseUrl);
    let workspace_res = await IndexWorkspace(external_identifier, token, baseUrl);
    setPriorities(PriorityMapper(priorities_res));
    setWorkspaces(WorkspaceMapper(workspace_res.body.data));
  }

  const handleSaveTask = async() => {
    validateTitle();
    validateDescription();
    if (title.length > 0 && description.length > 0 && priority != null && workspace != null && collaborator != null && date != null && time != null) {
      if (title.length >= 6) {
        if (description.length >= 8) {
          setLoading(true);
          let formatedDate = `${date} ${time}`;
          const response = await StoreTask(title, description, collaborator, priority, workspace, formatedDate, token, baseUrl);
          console.log(response.body.message)
          if (response.status == 200) {
            setLoading(false);
            useAlert(ALERT_TYPE.SUCCESS, 'Tarea creada 🎉', response.body.message);
            setTimeout(() => {
              navigate('BottomTabNavigation');
            }, 1000);
          }
        }
      }
    } else {
      useAlert(ALERT_TYPE.INFO, 'Campos faltantes', "Llena todos los campos por favor.");
    }
  }

  const loadCollaborators = async(item:any) => {
    if (item != null) {
      let response = await IndexCollaborators(item, token, baseUrl);
      setCollaborators(FriendSelectMapper(response.body.data));
    }
  }

  useEffect(() => {
    loadSelectData();
  }, []);

  // useEffect(() => {
  //   console.log(collaborators);
  // }, [collaborators]);

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

  const handleLoadData = async(item:any) => {
    setWorkspace(item);
    await loadCollaborators(item);
  }

  const validateTitle = () => {
    if (title.length < 6) {
      setTitleError('El titulo debe contener mínimo 6 caracteres.');
    } else {
      setTitleError('');
    }
  }

  const validateDescription = () => {
    if (description.length < 8) {
      setDescriptionError('La descripción debe contener mínimo 8 caracteres.');
    } else {
      setDescriptionError('');
    }
  }

  return (
    <AlertNotificationRoot>
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
                style={[tw`w-90 border-b border-gray-400 text-sm text-white`, { fontFamily: "Poppins_400Regular" }]}
                placeholder="¿Qué deseas hacer?"
                placeholderTextColor={'#58b4ff'}
                onChangeText={(text) => { setTitle(text) }}
                onEndEditing={validateTitle}
              />
              {titleError ? <Text style={tw`text-red-500 text-sm text-right font-bold`}>{titleError}</Text> : null}
            </View>
            <View>
              <Text style={[tw`leading-8 text-xl mt-6 text-white`, { fontFamily: "Poppins_700Bold" }]}>Descripción:</Text>
              <TextInput
                style={[tw`w-90 border-b border-gray-400 text-sm text-white`, { fontFamily: "Poppins_400Regular" }]}
                placeholderTextColor={'#58b4ff'}
                placeholder='¿Qué detalles de la tarea debes recordar?'
                onChangeText={(text) => { setDescription(text) }}
                multiline={true}
                underlineColorAndroid={'transparent'}
                numberOfLines={4}
                onEndEditing={validateDescription}
              />
              {descriptionError ? <Text style={tw`text-red-500 text-sm text-right font-bold`}>{descriptionError}</Text> : null}
            </View>
            <View style={tw`w-90`}>
              <Text style={[tw`leading-8 text-2xl mt-6 text-white`, { fontFamily: "Poppins_700Bold" }]}>Prioridad:</Text>
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
                setSelected={(item:any) => {
                  handleLoadData(item);
                }}
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
              <Text style={[tw`leading-8 text-xl mt-6 text-white`, { fontFamily: "Poppins_700Bold" }]}>Responsable</Text>
              <SelectList
                data={collaborators}
                setSelected={(item:any) => setCollaborator(item)}
                save='key'
                search={false}
                inputStyles={tw`text-white`}
                dropdownTextStyles={tw`text-white`}
                fontFamily='Poppins_400Regular'
                placeholder='- Elige una opción -'
                notFoundText="No tienes colaboradores en este espacio de trabajo."
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
        <LoadingComponent modalVisible={loading} modalText='Guardando...' />
      </ScrollView>
    </AlertNotificationRoot>
  )
}