import React, { useEffect } from "react";
import { Button } from "@mui/material";
import "../styles.css";
import data from '../data.json'

const Dashboard = () => {
  
  const [data, setData] = useState({});

  useEffect(() => {
    setData(data);
  }, []);

  

  return (
    <body className="flex overflow-auto">
      <div class="top-bar-start">
        <div class="top-bar-start" text-align="center">
          F.P.I. Financial Private Investigator
        </div>
      </div>
      <div class="flex h-screen w-full flex-col items-center justify-center p-4 dark:bg-slate-900">
        <div class="grid grid-cols-3 grid-rows-6 gap-4 w-full h-full">
          <div class="col-span-2 row-span-3 rounded-3xl bg-white">Item 1</div>
          <div class="row-span-4 rounded-3xl bg-white">Item 2</div>
          <div class="row-span-3 rounded-3xl bg-white">Item 3</div>
          <div class="row-span-3 rounded-3xl bg-white">Item 4</div>
          <div class="row-span-2 rounded-3xl bg-white">Item 5</div>
        </div>
      </div>

      <div class="bottom-bar-start">
        Contact Email: basicemail@gmail.com | Phone Number: 1234567890 |
        Address: 800 W Cambell Road 75800
      </div>
    </body>
  );
};
export default Dashboard;
