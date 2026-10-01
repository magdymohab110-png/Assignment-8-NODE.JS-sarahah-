import { compareSync, hashSync } from "bcrypt"

export const Hash = (plainText , SALT_ROUNDS = 10)=>{
    return hashSync(plainText , SALT_ROUNDS);
}

export const Compare = (plainText , cipherText)=>{
    return compareSync(plainText , cipherText)
}

