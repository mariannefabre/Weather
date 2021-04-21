# Weather

Simple React app to display the weather forecast using the OpenWeather API.
The city and the number of days can be configured (up to 16 days).

The BEM methodology was applied.

## Usage

In the project directory, you can run:

```
npm install
npm start
```

Runs the app in the development mode.

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.

## Configuration

In order to have up-to-date data:

1. Please provide an API ID in: src > App.js > line 13

```javascript
const apiId = "";
```

2. In the same file, uncomment from line 12 to 21:

```javascript
const cityName = "Paris";
const apiId = "";
const nbDays = "7";
const endpoint =
  "https://api.openweathermap.org/data/2.5/forecast/daily?q=" +
  cityName +
  "&cnt=" +
  nbDays +
  "&appid=" +
  apiId;
```

3. Still in the same file, remove line 22

```javascript
const endpoint = "./daily.json";
```
