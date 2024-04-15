import { ALERT_TYPE, AlertNotificationRoot, Toast } from 'react-native-alert-notification';
import { AntDesign } from '@expo/vector-icons';
import { AuthContext } from '../../context/AuthContext';
import { Button, SafeAreaView, ScrollView } from "@gluestack-ui/themed";
import { FormControl, FormControlLabel, FormControlLabelText, Input, InputField } from '@gluestack-ui/themed';
import { Image } from "expo-image";
import { LoadingComponent } from '../../component/LoadingComponent';
import { Poppins_700Bold, Poppins_600SemiBold } from "@expo-google-fonts/poppins";
import { RegisterRequest } from '../../modules/requests/RegisterRequest';
import { useFonts } from 'expo-font';
import { View, Text, Pressable, TextInput, Platform, TouchableOpacity } from 'react-native'
import DateTimePicker from '@react-native-community/datetimepicker';
import React, { useContext, useState } from 'react'
import tw from 'twrnc';
import { useAlert } from '../../hooks/useAlert';

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
  const [nameError, setNameError] = useState('');
  const [lastNameError, setLastNameError] = useState('');
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
   ** Function to validate the email
   * @returns void
   */
   const validateName = () => {
    if (name.length < 4) {
      setNameError('El nombre debe tener por lo menos 4 caracteres');
    } else {
      setNameError('');
    }
  }

  /**
   ** Function to validate the email
   * @returns void
   */
   const validateLastName = () => {
    if (last_name.length < 4) {
      setLastNameError('Los apellidos deben tener por lo menos 4 caracteres');
    } else {
      setLastNameError('');
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
      if ( name.length>0 && last_name.length>0 && email.length>0 && password.length>0 && birthdate.length>0 ) {
        const response = await RegisterRequest(name, last_name, email, password, birthdate, authUrl);
        setLoading(false);
        console.log(response);
        if (response.status == 201) {
          useAlert(ALERT_TYPE.SUCCESS, 'Registro', 'Cuenta creada con exito 🎉🎉');
          setTimeout(() => {
            navigate('Login');
          }, 1000);
        } else {
          if (response.status == 422) {
            if (response.body.message == 'The email has already been taken.') {
              useAlert(ALERT_TYPE.WARNING, 'Correo previamente usado', 'El correo electrónico que proporcionaste ya ha sido utilizado.');
            } else {
              useAlert(ALERT_TYPE.WARNING, 'Hay un problema...', 'Revisa el formato de los datos que indicaste.');
            }
          } else {
            useAlert(ALERT_TYPE.WARNING, 'Hay un problema...', response.body.message);
          }
        }
      } else {
        setLoading(false);
        useAlert(ALERT_TYPE.WARNING, 'Campos incompletos', 'Debes proporcionar todos los datos indicados.');
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
      useAlert(ALERT_TYPE.DANGER, 'Error interno', 'Error desconocido, intentalo más tarde.');
    }
  }
  return (
    <AlertNotificationRoot>
     <SafeAreaView>
      <ScrollView style={tw`mb-6`}>
        <View style={tw`flex-1 items-center pt-10`}>
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
                  onEndEditing={validateName}
                  type='text'
                  placeholder="Ingresa tu nombre"
                  style={tw`rounded-xl bg-indigo-50 rounded-md p-2 w-80 mt-3 text-base text-neutral-400`}
                  maxLength={18}
                />
                {nameError ? <Text style={tw`text-red-500 text-sm mt-1 text-right font-bold`}>{nameError}</Text> : null}
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
                  onEndEditing={validateLastName}
                  type='text'
                  placeholder="Ingresa tus apellidos"
                  style={tw`rounded-xl bg-indigo-50 rounded-md p-2 w-80 mt-3 text-base text-neutral-400`}
                  maxLength={28}
                />
                {lastNameError ? <Text style={tw`text-red-500 text-sm mt-1 text-right font-bold`}>{lastNameError}</Text> : null}
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
                      style={tw`rounded-xl bg-indigo-50 rounded-md p-2 w-80 mt-3 text-base text-neutral-400`}
                      placeholder='Ingresa tu fecha de nacimiento'
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
                  placeholder="micorreo@ejemplo.com"
                  style={tw`rounded-xl bg-indigo-50 rounded-md p-2 w-80 mt-3 text-base text-neutral-400`}
                  maxLength={34}
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
                  style={tw`rounded-xl bg-indigo-50 rounded-md p-2 w-80 mt-3 text-base text-neutral-400`}
                  maxLength={16}
                />
                {passwordError ? <Text style={tw`text-red-500 text-sm mt-1 text-right font-bold`}>{passwordError}</Text> : null}
              </Input>
            </FormControl>
            <TouchableOpacity
              onPress={() =>  handleRegister() }
              style={[tw`flex justify-center items-center mt-4`]}
            >
              <Text style={[tw`text-center text-xl bg-indigo-500 p-2 rounded-3xl w-64 text-white`, { fontFamily: "Poppins_700Bold" }]}>Registrarme</Text>
            </TouchableOpacity>
          </View>
        </View>
        <LoadingComponent
          modalVisible={loading}
          modalText='Registrando'
        />
      </ScrollView>
     </SafeAreaView>
    </AlertNotificationRoot>
  )
}