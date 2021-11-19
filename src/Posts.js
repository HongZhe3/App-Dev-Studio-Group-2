import React from 'react'
import PostItem from './PostItem'
import './Posts.css'

export default function Posts() {
    const posts = [
      {
        upvote: 547,
        image: "https://cdn3.dpmag.com/2021/07/Landscape-Tips-Mike-Mezeul-II.jpg",
        title: "Questions about the mountains",
        user: "John",
        subreddit: "worldnews",
        comment_count: 284,
      } ,
      {
        upvote: 300,
        image: "https://www.incimages.com/uploaded_files/image/1920x1080/getty_470493341_20001333200092800_398689.jpg",
        title: "Secrets of math",
        user: "Timothy",
        subreddit: "todayilearned",
        comment_count: 180,
      },
      {
        upvote: 547,
        image: "https://cdn3.dpmag.com/2021/07/Landscape-Tips-Mike-Mezeul-II.jpg",
        title: "Questions about new wallet",
        user: "John",
        subreddit: "politics",
        comment_count: 284,
      } ,
      {
        upvote: 547,
        image: "https://cdn3.dpmag.com/2021/07/Landscape-Tips-Mike-Mezeul-II.jpg",
        title: "Questions about new wallet",
        user: "John",
        subreddit: "politics",
        comment_count: 284,
      }  , 
    ]
    return (
        <div className="posts">
            {posts.map(post => (
                <PostItem post={post} />
            ))}
        </div>
    )
}