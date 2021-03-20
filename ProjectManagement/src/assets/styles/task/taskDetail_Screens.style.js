import {StyleSheet} from 'react-native';

const StylesTaskDetail = StyleSheet.create({
  header: {
    width: '100%',
    height: '7%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    backgroundColor: '#ffff',
  },

  BackIcon: {
    marginLeft: 10,
    color: '#2980b9',
  },

  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },

  FormIcon: {
    marginRight: 20,
    color: '#2980b9',
  },

  editIcon: {
    flexDirection: 'row',
  },

  cancelIcon: {
    marginRight: 20,
    color: 'red',
  },

  body: {
    backgroundColor: '#fff',
    width: '100%',
    height: '93%',
  },

  headerBody: {
    borderBottomWidth: 0.5,
    borderColor: 'gray',

    paddingBottom: 10,
  },

  top: {
    flexDirection: 'row',
    alignItems: 'center',

    marginTop: 10,
  },

  titleBodyHeader: {
    fontSize: 25,
    fontWeight: 'bold',

    color: '#2980b9',
  },

  projectText: {
    fontWeight: 'bold',
    color: '#555',
    fontSize: 16,

    width: '25%',
  },

  textDetailProject: {
    width: '80%',

    marginLeft: 10,
    color: '#555',
    fontSize: 16,
  },

  middle: {
    marginVertical: 7,
  },

  headerBody_Left: {
    width: '78%',
  },

  headerBody_Right: {
    width: '22%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  editName: {
    width: 250,

    fontSize: 25,
    fontWeight: 'bold',

    borderWidth: 0.5,
    borderColor: 'lightgray',
    borderRadius: 7,

    padding: 0,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    color: '#2980b9',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 3,
  },

  item: {
    flexDirection: 'row',
    marginVertical: 5,
  },

  editDeadline: {
    marginLeft: 10,

    borderWidth: 0.5,
    borderColor: 'lightgray',
    borderRadius: 7,

    color: '#555',
    backgroundColor: '#fff',

    padding: 0,
    paddingHorizontal: 10,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 3,
  },

  haveModal: {
    flexDirection: 'row',
  },

  textInModal: {
    marginLeft: 10,
    paddingHorizontal: 10,
    paddingVertical: 7,
    width: 200,

    color: '#555',

    backgroundColor: '#fff',
    borderWidth: 0.5,
    borderColor: 'lightgray',
    borderRadius: 7,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 3,
  },

  showModal: {
    color: '#2980b9',

    fontWeight: 'bold',
    fontSize: 20,

    marginLeft: 15,
  },

  /* Body */
  bodyContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  itemBody: {
    marginVertical: 15,
    width: '50%',
  },

  itemTitle: {
    marginBottom: 5,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#555',
  },

  itemContent: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },

  detail: {
    marginLeft: 10,
    width: '70%',

    color: '#555',
  },

  iconCalendar: {
    width: 25,
    fontSize: 22,
    color: '#2980b9',
  },

  emptyStar: {
    fontSize: 20,
    color: 'lightgray',
  },

  star: {
    fontSize: 20,
    color: '#f9da33',
  },

  avatar: {
    width: 25,
    height: 25,

    borderRadius: 50,
    borderWidth: 0.5,
    borderColor: 'gray',
  },
});

export default StylesTaskDetail;
