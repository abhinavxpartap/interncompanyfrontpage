import React from 'react'
import { FreeQuotation } from '../freeQuotation'

const DemoForm = () => {
  return (
    <div className="bg-[url('/images/bg-form.png')] px-[70px] py-[103px] mt-[150px] relative">
        <div className="absolute right-[40px] bottom-[-70px]">
          <FreeQuotation />
        </div>
        <div className="text-[#FDFDFD] text-[50px] font-bold leading-[125%] mt-[13px] max-w-[691px]">Estimations & planning for business decisions</div>
        <div className="text-[22px] font-medium text-left leading-[26px] text-[#FDFDFD] mt-[20px]">Book your call now</div>
      </div>
  )
}

export default DemoForm