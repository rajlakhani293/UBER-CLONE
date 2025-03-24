const axios = require("axios");

module.exports.getAddressCoordinate = async (address) => {
  const apiKey = process.env.GOOGLE_MAPS_API;
  const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
    address
  )}&key=${apiKey}`;

  try {
    const response = await axios.get(url);
    if (response.data.status === "OK") {
      const location = response.data.results[0].geometry.location;
      return {
        lat: location.lat,
        lng: location.lng,
      };
    } else {
      throw new Error("Unable to fetch coordinates");
    }
  } catch (error) {
    console.error(
      "Google Maps Geocoding Error:",
      error.response?.data || error.message
    );
    throw error;
  }
};

module.exports.getDistanceTime = async (origin, destination) => {
  if (!origin || !destination) {
    throw new Error("origin and destination are required");
  }
  const apiKey = process.env.GOOGLE_MAPS_API;

  const url = `https://maps.googleapis.com/maps/api/distancematrix/json?origins=${encodeURIComponent(
    origin
  )}&destinations=${encodeURIComponent(destination)}&key=${apiKey}`;

  try {
    const response = await axios.get(url);
    console.log("Google Maps API Response:", response.data);
    if (response.data.status === "OK") {
      if (response.data.rows[0].elements[0].status === "ZERO_RESULTS") {
        throw new Error("No routes found");
      }
      return response.data.rows[0].elements[0];
    } else {
      throw new Error("Unable to fetch distance and time");
    }
  } catch (error) {
    console.error(
      "Google Maps Distance Matrix Error:",
      error.response?.data || error.message
    );
    throw error;
  }
};

module.exports.getAutoSuggestions = async (input) => {
  if (!input) {
    throw new Error("query is required");
  }

  const apiKey = process.env.GOOGLE_MAPS_API;
  if (!apiKey) {
    throw new Error("Google Maps API key is missing");
  }

  const url = `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${encodeURIComponent(
    input
  )}&key=${apiKey}`;

  try {
    const response = await axios.get(url);
    console.log("API Response:", response.data);

    if (response.data.status === "OK") {
      return response.data.predictions;
    } else {
      throw new Error(`Google API Error: ${response.data.status}`);
    }
  } catch (error) {
    console.error(
      "Get Suggestion Response:",
      error.response?.data || error.message
    );
    throw new Error("Failed to fetch suggestions");
  }
};
