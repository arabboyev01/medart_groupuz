import React from 'react'
import './Blog.scss'
import Container from "../../UsableComponents/Container/Container";
import Title from "../../UsableComponents/Title/Title";
import BlogCard from "../../UsableComponents/Cards/BlogCard/BlogCard";

import {useTranslation} from "react-i18next";
import {useGetDataQuery} from "../../../redux";
import Loader from "../../UsableComponents/Loader/Loader";

function Blog() {
    const {data = [], isLoading, isError} = useGetDataQuery('blogs')

    const {t} = useTranslation()
    if (isLoading) return <Loader/>
    if (isError) return <Loader/>
    return (
        <section className='blog'>
            <Container>
                {data.result.map(item => (
                    <>
                        <Title url={'./blog'} children={t('blog')}/>
                        <div className='posts'>
                            {item.blog_infos.slice(0, 3).map(post => (
                                <BlogCard data={post}/>
                            ))}
                        </div>
                    </>
                ))}
            </Container>
        </section>
    )
}

export default Blog