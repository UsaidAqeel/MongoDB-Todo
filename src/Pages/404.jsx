import React, { useEffect } from "react";
import MyTimer from "../Components/Navbar/Timer";
  

export default function Page() {
  let arr = [{ time: new Date("12 12 2022 9:15 PM") },{ time: new Date("12 12 2022 9:10 PM") }];
  return (
    <div>
      {arr.map((val,ind) => {
        
        return (
          <React.Fragment key={ind}>
            <MyTimer
              expiryTimestamp={new Date(val.time).setHours(new Date(val.time).getHours() + 12)} />
          </React.Fragment>
        );
      })}
    </div>
  );
}
