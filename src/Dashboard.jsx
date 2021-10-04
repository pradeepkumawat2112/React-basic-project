import { useState } from "react";
import Data from "./Data";
// import MapData from './Map'

const Dash = () => {
  const [count, setCount] = useState(2);
  const handleChange = () => {
    setCount(count + 2);
  };

  //     const MapData = (value, index) => {
  //         // console.log(index)

  //         return (
  //             <>

  //                <li> id:{value.id} </li>
  //              <li>  name:{value.name} </li>
  //                <li> age:{value.age} </li>
  // <ul key={index}> </ul>
  //             </>
  //         )

  //     }

  //  const Work ="Netflix"
  //     const Work = "Amazon"
  //     if (Work === "Netflix") {
  //         return (
  //             <div className="data">
  //                 id={Data[0].id}
  //                name={Data[0].name}
  //             </div>
  //         )
  //     } else {
  //         return (
  //             <div className="data">
  //                 name={Data[1].name} <br />
  //                 age={Data[1].age}
  //             </div>

  //         )
  //     }

  // }

  return (
    <>
      <h1 style={{ color: "white" }}> this is DashBoard</h1>
      <h3 style={{ color: "skyblue" }}> {count} </h3>
      <button onClick={handleChange}>click</button>

      <div className="data">
        {Data.map((item, index) => {
          return (
            <ul key={index} className="key">
              <li>{item.id}</li>
              <li>{item.name}</li>
              <li>{item.age}</li>
            </ul>
          );
        })}
      </div>
    </>
  );
};
export default Dash;
