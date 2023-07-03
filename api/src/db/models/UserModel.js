import BaseModel from "./BaseModel.js"
import hashPassword from "../methods/hashPassword.js"

class UserModel extends BaseModel {
  static tableName = "users"

  checkPassword = async (password) => {
    const [passwordHash] = await hashPassword(password, this.password_salt)

    return passwordHash === this.password_hash
  }
}

export default UserModel
