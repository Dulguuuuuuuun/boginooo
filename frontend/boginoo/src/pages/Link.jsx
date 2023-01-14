import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { instance } from "../App"

const Link =  () => {
    const params = useParams()


    const getData = async () => {
        const res = await instance.get(`/link/${params.shortId}`)
        console.log(res)
        window.location.replace(res.data.data.url)
    }
    
useEffect(() => {
    getData();
},[])



}
export default Link