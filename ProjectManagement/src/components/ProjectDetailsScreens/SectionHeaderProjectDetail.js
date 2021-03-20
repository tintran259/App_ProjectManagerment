import React from 'react'
import { View, Text, TextInput, Image } from 'react-native'
import { useSelector } from 'react-redux'

import { StylesProjectDetails } from '../../assets/styles'
import IconAntd from 'react-native-vector-icons/AntDesign'
import IconFeather from 'react-native-vector-icons/Feather'



export default function SeactionHeaderProjectDetail({
   isEdit,
   formItemsProject,
   setFormItemsProject,
   handleModalEditNameManager
}) {

   const ItemsDetails = useSelector(state => state.ProjectReducer.projectDetails.inforProject)
   const ListContactProject = useSelector(state => state.ProjectReducer.projectDetails.contactProject)

   return (
      <View style={StylesProjectDetails.headerItems}>
         {
            isEdit ?
               <View style={StylesProjectDetails.ViewEditTextInput}>
                  <TextInput
                     autoFocus
                     style={StylesProjectDetails.textInputNameProject}
                     value={formItemsProject.nameProject}
                     onChangeText={text => {
                        setFormItemsProject({
                           ...formItemsProject,
                           nameProject: text
                        })
                     }}
                  />
               </View>
               :
               <>
                  <Text style={StylesProjectDetails.titleItems} numberOfLines={2}>
                     {formItemsProject.nameProject}
                  </Text>
               </>
         }
         <View style={StylesProjectDetails.sectionDetail}>
            <View style={StylesProjectDetails.itemLeft}>
               <View style={StylesProjectDetails.backImg}>
                  <Image resizeMode="cover" style={StylesProjectDetails.imageLeft} source={require('../../assets/images/checklist.png')} />
               </View>
            </View>
            <View style={StylesProjectDetails.itemRight}>
               <View style={StylesProjectDetails.textName}>
                  <Text style={StylesProjectDetails.titleText}>Manager :</Text>
                  {
                     isEdit ?
                        <View style={StylesProjectDetails.ViewEditManager}>
                           <Text onPress={handleModalEditNameManager} style={{ fontSize: 17, width: "53%", height: 25, color: "#fff" }}>
                              {formItemsProject.nameManager}
                           </Text>
                           <IconAntd onPress={handleModalEditNameManager} style={StylesProjectDetails.iconEditManager} name="edit" size={20} color="#fff" />
                        </View>
                        : <Text style={{ fontSize: 17, width: "100%", height: 25, color: "#fff" }}>{formItemsProject.nameManager}</Text>
                  }
               </View>
               <View>
                  {
                     ItemsDetails && ItemsDetails.type_id[1] ?
                        <View style={StylesProjectDetails.textName}>
                           <Text style={StylesProjectDetails.titleText}>Project Type :</Text>
                           <Text style={[StylesProjectDetails.nameMana]}>
                              {ItemsDetails && ItemsDetails.type_id[1]}
                           </Text>
                        </View>
                        :
                        <Text style={{ display: "none" }}></Text>
                  }
                  <Text
                     style={[{ fontSize: 16, fontWeight: "bold" }, ItemsDetails.project_status[0] === 1 ? { color: "#2ecc71" } : { color: "#ffc048" }]}>
                     <Text style={StylesProjectDetails.titleText}>Status:  </Text>{ItemsDetails.project_status[1]}
                  </Text>
               </View>
            </View>

         </View>
         <View style={StylesProjectDetails.membersInvite}>
            <IconFeather name="user" style={StylesProjectDetails.memberCount}></IconFeather>
            <Text style={StylesProjectDetails.textCount}>{ListContactProject.length}</Text>
         </View>
      </View>
   )
}