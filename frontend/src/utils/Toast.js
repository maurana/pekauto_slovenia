import { toast } from 'react-toastify'

export function ResponseAll(xhr) {
    if (xhr.status === 0) return toast.error("Network Error")
    if (xhr.status === 400) return toast.error("Bad Request")
    if (xhr.status === 401) return toast.error("Unauthorized")
    if (xhr.status === 403) return toast.error("Forbidden")
    if (xhr.status === 404) return toast.error("Not Found")
    if (xhr.status === 500) return toast.error("Server Error")

    if (xhr.status === 201) return toast.success("Created Succesfully !")
}