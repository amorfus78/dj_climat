export const signInService =
  ({ api, setCookie }) =>
  async (email, password) => {
    try {
      const {
        data: { result: jwt },
      } = await api.post("/sign-in", { email, password });

      setCookie("session", jwt, { path: "/" });

      return [null, true];
    } catch (err) {
      return [err, false];
    }
  };
