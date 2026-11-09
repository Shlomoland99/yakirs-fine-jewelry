'use client';
import {createContext,useContext,useEffect,useState} from 'react';
import Link from 'next/link';
import {Menu,X,Instagram,MessageCircle} from 'lucide-react';
import {languages,strings,collections,productNames} from '@/lib/site';
type Ctx={lang:string,setLang:(v:string)=>void,t:(key:string)=>string};
const Context=createContext<Ctx>({lang:'en',setLang:()=>{},t:k=>k});
export const useLanguage=()=>useContext(Context);
export function SiteShell({children}:{children:React.ReactNode}){
 const [lang,setLang]=useState('en'),[menu,setMenu]=useState(false);
 useEffect(()=>{const saved=localStorage.getItem('yakirs-lang');if(saved&&strings[saved])setLang(saved)},[]);
 useEffect(()=>{localStorage.setItem('yakirs-lang',lang);document.documentElement.lang=lang;document.documentElement.dir=['he','fa','ar'].includes(lang)?'rtl':'ltr'},[lang]);
 const t=(k:string)=>strings[lang]?.[k]||strings.en[k]||k;
 const nav=[['/',t('home')],['/#collections',t('collections')],['/custom-design',t('custom')],['/atelier',t('atelier')],['/about',t('about')],['/contact',t('contact')]];
 return <Context.Provider value={{lang,setLang,t}}><div className="site-shell">
 <header className="topbar"><Link target="_blank" rel="noopener noreferrer" href="/" className="mini-brand" aria-label="Yakir's Fine Jewelry home">Y<span>✧</span>FJ</Link><nav className="desktop-nav">{nav.map(([url,label])=><Link key={url} href={url} target="_blank" rel="noopener noreferrer">{label}</Link>)}</nav><div className="top-actions"><label className="sr-only" htmlFor="language">Language</label><select id="language" aria-label="Select language" value={lang} onChange={e=>setLang(e.target.value)}>{languages.map(([code,name])=><option key={code} value={code}>{code.toUpperCase()} · {name}</option>)}</select><button className="menu-toggle" aria-label="Toggle navigation" onClick={()=>setMenu(!menu)}>{menu?<X size={20}/>:<Menu size={20}/>}</button></div></header>
 {menu&&<nav className="mobile-nav">{nav.map(([url,label])=><Link onClick={()=>setMenu(false)} key={url} href={url} target="_blank" rel="noopener noreferrer">{label}</Link>)}{collections.map((c,i)=><Link onClick={()=>setMenu(false)} key={c.slug} href={'/'+c.slug} target="_blank" rel="noopener noreferrer">{productNames[lang][i]}</Link>)}</nav>}
 <main>{children}</main><footer className="footer"><Link target="_blank" rel="noopener noreferrer" href="/">YAKIR’S <span>FINE JEWELRY</span></Link><p>Frost Yourself · Timeless Elegance</p><div><Link href="/contact" target="_blank" rel="noopener noreferrer">{t('contact')}</Link><a href="mailto:jlkolframe@gmail.com">jlkolframe@gmail.com</a><a href="https://wa.me/972538217406" target="_blank" rel="noopener noreferrer"><MessageCircle size={16}/> WhatsApp</a></div><small>© {new Date().getFullYear()} Yakir’s Fine Jewelry</small></footer>
 </div></Context.Provider>
}