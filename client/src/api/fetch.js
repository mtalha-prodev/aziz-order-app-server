import axios from "axios";

export const postWithoutToken = async (endPoint, data) => {
  try {
    const resp = await axios.post(endPoint, data, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!resp.data.status) {
      alert(resp.data.message);
      return;
    }

    return resp.data;
  } catch (error) {
    console.log(error);
  }
};
