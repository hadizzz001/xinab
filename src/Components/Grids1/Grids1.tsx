"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function ColdData() {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(`/api/cold1`);
        if (!res.ok) throw new Error("Failed to fetch data");

        const json = await res.json();
        setData(json.data); // Extract data array
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  const items = data.length < 3 ? data : data.slice(0, 9);
  const emptySlots = 3 - items.length;

  return (
    <div className="example1">
      <>
          <style
          id="wp-emoji-styles-inline-css"
          type="text/css"
          dangerouslySetInnerHTML={{
            __html:
              "\n\t\timg.wp-smiley,\n\t\timg.emoji {\n\t\t\tdisplay: inline !important;\n\t\t\tborder: none !important;\n\t\t\tbox-shadow: none !important;\n\t\t\theight: 1em !important;\n\t\t\twidth: 1em !important;\n\t\t\tmargin: 0 0.07em !important;\n\t\t\tvertical-align: -0.1em !important;\n\t\t\tbackground: none !important;\n\t\t\tpadding: 0 !important;\n\t\t}\n\t"
          }}
        />
        <link
          rel="stylesheet"
          id="wp-block-library-css"
          href="wp-includes/css/dist/block-library/style.min.css@ver=6.7.1.css"
          type="text/css"
          media="all"
        />
        <style
          id="classic-theme-styles-inline-css"
          type="text/css"
          dangerouslySetInnerHTML={{
            __html:
              "\n\t\t/*! This file is auto-generated */\n\t\t.wp-block-button__link {\n\t\t\tcolor: #fff;\n\t\t\tbackground-color: #32373c;\n\t\t\tborder-radius: 9999px;\n\t\t\tbox-shadow: none;\n\t\t\ttext-decoration: none;\n\t\t\tpadding: calc(.667em + 2px) calc(1.333em + 2px);\n\t\t\tfont-size: 1.125em\n\t\t}\n\n\t\t.wp-block-file__button {\n\t\t\tbackground: #32373c;\n\t\t\tcolor: #fff;\n\t\t\ttext-decoration: none\n\t\t}\n\t"
          }}
        />
        <style
          id="global-styles-inline-css"
          type="text/css"
          dangerouslySetInnerHTML={{
            __html:
              "\n\t\t:root {\n\t\t\t--wp--preset--aspect-ratio--square: 1;\n\t\t\t--wp--preset--aspect-ratio--4-3: 4/3;\n\t\t\t--wp--preset--aspect-ratio--3-4: 3/4;\n\t\t\t--wp--preset--aspect-ratio--3-2: 3/2;\n\t\t\t--wp--preset--aspect-ratio--2-3: 2/3;\n\t\t\t--wp--preset--aspect-ratio--16-9: 16/9;\n\t\t\t--wp--preset--aspect-ratio--9-16: 9/16;\n\t\t\t--wp--preset--color--black: #000000;\n\t\t\t--wp--preset--color--cyan-bluish-gray: #abb8c3;\n\t\t\t--wp--preset--color--white: #ffffff;\n\t\t\t--wp--preset--color--pale-pink: #f78da7;\n\t\t\t--wp--preset--color--vivid-red: #cf2e2e;\n\t\t\t--wp--preset--color--luminous-vivid-orange: #ff6900;\n\t\t\t--wp--preset--color--luminous-vivid-amber: #fcb900;\n\t\t\t--wp--preset--color--light-green-cyan: #7bdcb5;\n\t\t\t--wp--preset--color--vivid-green-cyan: #00d084;\n\t\t\t--wp--preset--color--pale-cyan-blue: #8ed1fc;\n\t\t\t--wp--preset--color--vivid-cyan-blue: #0693e3;\n\t\t\t--wp--preset--color--vivid-purple: #9b51e0;\n\t\t\t--wp--preset--gradient--vivid-cyan-blue-to-vivid-purple: linear-gradient(135deg, rgba(6, 147, 227, 1) 0%, rgb(155, 81, 224) 100%);\n\t\t\t--wp--preset--gradient--light-green-cyan-to-vivid-green-cyan: linear-gradient(135deg, rgb(122, 220, 180) 0%, rgb(0, 208, 130) 100%);\n\t\t\t--wp--preset--gradient--luminous-vivid-amber-to-luminous-vivid-orange: linear-gradient(135deg, rgba(252, 185, 0, 1) 0%, rgba(255, 105, 0, 1) 100%);\n\t\t\t--wp--preset--gradient--luminous-vivid-orange-to-vivid-red: linear-gradient(135deg, rgba(255, 105, 0, 1) 0%, rgb(207, 46, 46) 100%);\n\t\t\t--wp--preset--gradient--very-light-gray-to-cyan-bluish-gray: linear-gradient(135deg, rgb(238, 238, 238) 0%, rgb(169, 184, 195) 100%);\n\t\t\t--wp--preset--gradient--cool-to-warm-spectrum: linear-gradient(135deg, rgb(74, 234, 220) 0%, rgb(151, 120, 209) 20%, rgb(207, 42, 186) 40%, rgb(238, 44, 130) 60%, rgb(251, 105, 98) 80%, rgb(254, 248, 76) 100%);\n\t\t\t--wp--preset--gradient--blush-light-purple: linear-gradient(135deg, rgb(255, 206, 236) 0%, rgb(152, 150, 240) 100%);\n\t\t\t--wp--preset--gradient--blush-bordeaux: linear-gradient(135deg, rgb(254, 205, 165) 0%, rgb(254, 45, 45) 50%, rgb(107, 0, 62) 100%);\n\t\t\t--wp--preset--gradient--luminous-dusk: linear-gradient(135deg, rgb(255, 203, 112) 0%, rgb(199, 81, 192) 50%, rgb(65, 88, 208) 100%);\n\t\t\t--wp--preset--gradient--pale-ocean: linear-gradient(135deg, rgb(255, 245, 203) 0%, rgb(182, 227, 212) 50%, rgb(51, 167, 181) 100%);\n\t\t\t--wp--preset--gradient--electric-grass: linear-gradient(135deg, rgb(202, 248, 128) 0%, rgb(113, 206, 126) 100%);\n\t\t\t--wp--preset--gradient--midnight: linear-gradient(135deg, rgb(2, 3, 129) 0%, rgb(40, 116, 252) 100%);\n\t\t\t--wp--preset--font-size--small: 13px;\n\t\t\t--wp--preset--font-size--medium: 20px;\n\t\t\t--wp--preset--font-size--large: 36px;\n\t\t\t--wp--preset--font-size--x-large: 42px;\n\t\t\t--wp--preset--spacing--20: 0.44rem;\n\t\t\t--wp--preset--spacing--30: 0.67rem;\n\t\t\t--wp--preset--spacing--40: 1rem;\n\t\t\t--wp--preset--spacing--50: 1.5rem;\n\t\t\t--wp--preset--spacing--60: 2.25rem;\n\t\t\t--wp--preset--spacing--70: 3.38rem;\n\t\t\t--wp--preset--spacing--80: 5.06rem;\n\t\t\t--wp--preset--shadow--natural: 6px 6px 9px rgba(0, 0, 0, 0.2);\n\t\t\t--wp--preset--shadow--deep: 12px 12px 50px rgba(0, 0, 0, 0.4);\n\t\t\t--wp--preset--shadow--sharp: 6px 6px 0px rgba(0, 0, 0, 0.2);\n\t\t\t--wp--preset--shadow--outlined: 6px 6px 0px -3px rgba(255, 255, 255, 1), 6px 6px rgba(0, 0, 0, 1);\n\t\t\t--wp--preset--shadow--crisp: 6px 6px 0px rgba(0, 0, 0, 1);\n\t\t}\n\n\t\t:where(.is-layout-flex) {\n\t\t\tgap: 0.5em;\n\t\t}\n\n\t\t:where(.is-layout-grid) {\n\t\t\tgap: 0.5em;\n\t\t}\n\n\t\tbody .is-layout-flex {\n\t\t\tdisplay: flex;\n\t\t}\n\n\t\t.is-layout-flex {\n\t\t\tflex-wrap: wrap;\n\t\t\talign-items: center;\n\t\t}\n\n\t\t.is-layout-flex> :is(*, div) {\n\t\t\tmargin: 0;\n\t\t}\n\n\t\tbody .is-layout-grid {\n\t\t\tdisplay: grid;\n\t\t}\n\n\t\t.is-layout-grid> :is(*, div) {\n\t\t\tmargin: 0;\n\t\t}\n\n\t\t:where(.wp-block-columns.is-layout-flex) {\n\t\t\tgap: 2em;\n\t\t}\n\n\t\t:where(.wp-block-columns.is-layout-grid) {\n\t\t\tgap: 2em;\n\t\t}\n\n\t\t:where(.wp-block-post-template.is-layout-flex) {\n\t\t\tgap: 1.25em;\n\t\t}\n\n\t\t:where(.wp-block-post-template.is-layout-grid) {\n\t\t\tgap: 1.25em;\n\t\t}\n\n\t\t.has-black-color {\n\t\t\tcolor: var(--wp--preset--color--black) !important;\n\t\t}\n\n\t\t.has-cyan-bluish-gray-color {\n\t\t\tcolor: var(--wp--preset--color--cyan-bluish-gray) !important;\n\t\t}\n\n\t\t.has-white-color {\n\t\t\tcolor: var(--wp--preset--color--white) !important;\n\t\t}\n\n\t\t.has-pale-pink-color {\n\t\t\tcolor: var(--wp--preset--color--pale-pink) !important;\n\t\t}\n\n\t\t.has-vivid-red-color {\n\t\t\tcolor: var(--wp--preset--color--vivid-red) !important;\n\t\t}\n\n\t\t.has-luminous-vivid-orange-color {\n\t\t\tcolor: var(--wp--preset--color--luminous-vivid-orange) !important;\n\t\t}\n\n\t\t.has-luminous-vivid-amber-color {\n\t\t\tcolor: var(--wp--preset--color--luminous-vivid-amber) !important;\n\t\t}\n\n\t\t.has-light-green-cyan-color {\n\t\t\tcolor: var(--wp--preset--color--light-green-cyan) !important;\n\t\t}\n\n\t\t.has-vivid-green-cyan-color {\n\t\t\tcolor: var(--wp--preset--color--vivid-green-cyan) !important;\n\t\t}\n\n\t\t.has-pale-cyan-blue-color {\n\t\t\tcolor: var(--wp--preset--color--pale-cyan-blue) !important;\n\t\t}\n\n\t\t.has-vivid-cyan-blue-color {\n\t\t\tcolor: var(--wp--preset--color--vivid-cyan-blue) !important;\n\t\t}\n\n\t\t.has-vivid-purple-color {\n\t\t\tcolor: var(--wp--preset--color--vivid-purple) !important;\n\t\t}\n\n\t\t.has-black-background-color {\n\t\t\tbackground-color: var(--wp--preset--color--black) !important;\n\t\t}\n\n\t\t.has-cyan-bluish-gray-background-color {\n\t\t\tbackground-color: var(--wp--preset--color--cyan-bluish-gray) !important;\n\t\t}\n\n\t\t.has-white-background-color {\n\t\t\tbackground-color: var(--wp--preset--color--white) !important;\n\t\t}\n\n\t\t.has-pale-pink-background-color {\n\t\t\tbackground-color: var(--wp--preset--color--pale-pink) !important;\n\t\t}\n\n\t\t.has-vivid-red-background-color {\n\t\t\tbackground-color: var(--wp--preset--color--vivid-red) !important;\n\t\t}\n\n\t\t.has-luminous-vivid-orange-background-color {\n\t\t\tbackground-color: var(--wp--preset--color--luminous-vivid-orange) !important;\n\t\t}\n\n\t\t.has-luminous-vivid-amber-background-color {\n\t\t\tbackground-color: var(--wp--preset--color--luminous-vivid-amber) !important;\n\t\t}\n\n\t\t.has-light-green-cyan-background-color {\n\t\t\tbackground-color: var(--wp--preset--color--light-green-cyan) !important;\n\t\t}\n\n\t\t.has-vivid-green-cyan-background-color {\n\t\t\tbackground-color: var(--wp--preset--color--vivid-green-cyan) !important;\n\t\t}\n\n\t\t.has-pale-cyan-blue-background-color {\n\t\t\tbackground-color: var(--wp--preset--color--pale-cyan-blue) !important;\n\t\t}\n\n\t\t.has-vivid-cyan-blue-background-color {\n\t\t\tbackground-color: var(--wp--preset--color--vivid-cyan-blue) !important;\n\t\t}\n\n\t\t.has-vivid-purple-background-color {\n\t\t\tbackground-color: var(--wp--preset--color--vivid-purple) !important;\n\t\t}\n\n\t\t.has-black-border-color {\n\t\t\tborder-color: var(--wp--preset--color--black) !important;\n\t\t}\n\n\t\t.has-cyan-bluish-gray-border-color {\n\t\t\tborder-color: var(--wp--preset--color--cyan-bluish-gray) !important;\n\t\t}\n\n\t\t.has-white-border-color {\n\t\t\tborder-color: var(--wp--preset--color--white) !important;\n\t\t}\n\n\t\t.has-pale-pink-border-color {\n\t\t\tborder-color: var(--wp--preset--color--pale-pink) !important;\n\t\t}\n\n\t\t.has-vivid-red-border-color {\n\t\t\tborder-color: var(--wp--preset--color--vivid-red) !important;\n\t\t}\n\n\t\t.has-luminous-vivid-orange-border-color {\n\t\t\tborder-color: var(--wp--preset--color--luminous-vivid-orange) !important;\n\t\t}\n\n\t\t.has-luminous-vivid-amber-border-color {\n\t\t\tborder-color: var(--wp--preset--color--luminous-vivid-amber) !important;\n\t\t}\n\n\t\t.has-light-green-cyan-border-color {\n\t\t\tborder-color: var(--wp--preset--color--light-green-cyan) !important;\n\t\t}\n\n\t\t.has-vivid-green-cyan-border-color {\n\t\t\tborder-color: var(--wp--preset--color--vivid-green-cyan) !important;\n\t\t}\n\n\t\t.has-pale-cyan-blue-border-color {\n\t\t\tborder-color: var(--wp--preset--color--pale-cyan-blue) !important;\n\t\t}\n\n\t\t.has-vivid-cyan-blue-border-color {\n\t\t\tborder-color: var(--wp--preset--color--vivid-cyan-blue) !important;\n\t\t}\n\n\t\t.has-vivid-purple-border-color {\n\t\t\tborder-color: var(--wp--preset--color--vivid-purple) !important;\n\t\t}\n\n\t\t.has-vivid-cyan-blue-to-vivid-purple-gradient-background {\n\t\t\tbackground: var(--wp--preset--gradient--vivid-cyan-blue-to-vivid-purple) !important;\n\t\t}\n\n\t\t.has-light-green-cyan-to-vivid-green-cyan-gradient-background {\n\t\t\tbackground: var(--wp--preset--gradient--light-green-cyan-to-vivid-green-cyan) !important;\n\t\t}\n\n\t\t.has-luminous-vivid-amber-to-luminous-vivid-orange-gradient-background {\n\t\t\tbackground: var(--wp--preset--gradient--luminous-vivid-amber-to-luminous-vivid-orange) !important;\n\t\t}\n\n\t\t.has-luminous-vivid-orange-to-vivid-red-gradient-background {\n\t\t\tbackground: var(--wp--preset--gradient--luminous-vivid-orange-to-vivid-red) !important;\n\t\t}\n\n\t\t.has-very-light-gray-to-cyan-bluish-gray-gradient-background {\n\t\t\tbackground: var(--wp--preset--gradient--very-light-gray-to-cyan-bluish-gray) !important;\n\t\t}\n\n\t\t.has-cool-to-warm-spectrum-gradient-background {\n\t\t\tbackground: var(--wp--preset--gradient--cool-to-warm-spectrum) !important;\n\t\t}\n\n\t\t.has-blush-light-purple-gradient-background {\n\t\t\tbackground: var(--wp--preset--gradient--blush-light-purple) !important;\n\t\t}\n\n\t\t.has-blush-bordeaux-gradient-background {\n\t\t\tbackground: var(--wp--preset--gradient--blush-bordeaux) !important;\n\t\t}\n\n\t\t.has-luminous-dusk-gradient-background {\n\t\t\tbackground: var(--wp--preset--gradient--luminous-dusk) !important;\n\t\t}\n\n\t\t.has-pale-ocean-gradient-background {\n\t\t\tbackground: var(--wp--preset--gradient--pale-ocean) !important;\n\t\t}\n\n\t\t.has-electric-grass-gradient-background {\n\t\t\tbackground: var(--wp--preset--gradient--electric-grass) !important;\n\t\t}\n\n\t\t.has-midnight-gradient-background {\n\t\t\tbackground: var(--wp--preset--gradient--midnight) !important;\n\t\t}\n\n\t\t.has-small-font-size {\n\t\t\tfont-size: var(--wp--preset--font-size--small) !important;\n\t\t}\n\n\t\t.has-medium-font-size {\n\t\t\tfont-size: var(--wp--preset--font-size--medium) !important;\n\t\t}\n\n\t\t.has-large-font-size {\n\t\t\tfont-size: var(--wp--preset--font-size--large) !important;\n\t\t}\n\n\t\t.has-x-large-font-size {\n\t\t\tfont-size: var(--wp--preset--font-size--x-large) !important;\n\t\t}\n\n\t\t:where(.wp-block-post-template.is-layout-flex) {\n\t\t\tgap: 1.25em;\n\t\t}\n\n\t\t:where(.wp-block-post-template.is-layout-grid) {\n\t\t\tgap: 1.25em;\n\t\t}\n\n\t\t:where(.wp-block-columns.is-layout-flex) {\n\t\t\tgap: 2em;\n\t\t}\n\n\t\t:where(.wp-block-columns.is-layout-grid) {\n\t\t\tgap: 2em;\n\t\t}\n\n\t\t:root :where(.wp-block-pullquote) {\n\t\t\tfont-size: 1.5em;\n\t\t\tline-height: 1.6;\n\t\t}\n\t"
          }}
        />
        <link
          rel="stylesheet"
          id="contact-form-7-css"
          href="wp-content/plugins/contact-form-7/includes/css/styles.css@ver=6.0.css"
          type="text/css"
          media="all"
        />
        <link
          rel="stylesheet"
          id="gdlr-core-google-font-css"
          href="https://fonts.googleapis.com/css?family=Poppins%3A100%2C100italic%2C200%2C200italic%2C300%2C300italic%2Cregular%2Citalic%2C500%2C500italic%2C600%2C600italic%2C700%2C700italic%2C800%2C800italic%2C900%2C900italic%7CMontserrat%3A100%2C100italic%2C200%2C200italic%2C300%2C300italic%2Cregular%2Citalic%2C500%2C500italic%2C600%2C600italic%2C700%2C700italic%2C800%2C800italic%2C900%2C900italic%7CMerriweather%3A300%2C300italic%2Cregular%2Citalic%2C700%2C700italic%2C900%2C900italic&subset=devanagari%2Clatin%2Clatin-ext%2Ccyrillic%2Ccyrillic-ext%2Cvietnamese&ver=6.7.1"
          type="text/css"
          media="all"
        />
        <link
          rel="stylesheet"
          id="font-awesome-css"
          href="wp-content/plugins/goodlayers-core/plugins/fontawesome/font-awesome.css@ver=6.7.1.css"
          type="text/css"
          media="all"
        />
        <link
          rel="stylesheet"
          id="elegant-font-css"
          href="wp-content/plugins/goodlayers-core/plugins/elegant/elegant-font.css@ver=6.7.1.css"
          type="text/css"
          media="all"
        />
        <link
          rel="stylesheet"
          id="gdlr-core-plugin-css"
          href="wp-content/plugins/goodlayers-core/plugins/style.css@ver=1730647862.css"
          type="text/css"
          media="all"
        />
        <link
          rel="stylesheet"
          id="gdlr-core-page-builder-css"
          href="wp-content/plugins/goodlayers-core/include/css/page-builder.css@ver=6.7.1.css"
          type="text/css"
          media="all"
        />
        <link
          rel="stylesheet"
          id="newsletter-css"
          href="wp-content/plugins/newsletter/style.css@ver=8.6.2.css"
          type="text/css"
          media="all"
        />
        <link
          rel="stylesheet"
          id="attorna-style-core-css"
          href="wp-content/themes/attorna/css/style-core.css@ver=6.7.1.css"
          type="text/css"
          media="all"
        />
        <link
          rel="stylesheet"
          id="attorna-custom-style-css"
          href="wp-content/uploads/attorna-style-custom.css@1699161622&ver=6.7.1.css"
          type="text/css"
          media="all"
        />
        <link rel="stylesheet" href="mystyle.css" type="text/css" media="all" />
        {/*[if lt IE 9]>

<![endif]*/}
        <link rel="https://api.w.org/" href="wp-json/index.html" />
        <link
          rel="alternate"
          title="JSON"
          type="application/json"
          href="wp-json/wp/v2/pages/2039"
        />
        <link
          rel="EditURI"
          type="application/rsd+xml"
          title="RSD"
          href="https://murphysolicitors.co.uk/xmlrpc.php?rsd"
        />
        <link rel="shortlink" href="index.html" />
        <link
          rel="alternate"
          title="oEmbed (JSON)"
          type="application/json+oembed"
          href="wp-json/oembed/1.0/embed@url=https%253A%252F%252Fmurphysolicitors.co.uk%252F"
        />
        <link
          rel="alternate"
          title="oEmbed (XML)"
          type="text/xml+oembed"
          href="wp-json/oembed/1.0/embed@url=https%253A%252F%252Fmurphysolicitors.co.uk%252F&format=xml"
        />
        <style
          dangerouslySetInnerHTML={{
            __html:
              "\n\t\t@media only screen and (max-width: 999px) {\n\t\t\t#gdlr-core-wrapper-1.gdlr-core-pbf-wrapper {}\n\n\t\t\t#gdlr-core-wrapper-1.gdlr-core-pbf-wrapper {\n\t\t\t\tmargin-top: -50px !important;\n\t\t\t}\n\t\t}\n\n\t\t@media only screen and (max-width: 767px) {\n\t\t\t#gdlr-core-wrapper-1.gdlr-core-pbf-wrapper {}\n\n\t\t\t#gdlr-core-wrapper-1.gdlr-core-pbf-wrapper {}\n\t\t}\n\n\t\t#gdlr-core-column-1:hover .gdlr-core-pbf-column-content-margin,\n\t\t#gdlr-core-column-1:hover .gdlr-core-pbf-column-content-margin .gdlr-core-pbf-background-wrap,\n\t\t#gdlr-core-column-1:hover .gdlr-core-pbf-column-content-margin .gdlr-core-pbf-background-frame {\n\t\t\tborder-color: #ffffff !important;\n\t\t}\n\n\t\t@media only screen and (max-width: 999px) {\n\t\t\t#gdlr-core-column-1 .gdlr-core-pbf-column-content-margin {\n\t\t\t\tpadding: 40px 30px 10px 20px !important;\n\t\t\t}\n\t\t}\n\n\t\t@media only screen and (max-width: 999px) {\n\t\t\t#gdlr-core-column-1 .gdlr-core-pbf-column-content-margin {\n\t\t\t\tmargin-right: 0px !important;\n\t\t\t\tmargin-left: 0px !important;\n\t\t\t}\n\t\t}\n\n\t\t@media only screen and (max-width: 767px) {\n\t\t\t#gdlr-core-column-1 .gdlr-core-pbf-column-content-margin {}\n\t\t}\n\n\t\t@media only screen and (max-width: 767px) {\n\t\t\t#gdlr-core-column-1 .gdlr-core-pbf-column-content-margin {\n\t\t\t\tmargin: 0px 0px 0px 0px !important;\n\t\t\t}\n\t\t}\n\n\t\t#gdlr-core-column-2:hover .gdlr-core-pbf-column-content-margin,\n\t\t#gdlr-core-column-2:hover .gdlr-core-pbf-column-content-margin .gdlr-core-pbf-background-wrap,\n\t\t#gdlr-core-column-2:hover .gdlr-core-pbf-column-content-margin .gdlr-core-pbf-background-frame {\n\t\t\tborder-color: #ffffff !important;\n\t\t}\n\n\t\t@media only screen and (max-width: 767px) {\n\t\t\t#gdlr-core-wrapper-2.gdlr-core-pbf-wrapper {\n\t\t\t\tpadding-top: 80px !important;\n\t\t\t\tpadding-bottom: 60px !important;\n\t\t\t}\n\t\t}\n\n\t\t@media only screen and (max-width: 999px) {\n\t\t\t#gdlr-core-wrapper-3.gdlr-core-pbf-wrapper {\n\t\t\t\tpadding: 120px 50px 120px 50px !important;\n\t\t\t}\n\n\t\t\t#gdlr-core-wrapper-3.gdlr-core-pbf-wrapper {}\n\t\t}\n\n\t\t@media only screen and (max-width: 767px) {\n\t\t\t#gdlr-core-wrapper-3.gdlr-core-pbf-wrapper {\n\t\t\t\tpadding: 80px 0px 80px 0px !important;\n\t\t\t}\n\t\t}\n\n\t\t@media only screen and (max-width: 767px) {\n\t\t\t#gdlr-core-column-3 .gdlr-core-pbf-column-content-margin {\n\t\t\t\tpadding-bottom: 10px !important;\n\t\t\t}\n\t\t}\n\n\t\t#gdlr-core-column-4:hover .gdlr-core-pbf-column-content-margin,\n\t\t#gdlr-core-column-4:hover .gdlr-core-pbf-column-content-margin .gdlr-core-pbf-background-wrap,\n\t\t#gdlr-core-column-4:hover .gdlr-core-pbf-column-content-margin .gdlr-core-pbf-background-frame {\n\t\t\tborder-color: #ffffff !important;\n\t\t}\n\n\t\t@media only screen and (max-width: 999px) {\n\t\t\t#gdlr-core-column-4 .gdlr-core-pbf-column-content-margin {\n\t\t\t\tpadding-right: 0px !important;\n\t\t\t\tpadding-left: 0px !important;\n\t\t\t}\n\t\t}\n\n\t\t@media only screen and (max-width: 999px) {\n\t\t\t#gdlr-core-wrapper-4.gdlr-core-pbf-wrapper {\n\t\t\t\tpadding-bottom: 20px !important;\n\t\t\t}\n\n\t\t\t#gdlr-core-wrapper-4.gdlr-core-pbf-wrapper {\n\t\t\t\tmargin-top: 20px !important;\n\t\t\t}\n\t\t}\n\n\t\t@media only screen and (max-width: 767px) {\n\t\t\t#gdlr-core-wrapper-4.gdlr-core-pbf-wrapper {\n\t\t\t\tpadding-bottom: 20px !important;\n\t\t\t}\n\n\t\t\t#gdlr-core-wrapper-4.gdlr-core-pbf-wrapper {\n\t\t\t\tmargin-top: 20px !important;\n\t\t\t}\n\t\t}\n\n\t\t#gdlr-core-column-5:hover .gdlr-core-pbf-column-content-margin,\n\t\t#gdlr-core-column-5:hover .gdlr-core-pbf-column-content-margin .gdlr-core-pbf-background-wrap,\n\t\t#gdlr-core-column-5:hover .gdlr-core-pbf-column-content-margin .gdlr-core-pbf-background-frame {\n\t\t\tborder-color: #ffffff !important;\n\t\t}\n\n\t\t@media only screen and (max-width: 767px) {\n\t\t\t#gdlr-core-column-5 .gdlr-core-pbf-column-content-margin {\n\t\t\t\tpadding-top: 60px !important;\n\t\t\t\tpadding-bottom: 0px !important;\n\t\t\t}\n\t\t}\n\n\t\t@media only screen and (max-width: 999px) {\n\t\t\t#gdlr-core-wrapper-5.gdlr-core-pbf-wrapper {\n\t\t\t\tpadding-right: 60px !important;\n\t\t\t\tpadding-left: 60px !important;\n\t\t\t}\n\t\t}\n\n\t\t@media only screen and (max-width: 767px) {\n\t\t\t#gdlr-core-wrapper-5.gdlr-core-pbf-wrapper {\n\t\t\t\tpadding: 80px 0px 80px 0px !important;\n\t\t\t}\n\t\t}\n\n\t\t@media only screen and (max-width: 767px) {\n\t\t\t#gdlr-core-wrapper-6.gdlr-core-pbf-wrapper {\n\t\t\t\tpadding-top: 80px !important;\n\t\t\t\tpadding-bottom: 60px !important;\n\t\t\t}\n\t\t}\n\n\t\t@media only screen and (max-width: 999px) {\n\t\t\t#gdlr-core-wrapper-7.gdlr-core-pbf-wrapper {\n\t\t\t\tpadding-top: 80px !important;\n\t\t\t\tpadding-bottom: 45px !important;\n\t\t\t}\n\t\t}\n\n\t\t@media only screen and (max-width: 767px) {\n\t\t\t#gdlr-core-wrapper-7.gdlr-core-pbf-wrapper {\n\t\t\t\tpadding-top: 80px !important;\n\t\t\t}\n\t\t}\n\t"
          }}
        />
        <meta name="generator" content="Site Kit by Google 1.140.0" />
        <style
          type="text/css"
          dangerouslySetInnerHTML={{
            __html:
              "\n\t\t.recentcomments a {\n\t\t\tdisplay: inline !important;\n\t\t\tpadding: 0 !important;\n\t\t\tmargin: 0 !important;\n\t\t}\n\t"
          }}
        />
        <meta
          name="generator"
          content="Powered by Slider Revolution 6.7.18 - responsive, Mobile-Friendly Slider Plugin for WordPress with comfortable drag and drop interface."
        />
        <link
          rel="icon"
          href="wp-content/uploads/2022/02/cropped-android-chrome-512x512-1-32x32.png"
          sizes="32x32"
        />
        <link
          rel="icon"
          href="wp-content/uploads/2022/02/cropped-android-chrome-512x512-1-192x192.png"
          sizes="192x192"
        />
        <link
          rel="apple-touch-icon"
          href="wp-content/uploads/2022/02/cropped-android-chrome-512x512-1-180x180.png"
        />
        <meta
          name="msapplication-TileImage"
          content="https://murphysolicitors.co.uk/wp-content/uploads/2022/02/cropped-android-chrome-512x512-1-270x270.png"
        />
        <style
          id="wpforms-css-vars-root"
          dangerouslySetInnerHTML={{
            __html:
              "\n\t\t:root {\n\t\t\t--wpforms-field-border-radius: 3px;\n\t\t\t--wpforms-field-border-style: solid;\n\t\t\t--wpforms-field-border-size: 1px;\n\t\t\t--wpforms-field-background-color: #ffffff;\n\t\t\t--wpforms-field-border-color: rgba(0, 0, 0, 0.25);\n\t\t\t--wpforms-field-border-color-spare: rgba(0, 0, 0, 0.25);\n\t\t\t--wpforms-field-text-color: rgba(0, 0, 0, 0.7);\n\t\t\t--wpforms-field-menu-color: #ffffff;\n\t\t\t--wpforms-label-color: rgba(0, 0, 0, 0.85);\n\t\t\t--wpforms-label-sublabel-color: rgba(0, 0, 0, 0.55);\n\t\t\t--wpforms-label-error-color: #d63637;\n\t\t\t--wpforms-button-border-radius: 3px;\n\t\t\t--wpforms-button-border-style: none;\n\t\t\t--wpforms-button-border-size: 1px;\n\t\t\t--wpforms-button-background-color: #066aab;\n\t\t\t--wpforms-button-border-color: #066aab;\n\t\t\t--wpforms-button-text-color: #ffffff;\n\t\t\t--wpforms-page-break-color: #066aab;\n\t\t\t--wpforms-background-image: none;\n\t\t\t--wpforms-background-position: center center;\n\t\t\t--wpforms-background-repeat: no-repeat;\n\t\t\t--wpforms-background-size: cover;\n\t\t\t--wpforms-background-width: 100px;\n\t\t\t--wpforms-background-height: 100px;\n\t\t\t--wpforms-background-color: rgba(0, 0, 0, 0);\n\t\t\t--wpforms-background-url: none;\n\t\t\t--wpforms-container-padding: 0px;\n\t\t\t--wpforms-container-border-style: none;\n\t\t\t--wpforms-container-border-width: 1px;\n\t\t\t--wpforms-container-border-color: #000000;\n\t\t\t--wpforms-container-border-radius: 3px;\n\t\t\t--wpforms-field-size-input-height: 43px;\n\t\t\t--wpforms-field-size-input-spacing: 15px;\n\t\t\t--wpforms-field-size-font-size: 16px;\n\t\t\t--wpforms-field-size-line-height: 19px;\n\t\t\t--wpforms-field-size-padding-h: 14px;\n\t\t\t--wpforms-field-size-checkbox-size: 16px;\n\t\t\t--wpforms-field-size-sublabel-spacing: 5px;\n\t\t\t--wpforms-field-size-icon-size: 1;\n\t\t\t--wpforms-label-size-font-size: 16px;\n\t\t\t--wpforms-label-size-line-height: 19px;\n\t\t\t--wpforms-label-size-sublabel-font-size: 14px;\n\t\t\t--wpforms-label-size-sublabel-line-height: 17px;\n\t\t\t--wpforms-button-size-font-size: 17px;\n\t\t\t--wpforms-button-size-height: 41px;\n\t\t\t--wpforms-button-size-padding-h: 15px;\n\t\t\t--wpforms-button-size-margin-top: 10px;\n\t\t\t--wpforms-container-shadow-size-box-shadow: none;\n\n\t\t}\n\t"
          }}
        />
        <link
          rel="stylesheet"
          href="https://unpkg.com/swiper/swiper-bundle.min.css"
        />
        <style
          dangerouslySetInnerHTML={{
            __html:
              "\n\t\t.swiper-slide {\n\t\t\ttext-align: center;\n\t\t\tpadding: 20px;\n\t\t}\n\n\t\t.swiper-slide h3 {\n\t\t\tfont-size: 1.5em;\n\t\t\tmargin: 10px 0;\n\t\t\tcolor: #333;\n\t\t}\n\n\t\t.swiper-slide p {\n\t\t\tfont-size: 1em;\n\t\t\tcolor: #555;\n\t\t}\n\t"
          }}
        />
      </>

      <style>
        {`
          .example1 { padding: 20px; }
          .example2 { text-align: center; }
          .example3 { display: grid; grid-template-columns: repeat(3, 1fr); gap: 2px; justify-items: center; }
          .example4 { text-align: center; padding: 16px; width: 100%; max-width: 400px; }
          .example5 { width: 100%; max-width: 380px; height: 200px; object-fit: cover; }
          .example6 { font-size: 1.5em; margin: 16px 0; }
          .example7 { font-size: 1em; color: #666; }
          .example8 { margin-top: 12px; padding: 10px 20px; background-color: transparent; border-radius: 4px; color: #0794ca; border: 1px solid #0794ca; cursor: pointer; }
          .example9 { display: flex; justify-content: center; align-items: center; flex-direction: column; padding: 10px; max-width: 100%; overflow: hidden; }
          @media (max-width: 768px) {
            .example3 { grid-template-columns: 1fr; }
            .example4 { max-width: 90%; }
          }
        `}
      </style>

      
      <div className="gdlr-core-pbf-wrapper-content gdlr-core-js ">
        <div className="gdlr-core-pbf-wrapper-container clearfix gdlr-core-container">
          <div className="gdlr-core-pbf-element">
            <div
              className="gdlr-core-title-item gdlr-core-item-pdb clearfix  gdlr-core-center-align gdlr-core-title-item-caption-top gdlr-core-item-pdlr"
              style={{ paddingBottom: 20 }}
            >
              <span
                className="gdlr-core-title-item-caption gdlr-core-info-font gdlr-core-skin-caption"
                style={{
                  fontSize: 13,
                  fontWeight: 600,
                  fontStyle: "normal",
                  letterSpacing: 3,
                  textTransform: "uppercase",
                  color: "#a8a8a8"
                }}
              >
                Discover Our
              </span>
              <div className="gdlr-core-title-item-title-wrap ">
                <h3
                  className="gdlr-core-title-item-title gdlr-core-skin-title "
                  style={{ fontSize: 30, fontWeight: 700, textTransform: "none" }}
                >
                  Medical Products & Services
                  <span className="gdlr-core-title-item-title-divider gdlr-core-skin-divider" />
                </h3>
              </div>
            </div>
          </div>
          <div className="gdlr-core-pbf-element">
            <div
              className="gdlr-core-divider-item gdlr-core-divider-item-normal gdlr-core-item-pdlr gdlr-core-center-align gdlr-core-style-vertical"
              style={{ marginBottom: 70 }}
            >
              <div
                className="gdlr-core-divider-line gdlr-core-skin-divider"
                style={{ borderColor: "#0794ca", height: 27 }}
              />
            </div>
          </div>





          {items.map((item, index) => (
          <div key={index} className="gdlr-core-pbf-column gdlr-core-column-20">
            <div
              className="gdlr-core-pbf-column-content-margin gdlr-core-js"
              style={{ padding: "0px 0px 40px 0px" }}
            >
              <div className="gdlr-core-pbf-background-wrap" />
              <div className="gdlr-core-pbf-column-content clearfix gdlr-core-js">
                {/* Image Section */}
                <div className="gdlr-core-pbf-element">
                  <div
                    className="gdlr-core-image-item gdlr-core-item-pdb gdlr-core-center-align gdlr-core-item-pdlr"
                    style={{ paddingBottom: 38 }}
                  >
                    <div
                      className="gdlr-core-image-item-wrap gdlr-core-media-image gdlr-core-image-item-style-rectangle"
                      style={{ borderWidth: 0 }}
                    >
                      <img
                        src={item.images[0]}
                        alt={item.title}
                        width={599} 
                        className="example5"
                      />
                      <style
  dangerouslySetInnerHTML={{
    __html:
      "\n    .example5 {\n  height: 100%;\n  object-fit: cover; /* Optional: ensures the image maintains its aspect ratio */\n}\n"
  }}
/>

                    </div>
                  </div>
                </div>

                {/* Title Section */}
                <div className="gdlr-core-pbf-element">
                  <div
                    className="gdlr-core-title-item gdlr-core-item-pdb clearfix gdlr-core-center-align gdlr-core-title-item-caption-top gdlr-core-item-pdlr"
                    style={{ paddingBottom: 22 }}
                  >
                    <div className="gdlr-core-title-item-title-wrap">
                      <h3
                        className="gdlr-core-title-item-title gdlr-core-skin-title"
                        style={{
                          fontSize: 15,
                          fontWeight: 600,
                          letterSpacing: 3,
                          color: "#454545",
                        }}
                      >
                        {item.title.slice(0, 100)}
                        {item.title.length > 100 ? "..." : ""}
                        <span className="gdlr-core-title-item-title-divider gdlr-core-skin-divider" />
                      </h3>
                    </div>
                  </div>
                </div>

                {/* Description Section */}
                <div className="gdlr-core-pbf-element">
                  <div
                    className="gdlr-core-text-box-item gdlr-core-item-pdlr gdlr-core-item-pdb gdlr-core-center-align gdlr-core-no-p-space"
                    style={{ paddingBottom: 22 }}
                  >
                    <div
                      className="gdlr-core-text-box-item-content"
                      style={{ textTransform: "none" }}
                    >
                      <p>
                        {item.description.slice(0, 180)}
                        {item.description.length > 180 ? "..." : ""}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Learn More Button */}
                <div className="gdlr-core-pbf-element">
                  <div className="gdlr-core-button-item gdlr-core-item-pdlr gdlr-core-item-pdb gdlr-core-center-align">
                    <Link
                      href={`/posts/${item._id}`}
                      className="gdlr-core-button gdlr-core-button-transparent gdlr-core-center-align gdlr-core-button-no-border"
                      style={{
                        fontSize: 13,
                        fontStyle: "normal",
                        fontWeight: 600,
                        letterSpacing: 2,
                        color: "#0794ca",
                        padding: "0px 0px 0px 0px",
                        borderRadius: 0,
                      }}
                    >
                      <span className="gdlr-core-content">
                        Learn More
                        <i
                          className="gdlr-core-pos-right fa fa-long-arrow-right"
                          style={{ color: "#0794ca" }}
                        />
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Fill Empty Slots */}
        {items.length < 3 &&
          Array.from({ length: emptySlots }).map((_, i) => (
            <div key={`empty-${i}`} className="gdlr-core-pbf-column gdlr-core-column-20"></div>
          ))}









        </div>
      </div>




    </div>
  );
}
