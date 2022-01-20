import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Button, Icon } from 'react-native-elements';

import { UsersProvider } from './context/usersContext';

import UserList from './views/UserList';
import UserForm from './views/UserForm';

const Stack = createStackNavigator();

const screenOptions = {
  headerStyle: {
    backgroundColor: '#F4511E'
  },
  headerTintColor: '#FFF',
  headerTitleStyle: {
    fontWeight: 'bold'
  }
};

const App = () => {
  return (
    <UsersProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='UserList' screenOptions={screenOptions}>
          <Stack.Screen
              name='UserList'
              component={UserList}
              options={({ navigation }) => ({
                title: 'Lista de Usuários',
                headerRight: () => (
                  <Button
                    onPress={() => navigation.navigate('UserForm')}
                    type='clear'
                    icon={(
                      <Icon name='add' size={25} color='white' />
                    )}
                  />
                )
              })}
            />

            <Stack.Screen
              name='UserForm'
              component={UserForm}
              options={{ title: 'Formulário de Usuários' }}
            />
        </Stack.Navigator>
      </NavigationContainer>
    </UsersProvider>
  );
};

export default App;
