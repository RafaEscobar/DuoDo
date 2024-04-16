import React, { useContext } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { AcceptInvitation } from '../../modules/requests/workspaces/AcceptInvitation';
import { AuthContext } from '../../context/AuthContext';
import { useNavigation } from '@react-navigation/native';
import { AcceptFriendRequest } from '../../modules/requests/Friends/AcceptFriendRequest';

export const FriendMessage = ({ route }: any) => {
    const { baseUrl, token }:any = useContext(AuthContext);
    const { friend_request_id } = route.params;

    const navigation = useNavigation();

    const handleAcceptInvitation = async() => {
        const response = await AcceptFriendRequest(friend_request_id, token, baseUrl);
        if (response.status == 200) {
            navigation.goBack();
        }
    }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>¿Aceptar solicitud de amistad?</Text>
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
          <Text style={styles.buttonText}>No aceptar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  button: {
    backgroundColor: 'black',
    paddingVertical: 15,
    paddingHorizontal: 30,
    marginHorizontal: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

