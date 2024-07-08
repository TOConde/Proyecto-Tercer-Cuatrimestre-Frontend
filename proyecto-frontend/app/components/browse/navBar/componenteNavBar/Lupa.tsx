import './Lupa.css'
import { useEffect, useRef, useState } from 'react';
import { IoSearchSharp } from "react-icons/io5";

export const NavBarLupa = () => {
  const [inputVisible, setInputVisible] = useState(false);
  const [searchWord, setSearchWord] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSearchClick = () => {
    setInputVisible(!inputVisible);
  }

  useEffect(() => {
    if (inputVisible && inputRef.current) {
      inputRef.current.focus();
    }
  }, [inputVisible])

  const handleSearchChange = (e: any) => {
    setSearchWord(e.target.value);
  }

  const handleSearchSubmit = (e: any) => {
    e.preventDefault();
    if (searchWord.trim() !== '') {
      window.location.href = `/browse/search?queary=${searchWord}`
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
           ref={inputRef}
          />
        </form>
      )}
    </div>
  );
}