/* eslint-disable react/react-in-jsx-scope */
import { Image, SafeAreaView, View } from 'react-native';
import { useContext, useEffect } from 'react';
import { AuthContext } from '../context/AuthContext';
import TextComponent from '../components/global/text-component';
import { Logopng } from '../../static-img-url';

const SplashScreen = ({ navigation }) => {
    const { user } = useContext(AuthContext);
    useEffect(() => {
        setTimeout(() => {
            // eslint-disable-next-line no-lone-blocks
            {
                user ?
                    (navigation.replace('HomeScreen'))
                    :
                    (navigation.replace('LoginScreen'));
            }

        }, 3000);
    }, [navigation, user]);

    return (
        <SafeAreaView className="flex-1  justify-center bg-white items-center ">

            <View className="items-center">
                {/* <Logo fill="#285772" height={200} width={200} /> */}
                <Image source={Logopng} className="w-[200px] h-[200px] " />
                <TextComponent text="Pre-assessment" css="text-[#285772] font-[700] text-[22px] " />

            </View>

        </SafeAreaView>
    );
};

export default SplashScreen;
