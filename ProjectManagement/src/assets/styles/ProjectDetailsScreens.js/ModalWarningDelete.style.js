import { StyleSheet } from 'react-native';


const StylesModalDelete = StyleSheet.create({
   viewModal: {
      width: "100%",
      height: 150,
      backgroundColor: "#fff",
      borderRadius: 15,

   },
   header: {
      flex: 2.5,
      borderBottomWidth: 1,
      flexDirection: "column",
      justifyContent: "center",
      borderColor: "#d2dae2"
   },
   body: {
      flex: 5,
      flexDirection: "row",
      alignItems: "center"
   },
   footer: {
      flex: 2.5,
      borderTopWidth: 1,
      flexDirection: "row",
      justifyContent: "space-around",
      alignItems: "center",
      borderColor: "#d2dae2"
   },
   btn: {
      width: 100,
      height: 20,
      textAlign: "center"
   },
   titleHeader: {
      fontSize: 18,
      letterSpacing: 1,
      marginLeft: "10%",
      color: "#ff3f34",
      fontWeight: "bold"
   },
   titleBody: {
      fontSize: 17,
      marginLeft: "10%"
   }
})

export default StylesModalDelete