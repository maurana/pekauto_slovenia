import React from 'react'
import { Banner, Button, TextInput } from 'flowbite-react'
import { BsPlusCircleDotted, BsSearch } from "react-icons/bs"
import ModalForm from "./ModalForm"

export default function BannerHead() {
  const [openModal, setOpenModal] = React.useState(false)
  const [Place, setPlace] = React.useState([])
  const [Equipment, setEquipment] = React.useState([])
  const toggle = () => setOpenModal(p => !p)

  React.useEffect(() => {
    if (Object.keys(Place).length < 1) GetAllPlace()
    if (Object.keys(Equipment).length < 1) GetAllEquipment()
  }, [Place, Equipment])

  const GetAllPlace = async () => {
    await fetch('http://127.0.0.1:8000/api/v1/place', {
      method: 'GET', headers: {'Content-Type': 'application/json'}})
    .then(response => response.json())
    .then(data => setPlace(data))
    .catch(error => console.error(error));
  }

  const GetAllEquipment = async () => {
    await fetch('http://127.0.0.1:8000/api/v1/equipment', {
      method: 'GET', headers: {'Content-Type': 'application/json'}})
    .then(response => response.json())
    .then(data => setEquipment(data))
    .catch(error => console.error(error));
  }

  return (
    <>
    <Banner>
      <div className="flex w-full flex-col justify-between rounded-lg border border-gray-100 bg-white p-4 shadow-sm dark:border-gray-600 dark:bg-gray-700 md:flex-row lg:max-w-7xl">
        <div className="mb-3 mr-4 flex flex-col items-start md:mb-0 md:flex-row md:items-center">
          <a
            href="https://pekauto.com/"
            className="mb-2 flex items-center border-gray-200 dark:border-gray-600 md:mb-0 md:mr-4 md:border-r md:pr-4"
          >
            <img src="/pekauto.png" className="mr-2 h-6" alt="Pekauto Logo" />
            <span className="self-center whitespace-nowrap text-lg font-semibold dark:text-white md:pr-6">
            Pek Automotive
            </span>
          </a>
          <p className="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400">
            Vehicle Idetification Number
          </p>
        </div>
        <div className="flex flex-shrink-0 items-center">
          <TextInput id="search" type="number" rightIcon={BsSearch} placeholder="vin number" className='mr-2'/>
          <Button onClick={toggle}><BsPlusCircleDotted className="h-4 w-4 mr-1" /> Add</Button>
        </div>
      </div>
    </Banner>
    <div>
      <ModalForm open={openModal} toggle={toggle} place={Place} equipment={Equipment} />
    </div>
    </>
  )
}