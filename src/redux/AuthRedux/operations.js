import { createAsyncThunk } from '@reduxjs/toolkit';
import * as AuthApis from '../../api/auth';
// import { NavigationUtils } from '../../navigation';

export const login = createAsyncThunk('auth/login', async (data, { rejectWithValue }) => {
  try {
    const response = await AuthApis.login(data);

    return response?.data;
  } catch (err) {
    if (!err.data) {
      throw err;
    }
    console.log('====================================');
    console.log('aaaaa', err.data);
    console.log('====================================');
    return rejectWithValue(err.data);
  }
});

export const register = createAsyncThunk('auth/register', async (data, { rejectWithValue }) => {
  try {
    const response = await AuthApis.register(data);
    console.log('====================================');
    console.log('response', response);
    console.log('====================================');
    return response?.data;
  } catch (err) {
    if (!err.data) {
      throw err;
    }

    return rejectWithValue(err.data);
  }
});

export const forgotPassword = createAsyncThunk(
  'auth/forgotPassword',
  async (data, { rejectWithValue }) => {
    try {
      // const response = await axios.post(`${config.API_URL}/auth/forgotPassword`, data);
      const response = await AuthApis.forgotPasswordApi(data);
      return response?.data;
    } catch (err) {
      if (!err.data) {
        throw err;
      }

      return rejectWithValue(err.data);
    }
  },
);

export const resetPassword = createAsyncThunk(
  'auth/confirmCode',
  async (data, { rejectWithValue }) => {
    try {
      // const response = await axios.post(`${config.API_URL}/auth/resetPassword`, data);
      const response = await AuthApis.resetPasswordApi(data);
      return response?.data;
    } catch (err) {
      if (!err.data) {
        throw err;
      }

      return rejectWithValue(err.data);
    }
  },
);

export const uploadImage = createAsyncThunk(
  'user/uploadFile',
  async (data, { rejectWithValue }) => {
    try {
      const response = await AuthApis.uploadFile(data);
      return response?.data;
    } catch (err) {
      if (!err.data) {
        throw err;
      }

      return rejectWithValue(err.data);
    }
  },
);

export const updateProfile = createAsyncThunk(
  'user/updateProfile',
  async (data, { rejectWithValue, getState }) => {
    try {
      const accessToken = getState().auth.token;
      await AuthApis.setToken(accessToken);
      const response = await AuthApis.updateProfile(data);
      return response?.data;
    } catch (err) {
      if (!err.data) {
        throw err;
      }
      return rejectWithValue(err.data);
    }
  },
);
//Admin Doing
export const getMany = createAsyncThunk(
  'admin/getMany',
  async (data, { rejectWithValue, getState }) => {
    try {
      const accessToken = getState().auth.token;
      await AuthApis.setToken(accessToken);

      const response = await AuthApis.getMany(data);
      return response?.data;
    } catch (err) {
      if (!err) {
        throw err;
      }
      return rejectWithValue(err);
    }
  },
);

export const createOne = createAsyncThunk(
  'admin/createOne',
  async (data, { rejectWithValue, getState }) => {
    try {
      const accessToken = getState().auth.token;
      await AuthApis.setToken(accessToken);
      const response = await AuthApis.createOne(data);
      return response?.data;
    } catch (err) {
      if (!err.data) {
        throw err;
      }
      return rejectWithValue(err.data);
    }
  },
);

export const getOne = createAsyncThunk(
  'admin/getOne/',
  async (userId, { rejectWithValue, getState }) => {
    try {
      const accessToken = getState().auth.token;
      await AuthApis.setToken(accessToken);
      const response = await AuthApis.getOne(userId);
      return response?.data;
    } catch (err) {
      if (!err.data) {
        throw err;
      }
      return rejectWithValue(err.data);
    }
  },
);

export const updateOne = createAsyncThunk(
  'admin/updateOne/',
  async (data, { rejectWithValue, getState }) => {
    try {
      const accessToken = getState().auth.token;
      await AuthApis.setToken(accessToken);
      const response = await AuthApis.updateOne(data.id, data.user);
      return response?.data;
    } catch (err) {
      if (!err.data) {
        throw err;
      }
      return rejectWithValue(err.data);
    }
  },
);
