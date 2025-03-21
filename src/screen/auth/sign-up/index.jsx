/* eslint-disable react/react-in-jsx-scope */
import { useContext, useState } from 'react';
import { Pressable, ScrollView, View } from 'react-native';
import TextComponent from '../../../components/global/text-component';
import CustomButton from '../../../components/global/custom-button';
import InputField from '../../../components/global/InputField/input-field';
import { AuthContext } from '../../../context/AuthContext';

const SignUpScreen = ({ navigation }) => {
    const { signup, loader } = useContext(AuthContext);
    const [error, setError] = useState('');
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
    });
    const handleSignup = async () => {
        try {
            await signup(formData.name, formData.email, formData.password, navigation);
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
                        <TextComponent text="Welcome to SignUp!" css="text-[#121F3E] font-[700] text-[26px] " />
                        <TextComponent text="Enter your credentials to create your account" css="text-[#989898] font-[400] text-[14px] " />
                    </View>

                    <View className="mb-[12px] w-[100%]">
                        <InputField validation={error} validationMessage={error} keyboardType name="name" onChange={onChange} placeholder="Enter Name " value={formData.name} />
                    </View>
                    <View className="mb-[12px] w-[100%]">
                        <InputField validation={error} validationMessage={error} keyboardType name="email" onChange={onChange} placeholder="Enter Email " value={formData.email} />
                    </View>

                    <View className="mb-[12px] w-[100%]">
                        <InputField validation={error} validationMessage={error} keyboardType name="password" onChange={onChange} secureTextEntry passwordshow placeholder="Enter Password " value={formData.password} />
                    </View>

                    <View className="my-[32px]">
                        <CustomButton text={loader ? 'LOADING ...' : 'Sign Up'} onPress={() => { handleSignup(); }} />
                    </View>

                    <Pressable onPress={() => { navigation.navigate('LoginScreen'); }} >
                        <TextComponent text="you are already account?" css="text-center w-[100%] ml-[8px] text-[#989898] font-[400] text-[14px] " />
                        <TextComponent text="Go to login" css=" text-center w-[100%] mt-[8px] ml-[8px] text-[#285772] font-[600] text-[14px] " />
                    </Pressable>
                </View>
            </ScrollView>
        </View>
    );
};

export default SignUpScreen;
