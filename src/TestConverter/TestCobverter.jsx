import React, { useState ,useEffect} from 'react'
import ConrancyInput from './ConrancyInput'
import "./currancy.css"

const TestCobverter = ({intialvalue , jsonfile , Totalunit ,heading}) => {
    const [amount1, setAmount1] = useState(1)
    const [amount2, setAmount2] = useState(1)
    const [currency1, setCurrency1] = useState(intialvalue)
    const [currency2, setCurrency2] = useState(intialvalue)
    const [ratess, setRatess] = useState([])
    
    
    const jsoonfatch=()=>{
        try {
            const  Areaconverter =jsonfile
            const {rates} = Areaconverter && Areaconverter.find(({ input1, value2 }) => input1 === currency1 && value2 === currency2)
            setRatess(rates)
        } catch (error) {
            console.log(error)
        } 
    }

  useEffect(()=>{
    jsoonfatch()
  })

    function format(number) {
        return number.toFixed(2)
    }

    function handleAmountchange(amount1) {
       
        setAmount2(format(amount1 * ratess))
        setAmount1(amount1)
    }

    function handleAmountchange2(amount2) {
       
        setAmount1(format(amount2 / ratess))
        setAmount2(amount2)
    }

    return (
        <div>
            <div className="total-box">
                <h1 className='unitheding'>{heading} :</h1>
                <ConrancyInput Totalunit={Totalunit} amount={amount1} currency={currency1} onAmountChange={handleAmountchange} onCurrancyChange={setCurrency1} />
                <ConrancyInput Totalunit={Totalunit} amount={amount2} currency={currency2} onAmountChange={handleAmountchange2} onCurrancyChange={setCurrency2} />
            </div>
        </div>
    )
}

export default TestCobverter
