import { useFetch } from "../hooks/useFetch";

const BankList = () => {
  let bankList = null;
  if (localStorage.getItem('bankList')) {
    bankList = JSON.parse(localStorage.getItem('bankList'));
  }
  else {
    const { data } = useFetch('https://jsonplaceholder.typicode.com/users');
    if (!data) { return null; }
    bankList = data;
    localStorage.setItem('bankList', JSON.stringify(bankList));
  }

  return <div className="container">
    <h4>Bank List:</h4>
    <ul>
      {
        bankList.map((bank) => (
          <li key={bank.id}>{bank.name}</li>
        ))
      }
    </ul>
  </div>
}

export default BankList;