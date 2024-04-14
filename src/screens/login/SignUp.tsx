import { AntDesign } from '@expo/vector-icons';
import { Button, SafeAreaView, ScrollView } from "@gluestack-ui/themed";
import { FormControl, FormControlLabel, FormControlLabelText, Input, InputField } from '@gluestack-ui/themed';
import { Image } from "expo-image";
import { Poppins_700Bold, Poppins_400Regular } from "@expo-google-fonts/poppins";
import { RegisterRequest } from '../../modules/requests/RegisterRequest';
import { useFonts } from 'expo-font';
import { View, Text, Pressable, TextInput, Platform } from 'react-native'
import DateTimePicker from '@react-native-community/datetimepicker';
import React, { useContext, useState } from 'react'
import tw from 'twrnc';
import { AuthContext } from '../../context/AuthContext';
import { LoadingComponent } from '../../component/LoadingComponent';

export const SignUp = ({ navigation: { navigate } }: any) => {
  /**
   ** useState's
   */
  const [name, setName] = useState('');
  const [last_name, setLastName] = useState('');
  const [birthdate, setDateOfBirth] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [date, setDate] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);
  const [loading, setLoading] = useState(false);

  const {authUrl}:any = useContext(AuthContext);

  /**
   ** Variables
   */
  const [fontsLoaded] = useFonts({
    Poppins_700Bold,
    Poppins_400Regular
  });

  if (!fontsLoaded) {
    return null;
  }

  /**
   ** Function to validate the email
   * @returns void
   */
  const validateEmail = () => {
    const re = /\S+@\S+\.\S+/;
    if (!re.test(email)) {
      setEmailError('Formato de correo inválido');
    } else {
      setEmailError('');
    }
  }

  /**
   ** Function to validate the password
   * @returns void
   */
  const validatePassword = () => {
    if (password.length < 8) {
      setPasswordError('La contraseña debe tener al menos 8 caracteres');
    } else {
      setPasswordError('');
    }
  }

  /**
   ** Function to toggleDatepicker
   * @returns void
   */
  const toggleDatepicker = () => {
    setShowPicker(!showPicker);
  };

  /**
   ** Function to response on a change
   * @returns void
   */
  const onChange = ({ type }: any, selectedDate: any) => {
    if (type === "set") {
      const currentDate = selectedDate;
      setDate(currentDate);
      if (Platform.OS === 'android') {
        toggleDatepicker();
        setDateOfBirth(formatDate(currentDate));
      }
    } else {
      toggleDatepicker();
    }
  };

  /**
   ** Function to build the format date
   * @returns void
   */
  const formatDate = (date: Date) => {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${year}-${month}-${day}`;
  };

  const handleRegister = async() => {
    try {
      setLoading(true);
      await RegisterRequest(name, last_name, email, password, birthdate, authUrl);
      setLoading(false);
      navigate('Login');
    } catch (error) {
      // TODO: TRATAR ERROR
    }
  }

  return (
    <SafeAreaView style={tw`flex-1`}>
      <ScrollView style={tw`bg-[#271C3A] flex-1`}>
        <View style={tw`flex-1 items-center pt-15`}>
          <Button
            onPress={() => { navigate('Login') }}
            style={tw`absolute top-0 left-0 mt-13 ml-6 bg-neutral-300 p-1 rounded-xl hover:bg-orange-200 z-10`}
          >
            <AntDesign name="left" size={30} color="black" />
          </Button>
          <Image
            style={{ width: '80%', height: 160, alignSelf: "center", borderRadius: 20 }}
            source="https://kaihatsu-code.com/assets/logo_solid.png"
          />
          <Text style={[tw`text-3xl mt-3 text-white`, { fontFamily: "Poppins_700Bold" }]}>Registrar</Text>
          <View style={tw`flex justify-center items-center`}>
            <FormControl>
              <FormControlLabel>
                <FormControlLabelText style={[tw`text-base mt-4 text-white`, { fontFamily: "Poppins_700Bold" }]}>
                  Nombre
                </FormControlLabelText>
              </FormControlLabel>
              <Input>
                <InputField
                  value={name}
                  onChangeText={setName}
                  type='text'
                  placeholder='Admin'
                  style={[tw`rounded-xl bg-indigo-50 rounded-md p-2 w-80 mt-3 text-base text-black`, { fontFamily: "Poppins_400Regular" }]}
                />
              </Input>
              <FormControlLabel>
                <FormControlLabelText style={[tw`text-base mt-4 text-white`, { fontFamily: "Poppins_700Bold" }]}>
                  Apellidos
                </FormControlLabelText>
              </FormControlLabel>
              <Input>
                <InputField
                  value={last_name}
                  onChangeText={setLastName}
                  type='text'
                  placeholder="Admin DuoDo"
                  style={[tw`rounded-xl bg-indigo-50 rounded-md p-2 w-80 mt-3 text-base text-black`, { fontFamily: "Poppins_400Regular" }]}
                />
              </Input>

              <View>
                <Text style={[tw`text-base mt-4 text-white`, { fontFamily: "Poppins_700Bold" }]}>Fecha de nacimiento</Text>
                {showPicker && (
                  <DateTimePicker
                    mode="date"
                    value={date}
                    display="spinner"
                    onChange={onChange}
                  />
                )}
                {!showPicker && (
                  <Pressable
                    onPress={toggleDatepicker}
                  >
                    <TextInput
                      style={[tw`rounded-xl bg-indigo-50 rounded-md p-2 w-80 mt-3 text-sm text-black`, { fontFamily: "Poppins_400Regular" }]}
                      placeholder='Selecciona tu fecha de nacimiento'
                      value={birthdate}
                      editable={false}
                      onChangeText={setDateOfBirth}
                    >
                    </TextInput>
                  </Pressable>
                )}
              </View>

              <FormControlLabel>
                <FormControlLabelText style={[tw`text-base mt-4 text-white`, { fontFamily: "Poppins_700Bold" }]}>
                  Correo electrónico
                </FormControlLabelText>
              </FormControlLabel>
              <Input>
                <InputField
                  onChangeText={setEmail}
                  onEndEditing={validateEmail}
                  value={email}
                  keyboardType="email-address"
                  placeholder="admin@duo.com"
                  style={[tw`rounded-xl bg-indigo-50 rounded-md p-2 w-80 mt-3 text-base text-black`, { fontFamily: "Poppins_400Regular" }]}
                />
                {emailError ? <Text style={tw`text-red-500 text-sm mt-1 text-right font-bold`}>{emailError}</Text> : null}
              </Input>
              <FormControlLabel>
                <FormControlLabelText style={[tw`text-base mt-4 text-white`, { fontFamily: "Poppins_700Bold" }]}>
                  Contraseña
                </FormControlLabelText>
              </FormControlLabel>
              <Input>
                <InputField
                  onChangeText={setPassword}
                  onEndEditing={validatePassword}
                  value={password}
                  placeholder="*********"
                  secureTextEntry
                  style={tw`rounded-xl bg-indigo-50 rounded-md p-2 w-80 mt-3 text-base text-black`}
                />
                {passwordError ? <Text style={tw`text-red-500 text-sm mt-1 text-right font-bold`}>{passwordError}</Text> : null}
              </Input>
            </FormControl>
            <Button
              onPress={() => handleRegister()} style={[tw`flex justify-center items-center mt-4`]}>
              <Text style={[tw`text-center text-2xl bg-indigo-500 p-2 rounded-2xl w-64 text-white`, { fontFamily: "Poppins_700Bold" }]}>Registrarme</Text>
            </Button>
          </View>
        </View>
        <LoadingComponent
          modalVisible={loading}
          modalText='Registrando'
        />
      </ScrollView>
    </SafeAreaView>
  )
}