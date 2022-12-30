import React, { useState } from 'react';

function SearchBox() {
  const [input, setInput] = useState('');
  const [searchedList, setSearchedList] = useState([]);

  const handleChange = e => {
    const value = e.target.value;
    setInput(value);
    search(value);
  };

  const search = value => {
    let filteredList = userDataList.filter(item => item.userid.includes(value));
    let hasFilterdList = filteredList.length > 0;
    setSearchedList(hasFilterdList ? filteredList : []);
  };

  return (
    <div id="searchBox" className="box-search">
      <input
        type="text"
        placeholder="검색"
        value={input}
        onChange={handleChange}
      />
      {/* <i className="fa-solid fa-magnifying-glass"></i> */}
      <div className="box-search-list">
        {input && (
          <ul className="list-users">
            {searchedList.length > 0 ? (
              searchedList.map(item => {
                return (
                  <li key={item.id}>
                    <div className="box-user">
                      <span className="thumb-img">
                        <img
                          src="/images/41_sangheon/img-thumbnail.jpeg"
                          alt=""
                        />
                      </span>
                      <span className="box-cont">
                        <strong className="tit-user">{item.userid}</strong>
                        <span className="cont-info">{item.username}</span>
                      </span>
                    </div>
                  </li>
                );
              })
            ) : (
              <li>
                <span style={{ fontSize: '12px' }}>
                  검색결과가 존재하지 않습니다
                </span>
              </li>
            )}
          </ul>
        )}
      </div>
    </div>
  );
}

export default SearchBox;

const userDataList = [
  {
    id: 1,
    userid: 'loi_kim',
    username: '김로이 (Kim Loi)',
    avatar: '/images/img-profile.png',
  },
  {
    id: 2,
    userid: 'nanen_minsu',
    username: '김민수 (Kim Min su)',
    avatar: '/images/img-profile.png',
  },
  {
    id: 3,
    userid: 'minjung_lee',
    username: '이민정 (Lee Min Jung)',
    avatar: '/images/img-profile.png',
  },
  {
    id: 4,
    userid: 'younghee_choi',
    username: '최영희 (Choi Young Hee)',
    avatar: '/images/img-profile.png',
  },
];
