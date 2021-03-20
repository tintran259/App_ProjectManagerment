import {StyleSheet} from 'react-native';
import {color} from 'react-native-reanimated';

const StylesListTask = StyleSheet.create({
  searchBox: {
    backgroundColor: '#fff',

    marginHorizontal: 10,
    marginVertical: 10,

    paddingHorizontal: 10,
    paddingVertical: 5,

    borderColor: '#000',
    borderWidth: 0.8,
    borderRadius: 10,
  },

  container: {
    height: '93%',
  },

  headerTask: {
    width: '100%',
    height: '7%',

    backgroundColor: '#fff',
    borderBottomWidth: 1,
  },

  headerTaskContent: {
    height: '100%',

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',

    marginHorizontal: 20,
  },

  headerIcon: {
    fontSize: 25,
    color: '#2980b9',
  },

  headerIconSearch: {
    fontSize: 25,
    color: '#2980b9',
    marginRight: 10,
  },

  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },

  btnHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  listask: {
    //width: '100%',
    marginHorizontal: 7,
    borderColor: 'gray',
    borderWidth: 0.7,
    backgroundColor: '#fff',

    borderRadius: 5,
    padding: 10,
  },

  listaskContent: {
    //margin: 5,
    //marginBottom: 0,
  },

  taskTile: {
    width: 200,

    fontSize: 20,
    fontWeight: 'bold',
    color: '#2980b9',
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  Right: {
    width: '26%',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },

  body: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    marginVertical: 7,
  },

  bodyInfo: {
    width: 180,
  },

  infoContent: {
    color: 'gray',
    paddingVertical: 1.5,
  },

  footer: {
    flexDirection: 'row',
    alignItems: 'center',

    paddingTop: 10,
    borderTopWidth: 0.5,
    borderColor: 'gray',
  },

  footerLeft: {
    width: '72%',
  },

  deadLine: {
    //width: '63%',

    alignSelf: 'flex-start',
    backgroundColor: '#ff3b3b',

    flexDirection: 'row',

    alignItems: 'center',

    paddingHorizontal: 10,
    paddingVertical: 2,
    borderRadius: 5,
  },

  notDeadLine: {
    alignSelf: 'flex-start',
    backgroundColor: '#89d329',

    flexDirection: 'row',

    alignItems: 'center',

    paddingHorizontal: 10,
    paddingVertical: 2,
    borderRadius: 5,
  },

  deadLineIcon: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },

  deadLineText: {
    fontSize: 14,
    fontWeight: 'bold',

    height: '100%',

    color: '#fff',
    marginLeft: 5,
  },

  star: {
    fontSize: 20,
    color: '#f9da33',
    marginLeft: 5,
  },

  emptyStar: {
    fontSize: 20,
    color: 'lightgray',
    marginLeft: 5,
  },

  userIcon: {
    padding: 6,
    borderWidth: 1,
    borderRadius: 50,
  },

  Right: {
    width: '28%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },

  avatar: {
    width: 25,
    height: 25,
    borderRadius: 50,
    borderWidth: 0.5,
    borderColor: 'gray',
  },

  iconRight: {
    fontSize: 14,
    color: 'gray',
    marginHorizontal: 5,
  },
});

export default StylesListTask;
