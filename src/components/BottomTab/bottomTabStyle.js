import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    bottom: 0,
    width: '100%',
    height: 80,
    backgroundColor: '#fff',
    display: 'flex',
    flexDirection: 'row',
    position: 'absolute',
    shadowRadius: 2,
    shadowOffset: {
      width: 0,
      height: -3,
    },
    shadowColor: '#000000',
    elevation: 4,
    marginTop: 1
  },
  leftTab: {
    marginLeft: 'auto',
    marginRight: 'auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  rightTab: {
    marginLeft: 'auto',
    marginRight: 'auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconWrapper: {
    height: 25,
    position: 'relative',
  },
  tabText: (param1, param2) => ({
    color: param1 === param2 ? '#D93025' : '#808080',
    fontSize: 16,
  }),
  unreadMailIndicator: {
    position: 'absolute',
    top: -10,
    right: -20,
    backgroundColor: '#D93025',
    borderRadius: 10,
    width: 30,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  unreadMailText: {
    color: '#fff',
  },
});

export default styles;
