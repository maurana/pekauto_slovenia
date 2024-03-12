import React from "react"
import BannerHead from "./components/BannerHead"
import MainTable from "./components/MainTable"

export default function App() {
    const [Data, setData] = React.useState([])

    React.useEffect(() => {
      if (Object.keys(Data).length < 1) GetAll()
    }, [Data])

    const GetAll = async () => {
      await fetch('http://127.0.0.1:8000/api/v1/vin', {
        method: 'GET', headers: {'Content-Type': 'application/json'}})
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error(error));
    }

    return (
        <div className="container mx-auto p-6">
         <BannerHead />
         <MainTable data={Data}/>
        </div>
      )
}