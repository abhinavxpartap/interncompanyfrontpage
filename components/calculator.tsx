import { useState } from 'react';

export default function EMIForm() {
    const [principal, setPrincipal] = useState<number | ''>('');
    const [tenure, setTenure] = useState<number | ''>('');
    const [annualInterestRate, setAnnualInterestRate] = useState<number | ''>('');
    const [emi, setEMI] = useState<string>('');
    const [totalAmountPayable, setTotalAmountPayable] = useState<string>('');
    const [interestAmount, setInterestAmount] = useState<string>('');

    const calculateEMI = () => {
        if (typeof principal === 'number' && typeof tenure === 'number' && typeof annualInterestRate === 'number') {
            const monthlyInterestRate = (annualInterestRate / 12) / 100;
            const emiNumerator = principal * monthlyInterestRate * Math.pow((1 + monthlyInterestRate), tenure);
            const emiDenominator = Math.pow((1 + monthlyInterestRate), tenure) - 1;
            const emi = emiNumerator / emiDenominator;

            const totalAmountPayable = emi * tenure;
            const interestAmount = totalAmountPayable - principal;

            setEMI(emi.toFixed(2));
            setTotalAmountPayable(totalAmountPayable.toFixed(2));
            setInterestAmount(interestAmount.toFixed(2));
        }
    };

    return (
        <div>
            <h2>EMI Calculator</h2>
            <div>
                <label>Principal Loan Amount:</label>
                <input type="number" value={principal} onChange={(e) => setPrincipal(parseFloat(e.target.value))} />
            </div>
            <div>
                <label>Tenure (in months):</label>
                <input type="number" value={tenure} onChange={(e) => setTenure(parseFloat(e.target.value))} />
            </div>
            <div>
                <label>Annual Interest Rate:</label>
                <input type="number"  onChange={(e) => setAnnualInterestRate(parseFloat(e.target.value))} />
            </div>
            <button onClick={calculateEMI}>Calculate EMI</button>
            <div>
                <label>EMI:</label>

            </div>
            <div>
                <label>Total Amount Payable:</label>
                <span>{totalAmountPayable}</span>
            </div>
            <div>
                <label>Interest Amount:</label>
                <span>{interestAmount}</span>
            </div>
        </div>
    );
}
