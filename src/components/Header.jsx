import React, { useEffect, useState } from 'react';
import { BsYoutube } from 'react-icons/bs';
import { useNavigate, useParams } from 'react-router-dom';

const Header = () => {
  const { keyword } = useParams();
  const [searchParams, setSearchParams] = useState('');
  const navigate = useNavigate();
  const handleSearch = (e) => {
    navigate(`/videos/${searchParams}`);
  };

  useEffect(() => setSearchParams(keyword || ''), [keyword]);

  return (
    <header className="flex justify-between w-full px-2">
      <div className="flex cursor-pointer p-5" onClick={() => navigate('/')}>
        <BsYoutube className="w-8 h-8" />
        <h2 className="font-bold text-2xl">YOUTUBE</h2>
      </div>
      <div className="">
        <form onSubmit={handleSearch} className="flex">
          <input
            type="text"
            placeholder="Search"
            value={searchParams}
            onChange={(e) => setSearchParams(e.target.value)}
          />
          <button type="submit">search</button>
        </form>
      </div>
      <div>Avatar</div>
    </header>
  );
};

export default Header;
