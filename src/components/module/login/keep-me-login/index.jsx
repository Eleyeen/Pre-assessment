/* eslint-disable react/react-in-jsx-scope */
import { Pressable, View } from 'react-native';
import { Checkicon } from '../../../../../static-img-url';
import TextComponent from '../../../global/text-component';

const KeepMeLogin = ({ setCheck, check }) => {

    return (
        <View className="flex-row items-c enter justify-between">
            <Pressable onPress={() => setCheck(!check)} className="flex-row items-center">
                {
                    check ?
                        <View className="mr-[8px]">
                            <Checkicon />
                        </View>
                        :
                        <View className=" rounded-[4px] border-[1px] mt-[5px] border-[#989898] h-[20px] w-[20px] mr-[12px]" />
                }
                <TextComponent text="Keep me logged in" css=" ml-[8px] text-[#989898] font-[400] text-[12px] " />

            </Pressable>
            <Pressable >
                <TextComponent text="Forget password?" css=" ml-[8px] text-[#285772] font-[400] text-[12px] " />

            </Pressable>
        </View>
    );
};

export default KeepMeLogin;
