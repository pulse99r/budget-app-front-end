import { useState, useEffect } from "react";
import Transaction from "./Transaction"
import axios from "axios";
import "./Transactions.css"
import {useParams} from "react-router-dom"

const API = process.env.REACT_APP_API_URL;
// console.log(API)

function Transactions() {
  const [transaction, setTransaction] = useState([]);
  //console.log(API)
  
  let {index} = useParams();
  console.log("useParams",useParams())
  useEffect(() => {
    axios
      .get(`${API}/transactions/${index}`)
      .then((response) => setTransaction(response.data))
      .catch((c) => console.warn("catch", c));
  }, []);
  
  console.log("Transaction:", transaction)

  return (
    <div className="transaction">
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
            
              <Transaction key={index} transaction={transaction} index={index} />;
            
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default Transactions;
