import React from 'react';
import { FiSearch } from 'react-icons/fi';
import {GrFilter} from 'react-icons/gr';
import {BiLoaderCircle} from 'react-icons/bi'

function List() {
    return (
        <section className="absolute right-0 w-4/5 top-[80px] pl-10 pr-20 dark:bg-[#111315]">
      <p className="font-bold text-36 mt-6 dark:text-[#fff]">Customer list</p>
      <div className="bg-[#fff] pt-4 px-6 relative h-[555px] dark:bg-[#1c1c1f]">
        <div className="flex">
            <div className="flex items-center mr-10">
                <div className="h-[26px] w-[12px] bg-[#c8bcf9] rounded-sm mr-3"></div>
                <div className="font-semibold text-20 dark:text-[#fff]">Customer</div>
            </div>
            <input type="text" className="bg-[#F4F4F4] w-[300px] h-[35px] rounded-xl pl-12 outline-none dark:bg-[#282a2f]" placeholder="Search by name or email"/>
            <FiSearch className="absolute top-5 text-24 left-[200px] text-[#6f767d]"/>
            <GrFilter className="text-28 py-1 px-1 border-2 rounded-md ml-auto cursor-pointer dark:border-[#25272b] " />
        </div>
        <div className="mt-3 ">
            <div className="flex bg-[#f4f4f4] py-2 px-1 rounded mb-2 dark:bg-[#282b30]">
                <input type="checkbox" className="w-[22px] mr-8 cursor-pointer  dark:accent-zinc-500 " />
                <ul className="flex">
                    <li className="w-[120px] text-22 text-[#525354]">ID</li>
                    <li className="w-[300px] text-22 text-[#525354]">Company</li>
                    <li className="w-[250px] text-22 text-[#525354]">Director</li>
                    <li className="w-[180px] text-22 text-[#525354]">Phone</li>
                    <li className="w-[90px] text-22 text-[#525354]">Location</li>
                </ul>
            </div>
            <div className="flex py-2 px-1 rounded">
                <input type="checkbox" className="w-[22px] mr-8 cursor-pointer dark:accent-zinc-500" />
                <ul className="flex dark:text-[#c4c4c4]">
                    <li className="w-[120px]">4101614028</li>
                    <li className="w-[300px]">TNHH THÀNH LONG TG</li>
                    <li className="w-[250px]">TRẦN ĐÌNH THANH</li>
                    <li className="w-[180px]">0862998379</li>
                    <li className="w-[90px]">Bình Định</li>
                </ul>
            </div>
            <hr />
            <div className="flex py-2 px-1 rounded">
                <input type="checkbox" className="w-[22px] mr-8 cursor-pointer dark:accent-zinc-500" />
                <ul className="flex dark:text-[#c4c4c4]">
                    <li className="w-[120px]">4101613881</li>
                    <li className="w-[300px]">TNHH THƯƠNG MẠI VÀ 
DỊCH VỤ TẤN ĐỨC TUẦN</li>
                    <li className="w-[250px]">NGUYỄN TRỌNG ĐỨC</li>
                    <li className="w-[180px]">0934274744</li>
                    <li className="w-[90px]">Bình Định</li>
                </ul>
            </div>
            <hr />
            <div className="flex py-2 px-1 rounded">
                <input type="checkbox" className="w-[22px] mr-8 cursor-pointer dark:accent-zinc-500" />
                <ul className="flex dark:text-[#c4c4c4]">
                    <li className="w-[120px]">4101613930</li>
                    <li className="w-[300px]">TNHH XÂY DỰNG 
TÔNG HỢP PHÚ QUANG</li>
                    <li className="w-[250px]">ĐĂNG THẾ QUANG</li>
                    <li className="w-[180px]">0977552715</li>
                    <li className="w-[90px]">Bình Định</li>
                </ul>
            </div>
            <hr />
            <div className="flex py-2 px-1 rounded">
                <input type="checkbox" className="w-[22px] mr-8 cursor-pointer dark:accent-zinc-500" />
                <ul className="flex dark:text-[#c4c4c4]">
                    <li className="w-[120px]">4101613923</li>
                    <li className="w-[300px]">TNHH TÔNG HỢP GIANG NAM</li>
                    <li className="w-[250px]">TRẦN THỊ THỦY MẪN</li>
                    <li className="w-[180px]">0387443978</li>
                    <li className="w-[90px]">Bình Định</li>
                </ul>
            </div>
            <hr />
            <div className="flex py-2 px-1 rounded">
                <input type="checkbox" className="w-[22px] mr-8 cursor-pointer dark:accent-zinc-500" />
                <ul className="flex dark:text-[#c4c4c4]">
                    <li className="w-[120px]">4101613899</li>
                    <li className="w-[300px]">TNHH SỰ KIỆN VÀ DU LỊCH TSR</li>
                    <li className="w-[250px]">TRƯƠNG THỊ TƯỜNG VY</li>
                    <li className="w-[180px]">0935092769</li>
                    <li className="w-[90px]">Bình Định</li>
                </ul>
            </div>
            <hr />
            <div className="flex py-2 px-1 rounded">
                <input type="checkbox" className="w-[22px] mr-8 cursor-pointer dark:accent-zinc-500" />
                <ul className="flex dark:text-[#c4c4c4]">
                    <li className="w-[120px]">4101613916</li>
                    <li className="w-[300px]">TNHH MTV VẬN TẢI - 
THƯƠNG MẠI NGUYÊN ANH</li>
                    <li className="w-[250px]">NGUYỄN THỊ THU TÍNH</li>
                    <li className="w-[180px]">0935832582</li>
                    <li className="w-[90px]">Bình Định</li>
                </ul>
            </div>
            <hr />
            <div className="flex py-2 px-1 rounded">
                <input type="checkbox" className="w-[22px] mr-8 cursor-pointer dark:accent-zinc-500" />
                <ul className="flex dark:text-[#c4c4c4]">
                    <li className="w-[120px]">4101613867</li>
                    <li className="w-[300px]">TNHH DỊCH VỤ SỮA CHỮA 
HỒNG KHANH</li>
                    <li className="w-[250px]">NGUYỄN HỒNG KHANH</li>
                    <li className="w-[180px]">0905542639</li>
                    <li className="w-[90px]">Bình Định</li>
                </ul>
            </div>
        </div>
        <div className="flex border-2 w-[130px] h-[34px] mx-auto justify-center items-center rounded-lg cursor-pointer dark:border-[#282b30]"> 
            <BiLoaderCircle className="text-22 text-[#ccc] mr-2" />
            <div className="dark:text-[#fcfcfc]">Load more</div>
        </div>
      </div>

    </section>
    );
}

export default List;