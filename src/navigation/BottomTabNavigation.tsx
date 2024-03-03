import { Calendar, Dashboard, Profile } from "../screens";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image } from "expo-image";
import { ModalSheetComponent } from "../component/ModalSheetComponent";
import { TaskStack } from "./Stacts/TaskStack";
import { Text, View } from "react-native";
import { useActionSheet } from "@expo/react-native-action-sheet";
import React from "react";
import { GestureHandlerRootView, TouchableOpacity } from "react-native-gesture-handler";

const Tab = createBottomTabNavigator();

const ModalSheetScreen = () => {
  // const { showActionSheetWithOptions } = useActionSheet();
  // ModalSheetComponent(showActionSheetWithOptions);
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
}


export const BottomTabNavigation = () => {
  const { showActionSheetWithOptions } = useActionSheet();
  return (
      <Tab.Navigator>
        <Tab.Screen name="Inicio" component={Dashboard}
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
        <Tab.Screen name="Calendario" component={Calendar}
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
        <Tab.Screen name="Add" component={ModalSheetScreen}
          options={{
            headerShown: false,
            tabBarIcon: () => (
              <Image
                source="https://kaihatsu-code.com/assets/add-removebg-preview.png"
                style={{ width: 40, height: 40 }}
              />
            ),
            tabBarLabel: () => null,
          }}
        />
        <Tab.Screen
          name="Creación"
          component={TaskStack}
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
