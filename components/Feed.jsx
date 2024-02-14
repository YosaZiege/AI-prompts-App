"use client"
import {useState , useEffect} from "react"
import React from 'react'
import PromptCard  from './PromptCard'
const Feed = () => {
  
  const [searchText , setSearchText ] = useState('');
  const [posts , setPosts] = useState([]);
  const handleSearchText = (e) => {

  }
  const PromptCardList = ({data,handleTagClick}) => {
    
    return (
      <div className="prompt_layout mt-16">
           {data.map((post) => (
            <PromptCard key={post._id} post={post} handleTagClick={handleTagClick}/>
            ))}
      </div>
    )
  }
  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch('/api/prompt')
      const data  = await response.json();
      setPosts(data);
    }
    fetchPosts();
  } , [])
  return (
    <section className="feed">
     <form  className="flex-center w-full relative">
      <input type="text" className="search_input peer"
      required
      placeholder='Search for a tag or username'
      value={searchText}
      onChange={handleSearchText}
      />
        </form> 
      <PromptCardList data={posts}  handleTagClick={() => {}}   />
   
    </section>
  )
}

export default Feed
