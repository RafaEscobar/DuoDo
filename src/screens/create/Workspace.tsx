import { AuthContext } from '../../context/AuthContext';
import { Image } from 'expo-image';
import { IndexWorkspace } from '../../modules/requests/workspaces/Index';
import { Poppins_400Regular, Poppins_700Bold } from "@expo-google-fonts/poppins";
import { useFocusEffect } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import * as Progress from 'react-native-progress';
import React, { useContext, useEffect, useState } from 'react'
import tw from 'twrnc';
import LottieView from 'lottie-react-native';

export const Workspace = ({ navigation: { navigate } }: any) => {
  const [workspaces, setWorkspaces] = useState([]);
  const {token, baseUrl, user}:any = useContext(AuthContext);
  const [load, setLoad] = useState(false);

  const handleLoadWorkspaces = async() => {
    let external_identifier = JSON.parse(user).external_identifier;
    let data:any = await IndexWorkspace(external_identifier, token, baseUrl);
    setWorkspaces(data.body);
  }

  useEffect(() => {
    handleLoadWorkspaces();
  }, []);

  useFocusEffect(
    React.useCallback(() => {
     handleLoadWorkspaces();
    }, [])
  )

  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_700Bold
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={tw`bg-[#271C3A] h-full`}>
      <View style={tw`flex pt-3 ml-2.5`}>
        <Text style={[tw`text-2xl text-white`, { fontFamily: "Poppins_700Bold" }]}>Espacios de trabajo</Text>
        {
            load ?
              <View style={tw`flex justify-center items-center h-full`}>
                  <LottieView
                      source={require('../../../assets/animations/load.json')}
                      style={{width: "50%", height: "50%"}}
                      autoPlay
                      loop
                  />
              </View>
            :
              (workspaces.length > 0) ?
                <ScrollView style={tw`h-[90%]`}>
                    <View style={tw`flex-row flex-wrap`}>
                      {workspaces && workspaces.data.map((workspace:any) => (
                        <View style={tw`w-1/2 mt-3`} key={workspace.id}>
                          <View style={tw`bg-[#100323] w-44 h-44 rounded-2xl `}>
                            <TouchableOpacity onPress={() => navigate('DetailsWorkspace', {workspace})} >
                                <View style={tw`justify-start ml-4 mt-2`}>
                                    <Image
                                        source={{ uri: "https://www.w3schools.com/w3images/avatar2.png" }}
                                        style={tw`w-15 h-15 rounded-full`}
                                    />
                                    <Text style={[tw`text-white mt-1 text-base w-30`, { fontFamily: "Poppins_700Bold" }]}>{workspace.name.substring(0, 12)}</Text>
                                    <Text style={[tw`text-white opacity-50 text-xs mt-1`, { fontFamily: "Poppins_700Bold" }]}>{ workspace.description.substring(0, 34) }...</Text>
                                    <View style={tw`flex flex-row gap-1 items-center mt-3`}>
                                        <Progress.Bar progress={(workspace.advance*100)} width={100} height={10} color='#0dac4a' borderRadius={20}
                                        />
                                        <Text style={{ fontSize: 12, fontFamily: "Poppins_700Bold", color: "white" }}>{workspace.advance}%</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                          </View>
                        </View>
                      ))}
                    </View>
                </ScrollView>
              :
                <View style={tw`mt-10 flex justify-center items-center`}>
                    <Text style={tw`text-white text-center font-semibold`}>No tienes espacios de trabajo para mostrar.</Text>
                    <LottieView
                        source={require('../../../assets/animations/empty.json')}
                        style={{width: "80%", height: "80%"}}
                        autoPlay
                        loop
                    />
                </View>
        }
      </View>
    </View>
  )
}