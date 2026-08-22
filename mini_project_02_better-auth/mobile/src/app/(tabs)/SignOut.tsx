import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { useAuth } from "../../hooks/useAuthContext";
import { router } from "expo-router";

const SignOut = () => {
  const { handleSignOut, loading, User, error } = useAuth();
  const handleSignOutPress = async () => {
    const success = await handleSignOut();
    if (success) {
      router.push("/(auth)/signIn");
    }
    if (error) {
      console.log("Error signing out:", error);
      router.reload();
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.content}>
        <View style={styles.iconShell}>
          <Ionicons name="log-out-outline" size={34} color="#b84c42" />
        </View>
        <Text style={styles.eyebrow}>ACCOUNT</Text>
        <Text style={styles.title}>Ready to sign out?</Text>
        <Text style={styles.subtitle}>
          You are signed in as {User?.name || User?.email || "this account"}.
          You can sign back in anytime.
        </Text>

        <TouchableOpacity
          accessibilityRole="button"
          accessibilityLabel="Sign out"
          disabled={loading}
          onPress={handleSignOutPress}
          style={[styles.button, loading && styles.buttonDisabled]}
        >
          {loading ? (
            <ActivityIndicator color="#ffffff" />
          ) : (
            <>
              <Text style={styles.buttonText}>Sign out</Text>
              <Ionicons name="arrow-forward" size={20} color="#ffffff" />
            </>
          )}
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default SignOut;

const styles = StyleSheet.create({
  safeArea: { backgroundColor: "#f5f7f1", flex: 1 },
  content: { flex: 1, padding: 28, paddingTop: 56 },
  iconShell: {
    alignItems: "center",
    backgroundColor: "#f8dfda",
    borderRadius: 22,
    height: 72,
    justifyContent: "center",
    marginBottom: 44,
    width: 72,
  },
  eyebrow: {
    color: "#678578",
    fontSize: 12,
    fontWeight: "800",
    letterSpacing: 2,
  },
  title: {
    color: "#10231f",
    fontSize: 36,
    fontWeight: "800",
    lineHeight: 42,
    marginTop: 10,
  },
  subtitle: { color: "#687873", fontSize: 16, lineHeight: 24, marginTop: 16 },
  button: {
    alignItems: "center",
    backgroundColor: "#b84c42",
    borderRadius: 16,
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 36,
    minHeight: 58,
    shadowColor: "#8d3932",
    shadowOpacity: 0.2,
    shadowRadius: 12,
  },
  buttonDisabled: { opacity: 0.7 },
  buttonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "800",
    marginRight: 10,
  },
});
