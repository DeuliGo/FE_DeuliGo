/**
File Name : SearchBox
Description : 검색값 입력 컴포넌트
Author : 임도헌

History
Date        Author   Status    Description
2024.06.30  임도헌    Created
*/

const SearchBox = ({ value, onChange }) => {
    return (
        <div className="relative mt-4">
            <div className="absolute top-2 left-10">
                <i className="fa fa-search text-gray-400 z-20 hover:text-gray-500"></i>
            </div>
            <input
                type="search"
                placeholder="주소를 검색해주세요"
                className="h-10 w-[327px] pl-10 pr-20 border-[1px] border-slate-200 rounded-full z-0 focus:shadow focus:outline-none"
                value={value}
                onChange={onChange}
            />
            <div className="absolute top-1 right-10">
                <button className="flex justify-center items-center h-8 w-14 rounded-full text-white text-xs bg-amber-400 hover:bg-amber-600">
                    검색
                </button>
            </div>
        </div>
    )
}

export default SearchBox
