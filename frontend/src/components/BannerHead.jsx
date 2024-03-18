import React from 'react'
import { Banner, Button, TextInput } from 'flowbite-react'
import { BsPlusCircleDotted, BsSearch } from 'react-icons/bs'
import ModalForm from './ModalForm'
import API from '../utils/Api'

export default function BannerHead({refresh, handleFilter, handleSubmit}) {
  const [openModal, setOpenModal] = React.useState(false)
  const [Place, setPlace] = React.useState([])
  const [Equipment, setEquipment] = React.useState([])
  const toggle = () => setOpenModal(p => !p)
  const GetAllPlace = async () => setPlace(await API('place','GET'))
  const GetAllEquipment = async () => setEquipment(await API('equipment','GET'))

  React.useEffect(() => {
    if (Object.keys(Place).length < 1) GetAllPlace()
    if (Object.keys(Equipment).length < 1) GetAllEquipment()
  }, [Place, Equipment])

  return (
    <>
    <Banner>
      <div className="flex w-full flex-col justify-between rounded-lg border border-gray-100 bg-white p-4 shadow-sm dark:border-gray-600 dark:bg-gray-700 md:flex-row lg:max-w-7xl">
        <div className="mb-3 mr-4 flex flex-col items-start md:mb-0 md:flex-row md:items-center">
          <a
            href="https://github.com/maurana/pekauto_slovenia"
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
          <div className="relative">
          <TextInput id="search" type="text" autoComplete={"off"} placeholder="vin number search.." className='mr-1' maxLength={17} onKeyPress={(event) => {if (!/[0-9]/.test(event.key)) event.preventDefault()}} onChange={(e) => {handleFilter(e.target.value)}}/>
          <button type="button" onClick={handleSubmit} className="text-white absolute end-2 bottom-1.5 bg-gray-0 hover:bg-gray-0 focus:ring-1 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-2 py-2 dark:bg-gray-0 dark:hover:bg-gray-0 dark:focus:ring-gray-800"><BsSearch color="gray"/></button>
          </div>
          <Button onClick={toggle}><BsPlusCircleDotted className="h-4 w-4 mr-1" /> Add</Button>
        </div>
      </div>
    </Banner>
    <div>
      <ModalForm open={openModal} toggle={toggle} place={Place} equipment={Equipment} refresh={refresh}/>
    </div>
    </>
  )
}