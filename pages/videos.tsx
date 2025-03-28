
import  Head from 'next/head'
import {useRouter} from 'next/router'
import React, { useEffect, useState } from 'react'
import Perks from '../src/Components/HomeComponents/Perks/Perks'
import TopAd from '../src/Components/HomeComponents/TopAd/TopAd'
import Navbar from '../src/Components/Navbar/Navbar'
import { Box, Grid, Typography } from '@mui/material'
import ReactPlayer from 'react-player'
import WhatsApp from '../src/Components/SocialMedia/Whatsapp'
import { getAll } from '.'
import Link from 'next/link'
import { IProduct } from '../src/Types/Types'

const Index = () => {
    const router= useRouter()
    const [hasWindow, setHasWindow] = useState(false);
    const [videos, setVideos] = useState<IProduct[] | []> ([]);
    const fetchVideos = async () => {
          const res = await getAll('/videos',30,undefined,undefined,0,true)
          console.log('res: ', res);
          if (res && res.length > 0) {
            setVideos(res)
          }
    }
    useEffect(() => {
      fetchVideos()
        if (typeof window !== "undefined") {
          setHasWindow(true);
        }
      }, []);
  return (
    <>
      <Head>
    <title>Powerhouse lb Electronics | Videos </title>
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
       We deliver anywhere in lebanon | Best shop in lebanon.`} />
       <meta name="description" content={`We deliver anywhere in lebanon | Best  shop in lebanon.`} />
        <meta name="viewport" content="width=device-width, initial-scale=1" /> 

    </Head>
    <TopAd/>
    <Navbar/>
    <main>
    <WhatsApp/>
    <Box
                sx={{ 
                padding: '.5em',
                my:6,
                fontSize: '1.75em',
                fontWeight: '500'
            }}>View All Videos</Box>
      <Grid container sx={{px:1,maxWidth:'lg',margin:'0 auto'}}>
      {hasWindow && 
      
      videos && videos?.length > 0 ?  videos.map(vid=>{
        if (!vid || !vid?.videoUrl || vid?.videoUrl?.length < 2) return;
      return <Grid key={vid?._id} item xs={12} sm={6}>
        <Box sx={{ width: { xs: '100%', sm: '500px' } }}>
                                <ReactPlayer
                                 
                                loop width={'100%'} style={{
                                    width: '100%',
                                }} controls playing={true} url={`${vid?.videoUrl}`} />


                        <Typography 
                
                        onClick={()=>{
                          router.push(`/product/${vid?._id}?title=${`${vid?.title}`.substring(0,100).replace(/\s+/g, '-')}&category=${vid?.category ? vid?.category : 'products'}`)
                        }}
                        component={'h1'} sx={{cursor:'pointer',fontSize:'1.15em',fontWeight:'600',pt:.5,}}>
                        {vid.title}
                        </Typography>
                        <Typography sx={{color:'#007000'}}>
                       ${vid.price}
                        </Typography>
           
                            </Box>
          </Grid>})
        : <Box>Loading videos...</Box>  
        }
      </Grid>
      <Perks/>


    </main>
    
    
    </>
  )
}

export default Index