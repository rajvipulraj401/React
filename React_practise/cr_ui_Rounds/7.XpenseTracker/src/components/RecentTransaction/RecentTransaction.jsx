// import React from "react";
// import styles from "./RecentTransaction.module.css";

// const RecentTransaction = () => {
//   return (
//     <>
//       <div className={styles.transactionsContainer}>
//         <div className={styles.transactions}>No transactions!</div>
//         {/* <div className={styles.transactions}>No transactions!</div> */}
//         {/* <Transaction></Transaction> */}
//       </div>
//     </>
//   );
// };

// export default RecentTransaction;

// -----------------Do this below one again here --------------

// import React from "react";
// import styles from "./RecentTransaction.module.css";
// import TransactionCard from "../TransactionCard/TransactionCard";
// const RecentTransaction = ({ transactions }) => {
//   return (
//     <div className={styles.transactionsContainer}>
//       {transactions && transactions.length > 0 ? (
//         <div className={styles.transactions}>
//           {transactions.map((item, index) => (
//             <TransactionCard
//               key={index}
//               title={item.title}
//               date={item.date}
//               price={item.price}
//               category={item.category}
//               onEdit={() => console.log("Edit:", item.title)}
//               onDelete={() => console.log("Delete:", item.title)}
//             />
//           ))}
//         </div>
//       ) : (
//         <div className={styles.transactions}>No transactions!</div>
//       )}
//     </div>
//   );
// };

// export default RecentTransaction;

// -----------------Added pagination -----------------(DO FROM this portion again)

import React, { useState } from "react";
import styles from "./RecentTransaction.module.css";
import TransactionCard from "../TransactionCard/TransactionCard";

const ITEMS_PER_PAGE = 3;

const RecentTransaction = ({ transactions, handleDelete, handleEdit }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(transactions.length / ITEMS_PER_PAGE);

  const startIdx = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedTransactions = transactions.slice(
    startIdx,
    startIdx + ITEMS_PER_PAGE
  );

  const goToPrevious = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const goToNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  return (
    <div
      className={styles.transactionsContainer}
      style={transactions.length < 3 ? { height: "auto" } : undefined}

      // HERE i am dynamically setting the height to auto when less and undefined when more than
      // 2 as wo external stylesheet me defined hai
    >
      {transactions.length === 0 ? (
        <div className={styles.transactions}>No transactions!</div>
      ) : (
        <>
          <div className={styles.transactions}>
            {paginatedTransactions.map((item, index) => (
              <TransactionCard
                key={index}
                title={item.title}
                date={item.date}
                price={item.price}
                category={item.category}
                onEdit={handleEdit}
                onDelete={handleDelete}
              />
            ))}
          </div>

          {/* HERE IS the pagination concept WHICH I need to learn again */}

          <div className={styles.pagination}>
            <button onClick={goToPrevious} disabled={currentPage === 1}>
              ←
            </button>
            <span className={styles.pageNumber}>{currentPage}</span>
            <button onClick={goToNext} disabled={currentPage === totalPages}>
              →
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default RecentTransaction;
