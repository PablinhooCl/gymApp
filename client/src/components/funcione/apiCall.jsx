import axios from 'axios';

const server = 'http://localhost:5000/';

const ApiCall = async (method, api, formData, rejectWithValue) => {
  console.log('apicall', formData);
  try {
    const config = {
      method,
      url: `${server}${api}`,
      data: formData,
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    };
    const response = await axios(config);
    if (response.status === 200) {
      return response;
    }
    return ('Error in credentials, try again.');
  } catch (error) {
    if (error.response && error.response.data.message) {
      return rejectWithValue(error.response.data.message);
    }
    return rejectWithValue(error.message);
  }
};

export default ApiCall;
