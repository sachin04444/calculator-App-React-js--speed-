import React from 'react'

const loop = () => {
    var n = [1, 2, 3, 5, 7, 8, 9, 11, 12, 13, 14, 16, 17, 18, 20, 21, 22];
    var m = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];


  const   TimeUnit = ["milliseconds", "Second", "minute", "Hours", "Days", "weeks"]
  TimeUnit.forEach(k => {
    TimeUnit.forEach(i => {
            console.log(i, k)
        });
    })

    return  (
        <div>

        </div>
    )
}

export default loop
