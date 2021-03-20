import React, { useState, useMemo } from 'react'
import Modal from 'react-native-modal'
import { View, Text, FlatList, TouchableOpacity, TextInput } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'

//Styles + Icon
import { StylesModalAddMember } from '../../assets/styles/ProjectDetailsScreens.js';
import IconAntd from 'react-native-vector-icons/AntDesign'

//Action
import { actAddItemsUser, actAddUserThenCancelCheck } from '../../redux/action/ProjectAction';

//Components
import { ListUserInModal } from '../ProjectDetailsScreens'

export default function ModalAddMember({
   members,
   setMembers,
   isShowModalAdd,
   handleCloseModalAdd,
}) {
   const dispatch = useDispatch();

   const ListUserSelected = useSelector(state => state.ProjectReducer.projectDetails.contactProject);
   const ListUserAdd = useSelector(state => state.ProjectReducer.listUserAdd);
   const listMember = useMemo(() => {
      const listItem = ListUserSelected && ListUserSelected.map((item) => {
         return item
      })
      return listItem
   }, [ListUserSelected])

   const [isShowInputSearch, setIsShowInputSearch] = useState(false)
   const [isShowCheck, setIsShowCheck] = useState(false)
   const [multiMembers, setmultiMembers] = useState(listMember)
   const [searchText, setSearchText] = useState("")

   // Funclogic .............................
   const fillterListAddUser = (user) => {
      const filter = ListUserSelected.filter((items) => {
         return items.id === user.id;
      });
      if (filter.toString()) {
         return false;
      } else {
         return true;
      }
   };
   const filterListUserSame = (user) => {
      const filter = multiMembers && multiMembers.filter((item) => {
         return item.id === user.id
      })
      if (filter.toString()) {
         return false;
      } else {
         return true;
      }
   }
   const handleUserItemsAdd = (item) => {
      if (fillterListAddUser(item)) {
         setMembers([...members, item.id])
         dispatch(actAddItemsUser(item))
         handleCloseModalAdd()
      } else {
         alert('Co Nguoi Nay Roi !')
      }
   }
   const getMemberFromListUser = (user, callback) => {
      if (fillterListAddUser(user)) {
         if (filterListUserSame(user)) {
            setmultiMembers([...multiMembers, user])
         }
      } else {
         alert('Co Nguoi Nay Roi !')
         callback()
      }
   }

   const getMemberAfterUnCheck = (user) => {
      const list = multiMembers && multiMembers.filter((item) => {
         return item.id !== user.id
      })
      setmultiMembers(list)
   }
   const handleShowInputSearch = () => {
      setIsShowInputSearch(!isShowInputSearch)
   }
   const handleCancleShowCheck = () => {
      setIsShowCheck(false)
   }
   const handleSubmitAddmember = () => {
      dispatch(actAddUserThenCancelCheck(multiMembers))
      handleCloseModalAdd()
   }

   // FuncData .........................

   const listSearchMemberInModalAdd = useMemo(() => {
      let dataSearch = ListUserAdd && ListUserAdd.filter((member) => {
         return member.name.toLowerCase().indexOf(searchText.toLowerCase()) !== -1
      })
      return dataSearch
   }, [ListUserAdd, searchText])


   return (
      <Modal
         coverScreen={true}
         animationIn="bounceIn"
         isVisible={isShowModalAdd}
         onBackdropPress={handleCloseModalAdd}
         animationInTiming={2500}
         animationOutTiming={1000}
      >
         <View style={StylesModalAddMember.modalBox}>
            <View style={StylesModalAddMember.headerModal}>
               {
                  isShowInputSearch ?
                     <TextInput
                        style={[{ width: "80%" }, StylesModalAddMember.textInput]}
                        placeholder="Search member here .."
                        value={searchText}
                        onChangeText={text => { setSearchText(text) }}
                     />
                     :
                     <Text style={{ display: "none" }}></Text>
               }
               {
                  isShowCheck ?
                     <TouchableOpacity onPress={handleCancleShowCheck} style={{ width: 40, height: 40, position: "absolute", left: "2%", flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                        <IconAntd style={StylesModalAddMember.closeAdd} name="close" />
                     </TouchableOpacity>
                     :
                     <Text style={{ display: "none" }}></Text>
               }
               <Text style={[StylesModalAddMember.titleHeader, isShowInputSearch ? { display: "none" } : { display: "flex" }]}>
                  Danh sách thành viên
               </Text>
               <TouchableOpacity onPress={handleShowInputSearch} style={{ width: 40, height: 40, marginRight: "2%", flexDirection: "row", justifyContent: "center", alignItems: "center", zIndex: 2 }}>
                  <IconAntd name="search1" size={18} color="#3498db" />
               </TouchableOpacity>

            </View>
            <View style={StylesModalAddMember.bodyModal}>
               {
                  <FlatList
                     contentContainerStyle={{ paddingTop: 10, paddingBottom: 10 }}
                     data={listSearchMemberInModalAdd}
                     keyExtractor={item => item.id.toString()}
                     renderItem={({ item }) => {
                        return (
                           <ListUserInModal
                              item={item}
                              handleUserItemsAdd={handleUserItemsAdd}
                              members={members}
                              setMembers={setMembers}
                              isShowCheck={isShowCheck}
                              setIsShowCheck={setIsShowCheck}
                              getMemberFromListUser={getMemberFromListUser}
                              getMemberAfterUnCheck={getMemberAfterUnCheck}
                           />
                        );
                     }}
                  />
               }
            </View>
            <View style={StylesModalAddMember.footerModal}>
               <TouchableOpacity style={StylesModalAddMember.btnFooter} onPress={handleSubmitAddmember}>
                  <Text
                     style={StylesModalAddMember.titleFooter}>
                     OK
                  </Text>
               </TouchableOpacity>
               <TouchableOpacity style={StylesModalAddMember.btnFooter} onPress={handleCloseModalAdd}>
                  <Text
                     style={StylesModalAddMember.titleFooter}>
                     Cancel
                  </Text>
               </TouchableOpacity>
            </View>
         </View>
      </Modal >
   );
}
