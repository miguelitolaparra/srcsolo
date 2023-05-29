import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center'
  },
  description: {
    fontSize: 18,
    textAlign: 'center',
  },
/*   button: {
    marginTop: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#4f8b89',
    borderRadius: 5,
  },
*/
  buttonText: {
    color: '#4f8b89',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  }, 
});

export default styles;
