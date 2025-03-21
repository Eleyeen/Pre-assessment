/* eslint-disable react/react-in-jsx-scope */
import { Pressable, ScrollView, View } from 'react-native';
import { useContext, useState } from 'react';
import TextComponent from '../../../components/global/text-component';
import InputField from '../../../components/global/InputField/input-field';
import CustomButton from '../../../components/global/custom-button';
import { AuthContext } from '../../../context/AuthContext';
import KeepMeLogin from '../../../components/module/login/keep-me-login';

const LoginScreen = ({ navigation }) => {
    const [check, setCheck] = useState(false);
    const { login, loader } = useContext(AuthContext);

    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const [error, setError] = useState('');

    const handleLogin = async () => {
        try {
            await login(formData.email, formData.password, navigation);
        } catch (err) {
            setError(err.message);
        }
    };

    const onChange = (args) => {
        const { name, value } = args;
        const newFD = { ...formData };
        newFD[name] = value;
        setFormData(newFD);
    };

    return (
        <View className="flex-1 bg-[#fff]  px-[20px]">
            <ScrollView showsVerticalScrollIndicator={false} className=" mb-[24px]">
                <View className="flex-1 mt-[100px]">

                    <View className="my-[32px]">
                        <TextComponent text="Welcome Back!" css="text-[#121F3E] font-[700] text-[26px] " />
                        <TextComponent text="Enter your credentials to access your account" css="text-[#989898] font-[400] text-[14px] " />
                    </View>

                    <View className="mb-[12px] w-[100%]">
                        <InputField validation={error} validationMessage={error} keyboardType name="email" onChange={onChange} placeholder="Enter Email " value={formData.email} />
                    </View>

                    <View className="mb-[12px] w-[100%]">
                        <InputField validation={error} validationMessage={error} keyboardType name="password" onChange={onChange} secureTextEntry passwordshow placeholder="Enter Password " value={formData.password} />
                    </View>

                    <KeepMeLogin setCheck={setCheck} check={check} />

                    <View className="my-[32px]">
                        <CustomButton text={loader ? 'LOADING ...' : 'Log In'} onPress={() => { handleLogin(); }} />
                    </View>

                    <Pressable onPress={() => { navigation.navigate('SignUpScreen'); }} >
                        <TextComponent text="New create new account?" css="text-center w-[100%] ml-[8px] text-[#989898] font-[400] text-[14px] " />
                        <TextComponent text="Create Account" css=" text-center w-[100%] mt-[8px] ml-[8px] text-[#285772] font-[600] text-[14px] " />
                    </Pressable>
                </View>
            </ScrollView>
        </View>
    );
};

export default LoginScreen;
