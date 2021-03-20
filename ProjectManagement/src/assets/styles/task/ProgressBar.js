import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
  progress: {
    backgroundColor: 'lightgray',
    borderRadius: 20,
    position: 'relative',

    width: 120,
    height: 12,
  },

  viewZero: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  zero: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 11,
  },

  progressDone: {
    backgroundColor: 'red',
    borderRadius: 20,

    justifyContent: 'center',
    alignItems: 'center',

    height: '100%',
    width: 0,
    opacity: 0,
  },

  number: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 10,
  },
});

export default style;
