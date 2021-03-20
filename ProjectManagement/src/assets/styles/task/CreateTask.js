import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  createContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: '#f6f6f6',
  },

  space: {
    height: 120,

    backgroundColor: '#2980b9',

    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,

    justifyContent: 'center',
    alignItems: 'center',

    position: 'relative',
  },

  createTitle: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 30,
  },

  inputContainer: {
    marginHorizontal: 20,
    marginTop: 20,

    justifyContent: 'center',
  },

  form: {},

  inputBox: {
    flexDirection: 'row',
    alignItems: 'center',

    marginVertical: 5,
    width: '100%',
  },

  // inputBox: {
  //   flexDirection: 'row',
  //   alignItems: 'center',

  //   marginVertical: 5,
  //   width: '100%',
  // },

  inputArea: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    marginVertical: 5,
    backgroundColor: 'red',

    borderWidth: 0.5,
    borderRadius: 5,
    borderColor: 'lightgray',

    backgroundColor: '#fff',

    flex: 1,
  },

  input: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  inputTitle: {
    marginBottom: 5,
    marginRight: 10,

    color: 'gray',

    width: 70,

    fontWeight: 'bold',
  },

  textInput: {
    paddingVertical: 0,
    paddingHorizontal: 10,

    flex: 1,

    height: 30,
    width: 200,
  },

  showModal: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#2980b9',

    paddingHorizontal: 10,
  },

  btnArea: {
    alignItems: 'center',
    marginTop: 30,
  },

  btnCreate: {
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',

    borderRadius: 5,

    color: '#fff',
    backgroundColor: '#2980b9',

    paddingVertical: 5,

    width: 120,
  },

  forwardPosition: {
    position: 'absolute',
    top: 10,
    left: 10,
    flexDirection: 'row',
  },

  forwardBtn: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  forwardIcon: {
    fontSize: 16,
    marginRight: 5,
    color: '#fff',
  },

  forwardText: {
    fontWeight: 'bold',
    color: '#fff',
  },

  emptyStar: {
    color: 'lightgray',
    fontSize: 20,
  },

  star: {
    color: '#f9da33',
    fontSize: 20,
  },

  priority: {flexDirection: 'row'},

  priorityStar: {
    marginRight: 7,
  },
});

export default styles;
