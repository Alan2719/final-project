import React from 'react';
import "./styles.css";

function List(props) {
    console.log(props.items)
    console.log(props.items.items)
    return(
        <ul class="list-group checklistList">
            <li className="list-group-item">Travel Checklist</li>
            {props.items.items !== 0 ? (
                props.items.items.map((item, index) => {
                    return (
                        <li className="list-group-item">{item}
                            <button
                                className="btn btn-primary"
                                onClick={() => props.removeItem(index)}
                            >
                                <i class="fas fa-eraser"></i>
                                
                            </button>
                        </li>
                    )
                })
            ): ( 
                <></>
            )}
        </ul>
    )
    // return(
    //     <h1>Hola</h1>
    // )
}

export default List;

