"use strict";(self.webpackChunkssa_to=self.webpackChunkssa_to||[]).push([[9376],{19376:(t,e,n)=>{n.r(e),n.d(e,{encodeSemanticTokensDto:()=>s});var a=n(42802),l=n(63339);function s(t){const e=new Uint32Array(function(t){let e=0;if(e+=2,"full"===t.type)e+=1+t.data.length;else{e+=1,e+=3*t.deltas.length;for(const n of t.deltas)n.data&&(e+=n.data.length)}return e}(t));let n=0;if(e[n++]=t.id,"full"===t.type)e[n++]=1,e[n++]=t.data.length,e.set(t.data,n),n+=t.data.length;else{e[n++]=2,e[n++]=t.deltas.length;for(const a of t.deltas)e[n++]=a.start,e[n++]=a.deleteCount,a.data?(e[n++]=a.data.length,e.set(a.data,n),n+=a.data.length):e[n++]=0}return function(t){const e=new Uint8Array(t.buffer,t.byteOffset,4*t.length);return l.cm()||function(t){for(let e=0,n=t.length;e<n;e+=4){const n=t[e+0],a=t[e+1],l=t[e+2],s=t[e+3];t[e+0]=s,t[e+1]=l,t[e+2]=a,t[e+3]=n}}(e),a.MB.wrap(e)}(e)}}}]);