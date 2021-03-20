import { StyleSheet } from 'react-native'

const StylesTask = StyleSheet.create({
   listTask: {
      padding: 5,
      marginBottom: 10,
      width: "100%",
      height: 150,
      borderRadius: 10,
      borderWidth: 1,
      borderBottomColor: "#d2dae2",
      borderTopColor: "#ecf0f1",
      borderLeftColor: "#ecf0f1",
      borderRightColor: "#ecf0f1",
      backgroundColor: "#fff",
      shadowColor: "#000",
      shadowOffset: {
         width: 0,
         height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,

      elevation: 5,
   },
   title: {
      width: "80%",
      fontSize: 15,
      color: "#3498db",
   },
   headerTask: {
      width: "100%",
      height: 30,
      flexDirection: "row",
      justifyContent: "space-between",
   },
   body: {
      width: "100%",
      height: 75,
      flexDirection: "row",
      borderBottomWidth: 1,
      borderBottomColor: "#bdc3c7"
   },
   footer: {
      width: "100%",
      height: 40,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
   },
   star: {
      width: "20%",
      flexDirection: "row",
      justifyContent: "space-around",
      marginRight: "2%"
   },
   iconStar: {
      fontSize: 16,
      color: "#f9ca24"
   },
   avatar: {
      width: 27,
      height: 27,
      borderRadius: 40,
   },
   viewDate: {
      flexDirection: "row",
      width: 100,
      height: 22,
      alignItems: "center",
      justifyContent: "space-around",
      backgroundColor: "#e74c3c",
      borderRadius: 7
   },
   iconClock: {
      color: "#fff"
   },
   dateDeline: {
      color: "#fff",
      fontSize: 13
   },
   empty: {
      width: "100%",
      flexDirection: "column",
      alignItems: "center"
   },
   imageEmpty: {
      width: 80,
      height: 80,
      marginTop: "50%"
   },
   textEm: {
      color: "#7f8c8d"
   },
   viewContact: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-around",
      width: 80,
   },
   content: {
      width: "65%",
      height: "100%",
   },
   percent: {
      width: "35%",
      height: "100%",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center"
   },
   linepercent: {

      height: 10,
      borderRadius: 10,
      borderWidth: 1,
      borderColor: "#bdc3c7"
   },
   textPercent: {
      fontSize: 12,
      color: "#7f8c8d",
      marginLeft: "8%"
   },
   textT: {
      color: "#95a5a6"
   }
})

export default StylesTask