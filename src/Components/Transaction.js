import { Link } from "react-router-dom";

function Transaction({ transaction, index }) {
  // console.log(transaction, index)
  return (
    <tr className="transaction">
      <td className="item-name ctr">
        {transaction.item_name }
      </td>
      <td className="ctr">{`$${transaction.amount}`}</td>
      <td className="date justify-right">
        <Link to={`/transactions/${index}`}>{transaction.date}</Link>
      </td>
    </tr>
  );
}

export default Transaction;