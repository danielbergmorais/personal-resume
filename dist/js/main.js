let insertCertificate=(e,i)=>{"#tech"==i?$(i).append(`
            <div class="flip-card p-4 max-w-sm">
                <div class="flip-content">
                    <div class="flip-front">
                        <div class="img-holder lazy" data-bg="${e.image}" ></div>
                    </div>
                    <div class="flip-back flex-col">
                        <div class="img-holder lazy" data-bg="${e.icon}"></div>
                        <strong>${e.name}</strong>
                        <span>${e.description}</span>
                    </div>
                </div>
            </div>
            `):$(i).append(`
            <div class="ih-item square colored effect6 from_top_and_bottom m-3 " >
                <a href="${e.image}" data-featherlight="${e.image}" class="gallery">
                    <div class="img">
                        <img src="" data-src="${e.image}" class="lazy" alt="${e.institution} - ${e.course}">
                    </div>
                    <div class="info">
                        <h3>${e.course}</h3>
                        <p>${e.institution}</p>
                    </div>
                </a>
            </div>
            `)};var lazyLoadInstance=new LazyLoad({});fetch("assets/data/certificates.json").then(e=>e.json()).then(e=>{e.dev.diplom.map(e=>insertCertificate(e,"#diplom")),e.dev.certificates.map(e=>insertCertificate(e,"#certificates")),e.dev.tech.map(e=>insertCertificate(e,"#tech")),e.eletrical.diplom.map(e=>insertCertificate(e,"#diplomTec")),e.eletrical.certificates.map(e=>insertCertificate(e,"#certificatesTec")),lazyLoadInstance.update()}),$("#certificatesTec").load(function(){$(".gallery").featherlightGallery({previousIcon:"«",nextIcon:"»",galleryFadeIn:300,openSpeed:300})});