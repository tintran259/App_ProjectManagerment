import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

import { StylesProjectDetails } from '../../assets/styles'
import IconAntd from 'react-native-vector-icons/AntDesign'

export default function HeaderProjectDetailScreen({
   isEdit,
   handleCancelEditProject,
   handleBackProjectDetail,
   handleEditProjectItems,
   handleEditProjectItemsSuccesed
}) {
   return (
      <View style={StylesProjectDetails.header}>
         {/* header projectDetails */}
         {
            isEdit ?
               <TouchableOpacity style={StylesProjectDetails.btnLeft} onPress={handleCancelEditProject}>
                  <IconAntd
                     style={StylesProjectDetails.iconOut}
                     name="close"
                     size={25}
                  />
               </TouchableOpacity>
               :
               <TouchableOpacity style={StylesProjectDetails.btnLeft} onPress={handleBackProjectDetail}>
                  <IconAntd
                     style={StylesProjectDetails.iconBack}
                     name="left"
                     size={25}
                  />
               </TouchableOpacity>
         }
         {
            isEdit ?
               <TouchableOpacity style={StylesProjectDetails.btnCheck} onPress={handleEditProjectItemsSuccesed}>
                  <IconAntd
                     style={StylesProjectDetails.iconForm}
                     name="check"
                     size={25} />
               </TouchableOpacity>
               :
               <TouchableOpacity style={StylesProjectDetails.btnCheck} onPress={handleEditProjectItems}>
                  <IconAntd
                     style={StylesProjectDetails.iconForm}
                     name="form"
                     size={25} />
               </TouchableOpacity>
         }
      </View>
   )
}