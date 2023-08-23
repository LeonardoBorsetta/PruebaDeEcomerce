import React from 'react'
import {fetchToDetail} from '../../services/fetchByIdForDetail'
import GalleryInDetail from '../../components/galleryInDetail/GalleryInDetail'
import ItemDetailHeader from '../../components/ItemDetailHeader/ItemDetailHeader'
import SearchForm from '../../components/searchForm/SearchForm'
import SimilarProducts from '../../components/similarProducts/SimilarProducts'
import Loader from '../../components/loader/Loader'

function ItemDetail({params}) {

  const {descText , atributes} = fetchToDetail(params.id)

  return (
    <>
      <SearchForm/>
      <div className='itemdetail-container'>
      {atributes ? 
      (
      <section>
        <ItemDetailHeader atr = {atributes}/>
        <GalleryInDetail pics = {atributes.pictures}/> 
        <p className='desc-text-detail'>{descText}</p>
      </section>
      )
      : <Loader/>}
    </div>
      <SimilarProducts thisId={params.id} title={atributes?.title}/>
    </>
  )
}

export default ItemDetail