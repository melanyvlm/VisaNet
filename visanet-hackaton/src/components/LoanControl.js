import React, { useState } from 'react';
import ViewLoans from './ViewLoans';
import CalculateLoan from './CalculateLoan';

const LoanControl = () => {
    const [amount, setAmount] = useState(1000);
    const [value, setValue] = useState('12');
    const [views, setViews] = useState('calculateLoan');
    const [options, setOptions] = useState(false )

    const calculateValues = (values) => {
        const interest = values * (Number(value)/100);
        const totalPaid = values + interest;
        const cuote = totalPaid/Number(value);
        return [interest, totalPaid.toFixed(2), cuote.toFixed(2)];
    };

    const handleChange = (e) => {
        setValue(e.target.value)
    };

    switch (views) {
      case 'calculateLoan':
        return <CalculateLoan 
          amount={amount}
          setAmount={setAmount}    
          handleChange={handleChange}
          calculateValues={calculateValues}
          value={value}
          setViews={setViews}
        />
      case 'viewLoans':
        return <ViewLoans 
          amount={amount}
          setAmount={setAmount}
          handleChange={handleChange}
          calculateValues={calculateValues}
          value={value}
          setViews={setViews}
        />     
        default:
          return <CalculateLoan />
        }
};
export default LoanControl;