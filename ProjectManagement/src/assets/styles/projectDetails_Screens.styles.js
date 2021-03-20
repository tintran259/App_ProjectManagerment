import { StyleSheet } from 'react-native'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'


const StylesProjectDetail = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: "#fff"
   },
   header: {
      width: "100%",
      height: "5%",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      backgroundColor: "#3498db",
      position: "relative",
      zIndex: -1
   },
   body: {
      width: "100%",
      height: "95%",
      backgroundColor: "#3498db"
   },
   iconForm: {
      color: "#fff"
   },
   headerTitle: {
      width: "70%",
      height: "51%",
      fontSize: 20,
      fontWeight: "bold",
      textAlign: "center"
   },
   iconBack: {
      color: "#FFF"
   },

   iconOut: {
      color: "#fff"
   },
   statusProject: {
      width: 9,
      height: 9,
      borderRadius: 10,
      position: "absolute",
      left: "16%",
      top: "5%"
   },
   titleItems: {
      width: wp("87%"),
      fontSize: 22,
      height: "39%",
      fontWeight: "bold",
      color: "#fff",
      letterSpacing: 1,
      marginLeft: "3.2%",
      paddingHorizontal: wp("2%"),
      paddingVertical: hp("1%"),
   },
   textInputNameProject: {
      width: "80%",
      height: 46,
      fontSize: 22,
      fontWeight: "bold",
      color: "#fff",
      letterSpacing: 1,
      marginLeft: "4%",
   },
   textName: {
      flexDirection: "row"
   },

   ViewEditTextInput: {
      flexDirection: "row",
      width: wp("100%"),
      height: "39%",
   },
   sectionDetail: {
      flexDirection: "row",
      width: "100%",
      height: "48%",
   },
   headerItems: {
      width: "100%",
      height: "30%",
      backgroundColor: "#3498db",
      paddingHorizontal: wp("2%"),
   },
   sectionItems: {
      width: "100%",
      height: "70%",
      borderWidth: 1,
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      paddingHorizontal: 10,
      paddingVertical: 10,
      backgroundColor: "#fff",
      borderColor: "#fff",
      flexDirection: "column",
      alignItems: "center"
   },
   titleText: {
      fontSize: 17,
      fontWeight: "bold",
      marginRight: 10,
      color: "#d1ccc0"
   },
   imageLeft: {
      width: 50,
      height: 50,
   },
   backImg: {
      marginBottom: "3%",
      width: 80,
      height: 80,
      backgroundColor: "#fff",
      borderRadius: 100,
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      shadowColor: '#fff',
      shadowOffset: {
         width: 0,
         height: 9,
      },
      shadowOpacity: 0.39,
      shadowRadius: 10,

      elevation: 13,
   },
   itemLeft: {
      width: "30%",
      // height: "100%",
      justifyContent: "flex-start",
      alignItems: "center",
   },
   itemRight: {
      width: "70%",
      height: 100,
      // justifyContent: "space-around",
   },

   listUser: {
      marginBottom: 10,
      width: "100%",
      height: 70,
      borderRadius: 10,
      borderWidth: 1,
      // borderTopWidth: 1,
      // borderBottomWidth: 1,
      borderBottomColor: "#d2dae2",
      borderTopColor: "#ecf0f1",
      borderLeftColor: "#ecf0f1",
      borderRightColor: "#ecf0f1",
      flexDirection: "row",
      justifyContent: "space-around",
      alignItems: "center",
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
   btnAdd: {
      flexDirection: "column",
      width: "100%",
      height: 45,
      backgroundColor: "#3498db",
      borderRadius: 10,
      textAlign: "center",
      justifyContent: "center",
      alignItems: "center",
      marginTop: 20,
      color: "#fff",
      fontSize: 18,
      fontWeight: "bold",
      paddingTop: 10
   },
   btnAdddisabale: {
      flexDirection: "column",
      width: "100%",
      height: 45,
      backgroundColor: "#bdc3c7",
      borderRadius: 10,
      textAlign: "center",
      justifyContent: "center",
      alignItems: "center",
      marginTop: 20,
      color: "#fff",
      fontSize: 18,
      fontWeight: "bold",
      paddingTop: 10
   },
   UserDefault: {
      width: 45,
      height: 45,
      marginTop: 10,
      marginLeft: 10,
      borderRadius: 50
   },
   Avatar: {
      width: "18%",
      height: "100%",
      // marginRight: 10
   },
   listUserLeft: {
      width: "42%",
      height: "80%",
      justifyContent: "space-around",
   },
   listUserRight: {
      width: "40%",
      height: "100%",
      flexDirection: "row",
      justifyContent: "space-around",
      alignItems: "center",
   },
   textNameUser: {
      fontSize: 15,
      fontWeight: "bold",
      width: "100%",
      height: 20
   },
   IconContact: {
      borderRadius: 50,
      borderWidth: 1,
      width: 35,
      height: 35,
      padding: 10,
      borderColor: "#fff",
      fontSize: 15,
      marginLeft: -5
   },
   nameMana: {
      color: "#fff",
      fontSize: 17
   },
   boxEmpty: {
      width: "100%",
      height: "85%",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
   },
   empty: {
      width: 80,
      height: 80,
      marginTop: 130
   },

   textInputManager: {
      width: "53%",
      height: 18,
      padding: 0,
      fontSize: 17,
      position: "absolute",
      top: 5,
      left: 138,
   },
   loading: {
      position: "absolute",
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      backgroundColor: "red"
   },
   iconClose: {
      color: "#fff"
   },
   close: {
      width: "20%",
      height: "100%",
      backgroundColor: "#e74c3c",
      position: "absolute",
      right: 0,
      // borderTopRightRadius: 10,
      // borderBottomRightRadius: 10,
      borderRadius: 10,
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
   },

   createBtn: {
      width: 60,
      height: 60,
      backgroundColor: "#5189ff",
      borderRadius: 100,
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      position: "absolute",
      top: hp("52%"),
      right: wp("4%"),
      shadowColor: "#000",
      shadowOffset: {
         width: 0,
         height: 8,
      },
      shadowOpacity: 0.46,
      shadowRadius: 11.14,

      elevation: 17,
   },

   btnCheck: {
      width: 50,
      height: 50,
      padding: 10
   },
   btnLeft: {
      width: 50,
      height: 50,
      padding: 10
   },
   iconPencil: {
      // marginLeft: "0%"
   },
   ViewEditManager: {
      flexDirection: "row",
      alignItems: "center"
   },

   memberCount: {
      color: "#fff",
      marginRight: 5,
      fontSize: 19
   },
   textCount: {
      fontSize: 17,
      color: "#fff",
   },
   membersInvite: {
      flexDirection: "row",
      justifyContent: "flex-end",
      marginRight: "5%"
   },
   ContactSwipte: {
      width: "100%",
      height: "93.8%",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#e74c3c",
      shadowColor: "#000",
      borderTopWidth: 1,
      borderBottomWidth: 1,
      borderRightWidth: 1,
      borderColor: "#d2dae2",
      borderTopRightRadius: 10,
      borderBottomRightRadius: 10,
      shadowOffset: {
         width: 0,
         height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,

      elevation: 5,
   },
   searchTextView: {
      width: "100%",
      height: 50,
      flexDirection: 'row',
      alignItems: "center",
      padding: 5,
      marginBottom: 5,
   },
   viewSearch: {
      width: "80%",
      height: 40,
      flexDirection: "row",
      alignItems: "center",
   },
   btnFilter: {
      width: "20%",
      height: 40,
      flexDirection: "row",
      justifyContent: "center"
   },
   inputText2: {
      width: "100%",
      height: 35,
      borderRadius: 10,
      borderWidth: 1,
      paddingLeft: 10,
      paddingRight: 50,
      color: "#7f8c8d",
      borderColor: "#7f8c8d"
   },
   iconSearch: {
      fontSize: 20,
      color: "#7f8c8d",
      position: "absolute",
      top: "20%",
      right: "2%"
   },
   viewFilter: {
      width: "90%",
      height: 40,
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
   },
   iconFilter: {
      fontSize: 25,
      color: "#7f8c8d"
   },
   viewTab: {
      width: "100%",
      height: 40,
      backgroundColor: "red"
   },
   tabViewText: {
      flexDirection: "row",
      marginBottom: 10
   },
   textTab: {
      fontSize: 14,
      fontWeight: "bold",
      marginLeft: 7
   }

})

export default StylesProjectDetail