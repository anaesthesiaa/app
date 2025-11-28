import {
    View,
    Text,
    FlatList,
    TouchableOpacity,
    StyleSheet,
    SafeAreaView,
} from 'react-native';

const CategoriesScreen = ({ navigation }) => {
    const categories = [
    { id: '1', name: 'Магия', count: 24, color: '#a64ca6' },     
    { id: '2', name: 'Драконы', count: 18, color: '#ff9800' },    
    { id: '3', name: 'Феи', count: 12, color: '#4caf50' },        
    { id: '4', name: 'Заклинания', count: 32, color: '#3f51b5' },  
    { id: '5', name: 'Тёмные силы', count: 15, color: '#9c27b0' },  
    { id: '6', name: 'Магические артефакты', count: 21, color: '#f44336' }, 
    { id: '7', name: 'Дружба', count: 19, color: '#ffd700' },       
    { id: '8', name: 'Приключения', count: 14, color: '#00bcd4' },  
  ];

    const renderCategoryItem = ({ item }) => (
        <TouchableOpacity
            style={[styles.categoryItem, { borderLeftColor: item.color }]} 
            onPress={() => {
                alert(`Открыть категорию: ${item.name}`);
            }}
        >
            <View style={styles.categoryInfo}>
                <Text style={styles.categoryName}>{item.name}</Text>
                <Text style={styles.categoryCount}>{item.count} статей</Text>
            </View>
            <View style={[styles.categoryIcon, { backgroundColor: item.color + '20' }]}>
                <Text style={[styles.categoryIconText, { color: item.color }]}>
                    {item.name.charAt(0)}
                </Text>
            </View>
        </TouchableOpacity>
    );

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={categories}
                renderItem={renderCategoryItem}
                keyExtractor={item => item.id} 
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.listContent}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    listContent: {
        padding: 8,
    },
    categoryItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#fff',
        marginHorizontal: 8,
        marginVertical: 4,
        borderRadius: 12,
        borderLeftWidth: 4,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 2,
    },
    categoryInfo: {
        flex: 1,
    },
    categoryName: {
        fontSize: 16,
        fontWeight: '600',
        color: '#1a1a1a',
        marginBottom: 4,
    },
    categoryCount: {
        fontSize: 14,
        color: '#666',
    },
    categoryIcon: {
        width: 40,
        height: 40,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    categoryIconText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default CategoriesScreen;