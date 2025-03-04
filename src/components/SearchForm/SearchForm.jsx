import React, { useRef, useEffect } from 'react';
import {FaSearch, FaTextWidth, } from "react-icons/fa";
import {LiaStarAndCrescentSolid} from "react-icons/lia";
import { useNavigate } from 'react-router-dom';
import { useGlobalContext } from '../../context';
import "./SearchForm.css"

const SearchForm = () => {
  const{setSearchTerm, setResultTitle}= useGlobalContext();
  const searchText = useRef('');
  const navigate = useNavigate();

  useEffect(() => searchText.current.focus(), []);
  const handleSubmit = (e) =>{
    e.preventDefault();
    let tempSearchTerm = searchText.current.value.trim();
    if((tempSearchTerm.replace(/[^\w\s]/gi,"")).length === 0){
      setSearchTerm("Algeria...");
      setResultTitle("Please Enter Something ...");
    } else {
      setSearchTerm(searchText.current.value);
    }

    navigate("/book");
  };

  return (
    <div className='search-form'>
      <div className="container">
        <div className="search-form-container">
            <form className="search-form" onSubmit={handleSubmit}>
                <div className="search-form-elem flex flex-sb bg-white">
                   <input type="text" className='form-control' placeholder='Algeria...' ref={searchText}/>
                   <button type="submit" className='flex flex-c' onClick={handleSubmit}>
                      <LiaStarAndCrescentSolid className='text-green' size={32}/>
                   </button> 
                </div>
            </form>
        </div>
      </div>
    </div>
  )
}

export default SearchForm
