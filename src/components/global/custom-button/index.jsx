/* eslint-disable react/react-in-jsx-scope */
import { Pressable } from 'react-native';
import TextComponent from '../text-component';

const CustomButton = ({ onPress, text, buttoncolor }) => {

    return (
        <Pressable onPress={onPress} className={`rounded-[8px] py-[16px] justify-center items-center ${buttoncolor ? 'bg-[#2857721A]' : 'bg-[#285772]'}   w-[100%]`}>
            <TextComponent text={text} css={`${buttoncolor ? 'text-[#285772]' : 'text-[#F8F8F8]'}  font-[600] text-[14px]`} />
        </Pressable>
    );
};

export default CustomButton;
