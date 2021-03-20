import React, { useCallback, useMemo } from 'react';
import { View, Text, StatusBar, FlatList, Image } from 'react-native';
import { useSelector } from 'react-redux';
import { TabView, SceneMap } from 'react-native-tab-view';
// Styles + Icon
import { StylesProject } from '../../../assets/styles';
import IconFeather from 'react-native-vector-icons/Feather'

//Compponents
import { ListProject } from '../../../components/ProjectScreens';


export default function ProjectScreens({ navigation }) {

   const ListDataProject = useSelector(state => state.ProjectReducer.listProject);


   const [index, setIndex] = React.useState(0);
   const [routes] = React.useState([
      { key: 'first', title: 'In Process' },
      { key: 'second', title: 'Pedding' },
      { key: 'third', title: 'Compelete' },
   ]);


   // FuncData =============================================

   const ListDataProjectPending = useMemo(() => {
      return ListDataProject.filter((item) => {
         return item.project_status[0] === 1;
      })
   }, [ListDataProject]);

   const ListDataProjectInProcess = useMemo(() => {
      return ListDataProject.filter((item) => {
         return item.project_status[0] === 2;
      });
   }, [ListDataProject])

   const ListDataProjectComplete = useMemo(() => {
      return ListDataProject.filter((item) => {
         return item.project_status[0] === 3;
      });
   }, [ListDataProject])
   const listDataSortInProcess = useMemo(() => {
      let newData = ListDataProjectInProcess.sort((a, b) => {
         return b.is_favorite - a.is_favorite
      })
      return newData
   }, [ListDataProjectInProcess])

   const listDataSortPedding = useMemo(() => {
      let newData = ListDataProjectPending.sort((a, b) => {
         return b.is_favorite - a.is_favorite
      })
      return newData
   }, [ListDataProjectPending])

   // FuncView =================================
   const renderScene = SceneMap({
      first: useCallback(() => {
         return (
            <FlatList
               keyExtractor={item => item.id.toString()}
               data={listDataSortInProcess}
               contentContainerStyle={{ paddingBottom: 50, paddingTop: 5 }}
               ListEmptyComponent={() => {
                  return (
                     <View style={StylesProject.emptyComplete}>
                        <Image source={require('../../../assets/images/folder.png')} />
                        <Text style={StylesProject.textEmptyComplete}>Empty Inprocess </Text>
                     </View>
                  )
               }}
               renderItem={({ item }) => {
                  return (
                     <ListProject
                        inforProject={item}
                        navigation={navigation}
                     />
                  )
               }}
            />
         )
      }, [ListDataProject]),
      second: useCallback(() => {
         return (
            <FlatList
               keyExtractor={item => item.id.toString()}
               data={listDataSortPedding}
               contentContainerStyle={{ paddingBottom: 50, paddingTop: 5 }}
               ListEmptyComponent={() => {
                  return (
                     <View style={StylesProject.emptyComplete}>
                        <Image source={require('../../../assets/images/folder.png')} />
                        <Text style={StylesProject.textEmptyComplete}>Empty pending </Text>
                     </View>
                  )
               }}
               renderItem={({ item }) => {
                  return (
                     <ListProject
                        inforProject={item}
                        navigation={navigation}
                     />
                  )
               }}
            />
         )
      }, [ListDataProject]),
      third: useCallback(() => {
         return (
            <FlatList
               keyExtractor={item => item.id.toString()}
               data={ListDataProjectComplete}
               contentContainerStyle={{ paddingBottom: 50, paddingTop: 5 }}
               ListEmptyComponent={() => {
                  return (
                     <View style={StylesProject.emptyComplete}>
                        <Image source={require('../../../assets/images/folder.png')} />
                        <Text style={StylesProject.textEmptyComplete}>Empty complete </Text>
                     </View>
                  )
               }}
               renderItem={({ item }) => {
                  return (
                     <ListProject
                        inforProject={item}
                        navigation={navigation}
                     />
                  )
               }}
            />
         )
      }, [ListDataProject])
   });

   return (
      <View style={StylesProject.container}>
         <StatusBar backgroundColor="#3498db"></StatusBar>
         <View style={StylesProject.header}>
            <IconFeather
               onPress={() => navigation.openDrawer()}
               style={StylesProject.iconBars}
               name="align-left"
               size={25}
            />
            <Text style={StylesProject.headerTitle}>List Projects</Text>
         </View>
         <View style={StylesProject.body}>
            <View style={StylesProject.bodyItem}>
               <TabView
                  navigationState={{ index, routes }}
                  renderScene={renderScene}
                  renderTabBar={() => {
                     return (
                        <View style={StylesProject.bodyHeader}>
                           <Text onPress={() => setIndex(0)} style={[StylesProject.title, index === 0 ? { color: "#2f3640", borderBottomColor: "#2f3640", borderBottomWidth: 2 } : { color: "#95A5A6" }]}>
                              In progess
                              </Text>
                           <Text onPress={() => setIndex(1)} style={[StylesProject.title, index === 1 ? { color: "#2f3640", borderBottomColor: "#2f3640", borderBottomWidth: 2 } : { color: "#95A5A6" }]}>
                              Pending
                           </Text>
                           <Text onPress={() => setIndex(2)} style={[StylesProject.title, index === 2 ? { color: "#2f3640", borderBottomColor: "#2f3640", borderBottomWidth: 2 } : { color: "#95A5A6" }]}>
                              Complete
                           </Text>
                        </View>
                     )
                  }}
                  onIndexChange={setIndex}
               />
            </View>
         </View>
      </View>
   );
}
