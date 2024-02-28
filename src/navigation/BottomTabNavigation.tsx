import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Calendar, Create, Dashboard, Profile } from "../screens";
import { Image } from "expo-image";

const Tab = createBottomTabNavigator();

export const BottomTabNavigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Inicio"
        component={Dashboard}
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <Image
              source="https://kaihatsu-code.com/assets/home.png"
              style={{  width: 40, height: 40 }}
            />
          ),
          tabBarLabel: () => null,
        }}
      />
      <Tab.Screen
        name="Calendario"
        component={Calendar}
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
      />
      <Tab.Screen
        name="Creación"
        component={Create}
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
