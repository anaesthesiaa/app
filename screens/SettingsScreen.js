import {
    View,
    Text,
    StyleSheet,
} from 'react-native';
import Ionicon from '@expo/vector-icons/Ionicons';

const SettingsScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Ionicon name="settings-sharp" size={80} color="#4b0082" style={styles.icon} />
            <Text style={styles.title}>Настройки</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    icon: {
        marginBottom: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
    },
});

export default SettingsScreen;