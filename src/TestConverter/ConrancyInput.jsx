import React from 'react'
import Proptype from "prop-types"

const ConrancyInput = ({amount, onAmountChange ,onCurrancyChange ,currency ,Totalunit}) => {
    
  return (
    < >
      <div className='input-currancy'>
        <input type="text"  value={amount} onChange={e=>onAmountChange(e.target.value)}/>
        <select value={currency} onChange={e=>onCurrancyChange(e.target.value)}>
            {
              Totalunit && Totalunit.map(currency=>{
                    return(
                        <option key={currency} value={currency}>{currency}</option>
                    )
                })
            }
        </select>
      </div>
    </>
  )
}

ConrancyInput.prototype ={
    amount : Proptype.number.isRequired,
    currancy :Proptype.string.isRequired,
    currancies :Proptype.array

}

export default ConrancyInput
