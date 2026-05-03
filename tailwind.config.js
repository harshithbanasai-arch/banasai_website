/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: '#1B2A6B',
        'primary-hover': '#2D3F8F',
        'green-accent': '#5DBB4A',
        'green-secondary': '#3A8C3F',
        'green-light': '#EDF7EB',
        background: '#F8F9F4',
        surface: '#FFFFFF',
        'body-text': '#1C1C1E',
        'muted-text': '#6B7280',
        border: '#E5E7EB',
      },
      fontFamily: {
        sora: ['Sora', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
        inter: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
        'dm-mono': ['DM Mono', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
      },
      boxShadow: {
        'card': '0 1px 4px rgba(0,0,0,0.06)',
      },
      borderRadius: {
        'card': '8px',
        'button': '6px',
      },
      padding: {
        'section': '80px',
      },
    },
  },
  plugins: [],
};