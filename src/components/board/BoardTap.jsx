/**
import { useState } from 'react';
File Name : SearchBox
Description : 게시판 탭 컴포넌트
Author : 임도헌

History
Date        Author   Status    Description
2024.06.31  임도헌    Created
*/

import { useState } from 'react'
import bread from '../../assets/images/bread.png'
import bunsik from '../../assets/images/bunsik.png'
import dessert from '../../assets/images/dessert.png'
import fruit from '../../assets/images/fruit.png'
import etc from '../../assets/images/etc.png'

const BoardTap = () => {
    // 현재 탭 상태값
    const [currentTab, setCurrentTab] = useState(0)

    const handleTabActive = idx => {
        setCurrentTab(idx)
    }

    const category = [
        { tab: '베이커리', img: bread },
        { tab: '분식', img: bunsik },
        { tab: '디저트', img: dessert },
        { tab: '과일', img: fruit },
        { tab: '기타', img: etc }
    ]
    return (
        <div>
            <div className="flex gap-6 justify-center items-center mt-4">
                {category.map((item, idx) => {
                    return (
                        <div key={idx} className="flex flex-col justify-center items-center">
                            <img className="w-[32px] h-[32px]" src={item.img} alt={item.tab} />
                            <div
                                className={`shrink-0 p-2 text-sm font-semibold text-gray-500 hover:border-b-2 hover:text-black hover:border-black
                                    ${idx === currentTab ? 'border-b-2 border-black text-black' : null}`}
                                onClick={() => {
                                    handleTabActive(idx)
                                }}
                            >
                                {item.tab}
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default BoardTap
