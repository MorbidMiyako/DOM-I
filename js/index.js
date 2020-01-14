const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let links = document.querySelectorAll("nav a");
let counter = 0
for (let i = 0; i < links.length; i++) {
  links[i].textContent = siteContent["nav"][`nav-item-${i + 1}`]
}

let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let headerH1 = document.querySelector(".cta .cta-text h1")
headerH1.textContent = siteContent["cta"]["h1"]

let headerbutton = document.querySelector(".cta .cta-text button")
headerbutton.textContent = siteContent["cta"]["button"]

let logocta = document.getElementById("cta-img");
logocta.setAttribute('src', siteContent["cta"]["img-src"])

let mainTopFirstH4 = document.querySelector(".main-content .top-content .text-content:first-child h4")
mainTopFirstH4.textContent = siteContent["main-content"]["features-h4"]

let maintFirstTopP = document.querySelector(".main-content .top-content .text-content:first-child p")
maintFirstTopP.textContent = siteContent["main-content"]["features-content"]

let mainTopSecondH4 = document.querySelector(".main-content .top-content .text-content:last-child h4")
mainTopSecondH4.textContent = siteContent["main-content"]["about-h4"]

let maintTopSecondP = document.querySelector(".main-content .top-content .text-content:last-child p")
maintTopSecondP.textContent = siteContent["main-content"]["about-content"]

let logomiddle = document.getElementById("middle-img");
logomiddle.setAttribute('src', siteContent["main-content"]["middle-img-src"])

let mainBottomFirstH4 = document.querySelector(".main-content .bottom-content .text-content:first-child h4")
mainBottomFirstH4.textContent = siteContent["main-content"]["services-h4"]

let maintBottomFirstP = document.querySelector(".main-content .bottom-content .text-content:first-child p")
maintBottomFirstP.textContent = siteContent["main-content"]["services-content"]

let mainBottomSecondH4 = document.querySelector(".main-content .bottom-content .text-content:nth-child(2) h4")
mainBottomSecondH4.textContent = siteContent["main-content"]["product-h4"]

let maintBottomSecondP = document.querySelector(".main-content .bottom-content .text-content:nth-child(2) p")
maintBottomSecondP.textContent = siteContent["main-content"]["product-content"]

let mainBottomThirdH4 = document.querySelector(".main-content .bottom-content .text-content:last-child h4")
mainBottomThirdH4.textContent = siteContent["main-content"]["vision-h4"]

let maintBottomThirdP = document.querySelector(".main-content .bottom-content .text-content:last-child p")
maintBottomThirdP.textContent = siteContent["main-content"]["vision-content"]

let contactH4 = document.querySelector(".contact h4")
contactH4.textContent = siteContent["contact"]["contact-h4"]

let contactFirstP = document.querySelector(".contact p:nth-child(2)")
contactFirstP.textContent = siteContent["contact"]["address"]

let contactSecondP = document.querySelector(".contact p:nth-child(3)")
contactSecondP.textContent = siteContent["contact"]["phone"]

let contactThirdP = document.querySelector(".contact p:last-child")
contactThirdP.textContent = siteContent["contact"]["email"]

let footer = document.querySelector("footer p")
footer.textContent = siteContent["footer"]["copyright"]
