import React, { useState } from 'react';
import ViewLoans from './ViewLoans';
import CalculateLoan from './CalculateLoan';
import SecondScreen from './secondScreen';
import FourthScreen from './fourthScreen';
import FifthScreen from './fifthScreen';
import SequenceController from './SequenceController';
import Header from '../layout/Header.jsx';

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
          text: 'Calcula tu préstamo',
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
          text: 'Ingresa tus datos', 
          component: <SecondScreen 
            setViews={setViews}
          />
        },
        {
          name: 'viewLoans', 
          text: 'Compara préstamos', 
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
          text: 'Solicita tu préstamo', 
          component: <FourthScreen
          setViews={setViews}
          amount={amount}
          calculateValues={calculateValues}
          />
        },
        {
          name: 'FifthScreen',
          text: 'Recibe tu préstamo', 
          component: <FifthScreen
          />
        }      
    ]; 

    const renderComponents = index => (sections.map(item => item.component)[index]);
    
    return (
      <>
        <Header />
        <SequenceController 
          sections={sections.length}
          actualSection={sections.map(item => item.name).indexOf(views)}
          text={sections.map(item => item.text)}  
        />
        {renderComponents(sections.map(item => item.name).indexOf(views))}
      </>
    );
};
export default LoanControl;