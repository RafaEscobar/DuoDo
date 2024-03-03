import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Modal from 'react-native-modal';
import React, { useState } from 'react';

export const ModalSheetScreen = ({navigate}:any) => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      <TouchableOpacity 
        onPress={() => {setModalVisible(true)}}
        style={{ marginTop: 2 }}
        >
        <Image
            source={{uri: 'https://kaihatsu-code.com/assets/add-removebg-preview.png'}}
            style={{ width: 42, height: 42 }}
        />
      </TouchableOpacity>
      <View>
        <Modal
          backdropOpacity={0.3}
          isVisible={modalVisible}
          onBackdropPress={() => setModalVisible(false)}
          style={styles.contentView}
        >
          <View style={styles.content}>
            <Text style={styles.contentTitle}>Hi !</Text>
            <Text>Hello from Overlay!</Text>
            <TouchableOpacity onPress={() => { navigate('Another') }}>
                <Text>Ir a another</Text>
            </TouchableOpacity>
          </View>
        </Modal>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  content: {
    backgroundColor: 'white',
    padding: 22,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopRightRadius: 17,
    borderTopLeftRadius: 17,
  },
  contentTitle: {
    fontSize: 20,
    marginBottom: 12,
  },
  contentView: {
    justifyContent: 'flex-end',
    margin: 0,
  }
});