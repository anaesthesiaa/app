import {
    View,
    Text,
    ScrollView,
    SafeAreaView,
    TouchableOpacity,
    StyleSheet
} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

const NewsDetailScreen = ({ route, navigation }) => {
    const { id, title, content, date, author } = route.params;

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.content}>
                <View style={styles.articleHeader}>
                    <Text style={styles.title}>{title}</Text>
                    <View style={styles.metaInfo}>
                        <Text style={styles.date}>{date}</Text>
                        <Text style={styles.author}>Автор: {author}</Text>
                    </View>
                </View>

                <View style={styles.articleContent}>
                    <Text style={styles.contentText}>
                        {content || 'Здесь будет подробное содержание новости...'}
                    </Text>
                    <Text style={styles.contentText}>
                        {'\n'}Это пример детального содержания новости. В реальном приложении будет полный текст статьи, изображения, видео и другие медиа-элементы.
                    </Text>
                </View>

                <View style={styles.articleFooter}>
                    <Text style={styles.id}>ID статьи: {id}</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    content: {
        flex: 1,
    },
    articleHeader: {
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#f0f0f0',
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#1a1a1a',
        marginBottom: 12,
        lineHeight: 28,
    },
    metaInfo: {
        marginTop: 8,
    },
    date: {
        fontSize: 14,
        color: '#666',
        marginBottom: 4,
    },
    author: {
        fontSize: 14,
        color: '#db7093',
        fontWeight: '500',
    },
    articleContent: {
        padding: 16,
    },
    contentText: {
        fontSize: 16,
        lineHeight: 24,
        color: '#333',
        marginBottom: 16,
    },
    articleFooter: {
        padding: 16,
        borderTopWidth: 1,
        borderTopColor: '#f0f0f0',
        marginTop: 16,
    },
    id: {
        fontSize: 12,
        color: '#999',
        textAlign: 'center',
    },
});

export default NewsDetailScreen;