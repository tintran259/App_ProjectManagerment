import React, {useState} from 'react';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import Modal from 'react-native-modal';

// Styles + Icon

import Style from '../../assets/styles/task/modal/ModalConfirm';

export default function ModalComfirm({
  modalConfirm,
  setModalConfirm,
  onGetData,
  editForm,
  setEditInput,
}) {
  const handleUnShowModal = () => {
    setModalConfirm(false);
    setEditInput(false);
  };

  const onComfirm = () => {
    onGetData(editForm);
    setModalConfirm(false);
  };
  return (
    <Modal
      isVisible={modalConfirm}
      onBackdropPress={() => setModalConfirm(false)}
      style={Style.test}>
      <View style={Style.modalBox}>
        <View style={Style.modalView}>
          <Text style={Style.modalTitle}>Update</Text>
        </View>

        <View style={Style.user}>
          <Text>Bạn có muốn Update?</Text>
        </View>

        <View style={Style.modalViewBottom}>
          <TouchableOpacity onPress={onComfirm}>
            <Text style={Style.closeText}>Confirm</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleUnShowModal}>
            <Text style={Style.closeTextCancle}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}
