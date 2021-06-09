import {StyleSheet} from 'react-native';
import appTheme from '../../constants/colors';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3,
    elevation: 2,
    marginBottom: 30,
    borderRadius: 7,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 2,
    height: 45,
  },
  menuIcon: {
    marginRight: 10,
  },
  searchInput: {
    height: '100%',
    flex: 1,
    marginRight: 10,
    fontSize: 16
  },
  profileInitialWrapper: {
    backgroundColor: appTheme.PRIMARY_COLOR,
    marginLeft: 'auto',
    height: 25,
    width: 25,
    borderRadius: 50,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileInitialText: {color: '#fff'},
});

export default styles;
