import axios from "axios";

axios.defaults.baseURL =
  "https://frontend-test-assignment-api.abz.agency/api/v1";

export async function GetMobileUsers(page) {
  try {
    const response = await axios.get(`/users?page=${page}&count=3`);
    return response.data;
  } catch (error) {
    console.log(error.message);
  }
}

export async function GetTabletUsers(page) {
  try {
    const response = await axios.get(`/users?page=${page}&count=6`);
    return response.data;
  } catch (error) {
    console.log(error.message);
  }
}

export async function GetDesktopUsers(page) {
  try {
    const response = await axios.get(`/users?page=${page}&count=9`);
    return response.data;
  } catch (error) {
    console.log(error.message);
  }
}

export async function PostUser(data) {
  try {
    const token = await axios.get(`/token`);
    return await axios.post("/users", data, {
      headers: {
        Token: `${token.data.token}`,
        "Content-Type": "multipart/form-data",
      },
    });
  } catch (error) {
    console.log(error.message);
  }
}

export async function GetPosition() {
  try {
    const response = await axios.get(`/positions`);
    return response.data.positions;
  } catch (error) {
    console.log(error.message);
  }
}

export async function GetUser(id) {
  try {
    const response = await axios.get(`/users/${id}`);
    return response.data;
  } catch (error) {
    console.log(error.message);
  }
}
