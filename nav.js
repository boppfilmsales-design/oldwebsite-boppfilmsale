
// Shared Header & Footer Dynamic Generator
document.addEventListener("DOMContentLoaded", () => {
  // Initialize language
  let currentLang = localStorage.getItem("aec_lang") || "en";
  document.documentElement.setAttribute("lang", currentLang);

  // Render Common Header
  const headerContainer = document.getElementById("header-container");
  if (headerContainer) {
    headerContainer.innerHTML = `
      <div class="top-bar">
        <div class="container">
          <div class="top-bar-left">
            <span><i class="fas fa-phone-alt"></i> +86-551-64687285</span>
            <span><i class="fas fa-mobile-alt"></i> 18919659471</span>
            <span><i class="fas fa-envelope"></i> sale@boppfilmsale.com</span>
          </div>
          <div class="top-bar-right">
            <a href="mailto:sale@boppfilmsale.com"><i class="fas fa-envelope"></i> <span class="lang-en">Email Us</span><span class="lang-zh">发送邮件</span></a>
            <a href="tel:+8618919659471"><i class="fas fa-phone"></i> <span class="lang-en">Call Now</span><span class="lang-zh">立即拨打</span></a>
          </div>
        </div>
      </div>
      <header class="header">
        <div class="container">
          <nav class="nav">
            <a href="index.html" class="logo">
              <div class="logo-icon">
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.18l7.5 3.75L12 11.68 4.5 7.93 12 4.18zM4 9.5l7 3.5v7l-7-3.5V9.5zm9 10.5v-7l7-3.5v7L13 20z"/></svg>
              </div>
              <div class="logo-text">
                <h1>安徽东渐</h1>
                <span>AEC GROUP</span>
              </div>
            </a>
            <ul class="nav-links" id="navLinks">
              <li><a href="index.html" id="nav-home"><span class="lang-en">Home</span><span class="lang-zh">首页</span></a></li>
              <li><a href="about.html" id="nav-about"><span class="lang-en">About Us</span><span class="lang-zh">关于我们</span></a></li>
              <li><a href="products.html" id="nav-products"><span class="lang-en">Products</span><span class="lang-zh">产品中心</span></a></li>
              <li><a href="contact.html" id="nav-contact"><span class="lang-en">Contact Us</span><span class="lang-zh">联系我们</span></a></li>
              <li class="lang-selector">
                <button class="lang-btn" id="langBtn">
                  <i class="fas fa-globe"></i> <span id="langBtnTxt">English</span> <i class="fas fa-chevron-down" style="font-size:0.7rem"></i>
                </button>
                <div class="lang-dropdown" id="langDropdown">
                  <button class="lang-opt" data-lang="en">English</button>
                  <button class="lang-opt" data-lang="zh">中文简体</button>
                </div>
              </li>
            </ul>
            <button class="hamburger" id="hamburger" aria-label="Open menu">
              <span></span><span></span><span></span>
            </button>
          </nav>
        </div>
      </header>
    `;
  }

  // Render Common Footer
  const footerContainer = document.getElementById("footer-container");
  if (footerContainer) {
    footerContainer.innerHTML = `
      <footer class="footer">
        <div class="footer-top">
          <div class="container">
            <div class="footer-grid">
              <div class="footer-brand">
                <div class="logo" style="margin-bottom: 20px">
                  <div class="logo-icon" style="background: rgba(255,255,255,.1); border: 1px solid rgba(255,255,255,.15)">
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style="fill:white;width:24px;height:24px"><path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.18l7.5 3.75L12 11.68 4.5 7.93 12 4.18zM4 9.5l7 3.5v7l-7-3.5V9.5zm9 10.5v-7l7-3.5v7L13 20z"/></svg>
                  </div>
                  <div class="logo-text">
                    <h1 style="color:white">安徽东渐</h1>
                    <span style="color:rgba(255,255,255,.4)">AEC GROUP</span>
                  </div>
                </div>
                <p class="lang-en">Anhui Eastern Progress Imp. & Exp. Co., Ltd. is a comprehensive international trading company specialized in flexible packaging films, adhesive tapes, and printing consumables.</p>
                <p class="lang-zh" style="display:none">安徽东渐进出口有限公司是一家专业的综合性国际贸易企业，专注于软包装薄膜、胶粘带和打印耗材的研发与进出口贸易。</p>
                <div class="footer-social">
                  <a href="mailto:sale@boppfilmsale.com" title="Email"><i class="fas fa-envelope"></i></a>
                  <a href="skype:boppfilmsales?call" title="Skype"><i class="fab fa-skype"></i></a>
                  <a href="http://wpa.qq.com/msgrd?V=1&Uin=2538474128" title="QQ"><i class="fab fa-qq"></i></a>
                  <a href="https://www.boppfilmsale.com" title="Website"><i class="fas fa-globe"></i></a>
                </div>
              </div>
              <div class="footer-col">
                <h4 class="lang-en">Featured Products</h4>
                <h4 class="lang-zh" style="display:none">特色产品</h4>
                <ul>
                  <li><a href="products.html?category=BOPP Films">BOPP Films</a></li>
                  <li><a href="products.html?category=BOPET Films">BOPET Films</a></li>
                  <li><a href="products.html?category=Adhesive Tapes & Glue">Adhesive Tapes</a></li>
                  <li><a href="products.html?category=Coating Films">Coating Films</a></li>
                  <li><a href="products.html?category=Consumables & Printers (TTR/Labels)">Printing Ribbons</a></li>
                  <li><a href="products.html?category=Photovoltaic Solar Panels">Solar Panels</a></li>
                </ul>
              </div>
              <div class="footer-col">
                <h4 class="lang-en">Quick Links</h4>
                <h4 class="lang-zh" style="display:none">快速导航</h4>
                <ul>
                  <li><a href="index.html" class="lang-en">Home</a><a href="index.html" class="lang-zh" style="display:none">首页</a></li>
                  <li><a href="about.html" class="lang-en">About Us</a><a href="about.html" class="lang-zh" style="display:none">关于我们</a></li>
                  <li><a href="products.html" class="lang-en">Products</a><a href="products.html" class="lang-zh" style="display:none">产品中心</a></li>
                  <li><a href="contact.html" class="lang-en">Contact Us</a><a href="contact.html" class="lang-zh" style="display:none">联系我们</a></li>
                </ul>
              </div>
              <div class="footer-col">
                <h4 class="lang-en">Contact Info</h4>
                <h4 class="lang-zh" style="display:none">联系方式</h4>
                <ul>
                  <li><a href="tel:+8655164687285"><i class="fas fa-phone-alt" style="width:16px"></i> +86-551-64687285</a></li>
                  <li><a href="tel:+8618919659471"><i class="fas fa-mobile-alt" style="width:16px"></i> +86-18919659471</a></li>
                  <li><a href="mailto:sale@boppfilmsale.com"><i class="fas fa-envelope" style="width:16px"></i> sale@boppfilmsale.com</a></li>
                  <li style="font-size: 0.8rem; line-height: 1.4; color: rgba(255,255,255,.5)">
                    <i class="fas fa-map-marker-alt" style="width:16px"></i> 
                    <span class="lang-en">Huizhou Ave., Hefei, Anhui, China</span>
                    <span class="lang-zh" style="display:none">安徽省合肥市包河区徽州大道1158号</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="footer-bottom">
          <div class="container" style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap">
            <p>© 2026 Anhui Eastern Progress Imp. & Exp. Co., Ltd. <a href="https://beian.miit.gov.cn/" target="_blank" style="color:inherit">皖ICP备11005402号</a></p>
            <div style="display:flex; gap:20px">
              <a href="#" class="lang-en">Privacy Policy</a><a href="#" class="lang-zh" style="display:none">隐私政策</a>
              <a href="#" class="lang-en">Terms of Service</a><a href="#" class="lang-zh" style="display:none">使用条款</a>
            </div>
          </div>
        </div>
      </footer>
    `;
  }

  // Set active class on active nav link
  const currentPath = window.location.pathname.split("/").pop();
  if (currentPath === "index.html" || currentPath === "") {
    document.getElementById("nav-home")?.classList.add("active");
  } else if (currentPath === "about.html") {
    document.getElementById("nav-about")?.classList.add("active");
  } else if (currentPath === "products.html" || currentPath === "product-detail.html") {
    document.getElementById("nav-products")?.classList.add("active");
  } else if (currentPath === "contact.html") {
    document.getElementById("nav-contact")?.classList.add("active");
  }

  // Hamburger Mobile Menu Toggle
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("navLinks");
  if (hamburger && navLinks) {
    hamburger.addEventListener("click", () => {
      navLinks.classList.toggle("open");
      const spans = hamburger.querySelectorAll("span");
      if (navLinks.classList.contains("open")) {
        spans[0].style.transform = "rotate(45deg) translate(5px, 5px)";
        spans[1].style.opacity = "0";
        spans[2].style.transform = "rotate(-45deg) translate(5px, -5px)";
      } else {
        spans[0].style.transform = "";
        spans[1].style.opacity = "";
        spans[2].style.transform = "";
      }
    });
  }

  // Language switcher interaction
  const langBtn = document.getElementById("langBtn");
  const langDropdown = document.getElementById("langDropdown");
  const langBtnTxt = document.getElementById("langBtnTxt");

  if (langBtnTxt) {
    langBtnTxt.textContent = currentLang === "en" ? "English" : "中文简体";
  }

  if (langBtn && langDropdown) {
    langBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      langDropdown.classList.toggle("open");
    });
    document.addEventListener("click", () => {
      langDropdown.classList.remove("open");
    });

    langDropdown.querySelectorAll(".lang-opt").forEach(opt => {
      opt.addEventListener("click", (e) => {
        const lang = e.target.getAttribute("data-lang");
        localStorage.setItem("aec_lang", lang);
        document.documentElement.setAttribute("lang", lang);
        langBtnTxt.textContent = lang === "en" ? "English" : "中文简体";
        langDropdown.classList.remove("open");
        
        // Trigger a custom event in case pages want to re-render dynamically
        window.dispatchEvent(new CustomEvent("langchange", { detail: lang }));
      });
    });
  }

  // Back to Top button
  const backToTop = document.createElement("button");
  backToTop.className = "back-to-top";
  backToTop.id = "backToTop";
  backToTop.innerHTML = '<i class="fas fa-chevron-up"></i>';
  document.body.appendChild(backToTop);

  window.addEventListener("scroll", () => {
    if (window.scrollY > 400) {
      backToTop.classList.add("visible");
    } else {
      backToTop.classList.remove("visible");
    }
  });
  backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});
