import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const UserProfile = {
  name: "Triệu Tiến Sáng",
  image: require("../assets/account.png"),
};

const SettingsScreen = ({ navigation }) => {
  // const navigation = useNavigation();
  const handleLogout = () => {
    navigation.navigate("Login");
  };
  const handleProfile = () => {
    navigation.navigate("Profile");
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={handleProfile}>
        <View style={styles.userProfile}>
          <Image source={UserProfile.image} style={styles.userImage} />
          <Text style={styles.userName}>{UserProfile.name}</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutButtonText}>Đăng Xuất</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  userProfile: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#99FFCC",
    backgroundColor: "#99FFCC",
    margin: 20,
    borderRadius: 20,
  },
  userImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  userName: {
    marginLeft: 16,
    fontSize: 20,
  },
  logoutButton: {
    backgroundColor: "#339966",
    paddingVertical: 16,
    paddingHorizontal: 32,
    margin: 16,
    borderRadius: 10,
    alignItems: "center",
  },
  logoutButtonText: {
    color: "white",
    fontSize: 18,
  },
});

export default SettingsScreen;
