// src/screens/Home/index.tsx
import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    SafeAreaView,
    Image,
} from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Svg, { RadialGradient, Stop, Rect} from 'react-native-svg';

interface UserTypeCardProps {
    title: string;
    iconName: keyof typeof MaterialIcons.glyphMap;
    onPress: () => void;
}

const UserTypeCard: React.FC<UserTypeCardProps> = ({ title, iconName, onPress }) => (
    <View style={styles.userTypeContainer}>
        <Text style={styles.userTypeTitle}>{title}</Text>
        <TouchableOpacity style={styles.userCard} onPress={onPress}>
            <View style={styles.iconContainer}>
                <MaterialIcons name={iconName} size={90} color="#FFFFFF" />
            </View>
        </TouchableOpacity>
    </View>
);

interface HeaderButtonProps {
    title: string;
    variant: 'primary' | 'secondary';
    onPress: () => void;
}

const HeaderButton: React.FC<HeaderButtonProps> = ({ title, variant, onPress }) => (
    <TouchableOpacity
        style={[styles.headerButton, variant === 'secondary' && styles.headerButtonSecondary]}
        onPress={onPress}
    >
        <Text style={[styles.headerButtonText, variant === 'secondary' && styles.headerButtonTextSecondary]}>
            {title}
        </Text>
    </TouchableOpacity>
);

const HomeScreen: React.FC = () => {
    const handleTeacherPress = () => {
        console.log('Enseignant sélectionné');
        // Navigation vers la section enseignant
    };

    const handleParentPress = () => {
        console.log('Parent sélectionné');
        // Navigation vers la section parent
    };

    const handleSchoolPress = () => {
        console.log('École sélectionnée');
        // Logic pour sélectionner l'école
    };

    const handleWalletPress = () => {
        console.log('Login Wallet');
        // Logic pour login wallet
    };

    const handleRegisterPress = () => {
        console.log('Créer un compte');
        // Navigation vers inscription
    };

    return (
        <View style={styles.container}>
            {/* Background avec gradient radial SVG */}
            <Svg height="100%" width="100%" style={styles.svgBackground}>
                <RadialGradient
                    id="backgroundGradient"
                    cx="38.52%"
                    cy="70.14%"
                    rx="60.92%"
                    ry="45.05%"
                >
                    <Stop offset="13.94%" stopColor="rgba(43, 3, 137, 0.50)" />
                    <Stop offset="36.54%" stopColor="rgba(37, 3, 117, 0.50)" />
                    <Stop offset="52.88%" stopColor="rgba(30, 2, 97, 0.50)" />
                    <Stop offset="69.23%" stopColor="rgba(24, 2, 77, 0.50)" />
                    <Stop offset="88.13%" stopColor="rgba(11, 1, 35, 0.50)" />
                </RadialGradient>
                <Rect width="100%" height="100%" fill="url(#backgroundGradient)" />
            </Svg>

            <SafeAreaView style={styles.safeArea}>

                {/* Header */}
                <View style={styles.header}>
                    {/* Logo Image */}
                    <Image
                        source={require('../../../assets/images/ludora-logo.png')}
                        style={styles.logoImage}
                        resizeMode="contain"
                    />

                    <Text style={styles.subtitle}>Portail Connexion</Text>

                    {/* Header Buttons */}
                    <View style={styles.headerButtonsContainer}>
                        <HeaderButton
                            title="École de Droite Gulf 80701"
                            variant="primary"
                            onPress={handleSchoolPress}
                        />
                        <HeaderButton
                            title="Login Wallet"
                            variant="secondary"
                            onPress={handleWalletPress}
                        />
                    </View>
                </View>

                {/* Main Content */}
                <View style={styles.content}>
                    <UserTypeCard
                        title="Je suis un enseignant"
                        iconName="school"
                        onPress={handleTeacherPress}
                    />

                    <UserTypeCard
                        title="Je suis un parent"
                        iconName="person"
                        onPress={handleParentPress}
                    />
                </View>

                {/* Footer */}
                <View style={styles.footer}>
                    <TouchableOpacity onPress={handleRegisterPress}>
                        <Text style={styles.footerText}>
                            Vous n'avez pas encore de compte ?
                        </Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#141414', // Fallback color du Figma
    },
    svgBackground: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
    },
    safeArea: {
        flex: 1,
    },
    header: {
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingTop: 20,
    },
    logoImage: {
        width: 200,
        height: 60,
        marginBottom: 10,
        marginTop: 20,
        backgroundColor: 'transparent', // Assure-toi qu'il n'y a pas de background
    },
    subtitle: {
        fontSize: 26,
        color: '#FCFAFF',
        marginBottom: 20,
        fontWeight: '600',
        lineHeight: 39,
        letterSpacing: -0.26,
    },
    headerButtonsContainer: {
        flexDirection: 'row',
        gap: 15,
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    headerButton: {
        backgroundColor: '#A5A3A8',
        paddingHorizontal: 10,
        paddingVertical: 3,
        borderRadius: 6,
        borderWidth: 0,
        borderColor: 'transparent',
        elevation: 0,
        shadowOpacity: 0,
    },
    headerButtonSecondary: {
        backgroundColor: '#10B981',
        borderWidth: 0,
        borderColor: 'transparent',
        elevation: 0,
        shadowOpacity: 0,
    },
    headerButtonText: {
        color: '#FFFFFF',
        fontSize: 14,
        fontWeight: '600',
    },
    headerButtonTextSecondary: {
        color: '#FFFFFF',
    },
    content: {
        flex: 1,
        paddingHorizontal: 20,
        justifyContent: 'center',
        gap: 20,
    },
    userTypeContainer: {
        alignItems: 'center',
    },
    userTypeTitle: {
        color: '#FFD700',
        fontSize: 16,
        fontWeight: '600',
        textAlign: 'center',
        marginBottom: 15,
    },
    userCard: {
        flex:1,
        backgroundColor: 'transparent',
        borderWidth: 3,
        borderColor: '#FFD700',
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
        width: '80%', // Prend 60% de la largeur disponible
        alignSelf: 'center',
    },
    iconContainer: {
        padding: 20,
        borderRadius: 50,
    },
    footer: {
        alignItems: 'center',
        paddingBottom: 30,
        paddingHorizontal: 20,
    },
    footerText: {
        color: '#FFFFFF',
        fontSize: 14,
        textDecorationLine: 'underline',
    },
});

export default HomeScreen;