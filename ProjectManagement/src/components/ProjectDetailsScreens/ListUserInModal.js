import React, { useState } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { CheckBox } from 'react-native-elements'
//Styles + Icon
import { StylesModalAddMember } from '../../assets/styles/ProjectDetailsScreens.js';
import IconAntd from 'react-native-vector-icons/AntDesign';



export default function ListUserInModal({
   item,
   isShowCheck,
   setIsShowCheck,
   handleUserItemsAdd,
   getMemberFromListUser,
   getMemberAfterUnCheck,
}) {
   const [isCheck, setIsCheck] = useState(false)

   const handleUserToCheck = () => {
      setIsCheck(!isCheck)
      if (isCheck) {
         getMemberAfterUnCheck(item)
      } else {
         getMemberFromListUser(item, () => {
            setIsCheck(false);
         })
      }
   }
   const handleisShowCheck = () => {
      setIsShowCheck(true)
   }
   const handleOnpressAddOneMember = () => {
      handleUserItemsAdd(item)
   }

   //  get Avatar ========================
   const getAvatar = (user_id) => {
      return `https://uat.xboss.com/web/image?model=res.users&field=image&id=${user_id}`;
   };

   return (
      <TouchableOpacity
         onLongPress={handleisShowCheck}
         onPress={isShowCheck ? handleUserToCheck : handleOnpressAddOneMember}>
         <View style={[StylesModalAddMember.memberModal]}>
            {
               isShowCheck ?
                  <CheckBox
                     wrapperStyle={{ padding: 5, width: 0, height: 20 }}
                     onPress={handleUserToCheck}
                     checked={isCheck}
                  />
                  :
                  <Text style={{ display: "none" }}></Text>
            }
            <Image
               style={StylesModalAddMember.imgAvatar}
               source={{ uri: getAvatar(item.id) }}
            />
            <Text style={StylesModalAddMember.nameMember}>
               {item.name}
            </Text>
            <View style={StylesModalAddMember.contactUser}>
               <TouchableOpacity>
                  <IconAntd
                     style={[
                        StylesModalAddMember.callUser,
                        { backgroundColor: '#2ecc71' },
                     ]}
                     name="phone"
                  />
               </TouchableOpacity>
               <TouchableOpacity>
                  <IconAntd
                     style={[
                        StylesModalAddMember.callUser,
                        { backgroundColor: '#3498db' },
                     ]}
                     name="message1"
                  />
               </TouchableOpacity>
               <TouchableOpacity>
                  <IconAntd
                     style={[
                        StylesModalAddMember.callUser,
                        { backgroundColor: '#e74c3c' },
                     ]}
                     name="mail"
                  />
               </TouchableOpacity>
            </View>
         </View>
      </TouchableOpacity>
   )
}