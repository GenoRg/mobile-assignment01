import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, View, Dimensions } from 'react-native';
import MovieListItem from './MovieListItem'

export default function MovieList(props) {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const windowHeight = Dimensions.get('window').height - 90;

    const getMovies = async () => {
        try {
            const response = await fetch(props.url);
            const json = await response.json();
            setData(json);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getMovies();
    }, []);

    return (
        <View>
            {isLoading ? <ActivityIndicator/> : (
            <View>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    style={{height: windowHeight}}
                    data={data.results}
                    renderItem={({ item }) => (
                        <MovieListItem 
                            imageURL={item.poster_path}
                            title={item.title}
                            year={item.release_date}
                            vote_average={item.vote_average}
                            movie_id={item.id}
                        />
                    )}
                />
            </View>
            )}
        </View>
    );
};