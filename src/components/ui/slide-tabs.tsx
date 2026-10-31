import {useEffect,useState} from "react";
import {motion,useReducedMotion} from "motion/react";

type Position={left:number;top:number;width:number;height:number;opacity:number};
/** Enhances the existing semantic links and dropdowns without replacing them. */
export function SlideTabs({navigation}:{navigation:HTMLElement}){
 const [position,setPosition]=useState<Position>({left:0,top:0,width:0,height:0,opacity:0});
 const reduced=useReducedMotion();
 useEffect(()=>{
  const items=Array.from(navigation.children).filter((node):node is HTMLElement=>node instanceof HTMLElement&&node.matches('a,details'));
  const normalize=(value:string)=>new URL(value,location.origin).pathname.replace(/\/index\.html$/,'/').replace(/\.html$/,'').replace(/\/$/,'')||'/';
  const path=normalize(location.href);
  const selected=items.find(item=>Array.from(item.matches('a')?[item]:item.querySelectorAll('a')).some(a=>normalize(a.getAttribute('href')||'/')===path))||items[0];
  if(selected){const link=selected.matches('a')?selected:selected.querySelector('summary');link?.setAttribute('data-nav-current','true');if(link?.matches('a'))link.setAttribute('aria-current','page');}
  const move=(item?:HTMLElement)=>{
   if(!item||matchMedia('(max-width:1100px)').matches){setPosition(p=>({...p,opacity:0}));return;}
   const target=item.matches('details')?item.querySelector('summary')!:item;
   const rect=target.getBoundingClientRect(),base=navigation.getBoundingClientRect();
   setPosition({left:rect.left-base.left-9,top:rect.top-base.top-9,width:rect.width+18,height:rect.height+18,opacity:1});
  };
  const enter=(event:Event)=>{const target=event.target as HTMLElement;const item=items.find(item=>item===target||item.contains(target));if(item)move(item)};
  const restore=()=>move(selected);
  navigation.addEventListener('pointerover',enter);navigation.addEventListener('focusin',enter);navigation.addEventListener('pointerleave',restore);navigation.addEventListener('focusout',restore);
  const observer=new ResizeObserver(restore);observer.observe(navigation);restore();
  return()=>{observer.disconnect();navigation.removeEventListener('pointerover',enter);navigation.removeEventListener('focusin',enter);navigation.removeEventListener('pointerleave',restore);navigation.removeEventListener('focusout',restore)};
 },[navigation]);
 return <motion.span aria-hidden="true" className="nav-slide-cursor" animate={position} transition={reduced?{duration:0}:{type:'spring',stiffness:380,damping:32}}/>;
}
