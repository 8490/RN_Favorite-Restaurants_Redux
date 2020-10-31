import React from "react";
import {SafeAreaView, View, Text, FlatList} from "react-native";
import { useSelector } from "react-redux";

const Favorites = (props) => {
    const favList = useSelector(state => state.favoriteList);

    return (
        <SafeAreaView style={{flex:1}}>
            <View style={{flex:1}}>
                <Text>Favorites</Text>

                <FlatList 
                    keyExtractor={(_, index) => index.toString()}
                    data={favList}
                    renderItem={({item}) => <Text>{item.name}</Text> }
                    ListEmptyComponent={() => <Text>Nothing on favourites ...</Text>}
                />
                
            </View>
        </SafeAreaView>
    );
};

export { Favorites };