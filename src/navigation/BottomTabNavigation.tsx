import { Calendar, Dashboard, Profile } from "../screens";
import { BottomTabBarProps, createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image } from "expo-image";
import { ModalSheetScreen } from "../component/ModalSheetScreen";
import React, { useEffect } from 'react';
import * as Notifications from 'expo-notifications';
import { TopTapGroup } from "./Stacts/TopTapGroup";
import { TopTapChat } from "./Stacts/TopTapChat";
import { ModalProfile } from "../component/ModalProfile";
import { CustomBottomTab } from "../component/CustomBottomTab";

export type BottomTabParamList = {
  Inicio: undefined;
  ChatStack: undefined;
  AddModal: undefined;
  Creación: undefined;
  ProfileModal: undefined;
};

const CustomBottomTabs = (props: BottomTabBarProps) => {
  return <CustomBottomTab {...props} />;
};

const Tab = createBottomTabNavigator<BottomTabParamList>();

const MiddleBtn = () => {
  return null;
}

export const BottomTabNavigation = ({ navigation: { navigate } }: any) => {

  useEffect(() => {
    Notifications.addNotificationResponseReceivedListener(response => {
      let type = response.notification.request.content.data.type;
      switch (type) {
        case 'friend-request':
          //
        break;
        case 'friend-request-accepted':
          //
        break;
        case 'workspace-invite':
          navigate('CollaborationMessage', {workspace_id: response.notification.request.content.data.workspace});
        break;
        case 'workspace-invite-accepted':
          //
        break;
        case 'partner-finished-task':
          //
        break;
        case 'task-assigned':
          //
        break;
        case 'partner-left-team':
          //
        break;
        default:
        break;
      }
    });
  }, []);

  return (
    <Tab.Navigator
      tabBar={CustomBottomTabs}
      screenOptions={
        {
          headerShown: false,
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
        name="AddModal"
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
