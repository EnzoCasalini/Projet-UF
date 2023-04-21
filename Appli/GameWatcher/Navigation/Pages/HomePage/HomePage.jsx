import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import GameList from "./GameList/GameList";
import SearchBar from "./SearchBar/SearchBar";
import FilterButton from "./FilterButton/FilterButton";

const HomePage = ({navigation}) => {


    const games = [
        {
            id: 1,
            name: "Cyberpunk 2077",
            description: "Cyberpunk 2077 est un jeu vidéo d'action-RPG développé par CD Projekt RED et édité par CD Projekt. Il est prévu pour le 10 décembre 2020 sur PC, PlayStation 4, PlayStation 5, Xbox One, Xbox Series X et Stadia.",
            releaseDate: "10/12/2020",
            platforms: ["PC", "PlayStation", "Xbox"],
            cover: "https://static.posters.cz/image/1300/affiches-et-posters/cyberpunk-2077-ready-player-v-i102945.jpg",
            rating: 4.5,
            website: "https://www.cyberpunk.net/fr",
        },
        {
            id: 2,
            name: "Valorant",
            description: "Valorant est un jeu vidéo de tir à la première personne développé et édité par Riot Games. Il est sorti en accès anticipé le 2 juin 2020 sur Windows, macOS et Linux.",
            releaseDate: "02/06/2020",
            platforms: ["PC"],
            cover: "https://m.media-amazon.com/images/M/MV5BNmNhM2NjMTgtNmIyZC00ZmVjLTk4YWItZmZjNGY2NThiNDhkXkEyXkFqcGdeQXVyODU4MDU1NjU@._V1_.jpg",
            rating: 4.5,
            website: "https://playvalorant.com/fr-fr/",
        },
        {
            id: 3,
            name: "Fortnite",
            description: "Fortnite est un jeu vidéo de tir en ligne massivement multijoueur (Battle Royale) développé par Epic Games et édité par Epic Games et Take-Two Interactive. Il est sorti en accès anticipé le 25 juillet 2017 sur PlayStation 4, Xbox One et Microsoft Windows, puis en version finale le 5 décembre 2017.",
            releaseDate: "25/07/2017",
            platforms: ["PC", "PlayStation", "Xbox"],
            cover: "https://www.arthipo.com/image/cache/catalog/genel-tasarim/all-posters/oyun/0016-fortnite-777x1100.jpg",
            rating: 4.5,
            website: "https://www.epicgames.com/fortnite/fr/home",
        },
        {
            id: 4,
            name: "God of War",
            description: "God of War est un jeu vidéo d'action-aventure développé par Santa Monica Studio et édité par Sony Interactive Entertainment. Il est sorti le 20 avril 2018 sur PlayStation 4.",
            releaseDate: "20/04/2018",
            platforms: ["PC", "PlayStation", "Xbox"],
            cover: "https://static.posters.cz/image/750/affiches-et-posters/playstation-god-of-war-i116582.jpg",
            rating: 5,
            website: "https://www.playstation.com/fr-fr/games/god-of-war/"
        },
        {
            id: 5,
            name: "Horizon Zero Dawn",
            description: "Horizon Zero Dawn est un jeu vidéo d'action-RPG développé par Guerrilla Games et édité par Sony Interactive Entertainment. Il est sorti le 28 février 2017 sur PlayStation 4.",
            releaseDate: "28/02/2017",
            platforms: ["PC", "PlayStation", "Xbox"],
            cover: "https://www.dhresource.com/0x0/f2/albu/g9/M00/BC/17/rBVaVVv2FbSAW-3SAAaYbyEpIB8090.jpg",
            rating: 4,
            website: "https://www.playstation.com/fr-fr/games/horizon-zero-dawn/"
        },
        {
            id: 6,
            name: "Elden Ring",
            description: "Elden Ring est un jeu vidéo d'action-RPG développé par FromSoftware et édité par Bandai Namco Entertainment. Il est prévu pour le 21 janvier 2022 sur PlayStation 5, Xbox Series X et Microsoft Windows.",
            releaseDate: "21/01/2022",
            platforms: ["PC", "PlayStation", "Xbox"],
            cover: "https://static.posters.cz/image/750/affiches-et-posters/elden-ring-battlefield-of-the-fallen-i121753.jpg",
            rating: 5,
            website: "https://www.eldenring.com/fr"
        },
        {
            id: 7,
            name: "Super Smash Bros. Ultimate",
            description: "Super Smash Bros. Ultimate est un jeu vidéo de combat développé par Bandai Namco Studios et Sora Ltd. et édité par Nintendo. Il est sorti le 7 décembre 2018 sur Nintendo Switch.",
            releaseDate: "07/12/2018",
            platforms: ["Nintendo Switch"],
            cover: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/71O5E+fy5KL._AC_SY679_.jpg",
            rating: 4.5,
            website: "https://www.nintendo.fr/Jeux/Nintendo-Switch/Super-Smash-Bros-Ultimate-1583821.html"
        },
        {
            id: 8,
            name: "The Last of Us Part II",
            description: "The Last of Us Part II est un jeu vidéo d'action-aventure développé par Naughty Dog et édité par Sony Interactive Entertainment. Il est sorti le 19 juin 2020 sur PlayStation 4.",
            releaseDate: "19/06/2020",
            platforms: ["PC", "PlayStation", "Xbox"],
            cover: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/816dPFRzsaL._AC_SL1500_.jpg",
            rating: 3,
            website: "https://www.playstation.com/fr-fr/games/the-last-of-us-part-ii/"
        },
    ];

    const [searchText, setSearchText] = useState('')
    const [sortOption, setSortOption] = useState('');

    const handleSearchText = (search) => {
        setSearchText(search);
        setSortOption('');
    }

    const onSort = (option) => {
        setSortOption(option);
        setSearchText('');
    }

    return (
        <View style={styles.gamesContainer}>
            <View style={styles.searchContainer}>
                <SearchBar searchText={searchText} onSearch={handleSearchText}/>
                <FilterButton onSort={onSort}/>
            </View>
            <GameList games={games} searchText={searchText} sortOption={sortOption} navigation={navigation}/>
        </View>
    );
};


const styles = StyleSheet.create({
    gamesContainer: {
        display: "flex",
        flexDirection: "column",
        minHeight: "100%",
        paddingHorizontal: 16,
        zIndex: 1,
        backgroundColor: "#242429"
    },
    searchContainer: {
        marginVertical: 16,
        marginHorizontal: 8,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
});

export default HomePage;
