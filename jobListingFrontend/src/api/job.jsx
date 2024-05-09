import axios from "axios";
const backendUrl = `http://localhost:3000/api/v1/job`;

export const createJobPost = async (jobPostPayload) => {
  try {
    const reqUrl = `${backendUrl}/create`;
    const token = JSON.parse(localStorage.getItem("token"));
    axios.defaults.headers.common["Authorization"] = token;
    const response = await axios.post(reqUrl, jobPostPayload);
  } catch (error) {
    return error.response.data;
    // console.log(error);
    // alert("something went wrong");
  }
};

export const jobPostDetailsById = async (jobId, userId) => {
  try {
    const reqUrl = `${backendUrl}/job-details/${jobId}/${userId}`;
    const response = await axios.get(reqUrl);
    // console.log(response.data)
    return response.data;
  } catch (error) {
    console.log(error);
    alert("Something went wrong");
  }
};

export const updateJobPostById = async (jobPostId, updatedFormData) => {
  try {
    const reqUrl = `${backendUrl}/update/${jobPostId}`;
    const token = JSON.parse(localStorage.getItem("token"));
    axios.defaults.headers.common["Authorization"] = token;
    const response = await axios.put(reqUrl, updatedFormData);
    return response?.data;
  } catch (error) {
    console.log(error);
    alert("Something went wrong");
  }
};
