import React, {useState} from "react";
import {IList} from "../../utils/types";
import "./List.css"

export default function List () {

    const [list, setList] = useState<IList>({
        items: [1, 2, 3]
    });

    const onAddItemHandler = () => {
        setList( (prevState :IList) => {
            return {
                items: prevState.items.concat(prevState.items.length+1)
            }
        });
    }

    const onRemoveItemHandler = (removeItemIndex: number) => {
        setList( (prevState :IList) => {
            return {
                items: prevState.items.filter( (item, index) => index !== removeItemIndex)
            }
        })
    }

    return(
        <div>
            <button className="button" onClick={onAddItemHandler}>Add Item</button>
            <p>Click Item to Remove.</p>
            <ul className="list">
                {
                    list.items.map( (item_value, index) =>
                        <li
                            className="list_item"
                            key={index}
                            onClick={()=>onRemoveItemHandler(index)}
                        >
                            {item_value}
                        </li>
                    )
                }
            </ul>

        </div>
    )
}