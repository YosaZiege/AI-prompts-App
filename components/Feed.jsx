"use client"
import {useState , useEffect} from "react"
import React from 'react'
import PromptCard  from './PromptCard'
const Feed = () => {
  
  const [searchText , setSearchText ] = useState('');
  const [posts , setPosts] = useState([]);
  const [searchTimeout, setSearchTimeout] = useState(null);
  const [searchedResults, setSearchedResults] = useState([]);
  const  filterText  = ( searchText) => {
    const regex = new RegExp(searchText , "i");
    return posts.filter(
      (item) => 
       regex.test(item.creator.username) ||
       regex.test(item.tag) || 
       regex.test(item.prompt) 
    );
  }
  const handleSearchChange = (e) => {
    clearTimeout(searchTimeout);
    setSearchText(e.target.value);

    setSearchTimeout(
      setTimeout(() => {
        const searchResult = filterText(e.target.value);
        setSearchedResults(searchResult);
      }, 500)
    );
  };
  const PromptCardList = ({data,handleTagClick}) => {
    
    return (
      <div className="prompt_layout mt-16">
           {data.map((post) => (
            <PromptCard key={post._id} post={post} handleTagClick={handleTagClick}/>
            ))}
      </div>
    )
  }
  const handleTagClick = (tag) => {
    setSearchText(tag);

    const searchResult = filterPrompts(tag);
    setSearchedResults(searchResult);
  };
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
      onChange={handleSearchChange}
      />
        </form> 
      {searchText ? (
      <PromptCardList data={searchedResults}  handleTagClick={handleTagClick} />) : (
        <PromptCardList data={posts} handleTagClick={handleTagClick} />
      )
    }
    </section>
  )
}

export default Feed
