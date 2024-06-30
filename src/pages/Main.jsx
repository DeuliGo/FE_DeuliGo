/**
File Name : Main
Description : 메인 화면
Author : 임도헌

History
Date        Author   Status    Description
2024.06.30  임도헌    Created
*/

import BoardTap from '../components/board/BoardTap'
import Search from '../components/board/Search'
import map from '../assets/images/map.png'

const Main = () => {
    return (
        <div>
            <Search />
            <BoardTap />
            <img className="w-[375px] h-[477px]" src={map}></img>
        </div>
    )
}

export default Main
