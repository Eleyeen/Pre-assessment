/* eslint-disable react/react-in-jsx-scope */
import { useContext } from 'react';
import { SafeAreaView, View } from 'react-native';
import { AuthContext } from '../../context/AuthContext';
import NameEmailTile from '../../components/module/home/name-email-tile';

const HomeScreen = ({ navigation }) => {
    const { user, logout } = useContext(AuthContext);
    return (
        <View className="bg-white flex-1 ">

            <SafeAreaView className=" mx-[18px] mt-[20px]">
                <NameEmailTile navigation={navigation} logout={logout} data={user ?? ''} />

            </SafeAreaView>

        </View>
    );
};

export default HomeScreen;
