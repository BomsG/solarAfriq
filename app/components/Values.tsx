import React from 'react'
import { AiOutlineBulb } from "react-icons/ai";
import { RiCustomerService2Fill } from "react-icons/ri";
import { MdOutlineEnergySavingsLeaf } from "react-icons/md";
import { GrAchievement, GrStatusGood } from "react-icons/gr";
import { GiProgression } from "react-icons/gi";

const Values = () => {
    const item = [
        {
            id: 1,
            icon: AiOutlineBulb,
            name: "Sustainable innovation",
            para: "Lorem ipsum dolor sit amet ullamco consectetur adipiscing elised do eiusmod tempor incididunt ut labore"
        },
        {
            id: 2,
            icon: RiCustomerService2Fill,
            name: "Customer first approach",
            para: "Lorem ipsum dolor sit amet ullamco consectetur adipiscing elised do eiusmod tempor incididunt ut labore"
        },
        {
            id: 3,
            icon: MdOutlineEnergySavingsLeaf,
            name: "Renewable energy focus",
            para: "Lorem ipsum dolor sit amet ullamco consectetur adipiscing elised do eiusmod tempor incididunt ut labore"
        },
        {
            id: 4,
            icon: GrAchievement,
            name: "Quality commitment",
            para: "Lorem ipsum dolor sit amet ullamco consectetur adipiscing elised do eiusmod tempor incididunt ut labore"
        },
        {
            id: 5,
            icon: GiProgression,
            name: "Continuous improvement",
            para: "Lorem ipsum dolor sit amet ullamco consectetur adipiscing elised do eiusmod tempor incididunt ut labore"
        },
        {
            id: 6,
            icon: GrStatusGood,
            name: "Ethical business practices",
            para: "Lorem ipsum dolor sit amet ullamco consectetur adipiscing elised do eiusmod tempor incididunt ut labore"
        },
    ]
  return (
    <div className='my-20 '>
        <h1 className='text-2xl py-5 text-center'>our values</h1>
        <h2 className='text-[55px] py-5 text-center'>The values that shape <br/><span className='text-green-500'>everything we do</span></h2>
        <div className='grid grid-cols-3 gap-5 mt-10'>
            {item.map((item)=>(
                <div key={item.id} className='border-2 hover:bg-green-500 hover:text-white  px-10 py-5'>
                    <item.icon size={30}/>
                    <h1 className='text-2xl my-5'>{item.name}</h1>
                    <p>{item.para}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Values