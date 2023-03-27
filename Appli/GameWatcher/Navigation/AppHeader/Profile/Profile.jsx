import {TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Profile = ({navigation}) => {
    return (
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
            <Ionicons name="person-outline" size={30} color="#004A8A"/>
        </TouchableOpacity>
    );
}

export default Profile;
