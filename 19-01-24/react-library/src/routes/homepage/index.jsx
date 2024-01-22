import React, { useState, useEffect } from "react";
import BookList from "../../components/bookList";
import { HTTP_GET } from "../../utils/http";
import styles from "./index.module.scss";
import NavBar from "../../components/navBar";

export default function Homepage() {
  const [lists, setLists] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    Promise.all([
      HTTP_GET("/subjects/love.json"),
      HTTP_GET("/subjects/war.json"),
      HTTP_GET("/subjects/adventure.json"),
    ]).then((data) => setLists(data));
  }, []);

  const filteredLists = lists.filter((list) =>
    list.works.some((book) =>
      book.title.toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  return (
    <div className={styles.Homepage}>
      <NavBar />
      {filteredLists.map((list, i) => (
        <BookList
          bookListData={list.works}
          title={list.name.toUpperCase()}
          key={i}
        />
      ))}
    </div>
  );
}
