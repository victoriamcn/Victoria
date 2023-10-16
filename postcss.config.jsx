import tailwindcss from 'tailwindcss';
export const plugins = [
    tailwindcss('./tailwind.js'),
    // eslint-disable-next-line no-undef
    require('autoprefixer')
];