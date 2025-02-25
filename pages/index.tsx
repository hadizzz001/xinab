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
import Grids1 from '../src/Components/Grids1/Grids1';
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
        <title>Oxinab Lebanon</title>
        <meta name="robots" content="index,follow"/>
{/* <meta name="description" content="Power house provide a wide range of European electronics (stock and new)" /> */}
<meta name='viewport' content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0' />
<meta name="distribution" content="Global"/>
<meta name="keywords" content="Oxinab Lebanon, Burnshield , Medical supplies, Biosynex, laboratory , Burn dressings , First aid , Rapid test, oxygen, HIV test, pregnancy test, Chest seal, Bandage, Philips, Spencer , Burn cream, eye drops, innoxa"/>
<meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
<meta httpEquiv="content-language" content="en" />
<meta name="theme-color" content="#0794ca" />
<meta content="oxinab.me" name="author" />

<link rel="canonical" href="https://oxinab.me/" />
<link rel="alternate" href="https://oxinab.me/" hrefLang="en"/>

<meta property="og:type" content="website" />
<meta property="og:title" content="Oxinab" />
<meta property="og:url" content="https://oxinab.me/" />
<meta property="og:site_name" content="Oxinab Lebanon" /> 
<meta property="og:image" content="https://res.cloudinary.com/dusvquybw/image/upload/v1740486798/e767gffynefbmg5uz631.jpg" />

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
      
        <Grids1 />
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
