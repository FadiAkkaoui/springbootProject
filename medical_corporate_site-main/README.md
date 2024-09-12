# Medical Sites

## Documentation

### Components

#### MapContainer

##### Purpose
`MapContainer` is a React component that integrates Google Maps, displaying markers for specific locations ("centras") and an `InfoWindow` with additional information.

##### Features
- Dynamically centers on specific centras based on the hostname, defaulting to Gothenburg.
- Displays markers for predefined locations with custom icons.
- Shows an `InfoWindow` upon marker click, revealing details such as title, address, phone, and email.

##### Implementation
1. **State Variables:**
   - `activeMarker`: The current active marker.
   - `selectedPlace`: Details of the place linked to the active marker.
   - `showingInfoWindow`: Controls visibility of the `InfoWindow`.
   - `mapCenter`: Current map center.
   - `zoomLevel`: Map zoom level.

2. **Effect Hook:**
   - Centers map based on the hostname comparison with `centrasData` or defaults to Gothenburg.

3. **Marker Generation:**
   - Creates a `Marker` for each centra from `centrasData`.

4. **InfoWindow:**
   - Displays with detailed information when a marker is clicked.

5. **Styling:**
   - Custom map styling with `mapStyles`.

6. **External Dependencies:**
   - Google Maps (`GoogleApiWrapper`).
   - Chakra UI (for styling in `InfoWindow`).
   - i18next (for internationalization).

7. **Props:**
   - `google`: Google Maps object.

##### Usage
```jsx
<MapContainer apiKey="YOUR_API_KEY" />
```

#### LanguageSelector

##### Purpose
`LanguageSelector` is a React component for language selection in a user interface. It allows users to switch between multiple languages, enhancing the app's internationalization and accessibility.

##### Features
- Presents a dropdown menu of available languages.
- Displays the current language with a corresponding flag icon.
- Offers a selection of predefined languages (English, Svenska, Polski) with respective flag codes.

##### Implementation
- Utilizes Chakra UI components (`Menu`, `MenuButton`, `MenuList`, `MenuItem`, `Button`, `Box`) for UI design.
- Incorporates flag icons for visual representation of languages.
- Receives `currentLanguage` and `onLanguageChange` as props for functionality.

##### Usage
```jsx
<LanguageSelector 
  currentLanguage="en" 
  onLanguageChange={handleLanguageChange} 
/>
```
##### Props
* `currentLanguage`: Specifies the currently active language.
* `onLanguageChange`: Callback function to handle language changes.

##### Note
Ensure the component's language list matches the supported languages of the application.
The flag icons are implemented with a class naming pattern (`fi fi-xx`), which requires corresponding CSS or library for proper rendering.


#### ReadMore

##### Purpose
`ReadMore` is a React component designed to toggle the visibility of content, allowing users to expand or collapse text or elements. It's commonly used to manage lengthy content in a limited space.

##### Features
- Provides an expand/collapse functionality for content.
- Customizable maximum height for collapsed state.
- Includes a Call-to-Action (CTA) button, which can be customized.

##### Implementation
- Uses Chakra UI components (`Box`, `Button`, `VStack`, `HStack`) for layout and styling.
- Manages expanded/collapsed state with `useState`.
- Utilizes the `useTranslation` hook from `react-i18next` for internationalization.

##### Usage
```jsx
<ReadMore maxH="300px" cta={<CustomCTAButton />}>
  {/* Content to be expanded/collapsed */}
</ReadMore>
```

##### Props
* `children`: The content that will be expandable.
* `maxH` (optional): The maximum height of the content in its collapsed state.
* `cta` (optional): A Call-to-Action component displayed alongside the toggle button.

##### Note
Ensure show_more and show_less translation keys are defined for proper i18n support.
The gradient effect is used to indicate hidden content visually in the collapsed state.


#### ScrollToTopButton

##### Purpose
`ScrollToTopButton` is a React component for providing a user-friendly way to scroll back to the top of a page. It becomes visible when the user scrolls down a certain amount and hides when at the top of the page.

##### Features
- Visibility toggles based on scroll position.
- Smooth scrolling animation to the top of the page.
- Customizable appearance and positioning.

##### Implementation
- Uses `useState` for managing visibility state.
- Implements `useEffect` to attach and clean up the scroll event listener.
- Utilizes `react-scroll` for smooth scrolling functionality.
- Integrates `IconButton` from Chakra UI for the button component.

##### Usage
```jsx
<ScrollToTopButton />
```
##### Customization
* The button appears fixed at the bottom-right of the viewport.
* Customizable styles can be applied directly to the `IconButton`.
* The visibility threshold and position can be adjusted as needed.

##### Note
* The component requires `react-scroll` and `react-icons` packages.
* Ensure appropriate styling (like `customBlue.500` for the background) aligns with your application's theme.

