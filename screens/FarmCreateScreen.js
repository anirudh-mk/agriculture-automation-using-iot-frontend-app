import React, { useState, useEffect } from 'react';
import { SelectList } from 'react-native-dropdown-select-list';
import { View, Text, StyleSheet } from 'react-native';
import axios from 'axios';

const FarmCreateScreen = ({ route }) => {

    const { id } = route.params;


    const [selectedItem, setSelectedItem] = useState(null);
    const [selectedItemDetails, setSelectedItemDetails] = useState(null);
    const [data, setData] = useState([]);

    useEffect(() => {
        if (selectedItem) {
            // Fetch vegetable details based on the selected item
            axios.post('http://10.0.2.2:8000/api/v1/vegetable/details/', { vegetable_id: selectedItem })
                .then(response => {
                    setSelectedItemDetails(response.data.response[0]);
                })
                .catch(error => {
                    console.error('Error fetching vegetable details:', error);
                });
        }
    }, [selectedItem]);

    useEffect(() => {
        // Fetch data from API to populate dropdown
        axios.get('http://10.0.2.2:8000/api/v1/vegetable/list')
            .then(response => {
                // Transform response to fit SelectList component format
                const transformedData = response.data.response.map(item => ({
                    key: item.id, // Ensure key property is assigned to the vegetable ID
                    value: item.name,
                }));
                setData(transformedData);
            })
            .catch(error => {
                console.error('Error fetching vegetable list:', error);
            });
    }, []);

    return (
        <View style={styles.farmCreateContainer}>
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
