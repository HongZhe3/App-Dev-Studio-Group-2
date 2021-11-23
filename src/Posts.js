import React from 'react'
import PostItem from './PostItem'
import './Posts.css'

export default function Posts() {
    const posts = [ //sql qurey must search for comment count, upvote tally, username & channel name 
      {
        // upvote: 547,
        // image: "https://cdn3.dpmag.com/2021/07/Landscape-Tips-Mike-Mezeul-II.jpg",
        // title: "Questions about the mountains",
        // user: "John",
        // subreddit: "worldnews",
        // comment_count: 284,
      } ,
      
    ]
    return (
        <div className="posts">
            {posts.map(post => (
                <PostItem post={post} />
            ))}
        </div>
    )
}