import React, { useState, useEffect } from 'react';
import { SelectList } from 'react-native-dropdown-select-list';
import { View, Text, StyleSheet, Button } from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

const FarmCreateScreen = ({ route }) => {
    const { id, farmName } = route.params;
    const navigation = useNavigation();

    const [selectedItem, setSelectedItem] = useState(null);
    const [selectedItemDetails, setSelectedItemDetails] = useState(null);
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Fetch data from API to populate dropdown
                const response = await axios.get('http://10.0.2.2:8000/api/v1/vegetable/list');
                const transformedData = response.data.response.map(item => ({
                    key: item.id,
                    value: item.name,
                }));
                setData(transformedData);

                // Fetch access token from local storage
                const token = await AsyncStorage.getItem('accessToken');
                if (token) {
                    // Fetch vegetable details based on the selected item
                    const detailsResponse = await axios.post(
                        'http://10.0.2.2:8000/api/v1/vegetable/details/',
                        { vegetable_id: selectedItem },
                        {
                            headers: {
                                'Authorization': `Bearer ${token}`,
                                'Content-Type': 'application/json'
                            }
                        }
                    );
                    setSelectedItemDetails(detailsResponse.data.response[0]);
                } else {
                    console.error('Access token not found in local storage');
                    // Handle the case where access token is not found
                }
            } catch (error) {
                console.error('Error:', error);
            }
        };
        fetchData();
    }, [selectedItem]);

    const handleSubmission = async () => {
        try {
            const token = await AsyncStorage.getItem('accessToken');
            await axios.post(
                'http://10.0.2.2:8000/api/v1/farm/vegetable-create/',
                {
                    farm: id,
                    vegetable: selectedItem
                },
                { headers: { 'Authorization': `Bearer ${token}` } }
            );
            console.log('Submission successful');
            // Navigate to mainScreen after successful submission
            navigation.navigate('mainScreen');
        } catch (error) {
            console.error('Error submitting data:', error);
            // Handle error if needed
            // Navigate to mainScreen even if submission failed
            navigation.navigate('mainScreen');
        }
    };

    return (
        <View style={styles.farmCreateContainer}>
            <Text style={styles.text}>{farmName}</Text>
            <SelectList
                setSelected={item => setSelectedItem(item)}
                data={data}
                save="key"
            />
            {selectedItemDetails && (
                <View style={styles.detailsContainer}>
                    <Text style={styles.text}>N: {selectedItemDetails.n}</Text>
                    <Text style={styles.text}>P: {selectedItemDetails.p}</Text>
                    <Text style={styles.text}>K: {selectedItemDetails.k}</Text>
                    <Text style={styles.text}>Time Required: {selectedItemDetails.time_required} hours</Text>
                </View>
            )}
            <Button title="Submit" onPress={handleSubmission} />
        </View>
    );
};

export default FarmCreateScreen;

const styles = StyleSheet.create({
    farmCreateContainer: {
        paddingTop: 50,
        padding: 20,
    },
    detailsContainer: {
        marginTop: 20,
    },
    text: {
        fontSize: 20,
        padding: 10,
        fontWeight: '600'
    }
});
