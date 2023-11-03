import React, { useState } from 'react'

const HomePage = () => {
    const [showAd, setShowAd] = useState(true);

    return (
        <div>
            {showAd && 
                <img 
                    src="banner.svg"
                    alt='광고'
                />
            }
            <button 
                onClick={() => setShowAd(!showAd)}
                className='px-3 py-2 border-2 rounded-md'
            >
                광고 안보기
            </button>
        </div>
    )
}

export default HomePage