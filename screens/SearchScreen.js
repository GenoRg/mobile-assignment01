import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Search from '../components/Search';
import MovieList from '../components/MovieListView';


export default function SearchScreen({route}) {
    const {searchWords} = route.params;
    const searchQuery = "https://api.themoviedb.org/3/search/movie?api_key=2f9984307bc55b763c6ced166b6f6056&query="+searchWords+"&page=1&include_adult=false"

    return (
        <View style={styles.container}>
            <View style={styles.search}>
                <Search />
            </View>
            <View style={styles.content}>
                <View style={styles.head}>
                    <Text style={styles.title}>Results for:</Text>
                    <Text style={styles.searchText}>{searchWords}</Text>
                </View>
                <View style={styles.body}>
                    <MovieList
                        url={searchQuery}
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
    search: {
        backgroundColor: "#D9D9D9",
        width: "100%",
        flexDirection: 'row',
        height: 35,
    },
    content: {
        paddingLeft: 15,
        paddingRight: 15
    },
    head: {
        alignItems: "center",
    },
    body: {
    },
    title: {
        fontSize: 35
    },
    searchText: {
        fontSize: 15
    }
});

