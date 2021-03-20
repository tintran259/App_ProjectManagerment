import React, { useEffect, useState } from 'react'
import { View, TouchableOpacity, Image } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'


import { StylesModalAddMember } from '../../assets/styles/ProjectDetailsScreens.js'
import IconAntd from 'react-native-vector-icons/AntDesign'


export default function HeaderModalFlatList({
   setIsShowCheck,
   isShowCheck,
   searchText,
   setSearchText
}) {
   const handleShowCheck = () => {
      setIsShowCheck(true)
   }
   const handleCloseShowCheck = () => {
      setIsShowCheck(false)
   }
   return (
      <View style={StylesModalAddMember.headerFlaslist}>
         <View style={StylesModalAddMember.viewSearch}>
            <TextInput
               style={StylesModalAddMember.inputSearch}
               placeholder="Search name members ..."
               value={searchText}
               onChangeText={text => setSearchText(text)}
            />
            <IconAntd name="search1" style={StylesModalAddMember.iconSearch} />
         </View>
         <TouchableOpacity onPress={isShowCheck ? handleCloseShowCheck : handleShowCheck} style={StylesModalAddMember.btnShowCHeck}>
            <Image style={StylesModalAddMember.menuImga} source={require('../../assets/images/check.png')} />
         </TouchableOpacity>
      </View>
   )
}