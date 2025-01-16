import Head from 'next/head'
import CategoryMenu from '../src/Components/HomeComponents/CategoryMenu/CategoryMenu'
// import MainCarousel from '../src/Components/HomeComponents/MainCarousel/MainCarousel';
import WhatsApp from '../src/Components/HomeComponents/SocialLinks/WhatsApp';
import ProductCollection from '../src/Components/HomeComponents/ProductCollection/ProductCollection';
// import FullscreenPoster from '../src/Components/HomeComponents/FullscreenPoster/FullscreenPoster';
// import CategoryList from '../src/Components/HomeComponents/CategoryList/CategoryList';
import Perks from '../src/Components/HomeComponents/Perks/Perks';
import TopAd from '../src/Components/HomeComponents/TopAd/TopAd';
import Navbar from '../src/Components/Navbar/Navbar';
import Grids from '../src/Components/Grids/Grids';
// import SideBar from '../src/Components/Drawer/SideBar';
// import { Dialog } from '@mui/material';
import QuickView from '../src/Components/Dialog/QuickView';
import { useContext, useEffect, useState } from 'react';
import {server} from '../src/Utils/Server' 
// import CategoryImages from '../src/Components/HomeComponents/CategoryImages/CategoryImages';
// import Btn from '../src/Components/Btn/Btn';
import { IProduct } from '../src/Types/Types';
// import { Typography } from '@mui/material';
import { Categories } from './_app';
// import VideoHero from '../src/Components/VideoHero/VideoHero';
export const getAll = async (endpoint?:string,limit?:number,category?:string,search?:string,skip?:number,totalCount?:boolean) => {
  try {

    const req = await fetch(`${server}/api/${endpoint ? endpoint : 'home' }?limit=${limit || 100}&category=${category ? category : ''}&search=${search ? search : ''}&skip=${skip}&totalCount=${totalCount === true ? 'true' : 'false' }`)
    const res = await req.json()
  
    if (res) {
      return res
    }
    return null
  }
  catch(er) {
    console.log('er getAll: ', er);

  }
}
export default function Home({data :staticData,category}:{category:any,data:any}) {
  
  const [quickView, setQuickView] = useState<{isOpen:boolean,productId:null | string}>({isOpen:false,productId:null})
  const [data,setData] = useState<IProduct[] | any>(staticData)
  const [cates,setCates] = useContext(Categories);
  const coldStart = async () => {
    const req = await fetch(`${server}/api/cold`)
    const res = await req.json()
    // if (!data && data?.length < 0) {
    //   const req = await getAll()
    //   if (req && req?.data && req?.data?.length > 0)
    //     {
    //       console.log('req: ', req);
    //       setData(req.data)
    //   }
    // }
  }
  useEffect(() => {
    coldStart()
    // setCates(category);
  }, [])

    return (
    <>
      <Head>
        <title>Oxinab</title>
        <meta name="robots" content="index,follow"/>
{/* <meta name="description" content="Power house provide a wide range of European electronics (stock and new)" /> */}
<meta name='viewport' content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0' />
<meta name="distribution" content="Global"/>
<meta name="keywords" content="e, electronic stores, lebanon, electronics store near me,  electronics, electronic, tv, tvs, electronic components,
 electrical, kitchens,  supply,  Engineering, washer, dryer, kneading, fridge, refrigerator, standing steam, pancake maker, Cotton candy machine, Electric kettle,
  Thermoelectric cool box, Ice Cube Machine,  Hot Air Fryer, stand mixer, Juicer, carpet cleaner , Espresso, cyclonic vacuum cleaner, vacuum, cleaner, steam iron
  , gas grill, gas, grill, cooker,Electric Pot, Electric fryer, Freezer, Inverter  "/>
<meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
<meta httpEquiv="content-language" content="en" />
<meta name="theme-color" content="#0794ca" />
<meta content="powerhouse-lb.com" name="author" />

<link rel="canonical" href="https://oxinab.me/" />
<link rel="alternate" href="https://oxinab.me/" hrefLang="en"/>

<meta property="og:type" content="website" />
<meta property="og:title" content="Oxinab" />
<meta property="og:url" content="https://oxinab.me/" />
<meta property="og:site_name" content="Oxinab" />
<meta property="og:image" content="https://ucarecdn.com/7a7d64a9-6cb4-4cd2-b363-25b71a94ec3b/icon.jpg" />
{/* <meta property="og:description" content="Power house provide a wide range of European electronics (stock and new)" /> */}
     
<meta name="og:description" content={`
        Oxinab specializing in providing high-quality medical supplies and healthcare solutions.
        `} />
       <meta name="description" content={`
        Oxinab specializing in providing high-quality medical supplies and healthcare solutions.
        `} />
        <meta name="viewport" content="width=device-width, initial-scale=1" /> 
      </Head>
      
      <TopAd/>
      <Navbar />
      
      <CategoryMenu category={category}/>
      <main>
      {/* <VideoHero/> */}

      {/* <MainCarousel/> */}
      {/* <CategoryImages/> */}
      <WhatsApp/>
      <ProductCollection enableVideo data={data && data.slice(0,20)} setQuickView={setQuickView} Collectiontitle='Latest Products '/>      
      
      <ProductCollection  data={data && data.slice(20,30)} setQuickView={setQuickView} Collectiontitle='Top Sellers'/>      
      {/* <FullscreenPoster img='https://contentgrid.thdstatic.com/hdus/en_US/DTCCOMNEW/fetch/NexGen/ContentPage/SBS22-ASP-Hero-DSK-A.png'/> */}
      <ProductCollection data={data && data.slice(30,45)} setQuickView={setQuickView} Collectiontitle='Recommended Products '/>      
      {/* <CategoryList/> */}
        { data && data?.slice(12,16)?.length > 0 &&

          <ProductCollection data={data && data.slice(45,55)} setQuickView={setQuickView} Collectiontitle='Best Of The Best'/>      
        }

      {/* <FullscreenPoster img='https://cdn.shopify.com/s/files/1/0317/1831/0026/files/shop_now_1800_x600_b3aa621e-b818-4478-8679-7d16e108de14_1200x.png?v=1613728741'/> */}
     
        <QuickView setQuickView={setQuickView} productId={quickView.productId} isOpen={quickView.isOpen}/>
        </main>
        <Grids />
      <Perks/>



    </>
  )
}

export async function  getServerSideProps() {
  // export async function  getStaticProps() {
  // const res = await fetch('https://.../posts')
  // const posts = await res.json()
  try {

 
  const res = await getAll()

  if (!res || !res?.data) {
    return {
      props: {
        data: null,
      },
    }    
  }
  return {
    props: {
        // data : res.data.reverse(),
        data : res.data,
        // category : res.category
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    // revalidate: 500, // In seconds
  }
}
catch(errr){
  console.log('errr: ', errr);

}
}
