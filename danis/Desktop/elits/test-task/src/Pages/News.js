
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Articles from '../Components/articles';
import { Container } from "react-bootstrap";
import Pagination from '../Components/pagination';


function Test() {
    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)
    const [articlesPerPage] = useState(9)


    useEffect(() => {
        const getArticles = async () => {
            setLoading(true)
            const res = await axios.get('https://newsapi.org/v2/everything?domains=wsj.com&apiKey=2ada35942f734db7990593e60e7bd766')
            setArticles(res.data.articles)
            setLoading(false)
        }

        getArticles()

    }, [])


    const lastArticleIndex = currentPage * articlesPerPage;
    const firstArticleIndex = lastArticleIndex - articlesPerPage;
    const currentArticle = articles.slice(firstArticleIndex, lastArticleIndex)

    const paginate = pageNumber => setCurrentPage(pageNumber)


    return (
        <section>
            <Container>
                <Articles articles={currentArticle} loading={loading} />
                <Pagination 
                    articlesPerPage={articlesPerPage}
                    totalArticles = {articles.length}
                    paginate={paginate}
                />
            </Container>
        </section>

    );
}

export default Test;
