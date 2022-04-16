import React from "react";
import PostItem from "./PostItem";

const PostList = ({posts}) => {

    if (!posts.length) {
        return (
            <h1 style={{textAlign: 'center'}}>
                Посты не найдены
            </h1>
        )
    }

    return (
        <div>
            {posts.map(post => 
                <PostItem key={post.id} post={post}/>
            )}
        </div>
    );
}

export default PostList;