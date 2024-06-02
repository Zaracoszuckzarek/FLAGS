
export async function getFlagsData(id){
    const url = id ? `/api/flags/${id}`:"/api/flags"
    const response = await fetch(url)
    const data = await response.json()
    return data.flags
}