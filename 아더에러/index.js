/****** Loading ******/
/****** 페이지 로딩 구간 ******/

// window.addEventListener('load', function() {
//     // 페이지가 완전히 로드되었을 때 로딩 화면을 숨김
//     var loadingScreen = document.querySelector('.loading-screen');
//     var content = document.querySelector('.content');
//     if (loadingScreen) {
//         loadingScreen.classList.add('hidden');
//         content.style.visibility = 'visible';
//     }
// });

window.addEventListener('load', function() {
    var loadingScreen = document.querySelector('.loading-screen');
    var content = document.querySelector('.content');

    setTimeout(function() {
        if (loadingScreen) {
            loadingScreen.classList.add('hidden');
            content.style.visibility = 'visible';
        }
        // 여기서 페이지 로딩을 시작하도록 추가
        // 예를 들어:
        // startPageLoading();
    }, 3000); // 3초 대기 후에 숨김
});
/****** 고친부분  ************************************************************/









/****** index mainTxt show ******/

document.addEventListener("DOMContentLoaded", function () {
    var pElement = document.querySelector(".index-main-text .show1");

    function showP() {
        setTimeout(function () {
            pElement.classList.add("show");
        }, 1);
    }

    showP();
});

document.addEventListener("DOMContentLoaded", function () {
    var pElement = document.querySelector(".index-main-text .show2");

    function showP() {
        setTimeout(function () {
            pElement.classList.add("show");
        }, 1);
    }

    showP();
});


/****** index main Bottom ******/
/****** 곡선 > 직선 이벤트 ******/

gsap.registerPlugin(ScrollTrigger);
gsap.to("#shape", {
    scrollTrigger: {
        trigger: "#shape",
        start: "top 30%", // 요소의 상단이 닿을 때 스크롤 이벤트 트리거
        end: "bottom 80%", // 요소의 하단이 닿을 때 스크롤 이벤트 트리거
        scrub: true,
        markers: false,
    },
    width: "120%",
    height: "800px",
    borderRadius: "0%",
    duration: 2
});


/****** index horizontal lookbook ******/

if (innerWidth > 430) {
    const container=document.querySelector('.index-collabo-horizontal');
    const sections = gsap.utils.toArray('.index-collabo-horizontal .index-collabo-horizontalwrapper1');
    const texts=gsap.utils.toArray('.index-collabo-horizontaltext');
    
    let scrollTween=gsap.to(sections,{
        xPercent:-100*(sections.length-1),
        ease:"none",
        scrollTrigger:{
            trigger:".index-collabo-horizontal",
            pin:true,
            scrub:1,
            end:"+=3000",
        }
    })
    sections.forEach(section=>{
        let text=section.querySelector('.index-collabo-horizontaltext');
        
        gsap.from(text,{
            y:-130,
            opacity:0,
            duration:1,
            ease:"none",
            stagger:0.5,
            scrollTrigger:{
                trigger:section,
                containerAnimation:scrollTween,
                start:"left center",
                markers:false
            }
        })
    })
    }
/***** index zoom in ******/
const { innerHeight } = window;
    if (innerWidth > 1100) {

    gsap.to(".zoom-in .logo", {
        scale: 100, stagger: 0.25, duration: 3,
        scrollTrigger: {
            trigger: ".zoom-in",
            pin: true,
            // start: "10%",
            end: `+=${innerHeight * 1.5}`,
            scrub: 10
            // markers: true
        }
    });

    gsap.to(".slogan-wrapper", {
        duration: 1,
        opacity: 1,
        y: -250,
        ease: "easeOutExpo",
        scrollTrigger: {
            trigger: ".slogan",
            start: "top bottom",
            end: "center center",
            scrub: 1
        }
    });
}
/***** index magazine *****/
const rotateitem=1;
gsap.to(".index-magazine-container",{
    scrollTrigger:{
        trigger:".index-magazine-wrapper",
        start:"top top",
        end:'bottom 100%',
        scrub:true,
        pin:true,
    },
    rotate:(rotateitem%3)*2,
    duration:3,
    scale:1.1,
});