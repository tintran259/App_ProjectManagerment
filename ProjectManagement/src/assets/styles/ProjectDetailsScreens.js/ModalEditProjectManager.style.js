import { StyleSheet } from 'react-native'

const StylesModalEdit = StyleSheet.create({
   ViewModal: {
      width: "100%",
      height: 400,
      backgroundColor: "#fff",
      borderRadius: 15
   },
   header: {
      width: "100%",
      height: 50,
      borderBottomWidth: 1,
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      borderColor: "#d2dae2"
   },
   titleHeader: {
      fontSize: 18,
      fontWeight: "bold",
      justifyContent: "center",
      color: "#5189ff"
   },
   body: {
      width: "100%",
      height: 300,
      borderBottomWidth: 1,
      padding: 20,
      borderColor: "#d2dae2"
   },
   footer: {
      width: "100%",
      height: 50,
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center"
   },
   Cancel: {
      fontSize: 18,
      fontWeight: "bold",
      color: "#5189ff"
   },
   itemsUser: {
      width: "100%",
      height: 60,
      borderWidth: 1,
      borderRadius: 10,
      flexDirection: "row",
      alignItems: "center",
      marginBottom: 20,
      backgroundColor: "#fff",
      borderColor: "#d2dae2"
   },
   textName: {
      fontSize: 16,
      fontWeight: "bold",
      width: 200,
   },
   avatarUser: {
      width: 40,
      height: 40,
      marginLeft: 15,
      marginRight: 50,
      borderRadius: 50
   }
})

export default StylesModalEdit