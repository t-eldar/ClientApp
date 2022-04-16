import React from "react";

const PostItem = ({post}) => {
    
    return (
        <div style={{
            border: 2, 
            borderRadius: 15, 
            background: 'pink',
            margin: 15,
            padding: 15,
            borderColor: 'black'
        }}>
            <div>
                Автор: {post.user.name}
                Опубликовано: {
                    post.dateCreated.getFullYear()+'-'+
                    (post.dateCreated.getMonth()+1)+'-'+
                    post.dateCreated.getDate()
                }
                {post.title}
            </div>
            <div>
                {post.description}
            </div>
            {/*<div>*/}
            {/*    <button>-</button>*/}
            {/*    {post.reputation}*/}
            {/*    <button>+</button>*/}
            {/*</div>*/}
        </div>
    );
}

export default PostItem;