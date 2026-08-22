import { StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { useAuth } from "../../hooks/useAuthContext";

export default function Index() {
  const { User } = useAuth();
  const firstName = User?.user?.name?.split(" ")[0] || "there";

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.content}>
        <View style={styles.header}>
          <View style={styles.brandRow}>
            <View style={styles.brandMark}>
              <Ionicons name="sparkles" size={18} color="#10231f" />
            </View>
            <Text style={styles.brandName}>NOVA</Text>
          </View>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>{firstName[0].toUpperCase()}</Text>
          </View>
        </View>

        <View style={styles.headingBlock}>
          <Text style={styles.eyebrow}>YOUR SPACE</Text>
          <Text style={styles.title}>Good morning, {firstName}.</Text>
          <Text style={styles.subtitle}>
            A clear space for what comes next.
          </Text>
        </View>

        <View style={styles.welcomePanel}>
          <View style={styles.panelIcon}>
            <Ionicons name="compass-outline" size={26} color="#4d7965" />
          </View>
          <Text style={styles.panelTitle}>You are all set.</Text>
          <Text style={styles.panelText}>
            Your account is ready. Start exploring and make this space yours.
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { backgroundColor: "#f5f7f1", flex: 1 },
  content: { flex: 1, padding: 28, paddingTop: 24 },
  header: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  brandRow: { alignItems: "center", flexDirection: "row", gap: 10 },
  brandMark: {
    alignItems: "center",
    backgroundColor: "#c8e86a",
    borderRadius: 12,
    height: 36,
    justifyContent: "center",
    width: 36,
  },
  brandName: {
    color: "#10231f",
    fontSize: 15,
    fontWeight: "800",
    letterSpacing: 2,
  },
  avatar: {
    alignItems: "center",
    backgroundColor: "#dce9c7",
    borderRadius: 20,
    height: 40,
    justifyContent: "center",
    width: 40,
  },
  avatarText: { color: "#365d4d", fontSize: 16, fontWeight: "800" },
  headingBlock: { marginTop: 74 },
  eyebrow: {
    color: "#678578",
    fontSize: 12,
    fontWeight: "800",
    letterSpacing: 2,
  },
  title: {
    color: "#10231f",
    fontSize: 32,
    fontWeight: "800",
    lineHeight: 38,
    marginTop: 10,
  },
  subtitle: { color: "#687873", fontSize: 16, lineHeight: 23, marginTop: 12 },
  welcomePanel: {
    backgroundColor: "#ffffff",
    borderColor: "#e0e7df",
    borderRadius: 20,
    borderWidth: 1,
    marginTop: 42,
    padding: 22,
  },
  panelIcon: {
    alignItems: "center",
    backgroundColor: "#eaf2df",
    borderRadius: 14,
    height: 48,
    justifyContent: "center",
    width: 48,
  },
  panelTitle: {
    color: "#10231f",
    fontSize: 20,
    fontWeight: "800",
    marginTop: 20,
  },
  panelText: { color: "#687873", fontSize: 15, lineHeight: 22, marginTop: 8 },
});
