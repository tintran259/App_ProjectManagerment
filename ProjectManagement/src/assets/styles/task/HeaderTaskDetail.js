import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
  headerBody: {
    borderBottomWidth: 0.5,
    borderColor: 'gray',

    paddingBottom: 15,
  },

  top: {
    flexDirection: 'row',
  },

  editName: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 10,

    borderWidth: 0.5,
    borderColor: 'lightgray',
    borderRadius: 7,

    padding: 0,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
  },

  titleBodyHeader: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 10,
  },

  emptyStar: {
    fontSize: 20,
    color: 'lightgray',
  },

  star: {
    fontSize: 20,
    color: '#f9da33',
  },
});

export default style;
