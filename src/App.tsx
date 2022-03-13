import React from 'react';
import './App.css';
import {Accordion, AccordionTitle} from "./components/Accordion";
import {Rating} from "./components/Rating";
import UnRating from "./components/UnRating";
import UncontrolledAccordion from "./components/uncontrolledAccordion";
import OnOff from "./components/OnOff";


// function sum(a: number, b: number) {
//     alert(a + b)
// }
//
// sum(23, 12)
// sum(100, 34)


function App(props: any) {
    return (
        <div className={'App'}>


            <UncontrolledAccordion titleValue={'Menu'}/>

            <Accordion titleValue={'Menu'} collapsed={false}/>

            <OnOff/>

            <UnRating/>

            <Rating value={3}/>



            {/*< Rating value={1}/>*/}
            {/*< Rating value={2}/>*/}
            {/*< Rating value={3}/>*/}
            {/*< Rating value={4}/>*/}
            {/*< Rating value={5}/>*/}


        </div>
    );
}

function AppTitle() {
    return <>"This is APP"</>
}


export default App;
