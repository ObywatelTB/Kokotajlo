/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Brand primaries (ensure high contrast with text)
        'primary-blue': '#1E3A8A',        // blue-800
        'accent-green': '#059669',        // green-600 (darker for better contrast on light bgs)

        // Semantic on-color tokens (optional helpers for consistency)
        'on-primary': '#FFFFFF',          // text on primary backgrounds
        'on-accent': '#FFFFFF',           // text on accent backgrounds
        'surface': '#FFFFFF',             // default surface
        'on-surface': '#111827',          // text on surface
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
