import React, { useState } from 'react'
import TableRows from './TableRows'
import styled from 'styled-components'
import sortAlpha from '../utils/sorting'
// import sortDown  from '../src/icons/sort-down.svg'
// import sortUp  from '../src/icons/sort-up.svg'
// import refresh  from '../src/icons/refresh.svg'

const ShortcutNameTh = styled.th`
    &:hover {
        cursor: pointer;
    }
`
const SortTextSpan = styled.span`
    display: block;
    font-size: .6em;
`
export default function ShortcutTable(props) {
     // console.log('ShortcutTable props: ', props)
    const [sortedRows, setSortedRows] = useState(null)
    const [sortOrder, setSortOrder] = useState('AZ')
    const sortTextEnum = ['Sorted A-Z', 'Sorted Z-A', 'Unsorted']
    const [sortText, setSortText] = useState(sortTextEnum[2])
    const unsortedRows = [...props.section.subsections]
    
    function handleShortcutSort() {
        // console.log('handleShortcutSort')
        if (sortedRows === null) {
            setSortedRows(sortAlpha(unsortedRows, 'AZ'))
            setSortOrder('AZ')
            setSortText(sortTextEnum[0])
        } else if (sortOrder === 'AZ') {
            setSortedRows(sortAlpha(unsortedRows, 'ZA'))
            setSortOrder('ZA')
            setSortText(sortTextEnum[1])
        } else {
            setSortedRows(null)
            setSortText(sortTextEnum[2])
        }
    }

    // function clearSort() { setSortedRows(null) }

    return (
        <div className="table_container">
            <table>
                <thead>
                    <tr>
                        <ShortcutNameTh onClick={handleShortcutSort}>
                            <span>Shortcut</span>
                            <SortTextSpan>( {sortText} )</SortTextSpan>
                        </ShortcutNameTh>
                        <th>Mac</th>
                        <th>Windows</th>
                    </tr>
                </thead>

                <tbody>
                    {sortedRows 
                        ? <TableRows rows={sortedRows} />
                        : <TableRows rows={unsortedRows} />
                    }
                </tbody>
            </table>
        </div>
    )
}