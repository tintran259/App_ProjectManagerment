import React from 'react'
import { View, Text, TouchableOpacity, Image, FlatList } from 'react-native'
import Modal from 'react-native-modal';
import { useSelector } from 'react-redux'

// Styles + Icon
import { StylesModalEdit } from '../../assets/styles/ProjectDetailsScreens.js'

export default function ModalEditProjectManager({
   isShowModal,
   handleCloseModalEdit,
   handleClickManagerChoose
}) {
   const listManager = useSelector(state => state.ProjectReducer.listManager)

   const handleCancel = () => {
      handleCloseModalEdit()
   }
   const handleClickManager = (itemsManager) => {
      handleClickManagerChoose(itemsManager)
      handleCloseModalEdit()
   }
   const getAvatar = (user_id) => {
      return `https://uat.xboss.com/web/image?model=res.users&field=image&id=${user_id}`
   }

   return (
      <Modal
         animationIn="bounceIn"
         animationOut="bounceOut"
         avoidKeyboard={true}
         isVisible={isShowModal}
         onBackdropPress={() => handleCloseModalEdit()}
         animationInTiming={2000}
         animationOutTiming={1000}
      >
         <View style={StylesModalEdit.ViewModal} >
            <View style={StylesModalEdit.header}>
               <Text style={StylesModalEdit.titleHeader}>Danh sách người dùng</Text>
            </View>
            <View style={StylesModalEdit.body}>
               <FlatList
                  data={listManager}
                  keyExtractor={item => item.id.toString()}
                  renderItem={({ item }) => {
                     return (
                        <TouchableOpacity onPress={() => handleClickManager(item)}>
                           <View style={StylesModalEdit.itemsUser}>
                              <Image style={StylesModalEdit.avatarUser} source={{ uri: getAvatar(item.id) }} />
                              <Text style={StylesModalEdit.textName}>{item.name}</Text>
                           </View>
                        </TouchableOpacity>
                     )
                  }}
               />
            </View>
            <View style={StylesModalEdit.footer}>
               <Text onPress={handleCancel} style={StylesModalEdit.Cancel}>Cancel</Text>
            </View>
         </View>
      </Modal>
   )
}