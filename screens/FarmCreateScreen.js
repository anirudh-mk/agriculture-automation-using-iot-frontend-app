import { View, Text, Picker } from 'react-native'
import React, { useState } from 'react';


const FarmCreateScreen = () => {

    const [selectedValue, setSelectedValue] = useState('');

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Picker
                selectedValue={selectedValue}
                style={{ height: 50, width: 200 }}
                onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
            >
                <Picker.Item label="Option 1" value="option1" />
                <Picker.Item label="Option 2" value="option2" />
                <Picker.Item label="Option 3" value="option3" />
                <Picker.Item label="Option 4" value="option4" />
            </Picker>
        </View>
    )
}

export default FarmCreateScreen

