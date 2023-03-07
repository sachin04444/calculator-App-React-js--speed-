import React, { useEffect, useState } from 'react'
import InputColor from 'react-input-color';
import "./mstring.css"



const Mstring = () => {
    // for changing input replace
    const [replcetext1, setReplcetext1] = useState()
    const [replcetext2, setReplcetext2] = useState()
    // for style font
    


    const [values, setValues] = useState("");
    const [change, setChange] = useState('')
    const [FFamily, setfamily] = useState()
    const [cchange, setCchange] = useState({})
    const [fcsize, setFcsize] = useState(10)
    const [lengthcount, setLengthcount] = useState(0)
    const [wordcount, setWordcount] = useState(0)
    const [bgcolor, setBgcolor] = useState({})


    // style




    // style
    const fontt = ['Arial', 'red serifs', 'Sans-serif', 'Bahnschrift Light', 'Garamond', 'Calibri Light', 'Calibri', 'Algerian', 'Georgia', 'CommercialScript BT', 'Lucida Handwriting', 'Vineta BT', 'Berlin Sans FB Demi', 'Chiller', 'Cursive', 'Fantasy', 'Monospace']
    




    const employeeList = [
        { valueone: 'UpperCase', clickevent: values.toUpperCase(), clickevent1: 'values.toUpperCase()' },
        { valueone: 'LowerCase', clickevent: values.toLowerCase(), clickevent1: 'values.toLowerCase()' },
        { valueone: 'Remove Extra space', clickevent: values.trim(), clickevent1: 'values.trim()' },

    ];

    useEffect(() => {
        setChange(values)
        setLengthcount(values.replace(/[^a-z]/gi, "").toLowerCase().length)
        setWordcount(values.split(" ").length - 1)
    }, [values])



    const mystyle = {
        color: cchange.rgba,
        backgroundColor: bgcolor.rgba,
        padding: "10px",
        fontFamily: FFamily,
        fontSize: `${fcsize}px`,
        
    }


    return (
        <>
            <div className="flex">
                <h1>alphbets:  {lengthcount} </h1>
                <h1>Words:  {wordcount} </h1>
            </div>
            <div className="flex">
                <div className="div1">
                    <InputColor
                        initialValue="#000000ff"
                        onChange={setCchange}
                        placement="center"
                    />
                    <h1>font color</h1>
                </div>
                <div className="div1">
                    <input type="range" min="0" max="100" step="10" value={fcsize} onChange={(e) => setFcsize(e.target.value)} /><h1>{fcsize}px</h1>
                </div>
                <div className="div1">
                    <InputColor
                        initialValue="#fcfcfcff"
                        onChange={setBgcolor}
                        placement="center"
                    />
                    <h1> Background </h1>
                </div>
                <div className="div1">
                    <select value={FFamily} onChange={(e) => setfamily(e.target.value)} >
                        {
                            fontt.map((value, index) => {
                                return (
                                    <option key={index} >{value}</option>
                                )
                            })
                        }
                    </select>
                    <h1>FontFamily</h1>
                </div>

                {
                    employeeList.map((ele, index) => {
                        return (
                            <>
                                <div className='div1' onClick={(e) => setChange(ele.clickevent)} key={index}>
                                    <input type="submit" value={ele.valueone} />
                                    <p>{ele.clickevent1}</p>
                                </div >
                            </>
                        )
                    })
                }

            </div>
            <div className="flex">
                <div className="div1">
                    <input
                        required
                        onChange={e => setReplcetext1(e.target.value)}
                        placeholder="value for changing...."
                        focusBorderColor="yellow.500"

                    />
                    <p>'setRText2(e.target.value)'</p>
                </div>
                <div className="div1">
                    <input
                        required
                        onChange={e => setReplcetext2(e.target.value)}
                        placeholder="value that change...."
                        focusBorderColor="yellow.500"
                    />
                    <p>'setRText2(e.target.value)'</p>
                </div>

                <div className="div1">
                    <input type='submit' value='Replace word' onClick={() => setChange(values.replaceAll(replcetext1, replcetext2))} />
                    <p>'V.replaceAll(text1, text2)'</p>
                </div>
            </div>



            <div className="flex">
                <div className='message' >
                    <textarea
                        required
                        value={values}
                        onChange={e => setValues(e.target.value)}
                        placeholder="Your Something...."
                    />
                </div>
                <div className="div1 message" style={mystyle} >
                    {change}
                </div>
            </div>
        </>
    )
}

export default Mstring
