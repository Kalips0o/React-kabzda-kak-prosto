import React, {useState} from "react";


type  AccordionPropsType = {
    titleValue: string
}

function UncontrolledAccordion(props: AccordionPropsType) {
    console.log("Accordion rendering")
    let [collapsed, setCollapsed]=useState(false);
    return <div>
        <AccordionTitle title={props.titleValue}/>
        <button onClick={()=>{setCollapsed (!collapsed)}}> TOGGLE </button>
        {!collapsed && <AccordionBody/>}
    </div>
}


type AccordiontitlePropsType = {
    title: string
}

export function AccordionTitle(props: AccordiontitlePropsType) {

    console.log("AccordionTitle rendering")
    return <h3> ----{props.title}----</h3>


}

export function AccordionBody() {
    console.log("Accordion rendering")
    return <div>
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>

        </ul>
    </div>


}
 export default UncontrolledAccordion;