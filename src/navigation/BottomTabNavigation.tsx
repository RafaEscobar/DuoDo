import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Calendar, Create, Dashboard, Profile } from "../screens";
import { Image } from "expo-image";

const Tab = createBottomTabNavigator();

export const BottomTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Inicio"
        component={Dashboard}
        options={{
          tabBarIcon: ({ color }) => (
            <Image
              source="./assets/images/home.png"
              style={{ tintColor: color, width: 30, height: 30 }}
            />
          ),
          tabBarLabel: () => null,
        }}
      />
      <Tab.Screen
        name="Calendario"
        component={Calendar}
        options={{
          tabBarIcon: ({ color }) => (
            <Image
              source="./assets/images/calendario.png"
              style={{ tintColor: color, width: 30, height: 30 }}
            />
          ),
          tabBarLabel: () => null,
        }}
      />
      <Tab.Screen
        name="Creación"
        component={Create}
        options={{
          tabBarIcon: ({ color }) => (
            <Image
              source="./assets/images/tareas.png"
              style={{ tintColor: color, width: 30, height: 30 }}
            />
          ),
          tabBarLabel: () => null,
        }}
      />
      <Tab.Screen
        name="Info"
        component={Profile}
        options={{
          tabBarIcon: ({ color }) => (
            <Image
              source="./assets/images/menu.png"
              style={{ tintColor: color, width: 30, height: 30 }}
            />
          ),
          tabBarLabel: () => null,
        }}
      />
    </Tab.Navigator>
  );
};
