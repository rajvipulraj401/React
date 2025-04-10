// import React, { useState } from "react";
// import Display from "./components/Display/Display";
// import TopExpensesCard from "./components/TopExpensesCard/TopExpensesCard";
// import IncomeModal from "./components/IncomeModal/IncomeModal";
// import ExpenseModal from "./components/ExpenseModal/ExpenseModal";
// import "./App.css";
// import RecentTransaction from "./components/RecentTransaction/RecentTransaction";
// // import { BiAlarm } from "react-icons/bi";
// import { useSnackbar } from "notistack";

// const App = () => {
//   const [isIncomeModalOpen, setIsIncomeModalOpen] = useState(false);
//   const [isExpenseModalOpen, setIsExpenseModalOpen] = useState(false);
//   const [isEditExpenseModalOpen, setIsEditExpenseModalOpen] = useState(false);
//   const [deleteItem, setDeleteItem] = useState(false);

//   const [balance, setBalance] = useState(
//     Number(localStorage.getItem("Balance")) || 5000
//   );

//   const [expense, setExpense] = useState(
//     Number(localStorage.getItem("Expense")) || 0
//   );
//   const { enqueueSnackbar } = useSnackbar();
//   // ---All hooks ---

//   // ---All funct below---

//   const pieChartData = [
//     { name: "Food", value: 100000 },
//     { name: "Entertainment", value: 20000 },
//     { name: "Travel", value: 20000 },
//     { name: "Travel", value: 40000 },
//   ];

//   const transactions = [
//     { title: "Samosa", date: "March 20, 2024", price: 150, category: "Food" },
//     {
//       title: "Movie",
//       date: "March 21, 2024",
//       price: 300,
//       category: "Entertainment",
//     },
//     { title: "Auto", date: "March 22, 2024", price: 50, category: "Travel" },
//     { title: "Bus", date: "March 25, 2024", price: 40, category: "Travel" },
//     { title: "Coffee", date: "March 23, 2024", price: 100, category: "Food" },

//     {
//       title: "Netflix",
//       date: "March 24, 2024",
//       price: 500,
//       category: "Entertainment",
//     },
//   ];

//   // All the clicks declared here

//   const handleAddBalance = (e) => {
//     e.preventDefault();
//     // console.log(e.target[0].value);
//     const newValue = Number(e.target[0].value);
//     setBalance((prev) => {
//       const updated = prev + newValue;
//       //   localStorage.setItem("Balance", balance);
//       //  The above will not work because state is not updated instantaneously
//       localStorage.setItem("Balance", updated);
//       return updated;
//     });

//     enqueueSnackbar("wallet balance Updated", {
//       variant: "success",
//       anchorOrigin: {
//         vertical: "top",
//         horizontal: "center",
//       },
//     });

//     // console.log(balance);

//     setIsIncomeModalOpen(false);
//   };

//   const handleAddExpense = (e) => {
//     // step1 : prevent the default behaviour of form

//     e.preventDefault();

//     // Step2 :- Now get all the target elements value.
//     const title = e.target[0].value;
//     const price = Number(e.target[1].value);
//     const category = e.target[2].value;
//     const date = e.target[3].value;

//     // step 3: -- if price is more handle the error using notistack
//     if (price > balance) {
//       enqueueSnackbar("Price should be less than the wallet balance", {
//         variant: "error",
//         anchorOrigin: {
//           vertical: "top",
//           horizontal: "center",
//         },
//       });
//       return;
//     }

//     // Step 4 : -- Else we put the expense value in expense state and  localstorage and update the
//     // balance state and localStorage

//     setExpense((prev) => {
//       const updatedExpense = prev + price;
//       localStorage.setItem("Expense", updatedExpense);
//       return updatedExpense;
//     });

//     setBalance((prev) => {
//       const updatedBalance = prev - price;
//       localStorage.setItem("Balance", updatedBalance);
//       return updatedBalance;
//     });

//     setIsExpenseModalOpen(false);
//   };

//   const handleDelete = () => {
//     setDeleteItem(true);
//   };

//   const handleEdit = () => {
//     setIsEditExpenseModalOpen(true);
//   };

//   const handleAddIncomeClick = () => {
//     // console.log("click hua addincome");
//     // Now on click of this button we want to open the modal
//     setIsIncomeModalOpen(true);
//   };

//   const handleAddExpenseClick = () => {
//     // console.log("click hua balance");
//     // Now on click of this button we want to open the modal
//     setIsExpenseModalOpen(true);
//   };

//   // Ab modal ko return ke andar conditionally render karo —
//   // kyunki state change ke baad hi UI me modal dikhega. AUR jo return ke andar hota hai whi ui me dikhta hai👆🏼👆🏼 👇🏼👇🏼👇🏼👇🏼👇🏼

//   return (
//     <>
//       <div className="container">
//         <div className="ExpenseTracker">
//           <h1>Expense Tracker</h1>
//           <Display
//             pieChartData={pieChartData}
//             onAddIncomeClick={handleAddIncomeClick}
//             onAddExpenseClick={handleAddExpenseClick}
//             balance={balance}
//             expense={expense}
//           ></Display>
//         </div>

//         {/* Lowe section of  Recent Transactions  and Top Expenses */}

//         <div className="recentTransactionANDtopExpenses">
//           <section className="recentTransaction">
//             <h2>Recent Transaction</h2>

//             <RecentTransaction
//               transactions={transactions}
//               handleDelete={handleDelete}
//               handleEdit={handleEdit}
//             ></RecentTransaction>
//           </section>

//           {/* Top Expenses Section */}
//           <section className="TopExpenses">
//             <h2>Top Expenses</h2>
//             <TopExpensesCard pieChartData={pieChartData}></TopExpensesCard>
//           </section>
//         </div>

//         {/* 👇🏼👇🏼👇🏼👇🏼👇🏼👇🏼👇🏼ADDED MODAL below to render it onscreen 👇🏼👇🏼👇🏼👇🏼👇🏼👇🏼👇🏼👇🏼👇🏼👇🏼👇🏼*/}

//         {/* Render Income Modal */}
//         {isIncomeModalOpen && (
//           <IncomeModal
//             onClose={() => setIsIncomeModalOpen(false)}
//             OnAddBalance={handleAddBalance}
//           />
//         )}

//         {/* Render Expense Modal */}
//         {isExpenseModalOpen && (
//           <ExpenseModal
//             name="Add Expenses"
//             onClose={() => setIsExpenseModalOpen(false)}
//             OnAddExpense={handleAddExpense}
//           />
//         )}
//         {isEditExpenseModalOpen && (
//           <ExpenseModal
//             name="Edit Expenses"
//             onClose={() => setIsEditExpenseModalOpen(false)}
//           />
//         )}

//         {/* 👆🏼👆🏼👆🏼👆🏼👆🏼👆🏼👆🏼👆🏼👆🏼 ADDED MODAL Above to render it onscreen 👆🏼👆🏼👆🏼👆🏼👆🏼👆🏼👆🏼*/}
//       </div>
//     </>
//   );
// };

// export default App;

// ------------------2nd time ................

import React, { useState } from "react";
import Display from "./components/Display/Display";
import TopExpensesCard from "./components/TopExpensesCard/TopExpensesCard";
import IncomeModal from "./components/IncomeModal/IncomeModal";
import ExpenseModal from "./components/ExpenseModal/ExpenseModal";
import "./App.css";
import RecentTransaction from "./components/RecentTransaction/RecentTransaction";
// import { BiAlarm } from "react-icons/bi";
import { useSnackbar } from "notistack";

const App = () => {
  const [isIncomeModalOpen, setIsIncomeModalOpen] = useState(false);
  const [isExpenseModalOpen, setIsExpenseModalOpen] = useState(false);
  const [isEditExpenseModalOpen, setIsEditExpenseModalOpen] = useState(false);
  const [deleteItem, setDeleteItem] = useState(false);

  const [balance, setBalance] = useState(
    Number(localStorage.getItem("Balance")) || 5000
  );

  const [expense, setExpense] = useState(
    Number(localStorage.getItem("Expense")) || 0
  );
  const { enqueueSnackbar } = useSnackbar();

  // const [transactions, setTransactions] = useState(
  //   Array(localStorage.getItem("Transactions")) || []
  // );

  // ...............👆🏼👆🏼👆🏼👆🏼👆🏼
  // Example:
  // localStorage.getItem("Transactions") = '[{"title":"Coffee","price":100}]'
  // Array(...) se bana: ["[{\"title\":\"Coffee\",\"price\":100}]"]
  // => Yeh array of string hai, not array of objects
  // => Isliye JSON.parse ya render time pe error aata tha

  // .............👇🏼👇🏼👇🏼👇🏼👇🏼
  /* note -local storage returns a string we need to convert 
  it to array by parsing it */

  const [transactions, setTransactions] = useState(() => {
    // const stored = localStorage.getItem("Transactions");
    const stored = localStorage.getItem("expenses");
    return stored ? JSON.parse(stored) : [];
  });
  const [pieChartData, setPieChartData] = useState(() => {
    const stored = localStorage.getItem("PieChartData");
    return stored ? JSON.parse(stored) : [];
  });

  // const [pieChartData, setPieChartData] = useState([]);
  // ---All hooks ---

  // ---All funct below---

  // const pieChartData = [
  //   { name: "Food", value: 100000 },
  //   { name: "Entertainment", value: 20000 },
  //   { name: "Travel", value: 20000 },
  //   { name: "Travel", value: 40000 },
  // ];

  // const transactions = [
  //   { title: "Samosa", date: "March 20, 2024", price: 150, category: "Food" },
  //   {
  //     title: "Movie",
  //     date: "March 21, 2024",
  //     price: 300,
  //     category: "Entertainment",
  //   },
  //   { title: "Auto", date: "March 22, 2024", price: 50, category: "Travel" },
  //   { title: "Bus", date: "March 25, 2024", price: 40, category: "Travel" },
  //   { title: "Coffee", date: "March 23, 2024", price: 100, category: "Food" },
  //   {
  //     title: "Netflix",
  //     date: "March 24, 2024",
  //     price: 500,
  //     category: "Entertainment",
  //   },
  // ];

  // All the clicks declared here

  const handleAddBalance = (e) => {
    e.preventDefault();
    // console.log(e.target[0].value);
    const newValue = Number(e.target[0].value);
    setBalance((prev) => {
      const updated = prev + newValue;
      //   localStorage.setItem("Balance", balance);
      //  The above will not work because state is not updated instantaneously
      localStorage.setItem("Balance", updated);
      return updated;
    });

    enqueueSnackbar("wallet balance Updated", {
      variant: "success",
      anchorOrigin: {
        vertical: "top",
        horizontal: "center",
      },
    });

    // console.log(balance);

    setIsIncomeModalOpen(false);
  };

  const handleAddExpense = (e) => {
    // step1 : prevent the default behaviour of form

    e.preventDefault();

    // Step2 :- Now get all the target elements value.
    const title = e.target[0].value;
    const price = Number(e.target[1].value);
    const category = e.target[2].value;
    const date = e.target[3].value;

    // step 3: -- if price is more handle the error using notistack
    if (price > balance) {
      enqueueSnackbar("Price should be less than the wallet balance", {
        variant: "error",
        anchorOrigin: {
          vertical: "top",
          horizontal: "center",
        },
      });
      return;
    }

    // Step 4 : -- Else we put the expense value in expense state and  localstorage and update the
    // balance state and localStorage

    setExpense((prev) => {
      const updatedExpense = prev + price;
      localStorage.setItem("Expense", updatedExpense);
      return updatedExpense;
    });

    setBalance((prev) => {
      const updatedBalance = prev - price;
      localStorage.setItem("Balance", updatedBalance);
      return updatedBalance;
    });

    setIsExpenseModalOpen(false);

    // Step 5: Now we will update the Transaction state value with the new Expense

    setTransactions((prev) => {
      // return [
      //   ...prev,
      //   // {
      //   //   title: title,
      //   //   date: date,
      //   //   price: price,
      //   //   category: category,
      //   // },
      //   // NOTE -- FROM ES6 when key and value are same we can even write just like
      //   // below one.......
      //   {
      //     title,
      //     date,
      //     price,
      //     category,
      //   },
      // ];
      const updatedTransactions = [
        ...prev,
        {
          title,
          date,
          price,
          category,
        },
      ];
      // we update the transactions added in local storage and then returned it
      // localStorage.setItem("Transactions", updatedTransactions);

      localStorage.setItem("expenses", JSON.stringify(updatedTransactions));
      // WE need to do this beause localStorage store in form of string thats why
      // first we need to stringify if to convert it to string and store it

      // Step 6: -- Now we will update the pieChartData from the new Expense we got

      // Step 1: unique categories collect karo
      const categories = [
        ...new Set(updatedTransactions.map((txn) => txn.category)),
      ];

      // Step 2: har category ke liye filter aur total value calculate karo
      const pieData = categories.map((category) => {
        const total = updatedTransactions
          .filter((txn) => txn.category === category)
          .reduce((acc, curr) => acc + Number(curr.price), 0); // price ko number bana lo safety ke liye

        return {
          name: category,
          value: total,
        };
      });
      // step3 : Save to localStorage also:
      localStorage.setItem("PieChartData", JSON.stringify(pieData));
      setPieChartData(pieData);
      // return pieData;

      return updatedTransactions;
    });
  };

  // --
  const handleDelete = () => {
    setDeleteItem(true);
  };

  const handleEdit = () => {
    // console.log(event);
    setIsEditExpenseModalOpen(true);
  };

  const handleAddIncomeClick = () => {
    // console.log("click hua addincome");
    // Now on click of this button we want to open the modal
    setIsIncomeModalOpen(true);
  };

  const handleAddExpenseClick = () => {
    // console.log("click hua balance");
    // Now on click of this button we want to open the modal
    setIsExpenseModalOpen(true);
  };

  // Ab modal ko return ke andar conditionally render karo —
  // kyunki state change ke baad hi UI me modal dikhega. AUR jo return ke andar hota hai whi ui me dikhta hai👆🏼👆🏼 👇🏼👇🏼👇🏼👇🏼👇🏼

  return (
    <>
      <div className="container">
        <div className="ExpenseTracker">
          <h1>Expense Tracker</h1>
          <Display
            pieChartData={pieChartData}
            onAddIncomeClick={handleAddIncomeClick}
            onAddExpenseClick={handleAddExpenseClick}
            balance={balance}
            expense={expense}
          ></Display>
        </div>

        {/* Lowe section of  Recent Transactions  and Top Expenses */}

        <div className="recentTransactionANDtopExpenses">
          <section className="recentTransaction">
            <h2>Recent Transactions</h2>

            <RecentTransaction
              transactions={transactions}
              handleDelete={handleDelete}
              handleEdit={handleEdit}
            ></RecentTransaction>
          </section>

          {/* Top Expenses Section */}
          <section className="TopExpenses">
            <h2>Top Expenses</h2>
            <TopExpensesCard pieChartData={pieChartData}></TopExpensesCard>
          </section>
        </div>

        {/* 👇🏼👇🏼👇🏼👇🏼👇🏼👇🏼👇🏼ADDED MODAL below to render it onscreen 👇🏼👇🏼👇🏼👇🏼👇🏼👇🏼👇🏼👇🏼👇🏼👇🏼👇🏼*/}

        {/* Render Income Modal */}
        {isIncomeModalOpen && (
          <IncomeModal
            onClose={() => setIsIncomeModalOpen(false)}
            OnAddBalance={handleAddBalance}
          />
        )}

        {/* Render Expense Modal */}
        {isExpenseModalOpen && (
          <ExpenseModal
            name="Add Expenses"
            onClose={() => setIsExpenseModalOpen(false)}
            onAddExpense={handleAddExpense}
          />
        )}
        {isEditExpenseModalOpen && (
          <ExpenseModal
            name="Edit Expenses"
            onClose={() => setIsEditExpenseModalOpen(false)}
            onAddExpense={handleAddExpense}
          />
        )}

        {/* 👆🏼👆🏼👆🏼👆🏼👆🏼👆🏼👆🏼👆🏼👆🏼 ADDED MODAL Above to render it onscreen 👆🏼👆🏼👆🏼👆🏼👆🏼👆🏼👆🏼*/}
      </div>
    </>
  );
};

export default App;
