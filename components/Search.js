import React, { useState } from 'react';
import { StackActions, useNavigation } from '@react-navigation/native';
import { StyleSheet, View, Button, TextInput } from 'react-native';

export default function Search(props) {
    const navigation = useNavigation();
    const isHomeScreen = props.isHomeScreen;
    const [searchQuery, setSearchQuery] = useState('');

    return(
        <View style={styles.search}>
            <View style={styles.search_left}>
                {
                    isHomeScreen === true ? 
                    <Button 
                        disabled
                        onPress={() => navigation.goBack()} 
                        style={styles.search_button} 
                        title='BACK' 
                        color='#716E6E'
                    />
                    :
                    <Button 
                        onPress={() => navigation.goBack()} 
                        style={styles.search_button} 
                        title='BACK' 
                        color='#716E6E'
                    />
                }
                
            </View>
            <View style={styles.search_mid}>
                <TextInput 
                    style={styles.search_input} 
                    placeholder="Search..."
                    onChangeText={text => setSearchQuery(text)}
                />
            </View>
            <View style={styles.search_right}>
                {searchQuery == '' ?
                    <Button 
                        onPress={() => navigation.navigate('SearchMovies', {searchWords: searchQuery})} 
                        style={styles.search_button} 
                        title='GO' 
                        color='#716E6E'
                        disabled={true}
                    />
                :
                <Button 
                    onPress={
                        () => navigation.dispatch(
                            StackActions.push('SearchMovies', {searchWords: searchQuery})
                        )
                    } 
                        style={styles.search_button} 
                        title='GO' 
                        color='#716E6E'
                    />
                }
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    search: {
        backgroundColor: "#D9D9D9",
        width: "100%",
        flexDirection: 'row',
        height: 35,
    },
    search_left: {
        width: "15%",
        justifyContent: 'flex-end'
    },
    search_mid: {
        width: "70%",
        justifyContent: 'flex-end'
    },
    search_right: {
        width: "15%",
        justifyContent: 'flex-end'
    },
    search_input: {
        width: "100%",
        height: 35,
        padding: 5
    },
    search_button: {
        backgroundColor: 'white'
    },
});

