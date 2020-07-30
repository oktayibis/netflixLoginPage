import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TouchableNativeFeedback,
  TextInput,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Login = () => {
  const [checked, setChecked] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const localname = 'oktayibis';
  const localPassoword = '1234';
  const checkLogIn = (username, password) => {
    if (
      username.toLowerCase() === localname.toLowerCase() &&
      localPassoword === password
    ) {
      alert('Signed In Successfully');
      setUsername('');
      setPassword('');
    } else {
      alert('Check your username and password');
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign In</Text>
      <View style={styles.loginContainer}>
        <TextInput
          style={styles.input}
          placeholder="Email or Phone number"
          placeholderTextColor="#959595"
          value={username}
          onChangeText={(text) => setUsername(text)}
          autoCompleteType="username"
          textContentType="username"
        />
        <TextInput
          style={styles.input}
          autoCompleteType="password"
          placeholder="Password"
          placeholderTextColor="#959595"
          value={password}
          onChangeText={(text) => setPassword(text)}
          textContentType="password"
          secureTextEntry
        />

        <TouchableOpacity
          onPress={() => checkLogIn(username, password)}
          style={styles.btn}>
          <Text style={styles.btnText}>Sign In</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.remember}>
        <View style={styles.checkbox}>
          <TouchableNativeFeedback onPress={() => setChecked(!checked)}>
            <MaterialIcons
              name={checked ? 'check-box' : 'check-box-outline-blank'}
              color="#b0b0b0"
              style={styles.checkboxIcon}
            />
          </TouchableNativeFeedback>
          <Text style={styles.text}>Remember Me</Text>
        </View>
        <Text style={styles.text}>Need Help?</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: 'black',
  },
  title: {
    color: 'white',
    fontSize: 40,
    marginLeft: 25,
    fontWeight: '700',
  },
  text: {
    color: '#b0b0b0',
    fontSize: 14,
    fontWeight: '500',
  },
  input: {
    width: '90%',
    height: 50,
    backgroundColor: '#333',
    color: 'white',
    marginTop: 20,
    borderRadius: 5,
    padding: 10,
  },
  loginContainer: {
    alignItems: 'center',
  },
  btn: {
    backgroundColor: '#e50712',
    marginTop: 30,
    width: '90%',
    borderRadius: 5,
    height: 50,
    padding: 10,
  },
  btnText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '600',
    margin: 'auto',
  },
  remember: {
    justifyContent: 'space-between',
    margin: 20,
    flexDirection: 'row',
  },
  checkbox: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkboxIcon: {
    marginRight: 5,
    fontSize: 16,
  },
});

export default Login;
