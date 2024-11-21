import axios from 'axios';

export async function getProfile(token: string): Promise<boolean> {
  try {
    const response = await axios.get(
      import.meta.env.VITE_API + '/auth/profile',
      {
        headers: { Authorization: 'Bearer ' + token },
      },
    );

    return true;
  } catch (error) {
    return false;
  }
}

export async function getFreshToken(token: string): Promise<boolean | string> {
  try {
    const response = await axios.post(
      import.meta.env.VITE_API + '/auth/refresh',
      null,
      { headers: { Authorization: 'Bearer ' + token } },
    );

    return response.data.data.access_token;
  } catch (error) {
    return false;
  }
}
