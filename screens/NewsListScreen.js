import {
    View,
    Text,
    FlatList,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';

const NewsListScreen = ({ navigation }) => {
const newsData = [
      {
        id: '1',
        title: 'Новые магические силы у Блум',
        content: 'Блум обнаружила новые способности управления огнем. Ученица Алфеї тренируется для раскрытия своих уникальных возможностей.',
        author: 'Магический Совет Винкс',
        date: '15 мая 2024'
      },
      {
        id: '2',
        title: 'Таинственный портал в Мир Элсара',
        content: 'На горизонте появился загадочный портал, который приводит в неизведанный мир Эльсары. Винкс готовятся к исследованию новых волшебных мест.',
        author: 'Тимми, командор Винкс',
        date: '14 мая 2024'
      },
      {
        id: '3',
        title: 'Обучение новейшим заклинаниям',
        content: 'В школе Алфеї проходят занятия по новым заклинаниям, которые помогут Винкс бороться с тёмными силами и защищать магический мир.',
        author: 'Флора, учитель волшебства',
        date: '13 мая 2024'
      },
      {
        id: '4',
        title: 'Встреча с древним существом',
        content: 'Винкс столкнулись с древним магическим существом, охраняющим секреты забытого королевства. Какие тайны оно предаст? Следите за новостями.',
        author: 'Ривен, хранитель тайн',
        date: '12 мая 2024'
      }
    ];
    const renderNewsItem = ({ item }) => (
        <TouchableOpacity
            style={StyleSheet.newsItem}
            onPress={() => navigation.navigate('NewsDetail', {
                id: item.id,
                title: item.title,
                content: item.content,
                author: item.author,
                date: item.date
            })}
        >
            <View style={styles.newsContent}>
                <Text style={styles.newsTitle}>{item.title}</Text>
                <Text style={styles.newsAuthor}>{item.author}</Text>
                <Text style={styles.newsDate}>{item.date}</Text>
            </View>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={newsData}
                renderItem={renderNewsItem}
                keyExtractor={item => item.id}
                ItemSeparatorComponent={() => <View style={styles.separator} />}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    newsContent: {
        flex: 1,
    },
    newsTitle: {
        fontsize: 15,
        fontWeight: '600',
        color: '#lalala',
        marginBottom: 4,
    },
    newsDate: {
        fontsize: 12,
        color: '#666',
        marginBottom: 4,
    },
    newsAuthor: {
        fontsize: 12,
        color: '#db7093',
        fontWeight: '400',
    },
    separator: {
        height: 1,
        backgroundColor: '#f0f0f0',
    },
});

export default NewsListScreen;