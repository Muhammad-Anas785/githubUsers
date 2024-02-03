import React, { useEffect, useState } from "react";
import UserCard from "./UserCard";
import Shimmer from "./Shimmer";

const Body = () => {
  const [userData, setUserData] = useState([]);
  const [userCopyData, setUserCopyData] = useState([]);
  const [searchText, setSearchText] = useState("");
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch("https://dummyjson.com/users");
    const json = await data.json();
    console.log(json.users);
    setUserData(json.users);
    setUserCopyData(json.users);
  };

  const filterAge = () => {
    const filteredAgeCards = userData.filter((item) => {
      return item.age >= 40;
    });
    setUserCopyData(filteredAgeCards);
  };

  const showSearchCards = () => {
    const filterSearchCards = userData.filter((cardItem) => {
      return cardItem.firstName
        .toLowerCase()
        .includes(searchText.toLowerCase());
    });
    setUserCopyData(filterSearchCards);
  };

  return userData.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body-container">
      <div className="filter-container">
        <div className="search-container">
          <input
            type="text"
            placeholder="search here..."
            className="search-box"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button className="btns" onClick={showSearchCards}>
            Search
          </button>
        </div>
        <button className="filterButton" onClick={filterAge}>
          Filter Cards
        </button>
      </div>

      <div className="card-container">
        {userCopyData.map((value) => {
          return <UserCard key={value.id} allData={value} />;
        })}
      </div>
    </div>
  );
};
export default Body;
