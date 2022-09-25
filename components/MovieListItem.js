import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';


export default function MovieListItem(props) {
    const navigation = useNavigation();
    return (
        <TouchableOpacity
            onPress={() => navigation.push('MovieInfo', {movieId: props.movie_id})}
        >
            <View style={styles.movie_list_container}>
                <View style={styles.picture}>
                    {props.imageURL == null ?
                        <Image style={styles.imageSize} source={require('../assets/no_poster.jpg')}/> 
                    : 
                        <Image style={styles.imageSize} source={{uri: "https://image.tmdb.org/t/p/w92" + props.imageURL}}/>
                    }
                </View>
                <View style={styles.info}>
                    <Text style={styles.infoTitle}>{props.title}</Text>
                    <Text style={styles.infoYear}>{props.year}</Text>
                    <Text style={styles.infoRating}>Rating: {props.vote_average}</Text>
                </View>
            </View>    
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    movie_list_container: {
        width: '100%',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        backgroundColor: '#D9D9D9',
        marginTop: 5
    },
    picture: {
    },
    info: {
        paddingTop: 5,
        paddingLeft: 10
    },
    imageSize: {
        width: 80,
        height: 120,
    },
    infoTitle: {
        marginTop: 2,
        fontWeight: 'bold'
    },
    infoYear: {
        marginTop: 2
    },
    infoRating: {
        marginTop: 2
    },
  });
  