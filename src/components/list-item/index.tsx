import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';

type Game = {
    title: string;
    short_description: string;
    thumbnail: string;
    platform: string;
    genre: string;
};

const ListItem: React.FC<Game> = ({ title, short_description, thumbnail, platform, genre }) => {
    return (
        <View style={styles.container}>
            <Image source={{ uri: thumbnail }} style={styles.thumbnail} />
            <View style={styles.infoContainer}>
                <Text style={styles.title}>{title}</Text>
                <Text numberOfLines={1} style={styles.description}>{short_description}</Text>
                <View style={styles.infoBottomContainer}>
                    <Text style={styles.genre}>{genre}</Text>
                    <View style={styles.tagContainer}>
                        <Text style={styles.tag}>{platform}</Text>
                    </View>
                </View>
            </View>
        </View>
    );
};

export default ListItem;