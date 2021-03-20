import React, {useEffect, useState} from 'react';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import Modal from 'react-native-modal';

// Styles + Icon
import {IconGlobe, IconUnlock, IconUser, IconCheck} from '../../assets/icons';
import {StylesModalLogin} from '../../assets/styles/index';
import {DATA_STORAGE} from '../../utils/configs';
import AsyncStorage from '@react-native-community/async-storage';

export default function ModalLogin({visible, setVisible, onInput, onClear}) {
  const [user, setUser] = useState({});

  const load = async () => {
    try {
      var user = await AsyncStorage.getItem(DATA_STORAGE.USER);
      if (user !== null) {
        let parsed = JSON.parse(user);
        setUser(parsed);
      }
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    load();
  }, []);

  const onOtherAcc = () => {
    onClear();
    handleUnShowModal();
  };

  const handleUnShowModal = () => {
    setVisible(false);
  };

  const onUser = () => () => {
    onInput(user);
    handleUnShowModal();
  };

  return (
    <Modal
      isVisible={visible}
      onBackdropPress={() => setVisible(false)}
      style={StylesModalLogin.test}>
      <View style={StylesModalLogin.modalBox}>
        <View style={StylesModalLogin.modalView}>
          <Text style={StylesModalLogin.modalTitle}>Accounts</Text>
        </View>
        <View>
          <TouchableOpacity onPress={onUser()}>
            <View style={StylesModalLogin.user}>
              <IconUser style={StylesModalLogin.icon} />

              <View style={StylesModalLogin.info}>
                <View style={StylesModalLogin.account}>
                  <Text style={StylesModalLogin.username} numberOfLines={1}>
                    {user.username}
                  </Text>

                  <Text style={StylesModalLogin.url}>{user.url}</Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        </View>

        <TouchableOpacity onPress={onOtherAcc}>
          <View style={StylesModalLogin.modalView}>
            <Text style={StylesModalLogin.closeText}>Other Account</Text>
          </View>
        </TouchableOpacity>
      </View>
    </Modal>
  );
}
