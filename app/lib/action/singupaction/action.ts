"use server"

import { z } from "zod"
import { getXataClient } from "../../xata/xata"
import bcrypt from 'bcryptjs'

const xata = getXataClient()

export async function Singupaction(state:any ,formData:FormData) {
    const email = formData.get("email")
    const password = formData.get("password") as string

    const checkEmail = z.string().email({message:'false'})

    if(!checkEmail){
        return {message:'Invaild email address'}
    }

    if(!(email && password)){
        return {message: 'Email and password required'}
    }

    if(password.length < 8){
        return {message: 'Password must be more than 8 char.'}
    }

    const hash = bcrypt.hashSync(password, 8);

    const record = await xata.db.user.create({
        //@ts-ignore
        email:email,
        password:hash
    })

    return {message : 'Login was successful'}
}