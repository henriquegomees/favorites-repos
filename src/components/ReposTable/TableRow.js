import React from 'react'

const TableRow = props => (
    <tr>
        <td>
            <a href={props.url} target="_blank" rel="noopener noreferrer">{props.name}</a>
        </td>

        <td>
            {props.lang}
        </td>

        <td>
            {props.tag}
        </td>

        <td>
            { 
                props.isFav !== ''
                ? !props.isFav 
                    ? <button className="add-btn" onClick={props.onClick}>{props.buttonLabel}</button>
                    : false
                : <button className="add-btn" onClick={props.onClick}>{props.buttonLabel}</button>
            }

        </td>
    </tr>
)

export default TableRow
