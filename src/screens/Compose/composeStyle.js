import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerLeftContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerText: {
    marginLeft: 20,
    fontSize: 18,
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
    flex: 1,
  },
  contentRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 7,
    borderBottomColor: '#f4f4f4',
    borderBottomWidth: 1,
    paddingHorizontal: 10,
  },
  infoRow: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  infoTitle: {
    fontSize: 17,
    color: '#595959',
  },
  infoValue: {
    marginLeft: 15,
    fontSize: 16,
  },
  composeTextInput: {
    height: '100%',
    width: '100%',
    fontSize: 17,
    padding: 10
  },
});

export default styles;
