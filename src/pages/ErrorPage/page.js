import React from 'react'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
    return (
        <div className='mt-32 ml-72'>
            <h1 className='text-4xl font-bold'>해당 페이지를 찾지 못했습니다.</h1>
            <p className='mt-8 mb-4 text-lg'>주소가 잘못되었거나 더 이상 제공되지 않는 페이지입니다.</p>
            <Link to="/" className='text-red-500 '>메인 페이지로 이동</Link>
        </div>
    )
}

export default ErrorPage