Package.describe({
  name: 'rainhaven:foundation-apps',
  summary: 'Foundation for Apps. Packaged for Meteor',
  version: '1.0.3',
  git: 'https://github.com/RainHaven/meteor-foundation-apps.git'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.2.1');

  api.use('rainhaven:sass@1.0.1', ['client', 'server']);
  api.imply('rainhaven:sass@1.0.1', ['client', 'server']);

  // SCSS
  api.addFiles([
    '_foundation.scss',
    '_settings.scss',

    'scss/foundation.scss',
    'scss/vendor/_normalize.scss',

    'scss/helpers/_functions.scss',
    'scss/helpers/_mixins.scss',
    'scss/helpers/_breakpoints.scss',
    'scss/helpers/_images.scss',

    'scss/_global.scss',

    'scss/components/_iconic.scss',
    'scss/components/_action-sheet.scss',
    'scss/components/_block-list.scss',
    'scss/components/_button.scss',
    'scss/components/_button-group.scss',
    'scss/components/_card.scss',
    'scss/components/_extras.scss',
    'scss/components/_forms.scss',
    'scss/components/_panel.scss',
    'scss/components/_grid.scss',
    'scss/components/_title-bar.scss',
    'scss/components/_label.scss',
    'scss/components/_list.scss',
    'scss/components/_menu-bar.scss',
    'scss/components/_modal.scss',
    'scss/components/_motion.scss',
    'scss/components/_notification.scss',
    'scss/components/_off-canvas.scss',
    'scss/components/_popup.scss',
    'scss/components/_switch.scss',
    'scss/components/_tabs.scss',
    'scss/components/_accordion.scss',
    'scss/components/_typography.scss',
    'scss/components/_utilities.scss',
  ], 'server');
});

Package.onTest(function(api) {
  api.use('tinytest');
  // api.use('foundation-apps');
  api.addFiles('foundation-apps-tests.js');
});
