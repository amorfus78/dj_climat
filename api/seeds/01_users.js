const fakeHash = "11111111"
const fakeSalt = "11111111"

export const seed = async (knex) => {
  await knex("users")
    .del()
    .then(() => {
      return knex("users").insert([
        {
          display_name: "admin",
          email: "admin@djClimat.com",
          password_hash: fakeHash,
          password_salt: fakeSalt,
          phone_number: "+33663033636",
        },
      ])
    })
}
