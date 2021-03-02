import React from 'react';
import articleContent from './article-content';
import ArticlesList from '../Components/ArticlesList';

const ArticlesListPage = () => (
    <>
    <h1>Articles</h1>
    {/* Article content array passed as props  */}
    <ArticlesList articles={articleContent} />
    </>
);

export default ArticlesListPage;