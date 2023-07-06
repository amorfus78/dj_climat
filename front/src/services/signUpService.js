export const signUpService =
  ({ api }) =>
  async (email, password, age) => {
    console.log(email + password + age);
    try {
      const { data } = await api.post("/user", {
        email,
        password,
        age,
      });

      return [null, data];
    } catch (err) {
      return [err, null];
    }
  };
