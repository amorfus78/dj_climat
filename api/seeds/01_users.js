const fakeHash = "11111111"
const fakeSalt = "11111111"

export const seed = async (knex) => {
  await knex("users")
    .del()
    .then(() => {
      return knex("users").insert([
        {
          email: "admin@djClimat.com",
          password_hash: fakeHash,
          password_salt: fakeSalt,
          age: "30",
        },
      ])
    })
}
