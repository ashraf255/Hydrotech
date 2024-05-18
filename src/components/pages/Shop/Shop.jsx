// import React, { useEffect, useState } from "react";
// // import { useLoaderData } from 'react-router-dom'
// import Shopcard from "./Shopcard";

// const Shop = () => {
//   const [shopData, setShopData] = useState([]);
//   useEffect(function () {
//     (async function () {
//       const response = await fetch("/data.json");
//       const result = await response.json();
//       const data = await result;
//       setShopData(data.shops);
//     })();
//   }, []);
//   return (
//     <div className="mx-auto grid grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
//       {shopData?.map((item, idx) => (
//         <Shopcard item={item} key={idx}></Shopcard>
//       ))}
//     </div>
//   );
// };

// export default Shop;
