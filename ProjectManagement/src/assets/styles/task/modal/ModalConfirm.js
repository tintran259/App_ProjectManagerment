import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
  test: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  modalBox: {
    width: 250,

    backgroundColor: 'white',
    borderRadius: 10,
  },

  modalTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'gray',
  },

  user: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    marginHorizontal: 10,
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
    marginHorizontal: 10,

    borderBottomWidth: 0.5,
    borderColor: 'gray',
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

  closeText: {
    color: '#2980b9',
    fontSize: 16,
    fontWeight: 'bold',

    marginHorizontal: 15,
  },

  closeTextCancle: {
    color: 'red',
    fontSize: 16,
    fontWeight: 'bold',

    marginHorizontal: 15,
  },
});
export default style;
