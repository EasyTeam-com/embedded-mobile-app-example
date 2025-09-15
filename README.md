# Easyteam Demo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Add your easyteam npm token to a `.npmrc` file in the root folder

2. Install dependencies

   ```bash
   npm install
   ```

3. Configure environment variables (optional)

   Create a `.env` file in the root directory with the following content:

   ```bash
   API_BASE_PATH=http://192.168.1.1:9999/DEMO_API_URL
   JWT_PRIVATE_KEY=KEY
   PARTNER_ID=partner.id
   ```

   If `API_BASE_PATH` URL is not provided, the app will use the default value, which will be the sandbox api URL.

4. Start the app

   ```bash
   npx expo start
   ```

In the output, you'll find options to open the app in a

- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

## Environment Variables

The app uses the following environment variables:

- `API_BASE_PATH`: The base URL for the EasyTeam API (default: `https://www.easyteam.io/sandbox/embed`)
- `JWT_PRIVATE_KEY`: The key to sign your token through the backend.
- `PARTNER_ID`: Provided partner id.

## Configs

The config folder contains files to config your organization's info. The files are separated in:

- geolocation
- locations
- organization
- roles
- users

## Integration

Please use our integration guide available in our [mobile SDK integration](https://docs.easyteam.com/mobile-sdk-integration).

If there are any questions or thoughts, please contact us!

## External dependencies.

When using the calendar sync functionality, a google console client id is needed for the apps.

This component uses the [react-native-google-signin](https://www.npmjs.com/package/@react-native-google-signin/google-signin) package to enable googles authentication when using google's calendar sync.

To set up this component, the default configuration of this library must be added. 
Bellow, find the link to the documentation for it:

  * [Android](https://react-native-google-signin.github.io/docs/setting-up/android)
  * [iOS](https://react-native-google-signin.github.io/docs/setting-up/ios)

The configuration of Google Cloud id's are used for it and also must be added. For this, follow:

  * [Collecting configuration information without firebase](https://react-native-google-signin.github.io/docs/setting-up/get-config-file?firebase-or-not=cloud-console)

- Android OAuth Client ID(s) with SHA-1 fingerprints
- iOS OAuth Client ID(s) with iOS URL scheme
- Web Client ID

The ID's must be added to the backend with the `partners/{id}/set-oauth-client` endpoint