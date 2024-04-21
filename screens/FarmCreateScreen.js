import React, { useState, useEffect } from 'react';
import { SelectList } from 'react-native-dropdown-select-list';
import { View, Text, StyleSheet, Button } from 'react-native'; // Import AsyncStorage
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';


const FarmCreateScreen = ({ route }) => {
    const { id, farmName } = route.params;

    const [selectedItem, setSelectedItem] = useState(null);
    const [selectedItemDetails, setSelectedItemDetails] = useState(null);
    const [data, setData] = useState([]);

    useEffect(() => {
        // Fetch data from API to populate dropdown
        axios.get('http://10.0.2.2:8000/api/v1/vegetable/list')
            .then(response => {
                // Transform response to fit SelectList component format
                const transformedData = response.data.response.map(item => ({
                    key: item.id,
                    value: item.name,
                }));
                setData(transformedData);
            })
            .catch(error => {
                console.error('Error fetching vegetable list:', error);
            });

        // Fetch access token from local storage
        AsyncStorage.getItem('accessToken')
            .then(token => {
                if (token) {
                    // Fetch vegetable details based on the selected item
                    axios.post('http://10.0.2.2:8000/api/v1/vegetable/details/', { vegetable_id: selectedItem }, {
                        headers: {
                            'Authorization': `Bearer ${token}`,
                            'Content-Type': 'application/json'
                        }
                    })
                        .then(response => {
                            setSelectedItemDetails(response.data.response[0]);
                        })
                        .catch(error => {
                            console.error('Error fetching vegetable details:', error);
                        });
                } else {
                    console.error('Access token not found in local storage');
                    // Handle the case where access token is not found
                }
            })
            .catch(error => {
                console.error('Error fetching access token from local storage:', error);
            });
    }, [selectedItem]);

    const handleSubmission = () => {
        if (id && selectedItem) {
            AsyncStorage.getItem('accessToken')
                .then(token => {
                    if (token) {
                        axios.post('http://10.0.2.2:8000/api/v1/farm/vegetable-create/', {
                            farm: id,
                            vegetable: selectedItem
                        }, { headers: { 'Authorization': `Bearer ${token}` } })
                            .then(response => {
                                console.log('Submission successful:', response.data);
                                // Handle success if needed
                            })
                            .catch(error => {
                                console.error('Error submitting data:', error);
                                // Handle error if needed
                            });
                    } else {
                        console.error('Access token not found in local storage');
                        // Handle the case where access token is not found
                    }
                })
                .catch(error => {
                    console.error('Error fetching access token from local storage:', error);
                });
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
