import React, { useContext } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { AcceptInvitation } from '../../modules/requests/workspaces/AcceptInvitation';
import { AuthContext } from '../../context/AuthContext';
import { useNavigation } from '@react-navigation/native';

export const CollaborationMessage = ({ route }: any) => {
    const { baseUrl, token }:any = useContext(AuthContext);
    const { workspace_id, workspace_name } = route.params;

    const navigation = useNavigation();

    const handleAcceptInvitation = async() => {
        const response = await AcceptInvitation(workspace_id, token, baseUrl);
        if (response.status == 200) {
            navigation.goBack();
        }
    }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>¿Aceptar invitación de colaboración en {workspace_name}?</Text>
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
    </View>
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

