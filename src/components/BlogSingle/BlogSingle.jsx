import React from 'react'
import photo from "../../assets/images/blogHeader.png";
import SectionHeaders from "../UsableComponents/SectionHeaders/SectionHeader";
import Container from "../UsableComponents/Container/Container";
import {ReactComponent as Tilda} from '../../assets/icons/String.svg';
import './BlogSingle.scss'
import {useParams} from "react-router-dom";
import {useGetSingleQuery} from "../../redux";
import {useTranslation} from "react-i18next";
import ReactPlayer from "react-player";
import Loader from "../UsableComponents/Loader/Loader";


function BlogSingle() {
    const {t} = useTranslation()
    const id = useParams()
    const {data = [], isLoading, isError} = useGetSingleQuery(`/blogs/single/${id.id}`)
    const lang = localStorage.getItem('i18nextLng')

    const ali = [{
        id: 1,
        header_title_uz: `${t('contact')}`,
        header_title_ru: `${t('contact')}`,
        header_description_uz: `${t('contact_description')}`,
        header_description_ru: `${t('contact_description')}`,
        header_image: photo,
    }]


    if (isLoading) return <Loader/>
    if (isError) return <Loader/>

    const addition_ru = data.data[0].addition_select_ru;
    const addition_uz = data.data[0].addition_select_uz;

    const [first_ru, second_ru, third_ru] = addition_ru.split('+');
    const [first_uz, second_uz, third_uz] = addition_uz.split('+');

    return (<section className='blog__single'>
        {ali.map(type => (<SectionHeaders data={type}/>))}
        <Container>
            {data.data.map(post => (
                <div className='post'>
                    {post.link_video !== null ?
                        <div className='post__video'>
                            <ReactPlayer stopOnUnmount={false} pip={true} width={'100%'} height={'100%'} light={true}
                                         controls={true} playing url={post.link_video}/>
                        </div>
                        : <img src={post.image} alt="" className='post__image'/>
                    }
                    <p className='post__title'>{post.title_1_uz}</p>
                    <p className='post__descr'>{post.description_1_uz}</p>
                    <div className='post__info'>
                        <p className='post__info-title'>{post.title_2_ru}</p>
                        <p className='post__info-descr'>{post.description_2_ru}</p>
                        <ul className='post__info-list'>
                            <li className='list'>{lang === 'uz' ? first_uz : first_ru}</li>
                            <li className='list'>{lang === 'uz' ? second_uz : second_ru}</li>
                            <li className='list'>{lang === 'uz' ? third_uz : third_ru}</li>
                        </ul>
                        <p className='post__info-seconddescr'>{post.description_3_ru}</p>
                    </div>
                    <div className='post__post'>
                        <Tilda/>
                        <p className='post__post-text'>{post.description_4_ru}</p>
                    </div>
                </div>
            ))}
        </Container>
    </section>)
}

export default BlogSingle