import React, { Component } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

class AlbumList extends Component {
    state = { albums: [] };

    componentWillMount() {
        axios.get('https://gist.githubusercontent.com/sleeplesseditor/a5520f73908c34b94b49529121f8e4cb/raw/1d398d4c9a9e52c3ca7490efddbc967cd29db8d4/music_albums.json')
            .then(response => this.setState({ albums: response.data }));
    }

    render() {
        console.log(this.state);

        return (
            <View>
                <Text>Album List</Text>
            </View>
        );
    }
}

export default AlbumList;
