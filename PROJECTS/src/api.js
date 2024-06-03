
export async function getFlagsData(){
    const url = "/api/flags"
    const response = await fetch(url)
    const data = await response.json()
    return data.flags
}


export async function getFlagData(id){
    const url = `/api/flags/${id}`
    const res = await fetch(url)
    const data = await res.json() 
    return data.flags
}
