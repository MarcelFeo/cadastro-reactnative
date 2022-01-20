import React from 'react';
import { SafeAreaView, FlatList } from 'react-native';
import { ListItem, Avatar } from 'react-native-elements';

import ButtonsActions from '../Components/ButtonsActions';
import UsersContext from '../context/usersContext';

const UserList = ({ navigation }) => {
    const { state } = React.useContext(UsersContext);

    const getUserItem = ({ item: user }) => {
        return (
            <ListItem
                bottomDivider
                onPress={() => navigation.navigate('UserForm', user)}
            >
                <Avatar source={{uri: user.avatar}} rounded />

                <ListItem.Content>
                    <ListItem.Title>{user.name}</ListItem.Title>
                    <ListItem.Subtitle>{user.email}</ListItem.Subtitle>
                </ListItem.Content>

                <ButtonsActions user={user} navigate={navigation.navigate} />
            </ListItem>
        );
    };

    return (
        <SafeAreaView>
            <FlatList
                keyExtractor={(user) => user.id.toString()}
                data={state.users}
                renderItem={getUserItem}
            />
        </SafeAreaView>
    );
};

export default UserList;
