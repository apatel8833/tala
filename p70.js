
gsap.from(".maintxt>h1",{
    
    onstart:function(){
        $('.maintxt>h1').textillate({ 
            in: { effect: 'fadeInUp' } });
        
    }
})


gsap.from(".subtxt>h1",{
   y:"50",
   opacity:0,
   duration:1.5
})
gsap.from(".smalltxt>h5",{
   y:"50"
})
gsap.from(".cir",{
    y:"100",
    opacity:0,delay:1
 })

gsap.to(".txt2>h2",{
    scrollTrigger:{
        scroll:"body",
        trigger:"#sec",
        // markers:true,
        start:"top 50%",
        end:"bottom 40%",
        scrub:true

    },
    y:"-100",
    opacity:1
})

gsap.from(".first>h1",{
    scrollTrigger:{
        scroll:"body",
        trigger:".first",
        // markers:true,
        start:"top 50%",
        end:"bottom 40%",
        scrub:true

    },
    y:"50",
    opacity:0
})
gsap.from(".sec>h1",{
    scrollTrigger:{
        scroll:"body",
        trigger:".sec",
        // markers:true,
        start:"top 50%",
        end:"bottom 40%",
        scrub:true

    },
    y:"50",
    opacity:0
})
gsap.from(".third>h1",{
    scrollTrigger:{
        scroll:"body",
        trigger:".third",
        // markers:true,
        start:"top 50%",
        end:"bottom 40%",
        scrub:true

    },
    y:"50",
    opacity:0
})
gsap.from(".fourth>h1",{
    scrollTrigger:{
        scroll:"body",
        trigger:".fourth",
        // markers:true,
        start:"top 50%",
        end:"bottom 40%",
        scrub:true

    },
    y:"50",
    opacity:0
})
gsap.from(".fifth>h1",{
    scrollTrigger:{
        scroll:"body",
        trigger:".fifth",
        // markers:true,
        start:"top 50%",
        end:"bottom 40%",
        scrub:true

    },
    y:"50",
    opacity:0
})
var flag=0
document.querySelector(".first").addEventListener("mouseover",function(){
    document.querySelector(".img2").style.opacity="1"
    if(flag===0){
        document.querySelector(".first>h1").style.color = "black"
        document.querySelector(".first>h1").style.webkitTextStroke = "1px" 
        document.querySelector(".first>h1").style.webkitTextStrokeColor="white"

        flag=1
    }
    else{
        document.querySelector(".first>h1").style.color = "white"
        flag=0

    }
    

    
    
    
})
document.querySelector(".first").addEventListener("mouseout",function(){
    document.querySelector(".img2").style.opacity="0"
    
    
    
    
})
document.querySelector(".sec").addEventListener("mouseover",function(){
    document.querySelector(".img3").style.opacity="1"
    
    
})
document.querySelector(".sec").addEventListener("mouseout",function(){
    document.querySelector(".img3").style.opacity="0"
   
    
    
    
})
document.querySelector(".third").addEventListener("mouseover",function(){
    document.querySelector(".img4").style.opacity="1"
    
    
    
    
})
document.querySelector(".third").addEventListener("mouseout",function(){
    document.querySelector(".img4").style.opacity="0"
    
    
    
    
})
document.querySelector(".fourth").addEventListener("mouseover",function(){
    document.querySelector(".img5").style.opacity="1"
    
    
    
    
})
document.querySelector(".fourth").addEventListener("mouseout",function(){
    document.querySelector(".img5").style.opacity="0"
    
    
    
    
})
// document.querySelector(".fifth").addEventListener("mouseover",function(){
//     document.querySelector(".mg").style.opacity="1"
    
    
    
    
// })
// document.querySelector(".fifth").addEventListener("mouseout",function(){
//     document.querySelector(".mg").style.opacity="0"
    
    
    
    
// })

document.querySelector(".first").addEventListener("mousemove",function(e){
    document.querySelector(".img2").style.left=`${e.x}px`
    document.querySelector(".img2").style.top=`${e.y}px`
})
document.querySelector(".sec").addEventListener("mousemove",function(e){
    document.querySelector(".img3").style.left=`${e.x}px`
    document.querySelector(".img3").style.top=`${e.y}px`
})
document.querySelector(".third").addEventListener("mousemove",function(e){
    document.querySelector(".img4").style.left=`${e.x}px`
    document.querySelector(".img4").style.top=`${e.y}px`
})
document.querySelector(".fourth").addEventListener("mousemove",function(e){
    document.querySelector(".img5").style.left=`${e.x}px`
    document.querySelector(".img5").style.top=`${e.y}px`
})
document.querySelector(".fifth").addEventListener("mousemove",function(e){
    document.querySelector(".mg").style.left=`${e.x}px`
    document.querySelector(".mg").style.top=`${e.y}px`
})

gsap.to(".btxt>h1",{
    scrollTrigger:{
        scroll:"body",
        trigger:"#fourth",
        // markers:true,
        start:"top 50%",
        end:"bottom 40%",
        scrub:true

    },
    y:"-100",
    opacity:1
})
gsap.to(".txt3>h2",{
    scrollTrigger:{
        scroll:"body",
        trigger:"#fifth",
        // markers:true,
        start:"top 50%",
        end:"bottom 40%",
        scrub:true

    },
    y:"-100",
    opacity:1
})
gsap.to(".txt3>h5",{
    scrollTrigger:{
        scroll:"body",
        trigger:".txt3",
        // markers:true,
        start:"top 50%",
        end:"bottom 40%",
        scrub:true

    },
    y:"-100",
    opacity:1
})

gsap.to(".txt4>h3",{
    scrollTrigger:{
        scroll:"body",
        trigger:"#sixth",
        // markers:true,
        start:"top 50%",
        end:"bottom 40%",
        scrub:true

    },
    y:"-150",
    opacity:1
})

gsap.to(".pehla",{
    scrollTrigger:{
        scroll:"body",
        trigger:"#seventh",
        // markers:true,
        start:"top 50%",
        end:"bottom 40%",
        scrub:3

    },
    x:"100%",
    
})
gsap.to(".pehla1",{
    scrollTrigger:{
        scroll:"body",
        trigger:"#seventh",
        // markers:true,
        start:"top 50%",
        end:"bottom 40%",
        scrub:3

    },
    x:"100%",
   
})
gsap.to(".dusra",{
    scrollTrigger:{
        scroll:"body",
        trigger:"#seventh",
        // markers:true,
        start:"top 50%",
        end:"bottom 40%",
        scrub:3

    },
    x:"-100%",
    
})
gsap.to(".dusra1",{
    scrollTrigger:{
        scroll:"body",
        trigger:"#seventh",
        // markers:true,
        start:"top 50%",
        end:"bottom 40%",
        scrub:3

    },
    x:"-100%",
   
})
gsap.to(".tisra",{
    scrollTrigger:{
        scroll:"body",
        trigger:"#seventh",
        // markers:true,
        start:"top 50%",
        end:"bottom 40%",
        scrub:3

    },
    x:"100%",
    
})
gsap.to(".tisra1",{
    scrollTrigger:{
        scroll:"body",
        trigger:"#seventh",
        // markers:true,
        start:"top 50%",
        end:"bottom 40%",
        scrub:3

    },
    x:"100%",
   
})
gsap.to(".chotha",{
    scrollTrigger:{
        scroll:"body",
        trigger:"#seventh",
        // markers:true,
        start:"top 50%",
        end:"bottom 40%",
        scrub:3

    },
    x:"-100%",
    
})
gsap.to(".chotha1",{
    scrollTrigger:{
        scroll:"body",
        trigger:"#seventh",
        // markers:true,
        start:"top 50%",
        end:"bottom 40%",
        scrub:3

    },
    x:"-100%",
   
})

gsap.to(".txt5>h2",{
    scrollTrigger:{
        scroll:"body",
        trigger:"#eight",
        // markers:true,
        start:"top 50%",
        end:"bottom 40%",
        scrub:true

    },
    y:"-150",
    opacity:1
})



document.querySelector(".left").addEventListener("mouseover",function(){
    document.querySelector(".img10").style.opacity="1"
})
document.querySelector(".left").addEventListener("mouseout",function(){
    document.querySelector(".img10").style.opacity="0"
})
document.querySelector(".right").addEventListener("mouseover",function(){
    document.querySelector(".img11").style.opacity="1"
})
document.querySelector(".right").addEventListener("mouseout",function(){
    document.querySelector(".img11").style.opacity="0"
})



document.querySelector(".left").addEventListener("mousemove",function(e){
    document.querySelector(".img10").style.left=`${e.x}px`
    document.querySelector(".img10").style.top=`${e.y}px`
})

document.querySelector(".right").addEventListener("mousemove",function(e){
    document.querySelector(".img11").style.left=`${e.x}px`
    document.querySelector(".img11").style.top=`${e.y}px`
})

gsap.to(".txt6>h1",{
    scrollTrigger:{
        scroll:"body",
        trigger:"#nine",
        // markers:true,
        start:"top 50%",
        end:"bottom 40%",
        scrub:true

    },
    y:"-50",
    opacity:1
})

gsap.from(".mg6",{
    scrollTrigger:{
        scroll:"body",
        trigger:"#ten",
        // markers:true,
        start:"top 50%",
        end:"bottom 40%",
        scrub:true

    },
    y:"100",
    opacity:0
})
gsap.from(".mg7",{
    scrollTrigger:{
        scroll:"body",
        trigger:"#ten",
        // markers:true,
        start:"top 50%",
        end:"bottom 40%",
        scrub:true

    },
    y:"100",
    opacity:0,
    duration:2
})
gsap.from(".mg8",{
    scrollTrigger:{
        scroll:"body",
        trigger:"#ten",
        // markers:true,
        start:"top 50%",
        end:"bottom 40%",
        scrub:true

    },
    y:"100",
    opacity:0
})
gsap.from(".mg9",{
    scrollTrigger:{
        scroll:"body",
        trigger:"#ten",
        // markers:true,
        start:"top 50%",
        end:"bottom 40%",
        scrub:true

    },
    y:"100",
    opacity:0
})

gsap.from(".mg10",{
    scrollTrigger:{
        scroll:"body",
        trigger:".mg6",
        // markers:true,
        start:"top 50%",
        end:"bottom 40%",
        scrub:true

    },
    y:"100",
    opacity:0
})
gsap.from(".mg11",{
    scrollTrigger:{
        scroll:"body",
        trigger:".mg6",
        // markers:true,
        start:"top 50%",
        end:"bottom 40%",
        scrub:true

    },
    y:"100",
    opacity:0
})
gsap.from(".mg12",{
    scrollTrigger:{
        scroll:"body",
        trigger:".mg6",
        // markers:true,
        start:"top 50%",
        end:"bottom 40%",
        scrub:true

    },
    y:"100",
    opacity:0
})
gsap.from(".mg13",{
    scrollTrigger:{
        scroll:"body",
        trigger:".mg6",
        // markers:true,
        start:"top 50%",
        end:"bottom 40%",
        scrub:true,


    },
    y:"100",
    opacity:0
})

document.querySelector(".m").addEventListener("click",function(){
    if(flag===0){

        gsap.to(".layer",{
            y:"50%",
            ease: "power1.out"
            
        })
        gsap.to(".m",{
            rotation:180,
            opacity:0
        })
        gsap.to(".c",{
            rotation:-180,
            opacity:1
        })
        flag=1
        document.querySelector(".layer").style.position="fixed"
    }
    else{
        gsap.to(".layer",{
            y:"-100%",
            ease: "power1.out"
            
        })
        gsap.to(".m",{
            rotation:-180,
            opacity:1
        })
        gsap.to(".c",{
            rotation:180,
            opacity:0
        })
        flag=0

    }
})

gsap.to(".aee",{
    x:"40",
    delay:6,
    repeat:-1,
    yoyo:true

})
gsap.from(".aee",{
    x:"0",
    delay:6
})