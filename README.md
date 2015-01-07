# Foundation for Apps Packaged for Meteor (scss only)

```sh
meteor add rainhaven:foundation-apps
```

To use this package you'll need to create a scss file in your app and import foundation from the build directory. The path will very depending on your app's name. For my test app, the path looked like this:

```
@import ".meteor/local/build/programs/server/assets/packages/rainhaven_foundation-apps/foundation";
```

If you want to use Foundation's settings file to override the default settings, you'll need to copy the _settings.scss file—from the root of this package—into your app, and import it into your scss file before the foundation import. 

```
@import "base/settings";
@import ".meteor/local/build/programs/server/assets/packages/rainhaven_foundation-apps/foundation";
```