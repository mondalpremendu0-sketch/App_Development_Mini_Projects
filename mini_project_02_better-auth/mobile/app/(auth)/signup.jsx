import { useState } from "react";
import {
    ActivityIndicator,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { useAuth } from "../../src/hooks/useAuthContext";






export default function SignUp() {
    const { handleSignUp, loading } = useAuth();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState("");

    const handleSignup = async () => {
        
        const normalizedName = name.trim();
        const normalizedEmail = email.trim();
        if (!normalizedName || !normalizedEmail || !password) {
            setError("Complete all fields to create your account.");
            return;
        }
        if (!/^\S+@\S+\.\S+$/.test(normalizedEmail)) {
            setError("Enter a valid email address.");
            return;
        }
        if (password.length < 8) {
            setError("Use at least 8 characters for your password.");
            return;
        }
        setError("");
        const success = await handleSignUp(normalizedEmail, password, normalizedName);
        if (success) router.replace("/(tabs)");
        else setError("We could not create your account. Check your details and try again.");
    };

    return (
        <SafeAreaView style={styles.safeArea}>
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : undefined}
                style={styles.keyboardView}
            >
                <ScrollView
                    contentContainerStyle={styles.content}
                    keyboardShouldPersistTaps="handled"
                    showsVerticalScrollIndicator={false}
                >
                    <View style={styles.orbit} />
                    <View style={styles.brandRow}>
                        <View style={styles.brandMark}>
                            <Ionicons name="sparkles" size={20} color="#10231f" />
                        </View>
                        <Text style={styles.brandName}>NOVA</Text>
                    </View>

                    <View style={styles.headingBlock}>
                        <Text style={styles.eyebrow}>GET STARTED</Text>
                        <Text style={styles.title}>Make room for{`\n`}what&apos;s next.</Text>
                        <Text style={styles.subtitle}>Create your Nova account in a few seconds.</Text>
                    </View>

                    <View style={styles.form}>
                        <Text style={styles.label}>FULL NAME</Text>
                        <View style={[styles.inputShell, error && styles.inputError]}>
                            <Ionicons name="person-outline" size={20} color="#8d9b96" />
                            <TextInput
                                autoCapitalize="words"
                                autoComplete="name"
                                onChangeText={(value) => { setName(value); setError(""); }}
                                placeholder="Your name"
                                placeholderTextColor="#92a09a"
                                style={styles.input}
                                value={name}
                            />
                        </View>

                        <Text style={styles.label}>EMAIL ADDRESS</Text>
                        <View style={[styles.inputShell, error && styles.inputError]}>
                            <Ionicons name="mail-outline" size={20} color="#8d9b96" />
                            <TextInput
                                autoCapitalize="none"
                                autoComplete="email"
                                autoCorrect={false}
                                keyboardType="email-address"
                                onChangeText={(value) => { setEmail(value); setError(""); }}
                                placeholder="you@example.com"
                                placeholderTextColor="#92a09a"
                                style={styles.input}
                                value={email}
                            />
                        </View>

                        <Text style={styles.label}>PASSWORD</Text>
                        <View style={[styles.inputShell, error && styles.inputError]}>
                            <Ionicons name="lock-closed-outline" size={20} color="#8d9b96" />
                            <TextInput
                                autoCapitalize="none"
                                autoComplete="new-password"
                                onChangeText={(value) => { setPassword(value); setError(""); }}
                                placeholder="At least 8 characters"
                                placeholderTextColor="#92a09a"
                                secureTextEntry={!showPassword}
                                style={styles.input}
                                value={password}
                            />
                            <TouchableOpacity
                                accessibilityLabel={showPassword ? "Hide password" : "Show password"}
                                onPress={() => setShowPassword((visible) => !visible)}
                            >
                                <Ionicons name={showPassword ? "eye-off-outline" : "eye-outline"} size={20} color="#64736d" />
                            </TouchableOpacity>
                        </View>

                        {!!error && (
                            <View style={styles.errorBox}>
                                <Ionicons name="alert-circle" size={18} color="#b84c42" />
                                <Text style={styles.errorText}>{error}</Text>
                            </View>
                        )}

                        <TouchableOpacity
                            accessibilityRole="button"
                            disabled={loading}
                            onPress={handleSignup}
                            style={[styles.button, loading && styles.buttonDisabled]}
                        >
                            {loading ? <ActivityIndicator color="#10231f" /> : <><Text style={styles.buttonText}>Create account</Text><Ionicons name="arrow-forward" size={20} color="#10231f" /></>}
                        </TouchableOpacity>
                    </View>

                    <View style={styles.footer}>
                        <Text style={styles.footerText}>Already have an account?</Text>
                        <TouchableOpacity onPress={() => router.push("/(auth)/signIn")}>
                            <Text style={styles.signUp}>Sign in</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: { backgroundColor: "#f5f7f1", flex: 1 },
    keyboardView: { flex: 1 },
    content: { flexGrow: 1, padding: 28, paddingTop: 24 },
    orbit: { backgroundColor: "#dce9c7", borderRadius: 180, height: 250, opacity: 0.7, position: "absolute", right: -115, top: -90, width: 250 },
    brandRow: { alignItems: "center", flexDirection: "row", gap: 10 },
    brandMark: { alignItems: "center", backgroundColor: "#c8e86a", borderRadius: 13, height: 38, justifyContent: "center", width: 38 },
    brandName: { color: "#10231f", fontSize: 15, fontWeight: "800", letterSpacing: 2 },
    headingBlock: { marginBottom: 34, marginTop: 64 },
    eyebrow: { color: "#678578", fontSize: 12, fontWeight: "800", letterSpacing: 2 },
    title: { color: "#10231f", fontSize: 38, fontWeight: "800", lineHeight: 43, marginTop: 10 },
    subtitle: { color: "#687873", fontSize: 16, lineHeight: 23, marginTop: 14 },
    form: { gap: 12 },
    label: { color: "#50655d", fontSize: 11, fontWeight: "800", letterSpacing: 1.2 },
    inputShell: { alignItems: "center", backgroundColor: "#ffffff", borderColor: "#e0e7df", borderRadius: 16, borderWidth: 1, flexDirection: "row", minHeight: 58, paddingHorizontal: 16 },
    inputError: { borderColor: "#d98276" },
    input: { color: "#10231f", flex: 1, fontSize: 16, marginLeft: 11, paddingVertical: 14 },
    errorBox: { alignItems: "center", flexDirection: "row", gap: 8, marginTop: 2 },
    errorText: { color: "#b84c42", flex: 1, fontSize: 13, lineHeight: 18 },
    button: { alignItems: "center", backgroundColor: "#c8e86a", borderRadius: 16, flexDirection: "row", justifyContent: "center", marginTop: 16, minHeight: 58, shadowColor: "#91ad42", shadowOpacity: 0.22, shadowRadius: 12 },
    buttonDisabled: { opacity: 0.65 },
    buttonText: { color: "#10231f", fontSize: 16, fontWeight: "800", marginRight: 10 },
    footer: { alignItems: "center", flexDirection: "row", justifyContent: "center", marginTop: "auto", paddingTop: 38 },
    footerText: { color: "#788780", fontSize: 14 },
    signUp: { color: "#356a53", fontSize: 14, fontWeight: "800", marginLeft: 5 },
});