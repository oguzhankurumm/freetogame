import React from 'react';
import { View, SafeAreaView, ScrollView } from 'react-native';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';

// REDUX
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/app/store';
import { applyFilters } from '../../redux/features/game/actions';
import { AnyAction, ThunkDispatch } from '@reduxjs/toolkit';
import { setFilter } from '../../redux/features/game/reducers';

// COMPONENTS - DATA - MODALS
import { sortByOptions, filterByCategoryOptions, filterByPlatformOptions } from './options';
import Button from '../../components/button';
import FilterSortItem from '../../components/filter-sort-item';

const FilterScreen: React.FC = () => {
    const dispatch = useDispatch<ThunkDispatch<RootState, void, AnyAction>>();
    const navigation = useNavigation();
    const selectedFilter = useSelector((state: RootState) => state.game.selectedFilter);

    const handleApplyFilters = () => {
        const [filterType, filterValue] = selectedFilter.split(':');
        dispatch(applyFilters({ filterType, filterValue }));
        // navigation.goBack();
    };

    const handleFilterOptionPress = (filterValue: string, filterType: string) => {
        const selectedFilter = `${filterType}:${filterValue}`;
        dispatch(setFilter(selectedFilter));
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <ScrollView
                    style={styles.container}
                    contentContainerStyle={{ paddingBottom: 30 }}
                    showsVerticalScrollIndicator={false}
                >
                    <FilterSortItem
                        title="Sort By"
                        options={sortByOptions}
                        selectedOption={selectedFilter}
                        handleOptionPress={(value) => handleFilterOptionPress(value, 'sort-by')}
                    />
                    <FilterSortItem
                        title="Filter By Category"
                        options={filterByCategoryOptions}
                        selectedOption={selectedFilter}
                        handleOptionPress={(value) => handleFilterOptionPress(value, 'category')}
                    />
                    <FilterSortItem
                        title="Filter By Platform"
                        options={filterByPlatformOptions}
                        selectedOption={selectedFilter}
                        handleOptionPress={(value) => handleFilterOptionPress(value, 'platform')}
                    />
                </ScrollView>
                <Button title="Apply" onPress={handleApplyFilters} />
            </View>
        </SafeAreaView>
    );
};

export default FilterScreen;