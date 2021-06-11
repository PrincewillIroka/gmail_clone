import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    height: 100,
  },
  senderLogo: {
    height: 50,
    width: 50,
    borderRadius: 50,
  },
  senderInitialWrapper: {
    height: 50,
    width: 50,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
  },
  senderInitialText: {
    fontSize: 20,
    color: '#fff',
    textTransform: 'uppercase',
  },
  mailWrapper: {
    display: 'flex',
    flex: 1,
    marginLeft: 15,
  },
  mailSectionOne: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 2,
  },
  boldColor: status => ({
    color: status === 'unread' ? '#000' : '#808080',
    ...(status === 'unread' && {fontWeight: 'bold'}),
  }),
  mailFrom: {
    fontSize: 16,
    width: '80%',
  },
  mailSubject: {
    fontSize: 15,
    width: '83%',
  },
  mailTitle: {
    color: '#808080',
    fontSize: 15,
    width: '80%',
  },
  mailSectionThree: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  mailBody: {
    fontSize: 15,
    width: '83%',
  },
});

export default styles;
