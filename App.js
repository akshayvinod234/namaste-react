import React from "react"
import ReactDOM from "react-dom/client"




const Title=()=>(<h1>hello react</h1>)
const titleelement=(<h1>hello react</h1>)
const HeadingComponent=()=>
    (<div id ="container">
        <Title/>
        {titleelement}
        <h1>hello react1</h1>
    </div>)
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent/>);