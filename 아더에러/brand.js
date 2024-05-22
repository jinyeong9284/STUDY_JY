/****** brand logo showUp ******/
document.addEventListener("DOMContentLoaded", function() {
  var main = document.querySelector(".brand-main-logo");

  function showLogo() {
    // 강제로 클래스를 제거하여 애니메이션이 다시 시작되도록 함
    main.classList.remove("show");
    // 다음 프레임에서 클래스를 추가하여 애니메이션 효과를 보이도록 함
    requestAnimationFrame(function() {
      main.classList.add("show");
    });
  }

  showLogo();
});

/****** brand mainTxt show ******/
document.addEventListener("DOMContentLoaded", function() {
  var pElement = document.querySelector(".brand-main-txt");

  function showP() {
    setTimeout(function() {
      pElement.classList.add("show");
    }, 20);
  }

  showP();
});

/****** brand mainImg showUp ******/
document.addEventListener("DOMContentLoaded", function() {
  var main = document.querySelector(".brand-main-img");

  function showImg() {
    main.classList.remove("show");
    requestAnimationFrame(function() {
      main.classList.add("show");
    });
  }

  showImg();
});


/* 직선 -> 곡선 이벤트 */
/****** brand mainBottom wrapper ******/
gsap.registerPlugin(ScrollTrigger);

gsap.to("#shape", {
  scrollTrigger: {
    trigger: "#shape",
    start: "top 50%", // 요소의 상단이 닿을 때 스크롤 이벤트 트리거
    end: "bottom 80%", // 요소의 하단이 닿을 때 스크롤 이벤트 트리거
    scrub: true,
    markers: false
  },
  width: "120%",
  height: "600px",
  borderRadius: "0%",
  duration: 2
});


/****** brand text fadeIn ******/
window.onload = function () {
  const text = document.getElementById('changing-text');
  const textContent = text.textContent;
  const textLength = textContent.length;
  let scrolled = false; // 스크롤 여부를 나타내는 변수

  // 기존 텍스트를 숨깁니다.
  text.textContent = '';

  // 각 글자를 순차적으로 생성하여 효과를 적용합니다.
  for (let i = 0; i < textLength; i++) {
    const char = textContent[i];
    const span = document.createElement('span');
    span.textContent = char;
    span.style.opacity = '0'; // 투명도를 0으로 설정하여 숨깁니다.
    span.style.transition = 'opacity 0.2s'; // 투명도 변화에 대한 transition 설정
    span.style.transitionDelay = `${i * 0.1}s`; // 각 글자에 대해 0.1초씩 딜레이 적용
    span.style.color = '#fff'; // 흰색으로 설정
    text.appendChild(span);
  }

  // 스크롤 이벤트를 감지하여 텍스트를 페이드 인 또는 아웃시키는 함수
  function fadeTextOnScroll() {
    const textTop = text.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    // 화면에 보이는 영역에 텍스트가 들어오면 페이드 인 효과를 적용합니다.
    if (textTop < screenHeight && textTop > -text.clientHeight && !scrolled) {
      // 각 span 요소에 대해 opacity를 1로 변경하여 페이드 인 효과 적용
      text.childNodes.forEach((span, index) => {
        span.style.opacity = '1';
      });
      scrolled = true; // 한 번 페이드 인되면 scrolled 변수를 true로 설정하여 다시 반복되지 않도록 함
    }
  }

  window.addEventListener('scroll', fadeTextOnScroll);
};