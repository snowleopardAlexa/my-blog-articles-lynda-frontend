import React from 'react';
import { Link } from 'react-router-dom';

const ArticlesList = ({ articles }) => (
    <>
    { /* we display the articles using props */}
    {articles.map((article, key) => (
       <Link className="article-list-item" key={key} to={`/article/${article.name}`}>
          <h3>{article.title}</h3>
          {/* we are using 50 characters from our article to display
           the fragment of it in the browser
          */}
          <p>{article.content[0].substring(0, 150)}...</p>
       </Link>
    ))}
    </>
);

export default ArticlesList;
