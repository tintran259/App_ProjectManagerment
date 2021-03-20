import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
  moreInfo: {},

  moreInfoBtn: {
    flexDirection: 'row',
  },

  btn: {
    paddingVertical: 3,
    paddingHorizontal: 10,

    backgroundColor: '#fff',

    borderWidth: 0.5,
    borderBottomWidth: 0,

    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },

  btnText: {
    color: '#2980b9',
    fontWeight: 'bold',
  },

  btnDisable: {
    color: '#2980b9',
    fontWeight: 'bold',
    opacity: 0.5,
  },

  moreInfoView: {
    width: '100%',
    height: 150,
    backgroundColor: '#fff',
    borderWidth: 0.5,
  },

  noneInfo: {
    width: '100%',
    height: '100%',

    justifyContent: 'center',
    alignItems: 'center',
  },

  alertNone: {
    color: 'gray',
  },
});

export default style;
