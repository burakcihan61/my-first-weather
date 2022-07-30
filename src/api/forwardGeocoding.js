import axios from "axios";

async function getCoordinatesOfAddress(address) {
  const response = await axios.get(
    "https://api.opencagedata.com/geocode/v1/json? ",
    {
      params: {
        key: "91abb449c1ea487abb4271c8a13bb96d",
        q: address,
        language: "en",
      },
    }
  );

  return response;
}

export default getCoordinatesOfAddress;
