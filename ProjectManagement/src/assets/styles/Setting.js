import {StyleSheet} from 'react-native';

const stylesSettting = StyleSheet.create({
  settingItem: {
    backgroundColor: '#fff',
    marginVertical: 10,
    marginHorizontal: 20,

    borderRadius: 10,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.39,
    shadowRadius: 8.3,

    elevation: 13,
  },

  itemTitle: {
    marginHorizontal: 15,
    paddingVertical: 10,
    fontWeight: 'bold',
  },

  radioBtn: {
    marginHorizontal: 15,
    marginVertical: 5,
  },

  version: {
    flexDirection: 'row',
    justifyContent: 'space-between',

    marginHorizontal: 15,
    marginVertical: 15,
  },
});

export default stylesSettting;
