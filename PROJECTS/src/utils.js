import { redirect } from "react-router-dom"

export async function authentication(){
    const isLoggedIn = false
    
    if(!isLoggedIn){
        redirect("/login")
    }
}