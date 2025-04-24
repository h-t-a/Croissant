/** @type {import('tailwindcss').Config} */
module.exports = {
    // 1. Paths to all of your template files
    content: [
        './src/**/*.{html,ts}',
    ],

    // 2. Extend the default theme as needed
    theme: {
        extend: {
            // Customizing gradient color stops (optional)
            colors: {
                'brand-blue': '#86a8e7',
                'brand-teal': '#91eae4',
                'brand-pink': '#ff7e5f',
                'brand-peach': '#feb47b',
            },
            borderRadius: {
                xl: '1rem',
            },
            boxShadow: {
                md: '0 8px 16px rgba(0, 0, 0, 0.1)',
                lg: '0 12px 24px rgba(0, 0, 0, 0.15)',
            },
        },
    },

    // 3. Enable core plugins and add official plugins
    plugins: [
        require('@tailwindcss/forms'),       // Provides sensible form styles
        require('@tailwindcss/typography'),  // (Optional) rich text styling
        require('@tailwindcss/aspect-ratio'),// (Optional) aspect‐ratio utilities
    ],

    // 4. (Optional) Purge unused styles in production
    //    This is enabled automatically when NODE_ENV=production
    future: {
        // remove deprecated utilities etc.
    },
};
