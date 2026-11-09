import type {Metadata} from 'next';
import './globals.css';
import {SiteShell} from '@/components/SiteShell';
export const metadata:Metadata={title:"Yakir's Fine Jewelry | Frost Yourself",description:'Discover exceptional diamond rings, bracelets, necklaces and earrings. Bespoke luxury jewelry, made to measure.',openGraph:{title:"Yakir's Fine Jewelry",description:'Timeless elegance. Diamond collections.',images:['/assets/approved-homepage.png']}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body><SiteShell>{children}</SiteShell></body></html>}