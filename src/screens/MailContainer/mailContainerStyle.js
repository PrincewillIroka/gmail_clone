import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 16,
    paddingBottom: 180,
  },
  screenTitle: {
    textTransform: 'uppercase',
    opacity: 0.5,
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  flatList: {
    paddingBottom: 120,
  },
  composeButton: {
    position: 'absolute',
    bottom: 100,
    right: 25,
    zIndex: 2,
    shadowRadius: 2,
    shadowOffset: {
      width: 0,
      height: -3,
    },
    shadowColor: '#000000',
    elevation: 4,
    backgroundColor: '#fff',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  composeButtonRound: {
    borderRadius: 50,
    width: 50,
    height: 50,
    justifyContent: 'center',
  },
  composeButtonCurved: {
    borderRadius: 25,
    width: 150,
    height: 50,
    paddingHorizontal: 16,
    justifyContent: 'space-between',
  },
  composeText: {
    fontSize: 17,
    color: '#D93025',
    fontWeight: '600',
  },
  emptyListContainer: {
    display: 'flex',
    justifyContent: 'center',
    height: '100%',
    alignItems: 'center',
    paddingBottom: 100,
  },
  emptyListText: {
    textAlign: 'center',
    fontSize: 19,
    opacity: 0.6,
    marginTop: 20,
  },
});

export default styles;
