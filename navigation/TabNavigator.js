import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'; 
import Ionicons from '@expo/vector-icons/Ionicons';
import NewsListScreen from '../screens/NewsListScreen';
import CategoriesScreen from '../screens/CategoriesScreen';
import ProfileScreen from '../screens/ProfileScreen';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route, navigation }) => ({ 
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'Новости') {
                        iconName = focused ? 'newspaper' : 'newspaper-outline';
                    } else if (route.name === 'Категории') {
                        iconName = focused ? 'list' : 'list-outline';
                    } else if (route.name === 'Профиль') {
                        iconName = focused ? 'person' : 'person-outline';
                    }

                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: '#4B0082',
                tabBarInactiveTintColor: 'gray',
                headerRight: () => (
                    <Ionicons
                        name="settings-outline"
                        size={24}
                        color="#4B0082"
                        style={{ marginRight: 15 }}
                        onPress={() => navigation.navigate('Settings')}
                    />
                ),
            })}
        >
            <Tab.Screen
                name="Новости"
                component={NewsListScreen}
                options={{ title: 'Последние новости' }}
            />
            <Tab.Screen 
              name="Категории" 
              component={CategoriesScreen}
            />
            <Tab.Screen 
              name="Профиль" 
              component={ProfileScreen} 
            />
        </Tab.Navigator>
    );
};

export default TabNavigator;