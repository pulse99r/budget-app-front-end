import { useState, useEffect } from "react";
import Transaction from "./Transaction"
import axios from "axios";
import "./Transactions.css"

const API = process.env.REACT_APP_API_URL;
// console.log(API)

function Transactions() {
  const [transactions, setTransactions] = useState([]);
  console.log(API)
  
  useEffect(() => {
    axios
      .get(`${API}/transactions`)
      .then((response) => setTransactions(response.data))
      .catch((c) => console.warn("catch", c));
  }, []);

  return (
    <div className="transactions">
      <section>
        <table>
          <thead>
            <tr>
              <th>Item Name</th>
              <th>Date</th>
              <th>See this Transaction</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction, index) => {
              return <Transaction key={index} transaction={transaction} index={index} />;
            })}
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default Transactions;
