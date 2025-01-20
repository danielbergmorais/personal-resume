const insertCertificate = (value, id) =>{

    if(id == '#tech') {
        $(id).append(`
            <div class="flip-card p-4 max-w-sm">
                <div class="flip-content">
                    <div class="flip-front">
                        <div class="img-holder lazy" data-bg="${value.image}" ></div>
                    </div>
                    <div class="flip-back flex-col">
                        <div class="img-holder lazy" data-bg="${value.icon}"></div>
                        <strong>${value.name}</strong>
                        <span>${value.description}</span>
                    </div>
                </div>
            </div>
            `)
    
    } else {
        $(id).append(`
            <div class="ih-item square colored effect6 from_top_and_bottom m-3" >
                <a href="#" data-featherlight="${value.image}">
                    <div class="img">
                        <img src="" data-src="${value.image}" class="lazy" alt="${value.institution} - ${value.course}">
                    </div>
                    <div class="info">
                        <h3>${value.course}</h3>
                        <p>${value.institution}</p>
                    </div>
                </a>
            </div>
            `)
    
    }
}
var lazyLoadInstance = new LazyLoad({
    // Your custom settings go here
  });
fetch("assets/data/certificates.json")
  .then((res) => res.json())
  .then((data) => {
    data.dev.diplom.map( (value) => insertCertificate(value, '#diplom'))
    data.dev.certificates.map( (value) => insertCertificate(value, '#certificates'))
    data.dev.tech.map( (value) => insertCertificate(value, '#tech'))
    lazyLoadInstance.update();
  });