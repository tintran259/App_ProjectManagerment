import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import Modal from 'react-native-modal';


// Styles + Icon
import { StylesModalSuccessed } from '../../assets/styles/ProjectDetailsScreens.js'
import IconAntd from 'react-native-vector-icons/AntDesign'

export default function ModalEditSuccessed({ isModalSuccess, setIsModalSuccess }) {

   useEffect(() => {
      setTimeout(() => {
         setIsModalSuccess(false)
      }, 1000)
   }, [isModalSuccess === true])

   return (
      <Modal
         isVisible={isModalSuccess}
         animationIn="slideInRight"
         animationOut="slideOutLeft"
         onBackdropPress={() => { setIsModalSuccess(false) }}
      >
         <View style={StylesModalSuccessed.viewModal}>
            <IconAntd name='checkcircleo' size={50} color="#2ecc71" />
            <View style={StylesModalSuccessed.body}>
               <Text style={StylesModalSuccessed.titleBody}>
                  Successed
               </Text>
            </View>
         </View>
      </Modal>
   )
}