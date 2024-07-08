import { useState } from 'react';
import './Lupa.css'
import { IoSearchSharp } from "react-icons/io5";

export const NavBarLupa = () => {
  const [inputVisible, setInputVisible] = useState(false);
  const [searchWord, setSearchWord] = useState('');

  const handleSearchClick = () => {
    setInputVisible(!inputVisible);
  }

  const handleSearchChange = (e: any) => {
    setSearchWord(e.target.value);
  }

  const handleSearchSubmit = (e: any) => {
    e.preventDefault();
    if (searchWord.trim() !== '') {
      window.location.href = `/browse/search?queary${searchWord}`
    }
  }

  return (
    <div className='containerLupa'>
      <IoSearchSharp className='lupaImg' onClick={handleSearchClick}/>
      {inputVisible && (
        <form onSubmit={handleSearchSubmit} className='searchForm'>
          <input
           type="text"
           value={searchWord}
           onChange={handleSearchChange}
           placeholder='Busque una pelicula...'
           className='searchInput'
          />
        </form>
      )}
    </div>
  );
}