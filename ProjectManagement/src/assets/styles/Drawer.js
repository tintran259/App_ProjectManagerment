import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  /* Drawer Header start here */
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 50,
    borderColor: '#fff',
    backgroundColor: '#fff',
    borderWidth: 0.5,
  },

  header: {
    borderBottomWidth: 0.7,
    borderColor: 'gray',

    backgroundColor: '#2980b9',
  },

  contentHeader: {
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },

  headerText: {
    color: '#fff',
    fontWeight: 'bold',

    textAlign: 'center',
  },

  headerTextEmail: {
    color: '#fff',
    textAlign: 'center',
    width: '100%',
    fontSize: 12,
  },
  /* Drawer Header end here */

  /* Drawer Body start here */
  body: {
    flex: 1,
  },

  contentBody: {
    margin: 15,
  },

  itemBody: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },

  iconBody: {
    fontSize: 16,
  },

  textBody: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'gray',
    marginLeft: 10,
  },
  /* Drawer Body end here */

  /* Drawer Footer start here */
  footer: {
    borderTopWidth: 0.7,
    borderColor: 'gray',
  },

  contentFooter: {
    padding: 15,
  },

  itemFooter: {
    flexDirection: 'row',
    marginVertical: 7,
  },

  iconFooter: {
    fontSize: 20,
    alignItems: 'center',
    color: 'gray',
  },

  textFooter: {
    fontSize: 14,
    fontWeight: 'bold',
    marginLeft: 10,
    color: 'gray',
  },

  iconLogout: {
    fontSize: 20,
    alignItems: 'center',
    color: '#ff3b3b',
  },

  textLogout: {
    fontSize: 14,
    fontWeight: 'bold',
    marginLeft: 10,
    color: '#ff3b3b',
  },

  iconTask: {
    color: '#3498db',
  },
  /* Drawer Footer end here */
});

export default styles;
