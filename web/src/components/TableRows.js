import React from 'react'

export default function TableRows(props) {
    const rows = props.rows.map(row => {
        return (
            <tr key={row.name}>
                <th className="row_header">{row.name}</th>
                <td>
                    {row.mac_command && 
                        <kbd>{row.mac_command}</kbd>
                    }
                </td>
                <td>
                    {row.windows_command && 
                        <kbd>{row.windows_command}</kbd>
                    }   
                </td>
            </tr>
        )
    })
    return rows
}