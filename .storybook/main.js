module.exports = {
  stories: ['../**/*.stories.js'],
  addons: [
    '@storybook/addon-a11y',
    '@storybook/addon-design-assets',
    '@storybook/addon-links',
    '@whitespace/storybook-addon-html',
    {
      name: '@storybook/addon-essentials',
      options: {
        controls: false,
        actions: false,
        docs: false,
      },
    },
  ],
}
