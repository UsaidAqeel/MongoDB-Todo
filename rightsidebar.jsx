import React, { useState } from "react";

const RightBar = () => {
  const [btn, setbtn] = useState(false);
  const [array, setarray] = useState([0, 1]);

  return (
    <>
      <button onClick={() => setbtn(true)} className>
        click
      </button>
      <div
        className={` ${
          btn ? "bg-white w-full" : "w-0"
        }   bg-opacity-10 h-full absolute left-0 right-0 overflow-hidden top-0`}
      >
        <div
          className={`${
            btn ? "w-3/6" : "w-0" 
          }   p-4 bg-white  absolute right-0  top-0 h-full custom`}
        >
          <div className="flex justify-between my-2 items-center">
            <p className="font-bold">Create new invoice</p>
            <svg
              onClick={() => setbtn(false)}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"
              /> 
            </svg>
          </div>
          <h1 className="font-bold lg:text-xl md:text-md sm:text-sm my-3">
            #AL43400
          </h1>
          <form className="my-2 w-full">
            <div className="bg-blue-50 text-gray-700  p-2 border-blue-300 mb-3 rounded-md border">
              <label className="text-xs font-bold">Recipient Email</label>
              <input
                type="text"
                className="w-full border outline-none p-2 text-xs my-2"
                placeholder="Enter Email"
              />
            </div>
            <div>
              <label className="text-xs text-gray-500 font-bold">
                Project/Description
              </label>
              <input
                type="text"
                className="w-full border outline-none p-2 text-xs my-2"
                placeholder="Description"
              />
            </div>
            <div>
              <label className="text-xs text-gray-500 font-bold">Date</label>
              <input
                type="date"
                className="w-full border outline-none p-2 text-xs my-2"
                placeholder="Description"
              />
            </div>
            <div className="w-full my-4">
              <div className="grid grid-cols-5 gap-4">
                <span className="text-xs col-span-2   text-gray-500 font-bold">
                  Item
                </span>
                <span className="text-xs  text-gray-500 font-bold">Qty</span>
                <span className="text-xs  text-gray-500 font-bold">Price</span>
                <span className="text-xs text-gray-500 font-bold">
                  Total Price
                </span>
                {array.map((val) => {
                  return (
                    <>
                      <input
                        type="text"
                        className="w-full col-span-2 border outline-none p-2 text-xs my-1"
                        placeholder="Enter Email"
                      />
                      <input
                        type="number"
                        className="w-full border outline-none p-2 text-xs my-1"
                        placeholder="Enter Email"
                      />{" "}
                      <input
                        type="number"
                        className="w-full border outline-none p-2 text-xs my-1"
                        placeholder="Enter Email"
                      />{" "}
                      <p className="w-full border outline-none p-2 text-xs my-1">
                        $0
                      </p>
                    </>
                  );
                })}
              </div>
              <button onClick={()  => setarray(old => [...old,array.length])} className="text-blue-400 text-sm bg-transparent outline-none bottom-0 my-3">+add item</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default RightBar;
