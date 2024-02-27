import React from "react";
import { ActivityIndicator, Modal, StyleSheet, Text, View } from "react-native";
import tw from 'twrnc';

export const LoadingComponent = ({ modalVisible, modalText }:any) => {
    return (
        <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
                <Text style={tw`text-center text-2xl`}>{modalText}</Text>
                <ActivityIndicator
                    animating={true}
                    color='blue'
                    size={60}
                />
          </View>
        </View>
      </Modal>
    )
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});
