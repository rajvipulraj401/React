// import React from "react";
// import styles from "./TopExpensesCard.module.css";

// const TopExpensesCard = ({ pieChartData }) => {
//   // So we get array of objects

//   // console.log(pieChartData);

//   const total = pieChartData.reduce((acc, item) => acc + item.value, 0);

//   return (
//     <div className={styles.TopExpensesCard}>
//       {/* Left Side */}
//       <div className={styles.left}>
//         {pieChartData.map((curr, i) => {
//           return <div key={i}> {curr.name}</div>;
//         })}
//         {/*
//         <div>Food</div>
//         <div>Entertainment</div>
//         <div>Travel</div> */}
//       </div>

//       {/* Right Side */}
//       <div className={styles.right}>
//         {pieChartData.map((curr, i) => {
//           // Now we need to convert each value  into the %width using the total we calculated outside
//           const percent =
//             total === 0 ? 0 : Math.floor((curr.value / total) * 100);

//           return (
//             <div
//               key={i}
//               // className={styles.bar}
//               className={`${styles.bar} ${styles["bar" + i]}`} // Dynamically creating another className
//               style={{ width: `${percent}%` }}
//             ></div>
//           );
//         })}

//         {/* <div className={styles.bar1} style={{ width: "60%" }}></div> */}

//         {/* <div className={styles.bar2} style={{ width: "30%" }}></div>
//         <div className={styles.bar3} style={{ width: "10%" }}></div> */}
//       </div>
//     </div>
//   );
// };

// export default TopExpensesCard;

// -------------------USING rechart to create Graph 👇🏼👇🏼👇🏼👇🏼👇🏼👇🏼👇🏼👇🏼👇🏼👇🏼👇🏼👇🏼👇🏼👇🏼👇🏼👇🏼-------------

/* 
  NOTE - Bhai, isme jo data dega, wahi dikhega.
  Toh agar sirf 3 type ke bars chahiye (like Food, Travel, etc.),
  toh pehle data ko merge karle, fir yahan array of 3 objects bhej.
*/

import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";

import styles from "./TopExpensesCard.module.css";

const COLORS = [
  "#A000FF", // bar0 and default
  "#FF9304", // bar1
  "#FDE006", // bar2
];

const TopExpensesCard = ({ pieChartData }) => {
  // const total = pieChartData.reduce((acc, item) => acc + item.value, 0);

  return (
    <div className={styles.TopExpensesCard}>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          data={pieChartData}
          layout="vertical"
          margin={{ top: 20, right: 30, left: 30, bottom: 0 }}
          barCategoryGap={20}
          // Below is to give size of bars and above is to give spacebetween

          barSize={30}
        >
          <XAxis
            type="number"
            hide

            /*
              'hide' property se X-axis ki line aur tick (bs ek neeche line cordinate numbering likhne wala yaar)
              dono chhup jaate hain.
              Isliye neeche 'axisLine' aur 'tick' set karne ki zarurat nahi padti.
              (Warna yeh properties axis line aur ticks ko individually control karti.)
            */

            // axisLine={false}
            // tick={false}
          />
          <YAxis
            type="category"
            dataKey="name"
            width={100}
            tick={{ fontSize: 14 }}
            /* The below one is to give line 
             arrey bhai jab cordinate likhte hai toh wo x axis aur y axis pe 
            line khechte hai na whihai ye
            */

            /*
              'axisLine={false}' ka matlab hai Y-axis ke along line draw nahi hogi.
              Agar tumhe coordinate axis jaisi line nahi chahiye toh ise false hi rakho.
            */
            axisLine={false}
          />
          <Tooltip />

          {/* 
            Bar Component:
            - dataKey="value" →
              Agar maine ek array of objects diya hai (jaise pieChartData),
              jisme har object ke andar 'value' key hai (jisme koi number hota hai),
              toh Recharts khud hi loop karega us array pe,
              aur 'value' ke number ke hisaab se bar ka size set karega.
              Mujhe manually .map() ya ["value"] likhne ki zarurat nahi hoti.
              
            - radius={[0, 20, 20, 0]} →
              Bar ke corners ko round karta hai.
              Is case me: top-right aur bottom-right corners ko 20px round kiya gaya hai,
              kyunki bar left se start hoke right ki taraf grow (jaa rha hai) kar raha hai.
          */}

          <Bar dataKey="value" radius={[0, 20, 20, 0]}>
            {/* 
              Cell component har ek bar ke liye alag color set karta hai.
              - COLORS[index % COLORS.length] → isse agar 3 colors hain aur data 5 items ka hai,
                toh colors repeat ho jaate hain safely.
            */}
            {pieChartData.map((entry, index) => (
              <Cell
                key={`cell-${index}`} // unique key for React rendering
                fill={COLORS[index % COLORS.length]} // dynamic color assignment
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TopExpensesCard;
