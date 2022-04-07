import axios from "axios";
axios.defaults.baseURL =
  "https://frontend-test-assignment-api.abz.agency/api/v1";

export async function GetUsers(params) {
  const { page, count } = params;
  try {
    const response = await axios.get(`/users?page=${page}&count=${count}`);
    return response.data;
  } catch (error) {
    console.log(error.message);
  }
}
