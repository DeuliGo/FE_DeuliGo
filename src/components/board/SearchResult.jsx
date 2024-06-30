/**
File Name : ErrorPage
Description : 검색 결과 컴포넌트
Author : 임도헌

History
Date        Author   Status    Description
2024.06.30  임도헌    Created
*/

const SearchResult = ({ results, searching }) => {
    return (
        <div>
            {searching ? (
                <>
                    <div>{results}</div>
                </>
            ) : (
                <>
                    <div>{results}</div>
                </>
            )}
        </div>
    )
}

export default SearchResult
