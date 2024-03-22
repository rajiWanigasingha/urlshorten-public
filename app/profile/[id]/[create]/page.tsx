import Takeurlform from "@/app/lib/components/takeurlform/takeurlform"
import { redirect } from "next/navigation"

export default function Create({params}:{params:{id:string,create:string}}){
    if(!(params.create === 'create')){
        redirect(`/profile/${params.id}`)
    }
    return(
        <>
        <Takeurlform/>
        </>
    )
}