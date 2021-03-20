import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
  modalBox: {
    // width: 250,
    // height: 250,
    // backgroundColor: 'white',
    // borderRadius: 10,

    height: '45%',

    marginTop: 'auto',

    backgroundColor: 'white',

    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },

  modalTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2980b9',
  },

  user: {
    flexDirection: 'row',

    alignItems: 'center',
    paddingVertical: 10,
    marginHorizontal: 10,

    borderBottomWidth: 0.5,
    borderColor: 'gray',
  },

  info: {},

  formAcc: {
    paddingHorizontal: 10,
    paddingTop: 20,
  },

  account: {
    marginLeft: 10,
  },

  username: {
    fontSize: 16,
    fontWeight: 'bold',
    paddingBottom: 7,
    color: 'gray',
  },

  url: {
    color: 'gray',
  },

  icon: {
    fontSize: 30,
    color: 'gray',

    marginRight: 10,
  },

  iconCheck: {
    fontSize: 20,
    color: '#2980b9',
  },

  modalView: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,

    borderBottomWidth: 0.5,
    borderColor: 'gray',

    position: 'relative',
  },

  modalViewBottom: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,

    flexDirection: 'row',

    marginHorizontal: 10,

    borderTopWidth: 0.5,
    borderColor: 'gray',
  },

  // closeText: {
  //   color: '#2980b9',
  //   fontSize: 16,
  //   fontWeight: 'bold',

  //   marginHorizontal: 15,
  // },

  // closeTextCancle: {
  //   color: 'red',
  //   fontSize: 16,
  //   fontWeight: 'bold',

  //   marginHorizontal: 15,
  // },
});
export default style;
