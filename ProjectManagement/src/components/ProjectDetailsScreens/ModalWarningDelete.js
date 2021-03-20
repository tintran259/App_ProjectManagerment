import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';


// Styles + Icon
import { StylesModalDelete } from '../../assets/styles/ProjectDetailsScreens.js'
import IconAntd from 'react-native-vector-icons/AntDesign'

export default function ModalWarningDelete({
   isDetele,
   itemsContact,
   handleCancleDelete,
   handleClickDelete,
}) {
   return (
      <Modal isVisible={isDetele} onBackdropPress={() => handleCancleDelete()}>
         <View style={StylesModalDelete.viewModal}>
            <View style={StylesModalDelete.header}>
               <Text style={StylesModalDelete.titleHeader}>Notification !</Text>
            </View>
            <View style={StylesModalDelete.body}>
               <Text style={StylesModalDelete.titleBody}>
                  Do you want delete it
               </Text>
               <IconAntd name='warning' size={25} color="#e74c3c" style={{ marginLeft: 20 }} />
            </View>
            <View style={StylesModalDelete.footer}>
               <TouchableOpacity onPress={() => handleClickDelete(itemsContact)}>
                  <Text style={StylesModalDelete.btn}>OK</Text>
               </TouchableOpacity>
               <TouchableOpacity onPress={() => { handleCancleDelete() }}>
                  <Text style={StylesModalDelete.btn}>Cancel</Text>
               </TouchableOpacity>
            </View>
         </View>
      </Modal>
   )
}