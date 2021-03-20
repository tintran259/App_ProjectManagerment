import React, { useState } from 'react';
import { View, Text, Image, FlatList, Alert, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';

// Styles + ICon
import { StylesProject } from '../../assets/styles';
import IconAntd from 'react-native-vector-icons/AntDesign'
import IconEmtypo from 'react-native-vector-icons/Entypo'
// Action+ Business
import {
   actUpdateProjectAfterEdit,
   actGetItemsProjectDetail,
   actGetListProjectType,
   actListTaskProjectInProjectDetail
} from '../../redux/action/ProjectAction';
import { actHideLoading, actShowLoading } from '../../redux/action/Globalaction';
import {
   GetListContactUserBusiness,
   GetProjectTypeBusiness,
   GetFavoriteProjectScreenBusiness,
   GetListProjectBusiness,
   GetListTaskProjectDetailBusiness
} from '../../business/ProjectScreenBusiness';

//Config
import { getDateByTimeZoneMin } from '../../utils/configs'


export default function ListProject({ navigation, inforProject }) {

   const dispatch = useDispatch();

   const [isFavorite, setIsFavorite] = useState(false)

   const handleProjectDetails = async () => {
      const members = inforProject.members;
      getListProjectType();
      getListTaskProjectDetail();
      // Lay Danh sach duoc Click
      dispatch(actShowLoading());
      return await GetListContactUserBusiness(members)
         .then((response) => {
            let contactProject = response.data;
            dispatch(actGetItemsProjectDetail(inforProject, contactProject));
            dispatch(actHideLoading());
            navigation.navigate('ProjectDetailsScreens');
         });
   };

   const getListProjectType = async () => {
      return await GetProjectTypeBusiness()
         .then((res) => {
            dispatch(actGetListProjectType(res.data))
         })
   }
   const getListTaskProjectDetail = async () => {
      let projectID = inforProject.id
      return await GetListTaskProjectDetailBusiness(projectID)
         .then((res) => {
            let listTask = res.data
            dispatch(actListTaskProjectInProjectDetail(listTask))
         })
   }


   const handleFavorite = async () => {
      setIsFavorite(true)
      dispatch(actShowLoading())
      const id_Project = inforProject.id
      return await GetFavoriteProjectScreenBusiness({ id_Project, isFavorite: true }).then(() => {
         upDateListProject()
         Alert.alert("Notification !", `"${inforProject.name}" have added into the favorites list !`)
      })
   }
   const handleUnFavorite = async () => {
      setIsFavorite(false)
      dispatch(actShowLoading())
      const id_Project = inforProject.id
      return await GetFavoriteProjectScreenBusiness({ id_Project, isFavorite: false }).then(() => {
         upDateListProject()
         Alert.alert("Notification !", `"${inforProject.name}" has removed form favorites list !`)
      })
   }

   const upDateListProject = async () => {
      return await GetListProjectBusiness()
         .then((res) => {
            dispatch(actUpdateProjectAfterEdit(res.data))
            dispatch(actHideLoading())
         })
   }
   const getAvatar = (user_id) => {
      return `https://uat.xboss.com/web/image?model=res.users&field=image&id=${user_id}`;
   };
   return (
      <TouchableOpacity style={StylesProject.ListProject} onPress={handleProjectDetails}>
         <View style={StylesProject.AvatarManager}>
            <Image style={StylesProject.avatar_manager} source={{ uri: getAvatar(inforProject && inforProject.user_id[0]) }} />
            <Text style={StylesProject.text}>Task:{inforProject && inforProject.task_count}</Text>
         </View>
         <View style={StylesProject.LeftProject}>
            <View style={StylesProject.textName}>
               <Text
                  style={StylesProject.headerTitleListProject}
                  numberOfLines={1}
               >
                  {inforProject && inforProject.name}
               </Text>
               {
                  isFavorite || inforProject.is_favorite ?
                     <View style={{ width: "20%", height: "100%" }}>
                        <TouchableOpacity onPress={handleUnFavorite} style={{ width: "100%", height: "100%", paddingLeft: 20, paddingTop: 5 }}>
                           <IconAntd name="star" size={20} style={{ color: "#f9ca24" }} />
                        </TouchableOpacity>
                     </View>
                     :
                     <View style={{ width: "20%", height: "100%" }}>
                        <TouchableOpacity onPress={handleFavorite} style={{ width: "100%", height: "100%", paddingLeft: 20, paddingTop: 5 }}>
                           <IconAntd name="staro" size={20} style={{ color: "#f9ca24" }} />
                        </TouchableOpacity>
                     </View>
               }

            </View>
            <View style={StylesProject.dateProject}>
               {
                  inforProject && inforProject.date_start ?
                     <View style={StylesProject.dayStartandEnd}>
                        <Image style={StylesProject.iconStart} source={require('../../assets/images/dayStart.png')} />
                        <Text style={StylesProject.date}>
                           {inforProject && getDateByTimeZoneMin(inforProject.date_start, inforProject.tz)}
                        </Text>
                     </View>
                     :
                     <Text style={{ display: "none" }}></Text>
               }
               {
                  inforProject && inforProject.date_end ?
                     <View style={StylesProject.dayStartandEnd}>
                        <Image style={StylesProject.iconStart} source={require('../../assets/images/dayEnd.png')} />
                        <Text style={StylesProject.date}>
                           {inforProject && getDateByTimeZoneMin(inforProject.date_end, inforProject.tz)}
                        </Text>
                     </View>
                     :
                     <Text style={{ display: "none" }}></Text>
               }

            </View>
            <Text numberOfLines={1} style={StylesProject.titleManager}>{inforProject && inforProject.user_id[1]}</Text>

            <View style={{
               flexDirection: "row", alignItems: "center", width: "100%", height: 40,
            }}>
               <View style={StylesProject.listMember}>
                  {
                     inforProject && inforProject.members.toString() !== "" ?

                        <FlatList
                           horizontal={true}
                           data={inforProject && inforProject.members}
                           keyExtractor={item => item.toString()}
                           renderItem={({ item }) => {
                              return (
                                 <Image style={StylesProject.iamgeMember} source={{ uri: getAvatar(item) }} />
                              )
                           }}
                        />

                        :
                        <IconAntd name="deleteuser" size={20} color="#6c757d" />
                  }
               </View>
               {
                  inforProject.members.length > 3 ?
                     <View style={{ height: 40, marginLeft: 5, flexDirection: "column", justifyContent: "flex-end" }}>
                        <IconEmtypo style={StylesProject.MoreMember} name="plus" />
                     </View>
                     :
                     <Text style={{ display: "none" }}></Text>
               }
               {/* {
                  inforProject && inforProject.date_start ?
                     <View style={StylesProject.viewTagname}>
                        <Image style={StylesProject.tagname} source={require('../../assets/images/leftArow.png')} />
                        <Text style={StylesProject.textTagName}>Start</Text>
                     </View>
                     :
                     <View style={StylesProject.viewTagname}>
                        <Image style={StylesProject.tagname} source={require('../../assets/images/red.png')} />
                        <Text style={StylesProject.textTagName}>End</Text>
                     </View>
               } */}

            </View>
         </View>
         {/*  */}
      </TouchableOpacity>
   );
}
