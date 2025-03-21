/* eslint-disable react/react-in-jsx-scope */
import { Pressable, View } from 'react-native';
import TextComponent from '../../../global/text-component';
import { Circleprofileicon, Logouticon } from '../../../../../static-img-url';

const NameEmailTile = ({ navigation, logout, data }) => {

    return (
        <View className="rounded-[12px] justify-between items-center p-[16px] mt-[8px] bg-white border-[1px] border-[#0000000D]/5 flex-row">
            <View className="flex-row items-center">

                <Circleprofileicon />
                <View className="mx-[12px] w-[65%]">
                    <TextComponent css="text-[20px] w-[100%]  font-[700] text-[#434343]" numberOfLines={1} text={data.name} />
                    <TextComponent css="text-[14px] w-[95%] font-[400] text-[#949494] mt-[2px]" numberOfLines={1} text={data.email} />
                </View>
            </View>

            <Pressable onPress={() => logout(navigation)}>
                <Logouticon />
            </Pressable>

        </View>
    );
};

export default NameEmailTile;
