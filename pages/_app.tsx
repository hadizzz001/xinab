import { useState } from 'react';
import SideBar from '../src/Components/Drawer/SideBar'
import '../styles/Styles.css'
import '../styles/qty.css'
import type { AppProps }
  from 'next/app'
import { createContext } from "react";
import QuickCart from '../src/Components/Drawer/QuickCart';
import NextNProgress from 'nextjs-progressbar';
export const DrawerContext = createContext<any>({});
export const CartContext = createContext<any>({});
export const Categories = createContext<any>([]);

export default function App({ Component, pageProps }: AppProps) {
  const [open,
    setOpen] = useState(false);
  const [cartOpen,
    setCartOpen] = useState(false);
  const [cates,
    setCates] = useState([]);

  return <DrawerContext.Provider value={[open, setOpen]}>
    <Categories.Provider value={[cates, setCates]}>
      <CartContext.Provider value={[cartOpen, setCartOpen]}>
        <SideBar cates={cates} />
        <NextNProgress />
        <QuickCart />
        <Component {...pageProps} />
      </CartContext.Provider>
    </Categories.Provider>
    <style
      dangerouslySetInnerHTML={{
        __html: "\n  .css-1de4lbj {\n    background: #fff; \n}\n"
      }}
    />
    <style
      dangerouslySetInnerHTML={{
        __html:
          "\n  .css-r5rjk5-MuiPaper-root-MuiAppBar-root {\n    background: #fff; \n}\n"
      }}
    />

    <style
      dangerouslySetInnerHTML={{
        __html: "\n  .css-1iibw1i { \n        background: white !important;\n}\n"
      }}
    />
<link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" />
<link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Raleway:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"/>
<style
  dangerouslySetInnerHTML={{
    __html:
      '\n  .css-1bjm438-MuiTypography-root{ \n      font-family: "Lato", serif !important;\n  font-weight: 700 !important;\n  }\n'
  }}
/>
<style
  dangerouslySetInnerHTML={{
    __html:
      '\n  .css-h0szu9{\n      font-family: "Lato", serif !important;\n  font-weight: 700 !important;\n  }\n'
  }}
/>


  </DrawerContext.Provider>
}
