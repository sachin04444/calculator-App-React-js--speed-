import React from 'react';

import TestCobverter from './TestConverter/TestCobverter';
import Areaconverter from "./TestConverter/josnfile/Areaconverter.json"
import Temperture from "./TestConverter/josnfile/Temperture.json"
import Timejson from "./TestConverter/josnfile/Timeconverter.json"
import Lengthunit2 from "./TestConverter/josnfile/Lengthjso.json"


function App() {
  const unitarea = ['Acres', 'Ares', 'Hectares', 'Square centimetres', 'Square feet', 'square inches', 'Square metres']
  const unitTemperture = ["Celsius" , "Fahrenheit","kelvin"]
  const TimeUnit = ["milliseconds", "Second", "minute", "Hours", "Days", "weeks"];
  const Lengthunit=["Millimetres","Centimetres","Metres","Kilometres","Ïnches","Feet","Yards","Miles","Nautical miles","Mils"]
  return (
    <>
    {!Areaconverter && !Temperture && !Timejson ? <></>:
      <div id='Currancy1'>
      <div className='headind'><h1>Unit Converter</h1></div>
        <TestCobverter intialvalue={"Acres"}  jsonfile={Areaconverter} Totalunit={unitarea} heading={"Area"} />
        <TestCobverter  intialvalue={"Celsius"}  jsonfile={Temperture} Totalunit={unitTemperture} heading={"Temperature"} />
        <TestCobverter  intialvalue={"milliseconds"}  jsonfile={Timejson} Totalunit={TimeUnit} heading={"Time"} />
        <TestCobverter  intialvalue={"Millimetres"}  jsonfile={Lengthunit2} Totalunit={Lengthunit} heading={"Length"} />
      </div>}
    </>
  );
}

export default App;
