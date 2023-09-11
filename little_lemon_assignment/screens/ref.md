
```javascript
import { Alert, Pressable, Text, StyleSheet } from 'react-native';

// Define custom alert styles
const alertStyles = {
  alertContainer: {
    backgroundColor: '#3498db', // Change to your desired background color
    padding: 20,
    borderRadius: 10,
  },
  alertText: {
    color: '#fff', // Change to your desired text color
    fontSize: 18,
    fontWeight: 'bold',
  },
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#e74c3c', // Change to your button background color
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff', // Change to your button text color
    fontSize: 16,
    fontWeight: 'bold',
  },
});

// Function to show the styled alert
const showAlert = () => {
  Alert.alert(
    'Subscribed Successfully',
    'You have successfully subscribed to our service!',
    [
      {
        text: 'OK',
        style: 'default',
      },
    ],
    {
      // Apply custom styles to the alert
      containerStyle: alertStyles.alertContainer,
      textContainerStyle: alertStyles.alertText,
    }
  );
};

// Your Subscribe button with the updated code
<Pressable style={styles.button} onPress={showAlert}>
  <Text style={styles.buttonText}>Subscribe</Text>
</Pressable>;
```
