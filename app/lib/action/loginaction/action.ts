"use server"
import * as jose from 'jose'
import { z } from "zod";
import { getXataClient } from '../../xata/xata';
import { cookies } from 'next/headers';
import bcrypt from 'bcryptjs'


const xata = getXataClient()

export async function Loginaction(state:any ,formData:FormData) {
    const email = formData.get("email")
    const password = formData.get("password") as string

    const checkEmail = z.string().email({message:'false'})

    if(!checkEmail){
        return {message:'Invaild email address',id:null}
    }

    if(!(email && password)){
        return {message: 'Email and password required',id:null}
    }

    if(password.length < 8){
        return {message: 'Password must be more than 8 char.'}
    }

    const login = await xata.db.user.filter("email",`${email}`).select(["id","password"]).getPaginated({pagination:{size:1}})

    console.log(login)
    if(login.records.length > 0){

        const hash = login.records[0].password as string

        if(!(bcrypt.compareSync(password, hash))){
            return {message:'Wrong password',id:null}
        }

        const id = login.records[0].id

        const secret = new TextEncoder().encode(
            `${process.env.NEXT_PUBLIC_JWT_API_KEY}`,
          )
          const alg = 'HS256'
          
          const jwt = await new jose.SignJWT()
            .setProtectedHeader({ alg })
            .setExpirationTime('24h')
            .setSubject(id)
            .sign(secret)

        cookies().set({
            name:'jwt',
            value:jwt,
            httpOnly:true,
            path:'/',
            expires: Date.now() + (24*60*60*1000),
            sameSite: 'strict'
        })

        return {message: 'Login was successful',id:id}

    }else{
        return {message:'Invalid email',id:null}
    }
    
}