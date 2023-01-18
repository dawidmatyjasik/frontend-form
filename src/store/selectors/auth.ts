const getUser = (state) => state?.auth?.user;
const getTokenId = (state) => state?.auth?.user?.stsTokenManager?.accessToken;

export const AUTH_SELECTORS = {
  getUser,
  getTokenId,
};
