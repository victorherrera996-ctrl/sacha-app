/**
 * 🎨 Global Theme Configuration
 * Reutilizable components y estilos globales
 */

import { ViewStyle, TextStyle, StyleProp } from "react-native";
import { colors } from "./colors";

export const theme = {
  // Espaciado
  spacing: {
    xs: 4,
    sm: 8,
    md: 12,
    lg: 16,
    xl: 24,
    xxl: 32,
  },

  // Tipografía
  typography: {
    h1: {
      fontSize: 32,
      fontWeight: "700" as const,
      lineHeight: 40,
    },
    h2: {
      fontSize: 24,
      fontWeight: "600" as const,
      lineHeight: 32,
    },
    h3: {
      fontSize: 20,
      fontWeight: "600" as const,
      lineHeight: 28,
    },
    body: {
      fontSize: 16,
      fontWeight: "400" as const,
      lineHeight: 24,
    },
    bodyBold: {
      fontSize: 16,
      fontWeight: "600" as const,
      lineHeight: 24,
    },
    small: {
      fontSize: 14,
      fontWeight: "400" as const,
      lineHeight: 20,
    },
    smallBold: {
      fontSize: 14,
      fontWeight: "600" as const,
      lineHeight: 20,
    },
    caption: {
      fontSize: 12,
      fontWeight: "400" as const,
      lineHeight: 16,
    },
  },

  // Bordes
  radius: {
    sm: 4,
    md: 8,
    lg: 12,
    xl: 16,
    full: 999,
  },

  // Sombras
  shadows: {
    none: {
      elevation: 0,
      shadowColor: "transparent",
    },
    sm: {
      elevation: 2,
      shadowColor: colors.background,
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.2,
      shadowRadius: 2,
    },
    md: {
      elevation: 4,
      shadowColor: colors.background,
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.3,
      shadowRadius: 4,
    },
    lg: {
      elevation: 8,
      shadowColor: colors.background,
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.4,
      shadowRadius: 8,
    },
  },

  // Componentes comunes
  components: {
    button: {
      primary: {
        backgroundColor: colors.primary,
        paddingVertical: 12,
        paddingHorizontal: 16,
        borderRadius: 8,
        alignItems: "center" as const,
      },
      secondary: {
        backgroundColor: colors.surfaceLight,
        paddingVertical: 12,
        paddingHorizontal: 16,
        borderRadius: 8,
        alignItems: "center" as const,
        borderWidth: 1,
        borderColor: colors.border,
      },
      ghost: {
        backgroundColor: "transparent",
        paddingVertical: 12,
        paddingHorizontal: 16,
        borderRadius: 8,
        alignItems: "center" as const,
      },
    },
    input: {
      container: {
        backgroundColor: colors.surfaceLight,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: colors.border,
        paddingHorizontal: 12,
        paddingVertical: 10,
        marginVertical: 8,
      },
      placeholder: colors.textTertiary,
      text: colors.textPrimary,
    },
    card: {
      container: {
        backgroundColor: colors.surfaceLight,
        borderRadius: 12,
        padding: 16,
        marginVertical: 8,
        borderWidth: 1,
        borderColor: colors.border,
      },
      pressable: {
        opacity: 0.7,
      },
    },
  },
};
