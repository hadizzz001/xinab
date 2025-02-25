import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import TopAd from '../../src/Components/HomeComponents/TopAd/TopAd'
import Navbar from '../../src/Components/Navbar/Navbar'
import FilterSection from '../../src/Components/ProductsComponents/Filter/FilterSection'
import ProductSection from '../../src/Components/ProductsComponents/ProductSection/ProductSection'
import { Accordion, AccordionDetails, AccordionSummary, Box, Divider, Pagination, Typography } from '@mui/material'
import CategoryMenu from '../../src/Components/HomeComponents/CategoryMenu/CategoryMenu'
import Breadcrumb from '../../src/Components/Breadcrumbs/Breadcrumb'
import QuickView from '../../src/Components/Dialog/QuickView'
import { getAll } from '..'
import { useRouter } from 'next/router'

const Index = ({data,count}:any) => {
  const [totalCount,setTotalCount] = useState(count || 0);
  const [quickView, setQuickView] = useState<{isOpen:boolean,productId:null | string}>({isOpen:false,productId:null})
  const [products,setProducts] = useState(data);
  const handleQuickView = (id: string) => {
    if (setQuickView) {
        setQuickView({isOpen:true,productId: id})
    } 
 }
 const router= useRouter()
 let search = router.query?.search;

 const category= router.query?.products || 'products';
 if (data && !products) {
  setProducts(data)
 }
 if (!totalCount && count) {
  setTotalCount(count)
 }

 const handleReset = () => {
    setProducts(data)
 }
 const neverUseMe = async  () => {
  const data =  await getAll('getdata',80,`${category}`,`${search}`,0,true)
  // const res = await data.json()
  if (data) {
    setProducts(data?.products)
    setTotalCount(data?.count)
  }
}
 useEffect(() => {
  neverUseMe()
 }, [category,search])
 const handlePagination =  async (val:number) => { 
 try {
  // router.push('/products')
  router.replace({
    query: { ...router.query, page: val },
 });

 
 const skip = val <= 1 ? 0 : (val - 1) * 12
//  console.log('skip: ', skip);
  if (val > 0) {
      const data =  await getAll('getdata',12,`${category}`,undefined,skip,true)
      // const res = await data.json()
      // console.log('res: ', res);
      if (data) {
        setProducts(data?.products)
        setTotalCount(data?.count)
      }
    }
  }
  catch(e) {
   console.log('e: ', e);
 
  }
  }
  return (
    <>
    <Head>
    <title>Powerhouse lb Electronics | Shop By Category </title>
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
<meta property="og:site_name" content="Power house" />
<meta property="og:image" content="https://res.cloudinary.com/dusvquybw/image/upload/v1740486798/e767gffynefbmg5uz631.jpg" />
{/* <meta property="og:description" content="Power house provide a wide range of European electronics (stock and new)" /> */}
     
<meta name="og:description" content={`
        Shop different ${router?.query?.products} We deliver anywhere in lebanon | Best shop in lebanon.`} />
       <meta name="description" content={` Shop different ${router?.query?.products} We deliver anywhere in lebanon | Best shop in lebanon.`} />
        <meta name="viewport" content="width=device-width, initial-scale=1" /> 

    </Head>
    <TopAd/>
    <Navbar/>

    <CategoryMenu category={undefined}/>
    <QuickView productId={quickView.productId} setQuickView={setQuickView} isOpen={quickView.isOpen}/>

  <Box sx={{margin:'0 auto',pt:'1.5em',maxWidth:'xl',mx:'3vw'}}>

<Box className='flexed' sx={{justifyContent:'space-between'}}>
<Breadcrumb params={[`${router.query?.products || 'products'}`]} sx={{margin:0,px:0,py:'1em'}}/>

    <Typography className=''>Showing {products?.length || '0'} products</Typography>
    </Box> 
    <Divider></Divider>
    <Box  sx={{display:'flex',flexWrap:'wrap'
    ,justifyContent:'space-between'
    ,alignItems:'flex-start'
    ,flexDirection:'row'}}>

    <Accordion sx={{display:{md:'none'},width:'100%'}}>
    <AccordionSummary>
        Open Filter
    </AccordionSummary>
    <AccordionDetails>

    
    </AccordionDetails>
    </Accordion>
    <Box sx={{display:{xs:'none',md:'block'},width:'20%'}}>
    </Box>
    <ProductSection count={count} handlePagination={handlePagination}  data={products} setQuickView={handleQuickView}/>
    <Divider/>
  </Box>
    </Box>
  </>
  )
}

export default Index

export async function  getServerSideProps(context:any) {
  // console.log('context: ', );

  let search = context.query?.search;
  let page = context.query?.page ? Number(context.query?.page) : 0;

  let category = context.query?.products.replace(/-/g, ' ') || 'products'

  // const res = await fetch('https://.../posts')
  // const posts = await res.json()
  try {

 
  const data =  await getAll('getdata',12,category,search,page,true)

  if (!data || data?.products?.length < 0 ) {
    return {
      props: {
        data: null,
      },
    }    
  }
  // data.products = data.products.length ? data.products.reverse()
if (data && data.products && data.products.length > 0 && data.products !== undefined) {

  return {
    props: {
      data : data.products.reverse()
      ,count : data?.count
    },
  }
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    // revalidate: 500, // In seconds
  }
  else {
    return {
      props: {
        data: null,
      },
    }  
  }
}
catch(errr){
  console.log('errr: ', errr);
  return {
    props: {
      data : null
      ,count : null
    },
}
}}
