// src/utils/colors.ts
export const COLORS = {
    // Couleurs principales selon ton design
    primary: '#141414', // Background principal (noir foncé)
    secondary: '#2B0389', // Violet foncé pour les boutons
    tertiary: '#250375', // Violet moyen
    quaternary: '#1E0261', // Violet plus foncé
    accent: '#FFD700', // Doré pour les bordures

    // Gradient du logo (si utilisé)
    gradientColors: ['#FF6B9D', '#C766EF', '#8B5CF6', '#FFD700'],

    // Couleurs de statut
    success: '#22C55E',
    warning: '#F59E0B',
    error: '#EF4444',

    // Couleurs neutres
    white: '#FFFFFF',
    black: '#000000',

    // Nuances de violet de ton design
    purple: {
        darkest: '#0B0123',
        darker: '#18024D',
        dark: '#1E0261',
        medium: '#250375',
        light: '#2B0389',
    },

    // Couleurs avec transparence
    overlay: 'rgba(20, 20, 20, 0.9)',
    cardBorder: 'rgba(255, 215, 0, 0.8)',
    iconBackground: 'rgba(255, 215, 0, 0.2)',
};

export const FONTS = {
    regular: 'System',
    medium: 'System',
    bold: 'System',
    sizes: {
        xs: 12,
        sm: 14,
        md: 16,
        lg: 18,
        xl: 20,
        xxl: 24,
        xxxl: 32,
    },
};

export const SPACING = {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
    xxl: 48,
};

export const BORDER_RADIUS = {
    sm: 4,
    md: 8,
    lg: 12,
    xl: 16,
    xxl: 24,
    full: 9999,
};