import React from "react";
import List from "./List";

function Data() {
  let dataArray = [
    {
      id: 1,
      image: './images/1.jpg',
      name: "islamabad best Place Tour Of 7 Days",
      price: "$ 500",
      para: `Traveling is an extraordinary experience that 
                   opens our minds to new cultures, landscapes, and adventures. 
                   It ignites a sense of wanderlust, propelling us to explore the world,
                    connect with diverse communities, and create lasting memories. Whether
                     its indulging in local cuisines, marveling at breathtaking landmarks, or
                      immersing ourselves in vibrant traditions, traveling enriches our souls and 
                      broadens our perspectives. It allows us to break free from routine, embrace spontaneity,
                       and discover the beauty that exists beyond our comfort zones. From sun`,
    },

    {
        id: 2,
        image: './images/2.jpg',
        name: "Peshawar best Place Tour Of 7 Days",
        price: "$ 300",
        para: `Traveling is an extraordinary experience that 
                     opens our minds to new cultures, landscapes, and adventures. 
                     It ignites a sense of wanderlust, propelling us to explore the world,
                      connect with diverse communities, and create lasting memories. Whether
                       its indulging in local cuisines, marveling at breathtaking landmarks, or
                        immersing ourselves in vibrant traditions, traveling enriches our souls and 
                        broadens our perspectives. It allows us to break free from routine, embrace spontaneity,
                         and discover the beauty that exists beyond our comfort zones. From sun`,
      },
      {
        id: 3,
        image: './images/3.jpg',
        name: "Karachi best Place Tour Of 7 Days",
        price: "$ 600",
        para: `Traveling is an extraordinary experience that 
                     opens our minds to new cultures, landscapes, and adventures. 
                     It ignites a sense of wanderlust, propelling us to explore the world,
                      connect with diverse communities, and create lasting memories. Whether
                       its indulging in local cuisines, marveling at breathtaking landmarks, or
                        immersing ourselves in vibrant traditions, traveling enriches our souls and 
                        broadens our perspectives. It allows us to break free from routine, embrace spontaneity,
                         and discover the beauty that exists beyond our comfort zones. From sun`,
      },

      {
        id: 4,
        image: './images/4.jpg',
        name: "Queeta best Place Tour Of 7 Days",
        price: "$ 500",
        para: `Traveling is an extraordinary experience that 
                     opens our minds to new cultures, landscapes, and adventures. 
                     It ignites a sense of wanderlust, propelling us to explore the world,
                      connect with diverse communities, and create lasting memories. Whether
                       its indulging in local cuisines, marveling at breathtaking landmarks, or
                        immersing ourselves in vibrant traditions, traveling enriches our souls and 
                        broadens our perspectives. It allows us to break free from routine, embrace spontaneity,
                         and discover the beauty that exists beyond our comfort zones. From sun`,
      },

      {
        id: 5,
        image: './images/5.jpg',
        name: "Lahore best Place Tour Of 7 Days",
        price: "$ 800",
        para: `Traveling is an extraordinary experience that 
                     opens our minds to new cultures, landscapes, and adventures. 
                     It ignites a sense of wanderlust, propelling us to explore the world,
                      connect with diverse communities, and create lasting memories. Whether
                       its indulging in local cuisines, marveling at breathtaking landmarks, or
                        immersing ourselves in vibrant traditions, traveling enriches our souls and 
                        broadens our perspectives. It allows us to break free from routine, embrace spontaneity,
                         and discover the beauty that exists beyond our comfort zones. From sun`,
      },

      {
        id: 6,
        image: './images/6.jpg',
        name: "Multan best Place Tour Of 7 Days",
        price: "$ 500",
        para: `Traveling is an extraordinary experience that 
                     opens our minds to new cultures, landscapes, and adventures. 
                     It ignites a sense of wanderlust, propelling us to explore the world,
                      connect with diverse communities, and create lasting memories. Whether
                       its indulging in local cuisines, marveling at breathtaking landmarks, or
                        immersing ourselves in vibrant traditions, traveling enriches our souls and 
                        broadens our perspectives. It allows us to break free from routine, embrace spontaneity,
                         and discover the beauty that exists beyond our comfort zones. From sun`,
      }
  ];

  return (
  <div>
    <List data={dataArray}/>
  </div>
  );
}

export default Data;
