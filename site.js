{
  "meta:description": "A basic template for projects that need to run in the browser.",
  "name": "Browser",
  "category": "browser",
  "devDependencies": [
    "parcel-bundler",
    "eslint",
    "eslint-config-airbnb-base",
    "eslint-plugin-import"
  ],
  "main": "./dist/index.js",
  "scripts": {
    "start": "node ./node_modules/parcel-bundler/bin/cli serve ./src/index.html --port 8080",
    "build": "node ./node_modules/parcel-bundler/bin/cli build ./src/index.html --out-dir ./dist/",
    "lint": "node ./node_modules/eslint/bin/eslint . --ext .js --fix"
  },
  "eslintrc": {
    "extends": "airbnb-base",
    "env": {
      "browser": true,
      "es6": true,
      "worker": true
    },
    "parserOptions": {
      "ecmaVersion": 10,
      "sourceType": "script"
    }
  },
  "eslintignore": [
    "/dist",
    "/node_modules"
  ],
  "postInstall": [
    "npm run build"
  ]
}