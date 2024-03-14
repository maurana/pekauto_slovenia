import React from "react"
import BannerHead from "./components/BannerHead"
import MainTable from "./components/MainTable"
import API from "./utils/Api"
import { ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default function App() {
    const [Data, setData] = React.useState([])
    const [VinFilter, setVinFilter] = React.useState('')
    const GetAll = async () => setData(await API('vin','GET'))
    const refresh = async () => setData(await API('vin','GET'))
    const filt = async () => setData(await API('vin?'+ new URLSearchParams({vin_number: VinFilter}),'GET'))

    React.useEffect(() => {
      if (Object.keys(Data).length < 1 && VinFilter == '') GetAll()
    }, [Data])

    return (
        <div className="container mx-auto p-6">
         <BannerHead refresh={refresh} handleFilter={setVinFilter} handleSubmit={filt}/>
         <MainTable data={Data}/>
         <ToastContainer autoClose={3000}/>
        </div>
    )
}