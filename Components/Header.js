import React, { useState, useEffect } from 'react'
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';
import { useRouter } from 'next/dist/client/router';
import Image from "next/image"
import {
    SearchIcon,
    MenuIcon,
    UserCircleIcon,
    GlobeAltIcon,
    UsersIcon,
} from '@heroicons/react/solid'

function Header({placeholder}) {

    const [ searchInput, setSearchInput] = useState('');
    const [ startDate, setStartDate ] = useState(new Date());
    const [ endDate, setEndDate ] = useState(new Date());
    const [ noOfGuests, setNoOfGuests ] = useState(1);
    const router = useRouter();
    
    const handleSelect = (ranges) => {
        setStartDate(ranges.selection.startDate);
        setEndDate(ranges.selection.endDate);
    };
    
    const resetInput = () => {
        setSearchInput("");
    };
    
    const search = () => {
        router.push({
            pathname:'/search',
            query :{
                location: searchInput,
                startDate: startDate.toISOString(),
                endDate: endDate.toISOString(),
                noOfGuests,
            },
        });
    }
    
    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: 'selection'
    }


    return (
        <header className="sticky shadow-md top-0 z-50 grid items-center grid-cols-3 w-screen py-3 md:px-10 bg-white">  

            <div onClick={() => router.push("/")} className="relative flex items-center h-10 cursor-pointer my-auto">
                <Image
                    src = "https://links.papareact.com/qd3"
                    layout = "fill"
                    objectFit = "contain"
                    objectPosition = "left"
                />
            </div>

            {/* Search Bar */}
            <div className="flex items-center md:border-2 rounded-full justify-between p-2 min-w-[300px] ml-auto mr-auto">
                <input 
                    value = {searchInput}
                    onChange = {(e) => setSearchInput(e.target.value)}
                    type="text" 
                    placeholder={placeholder ||  "Start your search"} 
                    className="flex-grow outline-none pl-2 pr-2 bg-transparent"
                />
                <SearchIcon className = "hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer"/>
            </div>
            
            
            {/* Account */}
            <div className="flex items-center space-x-4 justify-end text-gray-600 font-medium mr-3">
                <p className="hidden md:inline cursor-pointer hover:cursor-pointer">Become a host</p>
                <GlobeAltIcon className="h-6 hover:cursor-pointer" />
                <div className="flex items-center space-x-2 border-2 p-2 bg-white rounded-full hover:shadow-md  cursor-pointer ">
                    <MenuIcon className="h-6" />
                    <UserCircleIcon className="h-6" />
                </div>
            </div>
            
            {searchInput &&  <div className=" flex flex-col col-span-3 mt-2 mx-auto shadow-md bg-white p-10 rounded-3xl">
                <DateRangePicker
                    ranges={[selectionRange]}
                    minDate = {new Date()}
                    rangeColors = {["#fd5b61"]}
                    onChange={handleSelect}
                /> 
                <div className="flex items-center border-b mb-4">
                    <h2 className="text-2xl flex-grow font-semibold">Number of Guests</h2>
                    <UsersIcon className="h-5"/>
                    <input 
                        value = {noOfGuests}
                        onChange = {e => setNoOfGuests(e.target.value)}
                        min={1}
                        type="number" 
                        className="w-12 pl-2 text-lg outline-none text-red-400" 
                    />
                </div>

                <div className="flex">
                    <button onClick={resetInput} className="flex-grow text-gray-500">Cancel</button>    
                    <button onClick={ search } className="flex-grow text-red-400">Search</button>    
                </div>   
            </div>}
        </header>
    )
}

export default Header