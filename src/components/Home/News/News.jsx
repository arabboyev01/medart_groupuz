import React from 'react'
import TopNewsCard from "../../UsableComponents/Cards/TopNewsCard/TopNewsCard";
import NewsCard from "../../UsableComponents/Cards/NewsCard/NewsCard";
import {useTranslation} from "react-i18next";
import Container from "../../UsableComponents/Container/Container";
import Title from "../../UsableComponents/Title/Title";
import './News.scss'
import {useGetDataQuery} from "../../../redux";
import Loader from "../../UsableComponents/Loader/Loader";

function News() {
    const {t} = useTranslation()
    const {data = [], isError, isLoading} = useGetDataQuery('news')

    if (isError) return <Loader/>
    if (isLoading) return <Loader/>

    return (<section className='news'>
        <Container>
            {data.result.map(info => (<>
                <Title url={'/news'} children={t('news')}/>
                <div className='wrapper'>
                    {info.news_infos.filter(item => item.popularity === 'Ha').slice(0, 1).map(single => <TopNewsCard
                        data={single}/>)}
                    <div className='morenews'>
                        {info.news_infos.filter(item => (item.popularity === 'Yo`q')).slice(0, 4).map(single => <NewsCard
                            key={single.id} data={single}/>)}
                    </div>
                </div>
            </>))}
        </Container>
    </section>)
}

export default News;