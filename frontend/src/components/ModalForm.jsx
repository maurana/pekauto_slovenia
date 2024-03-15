import React from 'react'
import { Button, Select, Label, Modal, TextInput } from 'flowbite-react'
import { useForm, FormProvider } from 'react-hook-form'
import { AnimatePresence, motion } from 'framer-motion'
import { MdError } from 'react-icons/md'
import { validation, findInputError, isFormInvalid } from '../utils/Validation'
import DatePicker from 'react-datepicker'
import API from '../utils/Api'
import 'react-datepicker/dist/react-datepicker.css'
import './../style/customdatepicker.css'

export default function ModalForm({open, toggle, place, equipment, refresh}) {
    const [Year, setYear] = React.useState(new Date())
    const {register, handleSubmit, reset, formState: { errors }} = useForm()
    const CreateVin = async (data) => await API('vin','POST', data)
    const framer_error = {
        initial: { opacity: 0, y: 10 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: 10 },
        transition: { duration: 0.2 },
    }

    const closeModal = () => {
        toggle()
        reset()
        setYear(new Date())
    }
  
    const onSubmit = async (data) => {
      await closeModal()
        if (Object.values(data).length !== 0) {
            let vin_data = data.version+data.equipment+
                           Year.getFullYear().toString().substr(-2)+
                           '1'+data.serial+data.place

            await CreateVin({vin_number: vin_data})
            await refresh()
        }
    }

    const InputError = ({ message }) => {
        return (
          <motion.p
            className="flex items-center gap-1 px-2 font-semibold text-red-500 bg-red-100 rounded-md"
            {...framer_error}
          >
            <MdError />
            {message}
          </motion.p>
        )
    }

    const CustomInput = React.forwardRef(({ value, onClick, onChange }, ref) => (
        <TextInput type="number" name="year" id="year" sizing="sm" onClick={onClick} ref={ref} value={value} onChange={onChange}/>
    ))

    return (
      <Modal show={open} size="lg" onClose={closeModal} popup>
        <Modal.Header />
        <Modal.Body>
        <FormProvider {...useForm()}>
        <form
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            autoComplete="off"
        >
          <div className="text-left">
            <div className="flex max-w-md flex-col gap-4">
                <div>
                    <div className="mb-2 flex justify-between">
                      <Label htmlFor="year" value="Year of issue" />
                    </div>       
                    <div className="customDatePickerWidth">
                        <DatePicker
                        //isClearable={true}
                        selected={Year}
                        onChange={(val) => setYear(val)}
                        customInput={<CustomInput/>}
                        showYearPicker
                        dateFormat="yyyy"
                        placeholderText="Click to select a year"
                        />
                    </div>
                </div>
                <div>
                    <div className="mb-2 flex justify-between">
                    <Label htmlFor="equipment" value="Equipment code" />
                    <AnimatePresence mode="wait" initial={false}>
                    {isFormInvalid(findInputError(errors, "equipment")) && (
                        <InputError
                            message={findInputError(errors, "equipment").error.message}
                            key={findInputError(errors, "equipment").error.message}
                        />
                    )}
                    </AnimatePresence>
                    </div>
                    <Select {...register("equipment", validation(true,3,3))} name="equipment" id="equipment" sizing="sm">
                        <option value=""></option>
                        {equipment != null ? Array.from(equipment).map((val, idx) => {
                            return (
                                <option key={idx} value={val.code}>{`${val.code} - ${val.desc}`}</option>
                            )
                        }) : null}
                    </Select>
                </div>
                <div>
                    <div className="mb-2 flex justify-between">
                    <Label htmlFor="place" value="Place of production" />
                    <AnimatePresence mode="wait" initial={false}>
                    {isFormInvalid(findInputError(errors, "place")) && (
                        <InputError
                            message={findInputError(errors, "place").error.message}
                            key={findInputError(errors, "place").error.message}
                        />
                    )}
                    </AnimatePresence>
                    </div>
                    <Select {...register("place", validation(true,2,2))} name="place" id="place" sizing="sm">
                        <option value=""></option>
                        {place != null ? Array.from(place).map((val, idx) => {
                            return (
                                <option key={idx} value={val.code}>{`${val.code} - ${val.state}`}</option>
                            )
                        }) : null}
                    </Select>
                </div>
                <div>
                    <div className="mb-2 flex justify-between">
                    <Label htmlFor="serial" value="Serial Number" />
                    <AnimatePresence mode="wait" initial={false}>
                    {isFormInvalid(findInputError(errors, "serial")) && (
                        <InputError
                            message={findInputError(errors, "serial").error.message}
                            key={findInputError(errors, "serial").error.message}
                        />
                    )}
                    </AnimatePresence>
                    </div>
                    <TextInput {...register("serial", validation(true,6,6))} name="serial" id="serial" type="text" sizing="sm" maxLength={6} onKeyPress={(event) => {
                        if (!/[0-9]/.test(event.key)) event.preventDefault()
                    }}/>
                </div>
                <div>
                    <div className="mb-2 flex justify-between">
                    <Label htmlFor="version" value="Version" />
                    <AnimatePresence mode="wait" initial={false}>
                    {isFormInvalid(findInputError(errors, "version")) && (
                        <InputError
                            message={findInputError(errors, "version").error.message}
                            key={findInputError(errors, "version").error.message}
                        />
                    )}
                    </AnimatePresence>
                    </div>
                    <TextInput {...register("version", validation(true,3,3))} name="version" id="version" type="text" sizing="sm" maxLength={3} onKeyPress={(event) => {
                        if (!/[0-9]/.test(event.key)) event.preventDefault()
                    }}/>
                </div>
            </div>
            <div className="flex justify-center gap-4 mt-5">
              <Button color="gray" onClick={closeModal}>
                No, cancel
              </Button>
              <Button type='submit'>
                {"Yes, Generate"}
              </Button>
            </div>
          </div>
          </form>
          </FormProvider>
        </Modal.Body>
      </Modal>
    )
}