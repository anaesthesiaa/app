import {View, Text, Image, StyleSheet, Pressable, SafeAreaView} from "react-native";

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.card}>
        <Image
          style={styles.avatar}
          source={{
            uri: "https://citaty.info/files/portraits/muza.jpeg",
          }}
        />
        <View style={styles.textContainer}>
          <Text style={styles.name}>Муза</Text>
          <Text style={styles.title}>Фея музыки и гармонии</Text>
          <Text style={styles.bio}>
            Выражаясь языком музыки, иногда я чувствую себя как маленькая нота,
            вписанная в сложное созвучие
          </Text>
        </View>
        <View style={styles.skills}>
          <Text style={styles.txtSkills}>Звуковые волны</Text>
          <Text style={styles.txtSkills}>Гиперэмпатия</Text>
          <Text style={styles.txtSkills}>Танец и движение</Text>
        </View>
        <View style={styles.boxBtn}>
          <Pressable style={styles.subBtn}>
            <Text style={styles.txtBtn}>Подписаться</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  skills: {
    paddingVertical: 10,
    width: `auto`,
    flexDirection: "row",
    flexWrap: `wrap`,
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
  },
  txtSkills: {
    backgroundColor: "#FFC0Cb",
    borderRadius: 20,
    paddingVertical: 3,
    paddingHorizontal: 6,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
  },
  card: {
    backgroundColor: "white",
    borderRadius: 16,
    padding: 20,
    width: "80%",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 5,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 16,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 4,
  },
  title: {
    fontSize: 16,
    color: "#636363",
    marginBottom: 8,
  },
  bio: {
    fontSize: 14,
    color: "#888",
    textAlign: "center",
  },
  subBtn: {
    backgroundColor: "#C71585",
    borderRadius: 20,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  txtBtn: {
    color: "white",
    fontSize: 16,
  },
});

export default App; 