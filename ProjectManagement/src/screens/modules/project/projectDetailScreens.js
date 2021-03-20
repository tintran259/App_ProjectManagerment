import React, { useState, useEffect, useMemo, useCallback } from 'react'
import {
   View,
   Text,
   Image,
   FlatList,
   StatusBar,
} from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { TabView, SceneMap } from 'react-native-tab-view';

// Styles + Icon
import { StylesProjectDetails } from '../../../assets/styles'
import { StylesTask } from '../../../assets/styles/ProjectDetailsScreens.js'
import IconAntd from 'react-native-vector-icons/AntDesign'

// Components
import { ListUserProjectDetail } from '../../../components/ProjectDetailsScreens'
import { ListTaskProjectDetail } from '../../../components/ProjectDetailsScreens'
import {
   ModalEditProjectManager,
   ModalAddMemberProject,
   ModalEditSuccessed
} from '../../../components/ProjectDetailsScreens'
import {
   SectionHeaderProjectDetail,
   HeaderProjectDetailScreen
} from '../../../components/ProjectDetailsScreens'

// Business + Action + NameSpace
import {
   GetEditProjectBusiness,
   GetUserManagerBusiness,
   GetAddUserBusiness,
   GetListProjectBusiness
} from '../../../business/ProjectScreenBusiness'
import {
   actGetListUserManager,
   actGetListUserAdd,
   actUpdateProjectAfterEdit
} from '../../../redux/action/ProjectAction'
import {
   actHideLoading,
   actShowLoading
} from '../../../redux/action/Globalaction'
import { DATA_STATUS } from '../../../utils/configs'



export default function ProjectDetailScreens({ navigation }) {
   const dispatch = useDispatch()

   //Data========================================
   const ListContactProject = useSelector(state => state.ProjectReducer.projectDetails.contactProject)
   const ItemsDetails = useSelector(state => state.ProjectReducer.projectDetails.inforProject)
   const listManager = useSelector(state => state.ProjectReducer.listManager)
   const listTaskInProject = useSelector(state => state.ProjectReducer.listTask)


   const [isEdit, setIsEdit] = useState(false);
   const [isModalSuccess, setIsModalSuccess] = useState(false)
   const [isShowModal, setIsShowModal] = useState(false)
   const [searchText, setSearchText] = useState("")
   const [isShowModalAdd, setIsShowModalAdd] = useState(false)
   const [isSort, setIsSort] = useState(false)
   // ========================Member ===========================
   const [members, setMembers] = useState(
      ListContactProject && ListContactProject.map((items) => {
         const idCurrent = items.id;
         return idCurrent
      })
   )
   const [formItemsProject, setFormItemsProject] = useState({
      id_Project: ItemsDetails.id,
      id: ItemsDetails.user_id[0],
      nameProject: ItemsDetails.name,
      nameManager: ItemsDetails.user_id[1],
      projectType: ItemsDetails.project_status[0],
   })
   //=================================Tabs=============================
   const [index, setIndex] = useState(0);
   const [routes] = useState([
      { key: 'first', title: 'ListMembers' },
      { key: 'second', title: 'ListTasks' },
   ]);
   // LifeCycel =============================================
   useEffect(() => {
      setMembers(
         ListContactProject && ListContactProject.map((items) => {
            const idCurrent = items.id;
            return idCurrent
         })
      )
   }, [ListContactProject])

   useEffect(() => {
      listManagerEdit();
      listUser();
   }, [listManager === []])

   // func Logic =====================================================
   const handleBackProjectDetail = () => {
      navigation.goBack()
   }
   const handleEditProjectItems = () => {
      setIsEdit(true)
   }
   const handleCancelEditProject = () => {
      setIsEdit(false)
   }
   const handleClickManagerChoose = (manager) => {
      const { name, id } = manager;
      setFormItemsProject({
         ...formItemsProject,
         id: id,
         nameManager: name,
         id_Project: ItemsDetails.id
      })
   }
   const handleCloseModalEdit = () => {
      setIsShowModal(false)
   }
   const handleCloseModalAdd = () => {
      setIsShowModalAdd(false)
   }
   const handleModalEditNameManager = () => {
      setIsShowModal(true);
   }
   const handleOpenModalAdd = () => {
      setIsShowModalAdd(true)
   }


   // Func Data ========================================

   const listManagerEdit = async () => {
      return await GetUserManagerBusiness()
         .then((res) => {
            const ListManager = res.data;
            dispatch(actGetListUserManager(ListManager))
         })
   }
   const listUser = async () => {
      return await GetAddUserBusiness()
         .then((res) => {
            const ListUser = res.data;
            dispatch(actGetListUserAdd(ListUser))
         })
   }

   const handleEditProjectItemsSuccesed = async () => {
      setIsEdit(false)
      dispatch(actShowLoading())
      const { id, nameProject, id_Project } = formItemsProject;
      return await GetEditProjectBusiness({ id, nameProject, id_Project, members })
         .then((res) => {
            if (res.status === DATA_STATUS.SUCCESS) {
               dispatch(actHideLoading())
               upDateListProject();
               setIsModalSuccess(true)
            }
         })
   }

   const upDateListProject = async () => {
      return await GetListProjectBusiness()
         .then((res) => {
            dispatch(actUpdateProjectAfterEdit(res.data))
         })
   }

   const dataSearchText = useMemo(() => {
      let newListMember = ListContactProject.filter((member) => {
         return member.name.toLowerCase().indexOf(searchText.toLowerCase()) !== -1
      })
      return newListMember
   }, [searchText, ListContactProject])

   const handleSortMember = () => {
      setIsSort(!isSort)
   }
   const sortAndSearchListMember = useMemo(() => {
      let newListSortAndSearch = dataSearchText.sort((a, b) => {
         if (!isSort && a.name > b.name) {
            return 1
         } else {
            return -1
         }
      })
      return newListSortAndSearch
   }, [dataSearchText, isSort])


   //==============Func View ================================

   const first = useCallback(() => {
      return (
         ListContactProject.toString() !== ""
            ?
            <FlatList
               contentContainerStyle={{ paddingBottom: 10 }}
               data={sortAndSearchListMember}
               keyExtractor={item => item.id.toString()}
               renderItem={({ item }) => {
                  return (
                     <ListUserProjectDetail
                        itemsContact={item}
                        isEdit={isEdit}
                     />
                  )
               }}
            />
            :
            <View style={StylesProjectDetails.boxEmpty}>
               <Image style={StylesProjectDetails.empty} source={require('../../../assets/images/box1.png')} />
               <Text style={{ color: "#95a5a6", fontSize: 14 }}>Empty members</Text>
            </View>
      )
   }, [ListContactProject])
   const second = useCallback(() => {
      return (
         <FlatList
            data={listTaskInProject}
            keyExtractor={item => item.id.toString()}
            renderItem={({ item }) => {
               return (
                  <ListTaskProjectDetail tasks={item} />
               )
            }}
            ListEmptyComponent={() => {
               return (
                  <View style={StylesTask.empty}>
                     <Image style={StylesTask.imageEmpty} source={require("../../../assets/images/box1.png")} />
                     <Text style={StylesTask.textEm}>Empty tasks</Text>
                  </View>
               )
            }}
         />
      )
   }, [listTaskInProject])
   const renderScene = SceneMap({
      first: first,
      second: second,
   });
   // render ===============================================
   return (
      <View style={StylesProjectDetails.container} >
         <StatusBar backgroundColor="#3498db"></StatusBar>
         <HeaderProjectDetailScreen
            isEdit={isEdit}
            handleCancelEditProject={handleCancelEditProject}
            handleBackProjectDetail={handleBackProjectDetail}
            handleEditProjectItems={handleEditProjectItems}
            handleEditProjectItemsSuccesed={handleEditProjectItemsSuccesed}
         />
         <View style={StylesProjectDetails.body}>
            {/* ===================== Name ProjectDetail ====================== */}
            <SectionHeaderProjectDetail
               isEdit={isEdit}
               formItemsProject={formItemsProject}
               setFormItemsProject={setFormItemsProject}
               handleModalEditNameManager={handleModalEditNameManager}
            />

            <View style={StylesProjectDetails.sectionItems}>
               <TabView
                  style={{ width: "100%" }}
                  navigationState={{ index, routes }}
                  renderScene={renderScene}
                  renderTabBar={() => {
                     return (
                        <View style={StylesProjectDetails.tabViewText} >
                           <Text onPress={() => setIndex(0)} style={[StylesProjectDetails.textTab, index === 0 ? { color: "#2f3640", borderBottomColor: "#2f3640", borderBottomWidth: 2 } : { color: "#7f8c8d" }]} >
                              List members
                              </Text>
                           <Text onPress={() => setIndex(1)} style={[StylesProjectDetails.textTab, index === 1 ? { color: "#2f3640", borderBottomColor: "#2f3640", borderBottomWidth: 2 } : { color: "#7f8c8d" }]} >
                              List Tasks
                           </Text>
                        </View>
                     )
                  }}
                  onIndexChange={setIndex}
               />

               {
                  isEdit ?
                     <View style={StylesProjectDetails.createBtn} onStartShouldSetResponder={handleOpenModalAdd}>
                        <IconAntd name="plus" size={30} color="#fff" />
                     </View>
                     :
                     <Text style={{ display: "none" }}></Text>
               }
            </View>

            {/* =============================== Add Members====================== */}

            {/* =======================Modal============================== */}
            {
               isShowModal ?
                  <ModalEditProjectManager
                     isShowModal={isShowModal}
                     handleCloseModalEdit={handleCloseModalEdit}
                     handleClickManagerChoose={handleClickManagerChoose}
                  />
                  :
                  <Text style={{ display: "none" }}></Text>
            }
            {
               isShowModalAdd ?
                  <ModalAddMemberProject
                     isShowModalAdd={isShowModalAdd}
                     handleCloseModalAdd={handleCloseModalAdd}
                     setMembers={setMembers}
                     members={members}
                  />
                  :
                  <Text style={{ display: "none" }}></Text>
            }
            {
               isModalSuccess ?
                  <ModalEditSuccessed
                     isModalSuccess={isModalSuccess}
                     setIsModalSuccess={setIsModalSuccess}
                  />
                  :
                  <Text style={{ display: "none" }}></Text>
            }
         </View >
      </View>
   )
}
