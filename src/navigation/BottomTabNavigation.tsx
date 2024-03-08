import { Calendar, Dashboard, Profile } from "../screens";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image } from "expo-image";
import { ModalSheetScreen } from "../component/ModalSheetScreen";
import React from "react";
import { TopTapGroup } from "./Stacts/TopTapGroup";
import { TopTapChat } from "./Stacts/TopTapChat";

const Tab = createBottomTabNavigator();

const MiddleBtn = () => {
  return null;
}

export const BottomTabNavigation = ({ navigation: { navigate } }: any) => {
  return (
    <Tab.Navigator>
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
      {/* <Tab.Screen name="Calendario" component={Calendar}
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <Image
              source="https://kaihatsu-code.com/assets/calendar.png"
              style={{ width: 40, height: 40 }}
            />
          ),
          tabBarLabel: () => null,
        }}
      /> */}
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
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <Image
              source="https://kaihatsu-code.com/assets/menu.png"
              style={{ width: 40, height: 40 }}
            />
          ),
          tabBarLabel: () => null,
        }}
      />
    </Tab.Navigator>

  );
};
