import { StyleSheet } from 'react-native';

export const stylesheet = StyleSheet.create({
  container: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 50,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 40,
    paddingVertical: 15,
    borderRadius: 35,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 10 },
    shadowRadius: 10,
    shadowOpacity: 0.1,
    elevation: 5,
  },
  bottomTabBackground: {
    position: 'absolute',
    borderRadius: 30,
    marginHorizontal: 12,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 10,
    shadowOpacity: 0.15,
  },
});
