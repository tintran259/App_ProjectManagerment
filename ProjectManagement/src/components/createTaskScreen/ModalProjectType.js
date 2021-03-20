import React, {useState} from 'react';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import Modal from 'react-native-modal';

import {useSelector} from 'react-redux';

// Styles + Icon
import {IconTimes} from '../../assets/icons';
import Style from '../../assets/styles/task/modal/ModalProject';

export default function ModalProjectType({
  visibleProjectType,
  setVisibleProjectType,
  onInputProjectType,
}) {
  const listProjectType = useSelector(
    (state) => state.TaskReducer.listProjectType,
  );

  const handleUnShowModal = () => {
    setVisibleProjectType(false);
  };

  const onUser = (item) => () => {
    onInputProjectType(item);
    handleUnShowModal();
  };

  return (
    <Modal
      isVisible={visibleProjectType}
      onBackdropPress={() => setVisibleProjectType(false)}
      style={{margin: 0, padding: 0}}>
      <View style={Style.modalBox}>
        <View style={Style.modalView}>
          <Text style={Style.modalTitle}>Project type</Text>
        </View>

        <FlatList
          data={listProjectType}
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
