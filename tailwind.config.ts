export const theme = {
  "primary": "hsl(180 100% 10%)",
  "secondary": "hsl(0 39% 39%)",
  "accent": "hsl(150 100% 50%)",
  "neutral": "hsl(0 0% 20%)",
  "base-100": "hsl(0 0% 100%)",
  "success": "hsl(150 62% 95%)",
  "warning": "hsl(43 100% 95%)",
  "error": "hsl(9 100% 95%)",
  "info": "hsl(220 100% 97%)",
  "transparent": "transparent",
  "current": "currentColor",
  "landing-bg-header": "rgba(0,0,0, 0.9)",
  "form-overlay": "rgba(43, 42, 48, 0.6)",
  "landing-background": "#1f1f26",
  "landing-section": "#24232a",
  "landing-primary": "#558bff",
  "--rounded-box": "1rem", // border radius rounded-box utility class, used in card and other large boxes
  "--rounded-btn": "0.5rem", // border radius rounded-btn utility class, used in buttons and similar element
  "--rounded-badge": "1.9rem", // border radius rounded-badge utility class, used in badges and similar
  "--animation-btn": "0.25s", // duration of animation when you click on button
  "--animation-input": "0.2s", // duration of animation for inputs like checkbox, toggle, radio, etc
  "--btn-text-case": "uppercase", // set default text transform for buttons
  "--btn-focus-scale": "0.95", // scale transform of button when you focus on it
  "--border-btn": "1px", // border width of buttons
  "--tab-border": "1px", // border width of tabs
  "--tab-radius": "0.5rem", // border radius of tabs
};

export default {
  content: ["./**/*.tsx"],
  theme: {
    extend: {},
    colors: {
      "transparent": "transparent",
      "current": "currentColor",
      "landing-bg-header": "rgba(0,0,0, 0.9)",
      "landing-background": "#1f1f26",
      "landing-section": "#24232a",
      "landing-primary": "#558bff",
      "white": "#FFF",
      "hero-overlay": "rgba(0,0,0, 0.7)",
      "form-overlay": "rgba(43, 42, 48, 0.6)",
    },
    screens: {
      "sm": "576px",
      "md": "768px",
      "lg": "1024px",
      "xl": "1200px",
      "xxl": "1400px",
    },
  },
  plugins: [],
};
