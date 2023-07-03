import knexfile from "../knexfile.js"

const config = {
  db: knexfile,
  security: {
    jwt: {
      secret: process.env.JWT_SECRET,
      expiresIn: "2 days",
    },
    password: {
      saltlen: 512,
      keylen: 512,
      iterations: 100000,
      digest: "sha512",
      pepper: process.env.PASSWORD_PEPPER,
    },
  },
}

export default config
