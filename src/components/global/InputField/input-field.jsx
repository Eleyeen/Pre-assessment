/* eslint-disable react/react-in-jsx-scope */
import { View, TextInput, Text, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { capitalizeFirstLetter } from '../../../../static-functions';
import { EyeIcon, EyeIconclose } from '../../../../static-img-url';

const InputField = (props) => {

  const { placeholder, name, index, secureTextEntry, onChange,
    value, type, validation, validationMessage, passwordshow,
    maxLength, keyboardType, multiline, icon, description } = props;

  // eslint-disable-next-line no-unused-vars
  const [inputFocus, setInputFocus] = useState(false);
  const [showPass, setShowPass] = useState(true);

  const focusIn = () => {
    setInputFocus(true);
  };

  const focusOut = () => {
    setInputFocus(false);
  };



  return (
    <View>
      <View className={`rounded-[12px] border-[1px] border-[#00000014] ${description ? 'h-[180px]' : 'h-[58px]  items-center '}   bg-[#fff] flex-row`}>
        <TextInput
          className={`ml-[8px]   ${description ? 'mt-[10px]' : 'items-center'}`}
          keyboardType={keyboardType ? TextInput.number : undefined}
          maxLength={maxLength}
          multiline={multiline}
          name={name}
          onBlur={focusOut}
          onChange={(e) => onChange && onChange({
            e,
            index,
            name,
            value: e.nativeEvent.text,
          })}
          onFocus={focusIn}
          placeholder={capitalizeFirstLetter(placeholder)}
          placeholderTextColor="#888"
          secureTextEntry={secureTextEntry ? showPass : false}
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            color: 'black',
            fontSize: 14,
            fontWeight: 'normal',
            textAlignVertical: 'top', // Align text at the top
            width: '85%',
          }}
          type={type}
          value={value}
        />
        {passwordshow &&
          <TouchableOpacity className=" w-[66px]  right-[0] h-[51px] py-[2px] absolute" onPress={() => { setShowPass(!showPass); }}>
            <View className=" my-auto ml-[30px]">
              {showPass ?
                (<EyeIconclose />)
                :
                (<EyeIcon />)
              }
            </View>
          </TouchableOpacity>

        }
        <View className=" w-[66px]  right-[0] h-[51px] py-[2px] absolute">
          <View className=" my-auto ml-[30px]">
            {icon}
          </View>
        </View>
      </View>

      {validation ? <Text className="text-[10px] text-[#F04438] mb-0 mt-[5px]">{validationMessage || 'Required Field'}</Text> : ''}
    </View>
  );
};

export default InputField;
