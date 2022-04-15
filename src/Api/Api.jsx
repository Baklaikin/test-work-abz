import axios from "axios";

axios.defaults.baseURL =
  "https://frontend-test-assignment-api.abz.agency/api/v1";

export async function GetMobileUsers(page = 1) {
  try {
    const response = await axios.get(`/users?page=${page}&count=3`);
    return response.data;
  } catch (error) {
    console.log(error.message);
  }
}

export async function GetTabletUsers(page) {
  console.log(page);
  try {
    const response = await axios.get(`/users?page=${page}&count=6`);
    return response.data;
  } catch (error) {
    console.log(error.message);
  }
}

export async function GetDesktopUsers(page = 1) {
  try {
    const response = await axios.get(`/users?page=${page}&count=9`);
    return response.data;
  } catch (error) {
    console.log(error.message);
  }
}
