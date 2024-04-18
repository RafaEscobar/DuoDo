import { BottomTabBarProps, createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { CustomBottomTab } from "../component/CustomBottomTab";
import { Dashboard } from "../screens";
import { Image } from "expo-image";
import { ModalProfile } from "../component/ModalProfile";
import { ModalSheetScreen } from "../component/ModalSheetScreen";
import { TopTapChat } from "./Stacts/TopTapChat";
import { TopTapGroup } from "./Stacts/TopTapGroup";
import * as Notifications from 'expo-notifications';
import React, { useEffect } from 'react';

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
          navigate('FriendMessage', {
            friend_request_id: response.notification.request.content.data.friend_request,
            friend_name: response.notification.request.content.data.friend_name,
          });
        break;
        case 'friend-request-accepted':
          //
        break;
        case 'workspace-invite':
          navigate('CollaborationMessage', {
            workspace_id: response.notification.request.content.data.workspace,
            workspace_name: response.notification.request.content.data.workspace_name
          });
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
