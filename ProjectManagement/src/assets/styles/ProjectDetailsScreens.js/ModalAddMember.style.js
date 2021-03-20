import { StyleSheet } from 'react-native'

const StylesModalAddMember = StyleSheet.create({
   modalBox: {
      width: "100%",
      height: 400,
      backgroundColor: "#fff",
      borderRadius: 10
   },
   headerModal: {
      width: "100%",
      height: 50,
      borderBottomWidth: 1,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      borderColor: "#d2dae2",
      position: "relative"
   },
   bodyModal: {
      width: "100%",
      padding: 0,
      height: 300,
      borderBottomWidth: 1,
      borderColor: "#d2dae2"
   },
   titleHeader: {
      fontSize: 17,
      fontWeight: "bold",
      color: "#5189ff",
      marginLeft: "25%"
   },
   footerModal: {
      width: "100%",
      height: 50,
      flexDirection: "row",
      justifyContent: "space-around",
      alignItems: "center"
   },
   titleFooter: {
      fontSize: 17,
      fontWeight: "bold",
      color: "#5189ff"
   },
   memberModal: {
      width: "100%",
      height: 60,
      borderWidth: 1,
      borderRadius: 10,
      flexDirection: "row",
      alignItems: "center",
      borderColor: "#d2dae2",
      marginBottom: 10,
      marginHorizontal: 10,
   },
   ViewConTact: {
      width: "100%",
      flexDirection: "row",
      alignItems: "center",
   },
   imgAvatar: {
      width: 40,
      height: 40,
      marginLeft: 10,
      borderRadius: 50
   },
   nameMember: {
      marginLeft: 10,
      fontSize: 16,
      fontWeight: "bold",
      width: "33%",
      height: 20,
   },
   contactUser: {
      width: "45%",
      flexDirection: "row",
      justifyContent: "space-around",
   },
   callUser: {
      fontSize: 17,
      width: 35,
      height: 35,
      borderWidth: 1,
      borderRadius: 50,
      padding: 9,
      color: "#fff",
      borderColor: "#fff"
   },
   headerFlaslist: {
      width: "100%",
      height: 40,
      flexDirection: "row",
      alignItems: "center",
      marginBottom: 5
   },
   menuImga: {
      width: 22,
      height: 22,
   },
   btnShowCHeck: {
      width: 40,
      height: 40,
      padding: 8,
      position: "absolute",
      right: "5%"
   },
   btnFooter: {
      width: 70,
      height: 30,
      textAlign: "center",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center"
   },
   inputSearch: {
      width: "100%",
      height: "100%",
      borderWidth: 1,
      borderRadius: 10,
      marginLeft: "3%",
      borderColor: "#bdc3c7",
      paddingLeft: 20,
      fontSize: 15,
      paddingVertical: 0,
      color: "#95a5a6"
   },
   viewSearch: {
      width: "80%",
      height: "80%",
      flexDirection: "row",
      position: "relative"
   },
   iconSearch: {
      fontSize: 18,
      color: "#95a5a6",
      position: "absolute",
      right: "1%",
      top: "22%"
   },
   textInput: {
      zIndex: 1,
      height: 35,
      borderWidth: 1,
      marginLeft: "2%",
      borderRadius: 10,
      transform: [{ translateX: 0, }],
      paddingHorizontal: 10,
      borderColor: "#bdc3c7",
      fontSize: 13,
      color: "#95a5a6"
   },
   closeAdd: {
      fontSize: 17,
      color: "#e74c3c",
      fontWeight: "bold"
   }
})

export default StylesModalAddMember