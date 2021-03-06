Package.describe({
  name: "gwendall:simple-schema-i18n",
  summary: "Internationalization for SimpleSchema",
  version: "0.2.0",
  git: "https://github.com/gwendall/meteor-simple-schema-i18n.git"
});

var packages = [
  "aldeed:simple-schema@1.3.2",
  "tap:i18n@1.6.1",
  "templating@1.1.4",
  "underscore@1.0.4"
];

Package.onUse(function (api, where) {

  api.use(packages);
  api.imply(packages);

  api.addFiles([
    "shared/lib.js",
    "i18n/ar.i18n.json",
    "i18n/bg.i18n.json",
    "i18n/de.i18n.json",
    "i18n/en.i18n.json",
    "i18n/es.i18n.json",
    "i18n/et.i18n.json",
    "i18n/fr.i18n.json",
    "i18n/he.i18n.json",
    "i18n/id.i18n.json",
    "i18n/it.i18n.json",
    "i18n/nl.i18n.json",
    "i18n/pt-BR.i18n.json",
    "i18n/ru.i18n.json",
    "i18n/sk.i18n.json",
    "i18n/sv.i18n.json",
    "i18n/tr.i18n.json",
    "i18n/uk.i18n.json",
    "i18n/zh-CN.i18n.json",
    "i18n/zh-HK.i18n.json",
    "i18n/zh-TW.i18n.json"
  ]);
  api.addAssets([
    "package-tap.i18n"
  ], ['client', 'server']);
});
