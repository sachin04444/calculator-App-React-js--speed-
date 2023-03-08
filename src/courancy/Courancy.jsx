import React, { useState } from 'react'


const Courancy = () => {
    const [value, setValue] = useState()

  const curancy1 =()=>{

  }


    return (
        <div>
            <div>

                2000: <input
                    
                    onChange={e => setValue(e.target.value)}
                    placeholder="Number"

                />
            </div>
            <div>
                500: <input
                
                    onChange={e => setValue(e.target.value)}
                    placeholder="Number"
                />
            </div>
            <div>
                200: <input
                    onChange={e => setValue(e.target.value)}
                    placeholder="Number"
                />
            </div>
            <div>
                100: <input
                    onChange={e => setValue(e.target.value)}
                    placeholder="Number"
                />
            </div>
            <div>
                50: <input
                    onChange={e => setValue(e.target.value)}
                    placeholder="Number"
                />
            </div>
            <div>
                20: <input
                    onChange={e => setValue(e.target.value)}
                    placeholder="Number"
                />
            </div>
            <div>
                10: <input
                    onChange={e => setValue(e.target.value)}
                    placeholder="Number"
                />
            </div>
            <div>
                Extra: <input
                    onChange={e => setValue(e.target.value)}
                    placeholder="Number"
                />
            </div>
            <div>
                <h1>{value}</h1>
            </div>
        </div>
    )
}

export default Courancy
