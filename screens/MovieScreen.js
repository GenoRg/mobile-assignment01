import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, ActivityIndicator, Image, ScrollView, Dimensions } from 'react-native';
import Search from '../components/Search';

function InfoBox(props){
    return(
        <View>
            <View>
                <Text style={styles.infoTitle}>{props.title}</Text>
            </View>
            <View>
                <Text style={styles.infoText}>{props.text}</Text>
            </View>
        </View>
    )
}

export default function MovieScreen({route}) {
    const {movieId} = route.params;
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const windowHeight = Dimensions.get('window').height - 75;
    const picWidth = Dimensions.get('window').width - 30;
    const picHeight = picWidth * 1.5;

    const getMovies = async () => {
        try {
            const response = await fetch('https://api.themoviedb.org/3/movie/'+movieId+'?api_key=2f9984307bc55b763c6ced166b6f6056');
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
        <View style={styles.container}>
            {isLoading ? <ActivityIndicator/> : (
                <View>
                    <View style={styles.search}>
                        <Search />
                    </View>
                    <View style={styles.content}>
                        <View style={styles.head}>
                            <Text style={styles.title}>{data.title}</Text>
                        </View>
                        <ScrollView 
                            showsVerticalScrollIndicator={false} 
                            style={{height: windowHeight}}
                        >
                            <View style={styles.body}>
                                <View style={styles.picture}>
                                    {data.poster_path == null ?
                                        <Image style={{aspectRatio: 0.666, width: "100%"}} source={require('../assets/no_poster.jpg')}/> 
                                    : 
                                        <Image style={{aspectRatio: 0.666, width: "100%"}} source={{uri: "https://image.tmdb.org/t/p/w500" + data.poster_path}} />
                                    }
                                </View>
                                <View style={styles.info}>
                                    <InfoBox 
                                        title="Title:"
                                        text={data.title}
                                    />
                                    <InfoBox 
                                        title="Original title:"
                                        text={data.original_title}
                                    />
                                    <InfoBox 
                                        title="Language:"
                                        text={data.original_language}
                                    />
                                    <InfoBox 
                                        title="Overview:"
                                        text={data.overview}
                                    />
                                    <InfoBox 
                                        title="Length:"
                                        text={data.runtime+" mins"}
                                    />
                                    <InfoBox 
                                        title="Rating:"
                                        text={data.vote_average+" / 10"}
                                    />
                                </View>
                            </View>
                        </ScrollView>
                    </View>
                </View>
            )}
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
    head: {
        alignItems: "center",
        marginBottom: 3,
    },
    title: {
        fontSize: 25
    },
    content: {
        paddingLeft: 15,
        paddingRight: 15
    },
    infoTitle: {
        marginTop: 5,
        fontWeight: 'bold',
        fontSize: 15
    },
    infoText: {
        fontSize: 15
    },
    picture: {
        
    }
});

