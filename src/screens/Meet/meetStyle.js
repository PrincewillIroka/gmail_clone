import {StyleSheet} from 'react-native';
import appTheme from '../../constants/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    padding: 16,
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 40,
  },
  headerText: {
    fontSize: 20,
  },
  profileInitialWrapper: {
    backgroundColor: appTheme.PRIMARY_COLOR,
    height: 25,
    width: 25,
    borderRadius: 50,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileInitialText: {color: '#fff'},
  btnRow: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  btnCommon: {
    width: '48%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 38,
    borderRadius: 3,
  },
  btnLeft: {
    backgroundColor: '#1A73E9',
  },
  btnRight: {
    borderWidth: 1,
    borderColor: '#ccc',
  },
  textLeft: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  textRight: {
    color: '#1A73E9',
    fontSize: 16,
    fontWeight: 'bold',
  },
  bodyWrapper: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 80,
  },
  illustrationImg: {
    marginBottom: 20,
    height: 160,
    width: 160,
    resizeMode: 'contain',
    marginTop: 'auto',
  },
  textOne: {
    width: '50%',
    textAlign: 'center',
    fontSize: 20,
    marginBottom: 20,
  },
  textTwo: {
    width: '75%',
    fontSize: 15,
    textAlign: 'center',
    opacity: 0.6,
  },
  dotContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 'auto',
  },
  dotLeft: {
    height: 12,
    width: 12,
    backgroundColor: '#1A73E9',
    borderRadius: 50,
    marginRight: 5,
  },
  dotRight: {
    height: 12,
    width: 12,
    backgroundColor: '#1A73E90F',
    borderRadius: 50,
    marginLeft: 5,
  },
});

export default styles;
