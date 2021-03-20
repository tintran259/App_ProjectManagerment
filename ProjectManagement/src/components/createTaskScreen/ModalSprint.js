import React, {useState} from 'react';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import Modal from 'react-native-modal';

import {useSelector} from 'react-redux';

// Styles + Icon

import Style from '../../assets/styles/task/modal/ModalSprint';

export default function ModalSprint({
  visibleSprint,
  setVisibleSprint,
  onInputSprint,
}) {
  const listSprint = useSelector((state) => state.TaskReducer.listSprint);

  const handleUnShowModal = () => {
    setVisibleSprint(false);
  };

  const onUser = (item) => () => {
    onInputSprint(item);
    handleUnShowModal();
  };

  return (
    <Modal
      isVisible={visibleSprint}
      onBackdropPress={() => setVisibleSprint(false)}
      style={{margin: 0, padding: 0}}>
      <View style={Style.modalBox}>
        <View style={Style.modalViewTitle}>
          <Text style={Style.modalTitle}>Sprint</Text>
        </View>

        <FlatList
          data={listSprint}
          keyExtractor={(item) => `${item.id}`}
          renderItem={(item) => {
            return (
              <View>
                <TouchableOpacity onPress={onUser(item)}>
                  <View style={Style.user}>
                    <View style={Style.info}>
                      <View style={Style.account}>
                        <Text>{item.item.name}</Text>
                      </View>
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
            );
          }}
        />
      </View>
    </Modal>
  );
}
