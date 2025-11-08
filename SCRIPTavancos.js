    document.querySelectorAll('nav a').forEach(a=>{
        if(a.getAttribute('href').startsWith('#')){
            a.addEventListener('click', e=>{
            e.preventDefault();
     const id=a.getAttribute('href').slice(1);
     const target=document.getElementById(id);
        if(target) target.scrollIntoView({behavior:'smooth',block:'start'});
        });
    }
});