import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerContainer: {
    paddingVertical: 16,
    paddingHorizontal: 16,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  headerRightContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  rightIcon: {
    marginLeft: 20,
  },
  bodyWrapper: {
    padding: 16,
  },
  mailSubjectSection: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  mailSubjectRow: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: '83%',
  },
  mailSubjectText: {color: '#323232', fontSize: 17, marginRight: 10},
  mailTag: {
    backgroundColor: '#EEEEEE',
    fontSize: 12,
    paddingHorizontal: 7,
    paddingVertical: 2,
    borderRadius: 5,
    textAlign: 'center',
  },
  mailInfoSection: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 40,
  },
  senderLogo: {
    height: 50,
    width: 50,
    borderRadius: 50,
    marginRight: 10,
  },
  senderInitialWrapper: {
    height: 50,
    width: 50,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    marginRight: 10,
  },
  senderInitialText: {
    fontSize: 20,
    color: '#fff',
    textTransform: 'uppercase',
  },
  fromRow: {
    width: '40%',
  },
  fromText: {
    fontSize: 15,
  },
  toRow: {display: 'flex', flexDirection: 'row', alignItems: 'center'},
  toText: {
    opacity: 0.7,
  },
  dateText: {
    fontSize: 12,
    marginBottom: 'auto',
    opacity: 0.8,
  },
  rightMailInfo: {
    marginLeft: 'auto',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default styles;
