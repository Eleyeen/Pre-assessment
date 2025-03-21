/* eslint-disable react/react-in-jsx-scope */
import { Text } from 'react-native';

// Define the reusable text component
const TextComponent = ({ css, adjustsFontSizeToFit, numberOfLines, text }) => {
    return (
        <Text className={css} numberOfLines={numberOfLines} adjustsFontSizeToFit={adjustsFontSizeToFit}>
            {text}
        </Text>
    );
};

export default TextComponent;
