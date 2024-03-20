import React from 'react';

function Main(props){
    if(props.posts.length > 0){
       
            return(
                <main>
                    <div className="container">
                        <h1>{props.title}</h1>
                        <h2>{props.posts[0][0]}</h2>
                        <p>{props.posts[0][1]}</p>
                    </div>
                    
                    <div className="container">
                        <h1>{props.title}</h1>
                        <h2>{props.posts[1][0]}</h2>
                        <p>{props.posts[1][1]}</p>
                    </div>
                </main>
            )            
    }else{
        return(
            <main>
                <div className="container">
                <h1>No post Avalaible</h1>
                </div>
            </main>
            
        )
    }
}

export default Main;