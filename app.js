const nav=document.querySelector(".main-nav");const toggle=document.querySelector(".menu-toggle");toggle?.addEventListener("click",()=>{const open=toggle.getAttribute("aria-expanded")==="true";toggle.setAttribute("aria-expanded",String(!open));toggle.setAttribute("aria-label",open?"Abrir menu":"Fechar menu");nav?.classList.toggle("is-open",!open)});nav?.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>{nav.classList.remove("is-open");toggle?.setAttribute("aria-expanded","false");toggle?.setAttribute("aria-label","Abrir menu")}));document.querySelector("#year").textContent=new Date().getFullYear();const items=document.querySelectorAll("main section");if("IntersectionObserver"in window&&!window.matchMedia("(prefers-reduced-motion: reduce)").matches){const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add("is-visible");observer.unobserve(entry.target)}}),{threshold:.08});items.forEach(el=>el.classList.add("reveal"));items.forEach(el=>observer.observe(el))}else items.forEach(el=>el.classList.add("is-visible"));const form=document.querySelector("#contact-form");const status=document.querySelector("#form-status");form?.addEventListener("submit",async event=>{event.preventDefault();if(!form.reportValidity()){status.textContent="Confira os campos obrigatórios antes de continuar.";return}const data=new FormData(form);const message=["Solicitação de contato — Advocacia Criminal","Nome: "+data.get("name"),"E-mail: "+data.get("email"),"Telefone: "+(data.get("phone")||"Não informado"),"Assunto: "+data.get("subject"),"Descrição geral: "+data.get("message")].join("\n");try{await navigator.clipboard.writeText(message);status.textContent="Mensagem preparada e copiada. O envio ainda não está conectado: entre em contato apenas pelos canais institucionais que o escritório confirmar.";status.classList.add("is-success")}catch{status.textContent="Não foi possível copiar automaticamente. Selecione e copie os dados preenchidos. O envio ainda não está conectado."}});
/* WEB STUDIO · scroll progressivo, entrada por camadas e parallax discreto */
(()=>{
  const reduce=window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const progress=document.createElement("div");
  progress.className="scroll-progress";
  progress.setAttribute("aria-hidden","true");
  progress.innerHTML="<span></span>";
  document.body.appendChild(progress);
  const progressFill=progress.firstElementChild;
  const revealTargets=document.querySelectorAll(".hero-copy > *, .intro-layout > *, .principles article, .section-heading > *, .practice-item, .urgent > *, .professional-layout > *, .article-card, .faq-layout > *, .faq-list details, .contact-layout > *, .area-hero-inner > *, .area-content-grid > *");
  if(!reduce && "IntersectionObserver" in window){
    const revealObserver=new IntersectionObserver(entries=>{
      entries.forEach(entry=>{
        if(entry.isIntersecting){
          entry.target.classList.add("is-in");
          revealObserver.unobserve(entry.target);
        }
      });
    },{threshold:.12,rootMargin:"0px 0px -5% 0px"});
    revealTargets.forEach((el,index)=>{
      el.classList.add("motion-item");
      el.style.setProperty("--motion-delay",Math.min(index%6,5)*75+"ms");
      revealObserver.observe(el);
    });
  }else revealTargets.forEach(el=>el.classList.add("is-in"));
  const hero=document.querySelector(".hero-art");
  const grid=document.querySelector(".hero-grid");
  const areaNumber=document.querySelector(".area-number");
  let raf=0;
  const update=()=>{
    raf=0;
    const max=document.documentElement.scrollHeight-window.innerHeight;
    const ratio=max>0?window.scrollY/max:0;
    if(progressFill) progressFill.style.transform="scaleX("+ratio+")";
    if(!reduce){
      if(hero){
        const rect=hero.getBoundingClientRect();
        hero.style.setProperty("--scroll-shift",Math.max(-30,Math.min(34,-rect.top*.075))+"px");
      }
      if(grid) grid.style.setProperty("--grid-shift",Math.round(window.scrollY*.12)+"px");
      if(areaNumber){
        const rect=areaNumber.getBoundingClientRect();
        areaNumber.style.setProperty("--scroll-shift",Math.round((window.innerHeight*.55-rect.top)*.12)+"px");
      }
    }
  };
  const onScroll=()=>{if(!raf)raf=requestAnimationFrame(update)};
  window.addEventListener("scroll",onScroll,{passive:true});
  window.addEventListener("resize",onScroll,{passive:true});
  update();
  if(!reduce && window.matchMedia("(hover:hover) and (pointer:fine)").matches){
    document.querySelectorAll(".article-card,.principles article").forEach(card=>{
      card.addEventListener("pointermove",event=>{
        const r=card.getBoundingClientRect();
        const x=(event.clientX-r.left)/r.width-.5;
        const y=(event.clientY-r.top)/r.height-.5;
        card.style.transform="perspective(900px) rotateX("+(-y*5)+"deg) rotateY("+(x*6)+"deg) translateY(-3px)";
      });
      card.addEventListener("pointerleave",()=>{card.style.transform=""});
    });
  }
})();
