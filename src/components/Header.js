import React from 'react';
import {FiSearch} from 'react-icons/fi';
import {BiCommand} from 'react-icons/bi';

function Header() {
    return (
        <section className="absolute top-0 py-4 px-10 bg-[#fff] w-4/5 right-0 border-1 border-[#efefef] flex dark:bg-[#1b1d1e] dark:border-[#000]">
            <input type="text" className="bg-[#F4F4F4] w-[350px] h-[40px] rounded-xl pl-[40px] py-6 outline-none dark:bg-[#282a30]" placeholder="Search or type a command"/>
            <FiSearch className="absolute top-7 text-24 left-12 text-[#6f767d]"/>
            <div className="flex text-20 bg-[#fff] absolute top-6 left-80 px-3 rounded-lg shadow-bsd cursor-pointer dark:bg-[#1b1d1e] dark:text-[#fff]">
                <BiCommand className="mt-1" />
                F
            </div>
            <div className="flex ml-auto w-[250px]">
                <div className=" cursor-pointer mt-3 font-bold dark:text-[#fff]">Sign in</div>
                <div className="w-[100px] text-[#fff] ml-12 py-[5px] px-[20px] bg-[#4783f7] cursor-pointer rounded-2xl flex items-center">Sign up</div>
            </div>
        </section>
    );
}

export default Header;