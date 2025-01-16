"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { server } from "../../src/Utils/Server";
import React from 'react'
import Navbar from '../../src/Components/Navbar/Navbar'
import Head from 'next/head'
import Breadcrumb from '../../src/Components/Breadcrumbs/Breadcrumb'
import { Box, Button, Divider, IconButton, Tooltip, Typography } from '@mui/material'
import ProductCarousel from '../../src/Components/ProductCarousel/ProductCarousel'
// import SelectOneForm from '../../src/Components/ProductsComponents/Filter/Forms/SelectOneForm'
// import { QuantityPicker } from 'react-qty-picker';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ProductCollection from '../../src/Components/HomeComponents/ProductCollection/ProductCollection'
import CategoryMenu from '../../src/Components/HomeComponents/CategoryMenu/CategoryMenu'
import Perks from '../../src/Components/HomeComponents/Perks/Perks'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import ItemTabs from '../../src/Components/ItemComponents/ItemTabs'
// import Link from 'next/link'
import Btn from '../../src/Components/Btn/Btn'
import { QuantityPicker } from '../../src/Components/QuantityPicker/QuantityPicker'
import useCart from '../../src/Hooks/useCart' 
import { getAll } from '..'

export default function PostDetail() {
  const router = useRouter();
  const { id } = router.query; // Get post ID from URL
  const [post, setPost] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;

    async function fetchPost() {
      try {
        const res = await fetch(`/api/posts/${id}`);
        if (!res.ok) throw new Error("Failed to fetch post");

        const json = await res.json();
        setPost(json.data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchPost();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  if (!post) return <p>Post not found</p>;

  return (
    <>
    <Head>
    <title>Oxinab | View Product</title>
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
{/* <meta property="og:description" content="Power house provide a wide range of European electronics (stock and new)" /> */}





<meta name="og:description" content={`
       Oxinab specializing in providing high-quality medical supplies and healthcare solutions.
       `} />
      <meta name="description" content={`
       Oxinab specializing in providing high-quality medical supplies and healthcare solutions.
       `} />
       <meta name="viewport" content="width=device-width, initial-scale=1" />   
   </Head>
   <Navbar/>
   <CategoryMenu category={undefined}/>





   <div
  style={{
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "20px",
    maxWidth: "800px",
    margin: "auto",
  }}
>
  <div style={{ flex: "1", marginRight: "20px" }}>
    <img
      src={post.images[0]}
      alt={post.title}
      style={{
        width: "100%",
        height: "300px",
        objectFit: "cover",
      }}
    />
  </div>
  <div style={{ flex: "1" }}>
    <h1 style={{ fontSize: "2em", marginBottom: "20px" }}>{post.title}</h1>
    <p style={{ fontSize: "1.2em", color: "#555" }}>{post.description}</p>
  </div>
</div>

<style jsx>{`
  @media (max-width: 768px) {
    div {
      flex-direction: column;
    }

    div > div {
      margin-right: 0;
      margin-bottom: 20px;
    }
  }
`}</style>











     
     <Perks/>
 </>



  );
}























 