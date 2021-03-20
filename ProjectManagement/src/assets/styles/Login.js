import {StyleSheet} from 'react-native';

const stylesLogin = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },

  headerLogin: {
    width: '100%',
    height: 150,
    alignItems: 'center',
    justifyContent: 'center',
  },

  formInput: {
    width: '100%',
    height: '100%',
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },

  formInput_elm: {
    marginTop: 10,
  },

  input: {
    width: '80%',
    height: 50,

    paddingHorizontal: 10,
  },

  btn_Login: {
    width: '100%',
    height: 50,
    marginTop: 30,
    backgroundColor: '#2980b9',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },

  loginGoogle: {
    width: '100%',
    height: 50,
    marginTop: 20,
    backgroundColor: '#db4437',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },

  text_btn: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },

  text_change: {
    marginTop: 20,
    flexDirection: 'row',
  },

  text_for: {
    marginLeft: 15,
    color: 'blue',
    fontWeight: 'bold',
  },

  inputBox: {
    flexDirection: 'row',
    borderWidth: 1.5,
    borderRadius: 20,
    marginBottom: 20,
    height: 50,
    paddingLeft: 10,

    alignItems: 'center',
  },

  icon: {
    fontSize: 30,
    color: 'gray',
  },

  iconPass: {
    fontSize: 20,
    color: 'gray',
  },

  iconPassShow: {
    fontSize: 18,
    color: 'gray',
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
    color: '#2980b9',
  },

  forwardText: {
    fontWeight: 'bold',
  },

  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 10,
  },

  test: {
    position: 'relative',
  },

  version: {
    position: 'absolute',
    bottom: 10,
  },
});

export default stylesLogin;
