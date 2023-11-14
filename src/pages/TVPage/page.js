import React from 'react'
import PageContents from '../../components/PageContents';
import requests from '../../api/requests';


const MoviePage = () => {
    return (
        <div>
            <PageContents url={requests.fetchTV}/>
        </div>
    )
}
    
export default MoviePage;