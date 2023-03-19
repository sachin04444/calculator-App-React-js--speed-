import React, { useEffect, useState } from 'react'
import "./index1.css"

const Index1 = () => {
    const [first, setFirst] = useState(1)
    const [second, setSecond] = useState(1)


    return (
        <div >
            <div className='flex'>
                <h1>Enter Value Below</h1>
                <div className='input'>
                    <label htmlFor="">Value : </label>
                    <input type="number" name="" id="" onChange={e => setFirst(e.target.value)} />
                </div>
                <div className='input'>
                    <label htmlFor="">Value : </label>
                    <input type="number" name="" id="" onChange={e => setSecond(e.target.value)} />
                </div>
                <Index2 first={first} second={second} />
            </div>
        </div>
    )
}

const Index2 = ({ first, second }) => {
    const [speed, setSpeed] = useState()
    const [distance, setDistance] = useState()
    const [time, setTime] = useState()


    useEffect(() => {
        setSpeed(first / second)
        setDistance(first * second)
        setTime(first / second)
    }, [first, second])

    return (
        <>
            <div>
                <div className='unit'>
                    <h1>Unit</h1>
                    <h1> <span>seconds : s</span></h1>
                    <h1><span>metres : m</span></h1>
                    <h1><span>metres per second : m/s</span></h1>

                </div>
                <div className='answer'>
                    <h1> Distance : <span>{first}</span> m  / Time : <span> {second}</span> s </h1>
                    <h1>= Speed : <span>{speed} </span> ms</h1>
                </div>
                <div className='answer'>
                    <h1> Speed : <span>{first}</span> m/s  * Time : <span> {second}</span> s </h1>
                    <h1>= Distance : <span>{distance}</span> m</h1>
                </div>
                <div className='answer'>
                    <h1> Distance : <span> {first}</span> m / Speed : <span> {second}</span> s </h1>
                    <h1> = Time : <span>{time}</span> s</h1>
                </div>
            </div>
        </>
    )
}

export default Index1
