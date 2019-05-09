import React, { useState } from 'react';
import ViewLoans from './ViewLoans';
import CalculateLoan from './CalculateLoan';
import SecondScreen from './secondScreen';
import FourthScreen from './fourthScreen';
import SequenceController from './SequenceController';

const LoanControl = () => {
    const [amount, setAmount] = useState(1000);
    const [value, setValue] = useState('12');
    const [views, setViews] = useState('calculateLoan');

    const calculateValues = (values) => {
        const interest = values * (Number(value)/100);
        const totalPaid = values + interest;
        const cuote = totalPaid/Number(value);
        return [interest, totalPaid.toFixed(2), cuote.toFixed(2)];
    };

    const handleChange = (e) => {
        setValue(e.target.value)
    };

    const sections = [  
        {
          name: 'calculateLoan', 
          component: <CalculateLoan 
            amount={amount}
            setAmount={setAmount}    
            handleChange={handleChange}
            calculateValues={calculateValues}
            value={value}
            setViews={setViews}
          />
        },
        {
          name: 'SecondScreen',
          component: <SecondScreen 
            setViews={setViews}
          />
        },
        {
          name: 'viewLoans', 
          component: <ViewLoans
            amount={amount}
            setAmount={setAmount}
            handleChange={handleChange}
            calculateValues={calculateValues}
            value={value}
            setViews={setViews}
          />
        },
        {
          name: 'FourthScreen',
          component: <FourthScreen
          setViews={setViews}
          amount={amount}
          calculateValues={calculateValues}
          />
        },
        
    ]; 

    const renderComponents = index => (sections.map(item => item.component)[index]);
    
    return (
      <>
        <SequenceController 
          sections={sections.length}
          actualSection={sections.map(item => item.name).indexOf(views)}
        />
        {renderComponents(sections.map(item => item.name).indexOf(views))}
      </>
    );
};
export default LoanControl;