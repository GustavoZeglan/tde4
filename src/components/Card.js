import {useState} from "react";

export default function Card({image, text, title}){

    const [clicked, setClicked] = useState(false);

    return (
        <div className="card" onClick={() => setClicked(!clicked)}>
            <div>
                <img src={image} alt=""/>
            </div>
            <div className="content" style={{backgroundColor: !clicked ? "white" : "#10acd8"}}>
                <h4>{title}</h4>
                <p>{text}</p>
            </div>
        </div>
    )
}
