/**
File Name : Main
Description : 메인 화면
Author : 임도헌

History
Date        Author   Status    Description
2024.06.30  임도헌    Created
*/

import { useEffect, useState } from 'react'
import SearchBox from '../components/main/SearchBox'
import SearchResult from './../components/main/SearchResult'

const Main = () => {
    const [query, setQuery] = useState('')
    const [searching, setSearching] = useState('')
    const [results, setResults] = useState([])

    useEffect(() => {
        setSearching(true)
        // axios 자리 미완성
        setResults()
    }, [])

    return (
        <div>
            <SearchBox
                value={query}
                onChange={e => {
                    setQuery(e.target.value)
                }}
            />
            <SearchResult results={results} searching={searching} />
        </div>
    )
}

export default Main
