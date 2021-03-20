import React, { useCallback } from 'react'
import { View, Text, Image } from 'react-native'

import { StylesTask } from '../../assets/styles/ProjectDetailsScreens.js'
import IconAntd from 'react-native-vector-icons/AntDesign'

import { getDateByTimeZoneDay } from '../../utils/configs'


export default function ListTaskProjectDetail({ tasks }) {


   const getAvatar = (user_id) => {
      return `https://uat.xboss.com/web/image?model=res.users&field=image&id=${user_id}`
   }

   const dateNow = new Date();

   const day = parseInt(dateNow.getDate());
   const month = dateNow.getMonth() + 1;
   const year = dateNow.getFullYear();
   const today = year + '-' + month + '-' + day;
   const date_deadline = tasks.date_deadline

   const compereNowAndDealine = useCallback(() => {
      if (today < date_deadline) {
         return true
      } else {
         return false
      }
   }, [today, date_deadline])
   return (
      <View style={StylesTask.listTask} >
         <View style={StylesTask.headerTask}>
            <Text numberOfLines={1} style={StylesTask.title}>{tasks.name}</Text>
            {
               tasks && tasks.priority === "3" ?
                  <View style={StylesTask.star}>
                     <IconAntd style={StylesTask.iconStar} name="star" />
                     <IconAntd style={StylesTask.iconStar} name="star" />
                     <IconAntd style={StylesTask.iconStar} name="star" />
                  </View>
                  : tasks.priority === "2" ?
                     <View style={StylesTask.star}>
                        <IconAntd style={StylesTask.iconStar} name="star" />
                        <IconAntd style={StylesTask.iconStar} name="star" />
                        <IconAntd style={StylesTask.iconStar} name="staro" />
                     </View>
                     : tasks.priority === "1" ?
                        <View style={StylesTask.star}>
                           <IconAntd style={StylesTask.iconStar} name="star" />
                           <IconAntd style={StylesTask.iconStar} name="staro" />
                           <IconAntd style={StylesTask.iconStar} name="staro" />
                        </View>
                        :
                        <View style={StylesTask.star}>
                           <IconAntd style={StylesTask.iconStar} name="staro" />
                           <IconAntd style={StylesTask.iconStar} name="staro" />
                           <IconAntd style={StylesTask.iconStar} name="staro" />
                        </View>
            }
         </View>
         <View style={StylesTask.body}>
            <View style={StylesTask.content}>
               {
                  tasks && tasks.type_id[1] ?
                     <Text style={StylesTask.textT}>Type: {tasks && tasks.type_id[1]}</Text>
                     :
                     <Text style={{ display: "none" }}></Text>
               }
               <View style={StylesTask.arrow}>
                  {
                     tasks && tasks.stage_id[1] ?
                        <Text style={StylesTask.textT}>Status: {tasks && tasks.stage_id[1]}</Text>
                        :
                        <Text style={{ display: "none" }}></Text>
                  }
               </View>
            </View>
            <View style={StylesTask.percent}>
               <Text style={StylesTask.textPercent}>{tasks && tasks.duration}%</Text>
               <View style={[StylesTask.linepercent, { width: "90%", }]}>
                  <Text style={{ width: `${tasks && tasks.duration}%`, height: 8, backgroundColor: "#3498db", borderRadius: 10 }}></Text>
               </View>
            </View>
         </View>
         <View style={StylesTask.footer}>
            <View style={[StylesTask.viewDate, compereNowAndDealine() ? { backgroundColor: "#2ecc71" } : { backgroundColor: "#e74c3c" }]}>
               <IconAntd style={StylesTask.iconClock} name="clockcircleo" />
               <Text style={StylesTask.dateDeline}>{getDateByTimeZoneDay(tasks.date_deadline, null)}</Text>
            </View>
            <View style={StylesTask.viewContact}>
               <Image style={StylesTask.avatar} source={{ uri: getAvatar(tasks.create_uid[0]) }} />
               <IconAntd name="right" color="#7f8c8d"></IconAntd>
               <Image style={StylesTask.avatar} source={{ uri: getAvatar(tasks.user_id[0]) }} />
            </View>
         </View>
      </View>

   )
}