import axios from "axios";

async function getAddressOfCoordinates(lat, lng) {
  const response = await axios.get(
    "https://api.opencagedata.com/geocode/v1/json? ",
    {
      params: {
        key: "91abb449c1ea487abb4271c8a13bb96d",
        q: `${lat}+${lng}`,
        language: "en",
      },
    }
  );

  return response;
}

export default getAddressOfCoordinates;
