import { View, Text, Pressable, TextInput, Platform, Alert } from 'react-native'
import React, { useState } from 'react'
import tw from 'twrnc';
import { Image } from "expo-image";
import { Button } from "@gluestack-ui/themed";
import { AntDesign } from '@expo/vector-icons';
import { Poppins_700Bold, Poppins_600SemiBold } from "@expo-google-fonts/poppins";
import { useFonts } from 'expo-font';
import { FormControl, FormControlLabel, FormControlLabelText, Input, InputField } from '@gluestack-ui/themed';
import DateTimePicker from '@react-native-community/datetimepicker';
import { RegisterModule } from '../../modules/api/RegisterModule';

export const SignUp = ({ navigation: { navigate }, route }: any) => {

  const [fontsLoaded] = useFonts({
    Poppins_700Bold,
    Poppins_600SemiBold
  });

  const [name, setName] = useState('');
  const [last_name, setLastName] = useState('');
  const [birthdate, setDateOfBirth] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const validateEmail = () => {
    const re = /\S+@\S+\.\S+/;
    if (!re.test(email)) {
      setEmailError('Formato de correo inválido');
    } else {
      setEmailError('');
    }
  }

  const validatePassword = () => {
    if (password.length < 8) {
      setPasswordError('La contraseña debe tener al menos 8 caracteres');
    } else {
      setPasswordError('');
    }
  }
  const [date, setDate] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);

  const toggleDatepicker = () => {
    setShowPicker(!showPicker);
  };

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

  const formatDate = (date: Date) => {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${year}-${month}-${day}`;
  };

  const createTwoButtonAlert = () =>
    Alert.alert('Error 😂', 'No se pudo iniciar sessión', [
      { text: 'Aceptar', onPress: () => console.log('OK Pressed') },
    ]);

  const handleRegister = async(name: any, last_name: any, birthdate:any ,email: any, password: any) => {
    try {
      await RegisterModule({ name, last_name, birthdate, email, password });
      navigate('Login');
    } catch (error) {
      console.log('Error: ', error);
    }
  }

  return (
    <View style={tw`flex-1 items-center pt-10`}>
      <Button
        onPress={() => { navigate('Login') }}
        style={tw`absolute top-0 left-0 mt-13 ml-6 bg-indigo-400 p-2 rounded-full hover:bg-orange-200 z-10`}
      >
        <AntDesign name="left" size={30} color="black" />
      </Button>
      <Image
        style={{ width: 370, height: 200, alignSelf: "center", borderRadius: 20 }}
        source="https://kaihatsu-code.com/assets/logo_solid.png"
      />
      <Text style={[tw`text-3xl mt-4`, { fontFamily: "Poppins_700Bold" }]}>Registrar</Text>
      <View style={tw`flex justify-center items-center`}>
        <FormControl>
          <FormControlLabel>
            <FormControlLabelText style={[tw`text-base mt-4`, { fontFamily: "Poppins_600SemiBold" }]}>
              Nombre
            </FormControlLabelText>
          </FormControlLabel>
          <Input>
            <InputField
              value={name}
              onChangeText={setName}
              type='text'
              placeholder="Admin"
              style={tw`rounded-xl bg-indigo-50 rounded-md p-2 w-80 mt-3 text-base text-neutral-400`}
            />
          </Input>
          <FormControlLabel>
            <FormControlLabelText style={[tw`text-base mt-4`, { fontFamily: "Poppins_600SemiBold" }]}>
              Apellidos
            </FormControlLabelText>
          </FormControlLabel>
          <Input>
            <InputField
              value={last_name}
              onChangeText={setLastName}
              type='text'
              placeholder="Admin DuoDo"
              style={tw`rounded-xl bg-indigo-50 rounded-md p-2 w-80 mt-3 text-base text-neutral-400`}
            />
          </Input>

          <View>
            <Text style={[tw`text-base mt-4`, { fontFamily: "Poppins_600SemiBold" }]}>Fecha de nacimiento</Text>
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
            <FormControlLabelText style={[tw`text-base mt-4`, { fontFamily: "Poppins_600SemiBold" }]}>
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
              style={tw`rounded-xl bg-indigo-50 rounded-md p-2 w-80 mt-3 text-base text-neutral-400`}
            />
            {emailError ? <Text style={tw`text-red-500 text-sm mt-1 text-right font-bold`}>{emailError}</Text> : null}
          </Input>
          <FormControlLabel>
            <FormControlLabelText style={[tw`text-base mt-4`, { fontFamily: "Poppins_600SemiBold" }]}>
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
            />
            {passwordError ? <Text style={tw`text-red-500 text-sm mt-1 text-right font-bold`}>{passwordError}</Text> : null}
          </Input>
        </FormControl>
        <Button
          onPress={() =>  handleRegister(name, last_name, birthdate, email, password) } style={[tw`flex justify-center items-center mt-4`]}>
          <Text style={[tw`text-center text-xl bg-indigo-500 p-2 rounded-3xl w-64 text-white`, { fontFamily: "Poppins_700Bold" }]}>Registrarme</Text>
        </Button>
      </View>
    </View>
  )
}