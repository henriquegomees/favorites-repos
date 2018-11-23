import React from 'react'
import './repos_table.css'

const ReposTable = props => {
    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Language</th>
                    <th>Latest tag</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {props.children}
            </tbody>
        </table>
    )
}

export default ReposTable
