import { StyleSheet } from 'react-native'

const StylesModalCreate = StyleSheet.create({
   modal: {
      width: "100%",
      height: 600,
      backgroundColor: "#fff",
      borderRadius: 15
   },
   header: {
      width: "100%",
      height: "10%",
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      borderBottomWidth: 1,
      justifyContent: "center"
   },
   headerTitle: {
      fontSize: 20,
      textAlign: "center",
      alignItems: "center",
      fontWeight: "bold"
   },
   closeIcon: {
      position: "absolute",
      top: 10,
      right: 20,
      fontWeight: "bold"
   },
   body: {
      width: "100%",
      height: "80%",
   },
   footer: {
      width: "100%",
      height: "10%",
      borderTopWidth: 1,
      borderTopColor: "#7f8c8d",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-around"
   },
   btnOk: {
      textAlign: "center",
      fontSize: 20,
      fontWeight: "bold"
   },
   btnCancel: {
      fontSize: 20,
      fontWeight: "bold"
   }
})

export default StylesModalCreate