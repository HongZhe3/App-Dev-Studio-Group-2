import React from 'react'
import './SideNav.css'
export default function SideNav() {
    const menus = [
        { to: '/r/popular' ,text: "Popular"},
        { to: '/r/all' ,text: "All"},
        { to: '/r/random' ,text: "Random"}
    ]
    const subreddits = [
        "askreddit",
        "worldnews",
        "videos",
        "funny",
        "todayilearned",
        "pics",
        "gaming",
        "movies",
        "news",
        "gifs",
        "aww",
        "mildlyinteresting",
        "showerthoughts",
        "television",
        "jokes",
        "science",
        "soccer",
        "internetisbeautiful",
        "dataisbeautiful",
    ]
    return (
        <div className="sidenav">
            <div className="sidenav__logo">
                <img src="https://s1.mzstatic.com/us/r30/Purple4/v4/95/98/a5/9598a54b-0a12-56fd-7e18-c4ba10e1e688/mzl.bofwnsjk.png" />
            </div>
            <div className="sidenav__search">
                <input type="text" name="search" placeholder="Search" />
                <i className="fas fa-search"></i>
            </div>
            <div className="sidenav__link">
                <ul className="sidenav__menu">
                    {menus.map(menu => (
                        <li><a href={menu.to}>{menu.text}</a></li>
                    ))}
                </ul>
                <hr />
                <ul className="sidenav__subreddit">
                        {subreddits.map(subreddit => (
                            <li><a href={`/r/${subreddit}`}>{subreddit}</a></li>
                        ))}
                </ul>
            </div>
        
        </div>
    )
}