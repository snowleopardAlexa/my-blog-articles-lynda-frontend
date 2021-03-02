import React, {useState, useEffect} from 'react';
import ArticlesList from '../Components/ArticlesList';
import CommentsList from '../Components/CommentsList';
import UpvotesSection from '../Components/UpvotesSection';
import AddCommentForm from '../Components/AddCommentForm';
import NotFoundPage from '../pages/NotFoundPage';
import articleContent from './article-content';

// match comes from react-router and connects name
// from App.js - URL parameters with react-router
const Article = ({ match }) => {
    const name = match.params.name;
    // we load articles 
    const article = articleContent.find(article => article.name === name);

    // useState hook
    const [articleInfo, setArticleInfo] = useState({ upvotes: 0, comments: [] });

    // useEffect hook
    // the useEffect runs not only when the component first mounts, but also
    // whenever the component updates. Since we are updating the component from
    // inside the useEffect hook, continously supplying a different number of
    // upvotes, our component gets caught in an infinite loop. 
    // to prevent this, we need to pass an array called NAME, so whenever we change
    // the article, the name of the article is called
    useEffect(() => {
       const fetchData = async () => {
          const result = await fetch(`/api/articles/${name}`)
          const body = await result.json();
          console.log(body);
          setArticleInfo(body);
        }
       fetchData()
;    }, [name]);

    // if article does not exist, we return NotFoundPage component
    if (!article) return <NotFoundPage />

    // new array other articles, we will filter article content here
    // we want to get articles whose name is NOT equal to articles we called above
    const otherArticles = articleContent.filter(article => article.name !== name);

    return (
    <>
    <h1>{article.title}</h1>
    <UpvotesSection 
      articleName={name} 
      upvotes={articleInfo.upvotes} 
      setArticleInfo={setArticleInfo} 
    />
    {article.content.map((paragraph, key) => (
        <p key={key}>{paragraph}</p>
     ))}
     <CommentsList comments={articleInfo.comments} />
     <AddCommentForm articleName={name} setArticleInfo={setArticleInfo} />
     <h3>Other Articles:</h3>
     <ArticlesList articles={otherArticles} />
    </>
  );
}

export default Article;