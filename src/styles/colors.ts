/**
 * 🎨 Color Palette for Sacha App
 * Dark mode optimized for AMOLED displays
 */

export const colors = {
  // Primary
  primary: "#FF6B6B", // Red for urgency
  primaryLight: "#FF8E8E",
  primaryDark: "#D63031",

  // Background
  background: "#0A0E27", // Deep dark (AMOLED)
  surfaceLight: "#1A1F3A",
  surfaceDark: "#0F1219",

  // Text
  textPrimary: "#FFFFFF",
  textSecondary: "#B0B3C1",
  textTertiary: "#7A7D8A",

  // Pressure States (Sistema de insistencia)
  pressure: {
    early: "#4ECDC4", // 🔔 Verde - Se acerca
    ontime: "#FFE66D", // 📌 Amarillo - Es momento
    warning: "#FF9F43", // ⚠️ Naranja - Van 10 min
    critical: "#FF6348", // 🔥 Rojo - No lo ignores
    extreme: "#C92A2A", // 💀 Rojo oscuro - HAZLO YA
  },

  // Premium
  premiumGold: "#FFD700",
  premiumGoldenRod: "#FFA500",

  // Success/Error
  success: "#2ECC71",
  error: "#E74C3C",
  warning: "#F39C12",
  info: "#3498DB",

  // Borders & Dividers
  border: "#2C2F47",
  divider: "#1A1F3A",

  // Overlay
  overlay: "rgba(10, 14, 39, 0.8)",
  overlayLight: "rgba(10, 14, 39, 0.5)",
};

/**
 * Paleta de presión con emojis y mensajes
 */
export const pressureLevels = {
  early: {
    emoji: "🔔",
    color: colors.pressure.early,
    es: "Se acerca...",
    en: "Getting close...",
  },
  ontime: {
    emoji: "📌",
    color: colors.pressure.ontime,
    es: "Es momento.",
    en: "It's time.",
  },
  warning: {
    emoji: "⚠️",
    color: colors.pressure.warning,
    es: "Van 10 min.",
    en: "10 min late.",
  },
  critical: {
    emoji: "🔥",
    color: colors.pressure.critical,
    es: "No lo ignores.",
    en: "Don't ignore it.",
  },
  extreme: {
    emoji: "💀",
    color: colors.pressure.extreme,
    es: "HAZLO YA.",
    en: "DO IT NOW.",
  },
};
