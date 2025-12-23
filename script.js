const skillBars = document.querySelectorAll('.skill-progress');
const observer=new IntersectionObserver((entries)=> 
{
    entries.forEach(entry=>{
        if(entry.isInrersecting){
            const width = entry.target.style.width;
            entry.target.style.width = '0';
            setTimeout(()=> {
                entry.target.style.width=width;
            },100);
        }
    });})
}