import React from 'react'
import formatKbd from '../../utils/formatKbd'

export default function TableRows(props) {
    // console.log('TR props: ', props)
    const rows = props.rows.map(row => {
        // console.log('row: ', row)
        return (
            <tr key={row.name}>
                <th className="row_header">{row.name}</th>
                <td>
                    {row._rawMacCommand && 
                        formatKbd(row._rawMacCommand[0])
                    }
                </td>
                <td>
                    {row._rawWindowsCommand && 
                        formatKbd(row._rawWindowsCommand[0])
                    }   
                </td>
            </tr>
        )
    })
    return rows
}