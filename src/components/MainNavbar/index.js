import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    return (
        <div className='w-full py-4 bg-cyan-800'>
            <div className='ml-40'>
                <div className='flex items-center justify-start gap-5'>
                    <Link to='/'>
                        <img
                            style={{ width: "154px", height: "20px" }}
                            src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
                            alt="로고"
                        />
                    </Link>
                    <ul className='flex flex-row gap-4 ml-10 text-white'>
                        <li><Link to='movie'>영화</Link></li>
                        <li><Link to='tv'>TV 프로그램</Link></li>
                        <li><Link to='celeb'>인물</Link></li>
                    </ul>
                    <div className='flex items-center gap-4 text-sm'>
                        <div 
                            className='px-4 py-1 rounded-full cursor-pointer bg-zinc-100'
                            onClick={() => setIsLoggedIn(!isLoggedIn)}
                        >
                            <p>{`${isLoggedIn ? '로그인' : '로그아웃'}`}</p>
                        </div>
                        <p className='text-white'>
                            {`${isLoggedIn ? '로그인 해주세요!' : '환영합니다!'}`}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar