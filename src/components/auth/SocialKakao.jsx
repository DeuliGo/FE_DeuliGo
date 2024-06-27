/**
File Name : SocialKakao
Description : 카카오 버튼 컴포넌트
Author : 나경윤

History
Date        Author   Status    Description
2024.06.27  나경윤    Created
*/

import KakaoIcon from '../../assets/images/kakao.svg'

const SocialKakao = () => {
    return (
        <button className="flex flex-row justify-center items-center text-lg text-zinc-700 bg-white font-semibold mt-3 rounded-xl border-2 border-gray-200">
            <img src={KakaoIcon} alt="google-icon" width="8%" />
            <p className="ml-2 text-base">카카오로 시작하기</p>
        </button>
    )
}

export default SocialKakao