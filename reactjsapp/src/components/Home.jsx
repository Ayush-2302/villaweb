import React, { useEffect, useState } from "react";
import VillaCard from "./VillaCard";
import { getAllVilla } from "../utils/apiSerice";
import AddingVilla from "./AddingVilla";

const Home = () => {
  const [villa, setVilla] = useState(null);

  const fetchData = async () => {
    const data = await getAllVilla();
    setVilla(data.result);
  };

  useEffect(() => {
    fetchData();
  }, []);
  console.log(villa);

  return (
    <>
      <div className="card grid grid-cols-3 gap-20 p-10">
        {villa &&
          villa.map((ele, index) => (
            <div
              key={ele.id}
              onClick={() => {
                console.log(ele.id);
              }}
            >
              <VillaCard
                id={ele.id}
                name={ele.name}
                image={ele.image}
                description={ele.description}
                price={ele.price}
                rating={ele.rating}
              />
            </div>
          ))}
      </div>

      {/* <AddingVilla/> */}
    </>
  );
};

export default Home;
