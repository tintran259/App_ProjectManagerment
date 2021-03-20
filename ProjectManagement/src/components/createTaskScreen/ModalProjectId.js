import React, {useState} from 'react';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import Modal from 'react-native-modal';

import {useSelector} from 'react-redux';

// Styles + Icon

import Style from '../../assets/styles/task/modal/ModalProject';

export default function ModalProjectID({
  visibleProjectId,
  setVisibleProjectId,
  onInputProjectId,
}) {
  const listProject = useSelector((state) => state.ProjectReducer.listProject);

  const handleUnShowModal = () => {
    setVisibleProjectId(false);
  };

  const onUser = (item) => () => {
    onInputProjectId(item);
    handleUnShowModal();
  };

  return (
    <Modal
      isVisible={visibleProjectId}
      swipeDirection="down"
      style={{margin: 0, padding: 0}}
      onBackdropPress={() => setVisibleProjectId(false)}>
      <View style={Style.modalBox}>
        <View style={Style.modalView}>
          <Text style={Style.modalTitle}>Project name</Text>
        </View>

        <FlatList
          data={listProject}
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
