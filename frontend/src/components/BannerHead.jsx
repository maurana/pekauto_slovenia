import { Banner, Button, TextInput } from 'flowbite-react'
import { BsPlusCircleDotted, BsSearch } from "react-icons/bs"


function BannerHead() {
  return (
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
          <TextInput id="search" type="number" rightIcon={BsSearch} placeholder="search.." className='mr-2'/>
          <Button href="#"><BsPlusCircleDotted className="h-4 w-4 mr-1" /> Add</Button>
          {/* <Banner.CollapseButton color="gray" className="border-0 bg-transparent text-gray-500 dark:text-gray-400">
            <BsPlusCircleDotted className="h-4 w-4" />
          </Banner.CollapseButton> */}
        </div>
      </div>
    </Banner>
  )
}

export default BannerHead