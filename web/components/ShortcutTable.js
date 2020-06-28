import React from 'react'

export default function ShortcutTable(props) {
    console.log('ShortcutTable props: ', props)
    return (
        <div className="table_container">
            <table>
                <thead>
                    <tr>
                        <th>Shortcut</th>
                        <th>Mac</th>
                        <th>Windows</th>
                    </tr>
                </thead>

                <tbody>
                    {props.section.subsections.map(secData => {
                        return (
                            <tr key={secData.name}>
                                <th className="row_header">{secData.name}</th>
                                <td><kbd>{secData.mac_command}</kbd></td>
                                <td><kbd>{secData.windows_command}</kbd></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}