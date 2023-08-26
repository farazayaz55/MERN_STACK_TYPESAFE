import { AxiosError } from "axios"
import { AxiosDataObj } from "./AxiosError"

export const errorFunction=(error:AxiosError)=>{
        const errorData=error.response?.data as AxiosDataObj
        alert(errorData.message)
}