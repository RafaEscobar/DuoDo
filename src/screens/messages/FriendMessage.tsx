import React, { useContext, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { AuthContext } from '../../context/AuthContext';
import { useNavigation } from '@react-navigation/native';
import { AcceptFriendRequest } from '../../modules/requests/Friends/AcceptFriendRequest';
import { LoadingComponent } from '../../component/LoadingComponent';
import { ALERT_TYPE, AlertNotificationRoot } from 'react-native-alert-notification';
import { useAlert } from '../../hooks/useAlert';

export const FriendMessage = ({ route }: any) => {
  const [loading, setLoading] = useState(false);
    const { baseUrl, token }:any = useContext(AuthContext);
    const { friend_request_id, friend_name } = route.params;

    const navigation = useNavigation();

    const handleAcceptInvitation = async() => {
      setLoading(true);
      const response = await AcceptFriendRequest(friend_request_id, token, baseUrl);
      setLoading(false);
      if (response.status == 200) {
        useAlert(ALERT_TYPE.SUCCESS, 'Un nuevo amigo ✨', response.body.message);
        setTimeout(() => {
          navigation.goBack();
        }, 1000);
      }
    }
  return (
    <AlertNotificationRoot>
      <View style={styles.container}>
        <Text style={styles.title}>¿Aceptar solicitud de amistad de {friend_name}?</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
          onPress={() => handleAcceptInvitation()}
              style={styles.button}
          >
            <Text style={styles.buttonText}>Aceptar</Text>
          </TouchableOpacity>
          <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={styles.button}
          >
            <Text style={styles.buttonText}>Rechazar</Text>
          </TouchableOpacity>
        </View>
        <LoadingComponent modalVisible={loading} modalText='Cargando...' />
      </View>
    </AlertNotificationRoot>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#271C3A',
  },
  title: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 30,
    color: 'white'
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  button: {
    backgroundColor: 'white',
    paddingVertical: 6,
    paddingHorizontal: 20,
    marginHorizontal: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#271C3A',
    fontSize: 14,
    fontWeight: 'bold',
  },
});

