import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, View, Text } from 'react-native';
import Search from '../components/Search';
import MovieList from '../components/MovieListView';


export default function HomeScreen() {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View>
                <Search isHomeScreen={true} />
            </View>
            <View style={styles.content}>
                <View style={styles.head}>
                    <Text style={styles.title}>Featured movies</Text>
                </View>
                <View style={styles.body}>
                    <MovieList 
                        url='https://api.themoviedb.org/3/trending/movie/day?api_key=2f9984307bc55b763c6ced166b6f6056'
                    />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#AEAEAE",
    },
    content: {
        paddingLeft: 15,
        paddingRight: 15
    },
    head: {
        alignItems: "center",
        marginBottom: 5,
    },
    body: {
    },
    title: {
        fontSize: 35
    },
});

