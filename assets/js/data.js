console.log('algo')

const insertCertificate = (value, id) =>{
    $(id).append(`
        <div class="ih-item square colored effect6 from_top_and_bottom m-3" >
            <a href="#" data-featherlight="${value.image}">
                <div class="img">
                    <img src="${value.image}" alt="Diploma - Bacharelado em sistemas de informação">
                </div>
                <div class="info">
                    <h3>${value.course}</h3>
                    <p>${value.institution}</p>
                </div>
            </a>
        </div>
        `)
}

fetch("assets/data/certificates.json")
  .then((res) => res.json())
  .then((data) => {
    data.dev.diplom.map( (value) => insertCertificate(value, '#diplom'))
    data.dev.certificates.map( (value) => insertCertificate(value, '#certificates'))
  });