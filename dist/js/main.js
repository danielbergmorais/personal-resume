let insertCertificate=(a,e)=>{"#tech"==e?$(e).append('\n            <div class="flip-card p-4 max-w-sm">\n                <div class="flip-content">\n                    <div class="flip-front">\n                        <div class="img-holder lazy" data-bg="'.concat(a.image,'" ></div>\n                    </div>\n                    <div class="flip-back flex-col">\n                        <div class="img-holder lazy" data-bg="').concat(a.icon,'"></div>\n                        <strong>').concat(a.name,"</strong>\n                        <span>").concat(a.description,"</span>\n                    </div>\n                </div>\n            </div>\n            ")):$(e).append('\n            <div class="ih-item square colored effect6 from_top_and_bottom m-3 " >\n                <a href="'.concat(a.image,'" data-featherlight="').concat(a.image,'" class="gallery">\n                    <div class="img">\n                        <img src="" data-src="').concat(a.image,'" class="lazy" alt="').concat(a.institution," - ").concat(a.course,'">\n                    </div>\n                    <div class="info">\n                        <h3>').concat(a.course,"</h3>\n                        <p>").concat(a.institution,"</p>\n                    </div>\n                </a>\n            </div>\n            "))};var lazyLoadInstance=new LazyLoad({});fetch("assets/data/certificates.json").then(a=>a.json()).then(a=>{a.dev.diplom.map(a=>insertCertificate(a,"#diplom")),a.dev.certificates.map(a=>insertCertificate(a,"#certificates")),a.dev.tech.map(a=>insertCertificate(a,"#tech")),a.eletrical.diplom.map(a=>insertCertificate(a,"#diplomTec")),a.eletrical.certificates.map(a=>insertCertificate(a,"#certificatesTec")),lazyLoadInstance.update()}),$("#certificatesTec").load(function(){$(".gallery").featherlightGallery({previousIcon:"«",nextIcon:"»",galleryFadeIn:300,openSpeed:300})});