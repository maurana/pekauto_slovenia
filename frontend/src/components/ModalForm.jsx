import React from 'react'
import { Button, Select, Label, Modal, TextInput } from 'flowbite-react'
import DatePicker from "react-datepicker"
import API from '../utils/Api'
import "react-datepicker/dist/react-datepicker.css"
import "./../style/customdatepicker.css"

export default function ModalForm({open, toggle, place, equipment, refresh, setCreated}) {
    const [Year, setYear] = React.useState(new Date())
    const [Version, setVersion] = React.useState('')
    const [Equipment, setEquipment] = React.useState('')
    const [Serial, setSerial] = React.useState('')
    const [Place, setPlace] = React.useState('')
    const CreateVin = async (data) => await API('vin','POST', data)

    const handleSubmit = async () => {
        let vin = Version+Equipment+Year.getFullYear().toString().substr(-2)+'1'+Serial+Place
        await toggle()
        await CreateVin({vin_number: vin})
        await refresh()
    }

    const CustomInput = React.forwardRef(({ value, onClick, onChange }, ref) => (
        <TextInput type="number" id="year" sizing="sm" onClick={onClick} ref={ref} value={value} onChange={onChange}/>
    ))

    return (
      <Modal show={open} size="lg" onClose={toggle} popup>
        <Modal.Header />
        <Modal.Body>
          <div className="text-left">
            <div className="flex max-w-md flex-col gap-4">
                <div>
                    <div className="mb-2 block">
                    <Label htmlFor="equipment" value="Equipment code" />
                    </div>
                    <Select id="equipment" sizing="sm" onChange={e => setEquipment(e.target.value)}>
                        <option value=""></option>
                        {equipment != null ? Array.from(equipment).map((val, idx) => {
                            return (
                                <option key={idx} value={val.code}>{`${val.code} - ${val.desc}`}</option>
                            )
                        }) : null}
                    </Select>
                </div>
                <div>
                    <div className="mb-2 block">
                    <Label htmlFor="place" value="Place of production" />
                    </div>
                    <Select id="place" sizing="sm" onChange={e => setPlace(e.target.value)}>
                        <option value=""></option>
                        {place != null ? Array.from(place).map((val, idx) => {
                            return (
                                <option key={idx} value={val.code}>{`${val.code} - ${val.state}`}</option>
                            )
                        }) : null}
                    </Select>
                </div>
                <div>
                    <div className="mb-2 block">
                    <Label htmlFor="year" value="Year of issue" />
                    </div>       
                    <div className="customDatePickerWidth">
                    <DatePicker
                    isClearable={true}
                    selected={Year}
                    onChange={(val) => setYear(val)}
                    customInput={<CustomInput />}
                    showYearPicker
                    dateFormat="yyyy"
                    placeholderText="Click to select a year"
                    />
                    </div>

                </div>
                <div>
                    <div className="mb-2 block">
                    <Label htmlFor="serial" value="Serial Number" />
                    </div>
                    <TextInput id="serial" type="text" sizing="sm" maxLength={6} onChange={e => setSerial(e.target.value)} pattern="[0-9]{6}" onKeyPress={(event) => {
                        if (!/[0-9]/.test(event.key)) event.preventDefault()
                    }}/>
                </div>
                <div>
                    <div className="mb-2 block">
                    <Label htmlFor="version" value="Version" />
                    </div>
                    <TextInput id="version" type="text" sizing="sm" maxLength={3} onChange={e => setVersion(e.target.value)} pattern="[0-9]{3}" onKeyPress={(event) => {
                        if (!/[0-9]/.test(event.key)) event.preventDefault()
                    }}/>
                </div>
            </div>
            <div className="flex justify-center gap-4 mt-5">
              <Button color="gray" onClick={toggle}>
                No, cancel
              </Button>
              <Button onClick={handleSubmit}>
                {"Yes, Generate"}
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    )
}