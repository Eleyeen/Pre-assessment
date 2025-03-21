import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loader, setLoader] = useState(false);

    useEffect(() => {
        const loadSessionUser = async () => {
            const sessionUser = await AsyncStorage.getItem('sessionUser');
            if (sessionUser) {
                setUser(JSON.parse(sessionUser));
            }
        };
        loadSessionUser();
    }, []);

    const signup = async (name, email, password, navigation) => {
        setLoader(true);
        if (!name || !email.includes('@') || password.length < 6) {
            setLoader(false);
            throw new Error('Please provide valid inputs');
        }

        const existingUsers = await AsyncStorage.getItem('allUsers');
        let users = existingUsers ? JSON.parse(existingUsers) : [];

        // check if user already exists
        const userExists = users.find(u => u.email === email);
        if (userExists) {
            setLoader(false);
            throw new Error('User with this email already exists.');
        }

        const newUser = { name, email, password };
        users.push(newUser);
        await AsyncStorage.setItem('allUsers', JSON.stringify(users));
        setLoader(false);
        navigation.navigate('LoginScreen');
    };

    const login = async (email, password, navigation) => {
        setLoader(true);
        if (!email.includes('@') || password.length < 6) {
            setLoader(false);
            throw new Error('Invalid credentials');
        }

        const existingUsers = await AsyncStorage.getItem('allUsers');
        let users = existingUsers ? JSON.parse(existingUsers) : [];

        const foundUser = users.find(u => u.email === email && u.password === password);
        if (foundUser) {
            setUser(foundUser);
            await AsyncStorage.setItem('sessionUser', JSON.stringify(foundUser));
            setLoader(false);
            navigation.navigate('HomeScreen');
        } else {
            setLoader(false);
            throw new Error('User not found or incorrect credentials');
        }



    };

    const logout = async (navigation) => {
        await AsyncStorage.removeItem('sessionUser');
        navigation.navigate('LoginScreen');
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, loader, login, signup, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
