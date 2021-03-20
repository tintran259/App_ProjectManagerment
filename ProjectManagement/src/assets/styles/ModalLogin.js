import {StyleSheet} from 'react-native';

const StylesModalLogin = StyleSheet.create({
  test: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  modalBox: {
    width: 310,

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

    alignItems: 'center',
    paddingVertical: 10,
    marginHorizontal: 10,

    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderColor: 'lightgray',
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

    width: 200,
  },

  url: {
    color: 'gray',
  },

  icon: {
    fontSize: 30,
    color: 'gray',

    marginHorizontal: 10,
  },

  iconCheck: {
    fontSize: 20,
    color: '#2980b9',
  },

  modalView: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
  },

  closeText: {
    color: '#2980b9',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
export default StylesModalLogin;
