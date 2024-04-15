import { Calendar, Dashboard, Profile } from "../screens";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image } from "expo-image";
import { ModalSheetScreen } from "../component/ModalSheetScreen";
import React, { useEffect } from 'react';
import * as Notifications from 'expo-notifications';
import { TopTapGroup } from "./Stacts/TopTapGroup";
import { TopTapChat } from "./Stacts/TopTapChat";
import { ModalProfile } from "../component/ModalProfile";

const Tab = createBottomTabNavigator();

const MiddleBtn = () => {
  return null;
}

export const BottomTabNavigation = ({ navigation: { navigate } }: any) => {

  useEffect(() => {
    Notifications.addNotificationResponseReceivedListener(response => {
      navigate('CollaborationMessage', {workspace_id: response.notification.request.content.data.workspace});
    });
  }, []);

  return (
    <Tab.Navigator screenOptions={
      {
        tabBarStyle: {
          backgroundColor: '#271C3A',
          borderTopColor: 'transparent',
          height: 60,
        }
      }
    }>
      <Tab.Screen name="Inicio" component={Dashboard}
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <Image
              source="https://kaihatsu-code.com/assets/home.png"
              style={{ width: 40, height: 40 }}
            />
          ),
          tabBarLabel: () => null,
        }}
      />
      <Tab.Screen
        name="ChatStack"
        component={TopTapGroup}
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <Image
              source="https://kaihatsu-code.com/assets/chat.png"
              style={{ width: 40, height: 40 }}
            />
          ),
          tabBarLabel: () => null,
          headerTitleStyle: {
            fontSize: 30,
            fontWeight: 'bold',
            alignSelf: 'center',
          },

        }}
      />
      <Tab.Screen
        name="Add"
        component={MiddleBtn}
        options={{
          tabBarButton: () => (<ModalSheetScreen navigate={navigate} />),
        }}
      />
      <Tab.Screen
        name="Creación"
        component={TopTapChat}
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <Image
              source="https://kaihatsu-code.com/assets/task.png"
              style={{ width: 40, height: 40 }}
            />
          ),
          tabBarLabel: () => null,
        }}
      />
      <Tab.Screen
        name="ProfileModal"
        component={MiddleBtn}
        options={{
          tabBarButton: () => (<ModalProfile navigate={navigate} />),
        }}
      />
    </Tab.Navigator>
  );
};
