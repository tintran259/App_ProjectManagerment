import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import Modal from 'react-native-modal'

// Styles + Icon
import { StylesModalCreate } from '../../assets/styles'
import Icon from 'react-native-vector-icons/FontAwesome'


export default function ModalCreateTask({ isVisible, handleCloseModal }) {
   return (
      <Modal isVisible={isVisible}
         animationIn='bounceInUp'
         animationOut='fadeOutUp'
         animationInTiming={1000}
         animationOutTiming={1000}
         coverScreen
      >
         <View style={StylesModalCreate.modal}>
            <View style={StylesModalCreate.header}>
               <Text style={StylesModalCreate.headerTitle}>New Task</Text>
               <Icon onPress={() => handleCloseModal()} style={StylesModalCreate.closeIcon} name="close" size={27} />
            </View>
            <View style={StylesModalCreate.body}>

            </View>
            <View style={StylesModalCreate.footer}>
               <TouchableOpacity>
                  <Text style={StylesModalCreate.btnOk}>Ok</Text>
               </TouchableOpacity>
               <TouchableOpacity onPress={() => handleCloseModal()}>
                  <Text style={StylesModalCreate.btnCancel}>Cancel</Text>
               </TouchableOpacity>
            </View>
         </View>
      </Modal>
   )
}