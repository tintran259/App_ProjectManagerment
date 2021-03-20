import { StyleSheet } from 'react-native'


const StyleProject = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: "#ecf0f1"
   },
   date: {
      color: "#757a95",
      marginRight: 10,
      fontSize: 12,
      marginTop: 5,
   },
   notMember: {
      color: "#6c757d"
   },
   listMember: {
      width: 100,
      height: 40,
      marginTop: 5,
      flexDirection: "row",
      alignItems: "center",
      position: "relative"
   },
   viewTagname: {
      position: "absolute",
      right: "-4.55%",
      top: "30%"
   },
   tagname: {
      height: 22,
      width: 50
   },
   textTagName: {
      position: "absolute",
      color: "#fff",
      fontSize: 13,
      right: "15%",
      top: "10%"
   },
   titleManager: {
      fontSize: 16,
      marginTop: 5,
      color: "#6c757d"
   },
   header: {
      width: "100%",
      height: "8%",
      flexDirection: "row",
      alignItems: "center",
      borderBottomWidth: 1,
      backgroundColor: "#3498db",
      justifyContent: "center",
      borderColor: "#bdc3c7"
   },
   iamgeMember: {
      width: 30,
      height: 30,
      borderRadius: 10,
      marginRight: 5,
      borderWidth: 1,
      borderColor: "#bdc3c7"
   },

   logoProject: {
      height: 30,
      width: 30,
      marginRight: 10,
      marginLeft: 15
   },
   headerTitle: {
      fontSize: 20,
      fontWeight: "bold",
      letterSpacing: 1,
      color: "#fff"
   },
   avatar_manager: {
      width: 65,
      height: 65,
      borderRadius: 10,
      marginTop: 5
   },
   dateProject: {
      flexDirection: "row"
   },
   iconBars: {
      position: "absolute",
      left: "5%",
      color: "#fff"
   },
   body: {
      width: "100%",
      height: "100%",
      backgroundColor: "#ecf0f1"
   },
   bodyHeader: {
      flexDirection: "row",
      height: "4%",
      marginBottom: 20,
      width: "100%",
      marginLeft: 10
   },
   title: {
      width: "30%",
      textAlign: "center",
      fontSize: 14,
      fontWeight: "bold",
      padding: 5,
      height: 30,
      color: "#2f3640"
   },
   ListProject: {
      width: "96%",
      height: 150,
      padding: 10,
      borderRadius: 10,
      flexDirection: "row",
      marginLeft: 8,
      marginBottom: 10,
      borderWidth: 1,
      borderColor: "#dcdde1",
      backgroundColor: "#fff",
      shadowColor: "#000",
      shadowOffset: {
         width: 3,
         height: 4,
      },
      shadowOpacity: 0.32,
      shadowRadius: 5.46,

      elevation: 9,
   },
   headerTitleListProject: {
      width: "80%",
      height: 23,
      fontSize: 18,
      color: "#3498db",
      marginTop: 3
   },
   AvatarManager: {
      width: "30%",
      height: "100%",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "space-around",
      // padding: 5
   },
   LeftProject: {
      width: "70%",
      height: "100%",
      flexDirection: "column",
      justifyContent: "space-around",
   },
   text: {
      fontSize: 14,
      fontWeight: "bold",
      color: "#ffaf40",
      marginTop: 30
   },
   text1: {
      width: "100%",
      height: 25,
      fontSize: 16,
      fontWeight: "bold",
      color: "#16a085"
   },
   SectioninProgess: {
      width: "100%",
      height: "100%",
      flexDirection: "column",
      alignItems: "center",
   },
   SectionPending: {
      width: "100%%",
      height: "100%",
      flexDirection: "column",
      alignItems: "center"
   },
   bodyItem: {
      width: "100%",
      height: "100%",
      flexDirection: "row",
   },
   coutDown: {
      marginTop: 5,
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "flex-end",
   },
   iconStart: {
      width: 12,
      height: 12,
      marginRight: 5
   },
   dayStartandEnd: {
      flexDirection: "row",
      alignItems: "center"
   },
   iconMulty: {
      width: 20,
      height: 10,
   },
   textName: {
      width: "100%",
      height: 30,
      flexDirection: "row",
   },
   emptyComplete: {
      width: "100%",
      flexDirection: "column",
      alignItems: "center",
      marginTop: "50%"
   },
   textEmptyComplete: {
      color: "#95A5A6"
   },
   MoreMember: {
      color: "#bdc3c7",
      fontWeight: "bold",
      fontSize: 18,
      width: 30,
      height: 30,
      backgroundColor: "#ecf0f1",
      borderRadius: 10,
      borderWidth: 1,
      borderColor: "#bdc3c7",
      padding: 6,
      borderStyle: "dotted",
      marginBottom: 2
   }
})

export default StyleProject