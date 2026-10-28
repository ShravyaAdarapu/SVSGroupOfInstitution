import {createRoot} from 'react-dom/client';
import {SlideTabs} from './components/ui/slide-tabs';
const navigation=document.getElementById('nav');
if(navigation){const mount=document.createElement('span');mount.className='nav-slide-mount';navigation.append(mount);createRoot(mount).render(<SlideTabs navigation={navigation}/>);}
