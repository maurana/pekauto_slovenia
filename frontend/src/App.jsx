import React from "react"
import BannerHead from "./components/BannerHead"
import MainTable from "./components/MainTable"
import API from "./utils/Api"

export default function App() {
    const [Data, setData] = React.useState([])
    const GetAll = async () => setData(await API('vin','GET'))

    React.useEffect(() => {
      if (Object.keys(Data).length < 1) GetAll()
    }, [Data])

    return (
        <div className="container mx-auto p-6">
         <BannerHead/>
         <MainTable data={Data}/>
        </div>
    )
}