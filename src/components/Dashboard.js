import React, { useEffect } from "react";
import { BsChevronDown } from "react-icons/bs";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { RiShoppingBasket2Line } from "react-icons/ri";
import { AiOutlineApi } from "react-icons/ai";
import { AiFillInfoCircle } from "react-icons/ai";
import status from "../assets/img/status.png";
import Chart from 'react-apexcharts'

function Dashboard() {
  return (
    <section className="absolute right-0 w-4/5 top-[80px] pl-10 pr-20 dark:bg-[#111315]">
      <p className="font-semibold text-36 mt-6 dark:text-[#fff]">Dashboard</p>
      <div className="bg-[#fff] pt-6 px-6 h-[555px] dark:bg-[#1c1c1f]">
        <div className="flex justify-between">
          <div className="flex items-center">
            <div className="h-[26px] w-[10px] bg-[#f4bf9e] rounded-sm mr-3"></div>
            <div className="font-semibold text-20 dark:text-[#fff]">Overview</div>
          </div>
          <div className="flex cursor-pointer items-center w-[100px] py-1 justify-evenly bg-[#fff] border-2 rounded-xl font-semibold text-14 dark:bg-[#1c1c1f] dark:border-[#282b2f] dark:text-[#6d7379]">
            All time
            <BsChevronDown className="text-[#70767d]" />
          </div>
        </div>

        <div className="flex bg-[#f4f4f4] mt-5 justify-evenly py-3 dark:bg-[#161819]">
          <div className="flex bg-[#fff] rounded-xl w-[340px] py-2 pl-5 shadow-bsd cursor-pointer dark:bg-[#272b2f]">
            <HiOutlineShoppingBag className="text-32 py-1 px-1 rounded-full bg-[#bce3f9] mr-7 mt-2" />
            <div>
              <div className="flex text-13 text-[#70757e]">
                New Customers
                <AiFillInfoCircle className="text-[#9b9ea4] ml-1 mt-1" />
              </div>
              <div className="font-bold text-36 -mt-2">5310</div>
            </div>
          </div>
          <div className="flex hover:bg-[#fff] rounded-xl w-[340px] py-2 pl-5 hover:shadow-bsd cursor-pointer dark:hover:bg-[#272b2f]">
            <AiOutlineApi className="text-32 py-1 px-1 rounded-full bg-[#c8bcf9] mr-7 mt-2" />
            <div>
              <div className="flex text-13 text-[#70757e]">
                Successed
                <AiFillInfoCircle className="text-[#9b9ea4] ml-1 mt-1" />
              </div>
              <div className="font-bold text-36 -mt-2">1310</div>
            </div>
          </div>
          <div className="flex hover:bg-[#fff] rounded-xl w-[340px] py-2 pl-5 hover:shadow-bsd cursor-pointer dark:hover:bg-[#272b2f]">
            <RiShoppingBasket2Line className="text-32 py-1 px-1 rounded-full bg-[#ffe6e3] text-[#fe6b56] mr-7 mt-2" />
            <div>
              <div className="flex text-13 text-[#70757e]">
                Failed
                <AiFillInfoCircle className="text-[#9b9ea4] ml-1 mt-1" />
              </div>
              <div className="font-bold text-36 -mt-2">2172</div>
            </div>
          </div>
        </div>

        <div className="flex bg-[#f4f4f4] py-4 px-3 mt-6 dark:bg-[#282b30]">
          <div className="bg-[#fff] py-3 px-3 dark:bg-[#1b1d1f]">
            <div className="flex mb-3">
              <div className="h-[20px] w-[8px] bg-[#c8bdfa] rounded-sm mr-2 "></div>
              <div className="font-semibold dark:text-[#fff]">Top locations</div>
            </div>
            <div className="flex">
              <ul className="text-13 text-[#a7abaf]">
                <li className="py-1">Ho Chi Minh city</li>
                <li className="py-1">Hanoi city</li>
                <li className="py-1">Da Nang city</li>
                <li className="py-1">Binh Dinh</li>
                <li className="py-1">Can Tho</li>
                <li className="py-1">Hai Phong</li>
              </ul>
              <div className="ml-2 -mt-1 pr-12 ">
                <hr className=" mb-1 dark:opacity-10"/>
                <div className="w-[370px] h-5 bg-[#c8e7d3]"></div>
                <hr className=" mt-1 dark:opacity-10"/>
                <div className="w-[320px] h-5 bg-[#c8e7d3] mt-1"></div>
                <hr className=" mt-1 dark:opacity-10"/>
                <div className="w-[270px] h-5 bg-[#b8d3c1] mt-1"></div>
                <hr className=" mt-1 dark:opacity-10"/>
                <div className="w-[200px] h-5 bg-[#c8e7d3] mt-1"></div>
                <hr className=" mt-1 dark:opacity-10"/>
                <div className="w-[150px] h-5 bg-[#c8e7d3] mt-1"></div>
                <hr className=" mt-1 dark:opacity-10"/>
                <div className="w-[100px] h-5 bg-[#c8e7d3] mt-1"></div>
                <hr className=" mt-1 dark:opacity-10"/>
                <div className="flex dark:text-[#6e7174]">
                    <p className="mr-[80px]">0</p>
                    <p className="mr-[80px]">500</p>
                    <p className="mr-[80px]">1000</p>
                    <p className="mr-[80px]">1500</p>
                    <p className="">2000</p>
                </div>
              </div>
            </div>
          </div>

          <div className="ml-4 bg-[#fff] w-[350px] py-3 px-9 dark:bg-[#1b1d1f]">
            <div className="flex">
              <div className="h-[20px] w-[8px] bg-[#c8bdfa] rounded-sm mr-2 "></div>
              <div className="font-semibold dark:text-[#fff]">Status</div>
            </div>

         <Chart className="mt-3 ml-12 overflow-x-hidden" type="donut"
         width={330}
         height={200}
         series={[1310,2172]}
         options={{
            labels:['Successed','Failed'],
            colors:['#bfe3cc','#c8bdfa'],
            plotOptions:{
                pie:{
                    expandOnClick: false,
                    donut:{
                        size:"80px"
                    }
                },
                
            },
            dataLabels:{
                enabled:false,
            }
            
         }}
         />
            
            <div className="flex justify-between">
              <div className="flex items-center">
                <div className="h-[12px] w-[12px] bg-[#bee2cc] rounded-sm mr-1"></div>
                <div className="text-13 dark:text-[#a7abaf]">Successed</div>
              </div>
              <div className="flex items-center">
                <div className="h-[12px] w-[12px] bg-[#c8bdfa] rounded-sm mr-1"></div>
                <div className="text-13 dark:text-[#a7abaf]">Failed</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Dashboard;
