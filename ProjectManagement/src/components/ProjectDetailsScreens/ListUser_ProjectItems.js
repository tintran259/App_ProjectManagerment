import React, { useState } from 'react'
import { View, Text, Image, TouchableOpacity, Pressable } from 'react-native'
import { useSelector, useDispatch } from 'react-redux';
import Communications from 'react-native-communications';

// Icon + Styles
import { StylesProjectDetails } from '../../assets/styles'
import IconAntd from 'react-native-vector-icons/AntDesign'
import IconFeather from 'react-native-vector-icons/Feather'

//Action 
import { actDeleteItemsUser } from '../../redux/action/ProjectAction'

// Components
import { ModalDelete } from '../../components/ProjectDetailsScreens'


export default function ListUserProjectDetail({ isEdit, itemsContact }) {
   const dispatch = useDispatch()
   const ListContactProject = useSelector(state => state.ProjectReducer.projectDetails.contactProject)
   const [isDetele, setIsDelete] = useState(false)

   const handleCancleDelete = () => {
      setIsDelete(false)
   }
   const handleDelete = () => {
      setIsDelete(true)
   }
   const handleClickDelete = (item) => {
      const ListAfterDelete = ListContactProject.filter((user) => {
         return user.id !== item.id
      })
      setIsDelete(false)
      dispatch(actDeleteItemsUser(ListAfterDelete))
      setIsDelete(false)
   }
   const handleClickDeleteItemSwipter = () => {
      handleDelete()
   }

   const handleCallMember = () => {
      Communications.phonecall(itemsContact.phone, true)
   }
   const handleMessageMember = () => {
      Communications.text(itemsContact.phone)
   }
   const handleEmailMember = () => {
      Communications.email([itemsContact.email], null, null, null, null)
   }
   // const handleRenderRightAction = (progress) => {
   //    const trans = progress.interpolate({
   //       inputRange: [0, 1],
   //       outputRange: [50, 0]
   //    })
   //    return (
   //       <Animated.View style={{ width: "17%", marginLeft: -10, transform: [{ translateX: trans }] }}>
   //          <RectButton onPress={handleClickDeleteItemSwipter} >
   //             <TouchableOpacity style={StylesProjectDetails.ContactSwipte}>
   //                <IconFeather style={{ marginLeft: 10 }} name="trash-2" size={20} color="#fff" />
   //             </TouchableOpacity>
   //          </RectButton>
   //       </Animated.View>
   //    )
   // }

   //  get Avatar ========================
   const getAvatar = (user_id) => {
      return `https://uat.xboss.com/web/image?model=res.users&field=image&id=${user_id}`
   }


   return (
      <Pressable
         delayLongPress={1000}
         onLongPress={handleClickDeleteItemSwipter}
      // friction={2}
      // rightThreshold={40}
      // renderRightActions={isEdit ? handleRenderRightAction : false}
      >
         <View style={StylesProjectDetails.listUser}>
            <View style={StylesProjectDetails.Avatar}>
               <Image style={StylesProjectDetails.UserDefault} source={{ uri: getAvatar(itemsContact && itemsContact.id) }} />
            </View>
            <View style={StylesProjectDetails.listUserLeft}>
               <Text style={StylesProjectDetails.textNameUser}>{itemsContact && itemsContact?.name}</Text>
               <Text style={[StylesProjectDetails.textNameUser, { fontWeight: "normal" }]}>{itemsContact?.email ? itemsContact.email : "Email: null"}</Text>
            </View>
            <View style={StylesProjectDetails.listUserRight}>
               {
                  itemsContact.phone ?
                     <TouchableOpacity onPress={handleCallMember}>
                        <IconFeather
                           color="#fff"
                           style={[StylesProjectDetails.IconContact, { backgroundColor: "#2ecc71" }]}
                           name="phone" />
                     </TouchableOpacity>
                     :
                     <TouchableOpacity disabled={true} >
                        <IconFeather
                           color="#fff"
                           style={[StylesProjectDetails.IconContact, { backgroundColor: "#bdc3c7" }]}
                           name="phone" />
                     </TouchableOpacity>
               }

               {
                  itemsContact.phone ?
                     <TouchableOpacity onPress={handleMessageMember}>
                        <IconAntd
                           color="#fff"
                           style={[StylesProjectDetails.IconContact, { backgroundColor: "#3498db" }]}
                           name="message1" />
                     </TouchableOpacity>
                     :
                     <TouchableOpacity disabled>
                        <IconAntd
                           color="#fff"
                           style={[StylesProjectDetails.IconContact, { backgroundColor: "#bdc3c7" }]}
                           name="message1" />
                     </TouchableOpacity>
               }
               {
                  itemsContact.email ?
                     <TouchableOpacity onPress={handleEmailMember}>
                        <IconAntd
                           color="#fff"
                           style={[StylesProjectDetails.IconContact, { backgroundColor: "#e74c3c" }]}
                           name="mail" />
                     </TouchableOpacity>
                     :
                     <TouchableOpacity disabled>
                        <IconAntd
                           color="#fff"
                           style={[StylesProjectDetails.IconContact, { backgroundColor: "#bdc3c7" }]}
                           name="mail" />
                     </TouchableOpacity>
               }
            </View>
         </View>
         <ModalDelete
            itemsContact={itemsContact}
            isDetele={isDetele}
            handleCancleDelete={handleCancleDelete}
            handleClickDelete={handleClickDelete}
         />
      </Pressable>
   )
}