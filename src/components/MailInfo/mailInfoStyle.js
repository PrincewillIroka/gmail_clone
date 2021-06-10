import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    height: 120,
  },
  senderLogo: {
    height: 50,
    width: 50,
  },
  mailWrapper: {
    display: 'flex',
  },
  mailSubject: {
    color: '#000',
  },
});

export default styles;
