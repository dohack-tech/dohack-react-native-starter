# DoHack React Native Starter

## Development

This projects uses expo development builds, to create builds run:

### iOS

```bash
npm run build:dev:ios
eas build:run -p ios --path=path-to-build.tar.gz
```

### Android

```bash
npm run build:dev:android
```

## Running Storybook

Run:

```bash
npm run storybook
```

Or add `STORYBOOK_ENABLED=true` in your `.env` file and run:

```bash
npm start
```

## E2E

Install maestro following [this instructions](https://maestro.mobile.dev/getting-started/installing-maestro).

Running tests:

```bash
maestro test e2e/example.yaml
```
