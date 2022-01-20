import React from 'react';
import users from '../data/users';

const UsersContext = React.createContext({});

export const usersActions = {
    DELETE_USER: 'DELETE_USER',
    INSERT_USER: 'INSERT_USER',
    UPDATE_USER: 'UPDATE_USER',
};

const reducer = (state, action) => {
    const { type, payload } = action;

    switch (type) {
        case usersActions.DELETE_USER:
            const usersFilter = state.users.filter(({ id }) => payload.id !== id);
            return { ...state, users: usersFilter };
        case usersActions.INSERT_USER:
            const newUser = { id: state.users.length + 1, ...payload };

            return { ...state, users: [ ...state.users, newUser] };
        case usersActions.UPDATE_USER:
            const usersClone = [...state.users];
            const index = usersClone.findIndex(({ id }) => payload.id === id);

            if (index === -1) return { ...state };

            usersClone[index] = payload;
            return { ...state, users: usersClone };
        default:
            return { ...state };
    }
};

const initialState = { users };

export const UsersProvider = ({ children }) => {
    const [state, dispatch] = React.useReducer(reducer, initialState);

    return (
        <UsersContext.Provider value={{ state, dispatch }}>
            {children}
        </UsersContext.Provider>
    );
};

export default UsersContext;
