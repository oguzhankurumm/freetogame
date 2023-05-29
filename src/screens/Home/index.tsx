import React from 'react';
import { View, FlatList } from 'react-native';
import styles from './styles';

// REDUX
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/app/store';

// COMPONENTS - MODALS
import { ListItem, ListHeader } from '../../components';
import { LoadingModal } from '../../modals';

const Home: React.FC = () => {
    const { games, filteredGames, loading } = useSelector((state: RootState) => state.game);

    return (
        <View style={styles.container}>
            <LoadingModal visible={loading} />
            <FlatList
                data={filteredGames.length > 0 ? filteredGames : games}
                keyExtractor={(item) => item.id.toString()}
                ListHeaderComponent={() => <ListHeader title="Our Games" subtitle="Explore our games collection" />}
                ListHeaderComponentStyle={styles.listHeader}
                ItemSeparatorComponent={() => <View style={styles.itemSeperator} />}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.contentContainer}
                renderItem={({ item }) => (
                    <ListItem
                        title={item.title}
                        short_description={item.short_description}
                        thumbnail={item.thumbnail}
                        platform={item.platform}
                        genre={item.genre}
                    />
                )}
            />
        </View>
    );
};

export default Home;