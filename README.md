# TuteDude_Flatlist1

# Color List App
# Screen shot 
![Image](https://github.com/user-attachments/assets/6e2849ce-4187-47e6-9893-669a5e901b62)

![Image](https://github.com/user-attachments/assets/7dc805d9-6ff6-4de5-b829-4b74fe75449a)

A simple React Native app that displays a list of colors using a `FlatList` component. Each item shows the color name and its hex code.

## Features

- 📜 Scrollable list of different colors
- 🎨 Displays color name and hex value
- 🖌️ Stylish and clean UI
- ⚡ Built using React Native components like `FlatList`, `StyleSheet`, and `Text`

## Project Structure

```
/src
  /components
    - ColorBox.js
    - RawData.js
App.js
```

- `ColorBox.js` — Renders each individual color box with the color name and background.
- `RawData.js` — Contains the array of color data (hex, name, and RGB).
- `App.js` — Main entry file setting up the FlatList and header.

## Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/your-username/color-list-app.git
   cd color-list-app
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Run the project:
   ```bash
   npx expo start
   ```

*(assuming you are using Expo CLI; otherwise adjust according to your setup)*

## Example Usage

- Scroll through the list to see different colors.
- Each color name is shown along with its background color.

## Dependencies

- `react-native`
- `expo` (optional if you're using Expo)

