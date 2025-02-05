var data = [
  {
    AboutDevTypeText: "<span>About Dev Quest<br/><br/>Do you want to go on an epic quest to uncover the magic of coding? Seize the chance to learn about web development and get a scholarship or an internship.</span><br/><br/><br/><span>Are you a developer?<br/> Y / N</span><br/>"
  }
];
  /*
  var allElements = document.getElementsByClassName("typeing");
  for (var j = 0; j < allElements.length; j++) {
    var currentElementId = allElements[j].id;//id do elemento (paramID)
    var currentElementIdContent = data[0][currentElementId]; //text (paramText)
    var element = document.getElementById(currentElementId);//
    var devTypeText = currentElementIdContent;
    
  
    // type code
    var i = 0, isTag, text;
    (function type() {
      text = devTypeText.slice(0, ++i);
      if (text === devTypeText) return;
      element.innerHTML = text + `<span class='blinker'>&#32;</span>`;
      var char = text.slice(-1);
      if (char === "<") isTag = true;
      if (char === ">") isTag = false;
      if (isTag) return type();
      setTimeout(type, 60);
    })();
  }*/
  
  const typingFn = (paramId, paramText) => {
    let element = document.getElementById(paramId)
    if(element) {
    let devTypeText = paramText
    // type code
    var i = 0, isTag, text;
    (function type() {
      text = devTypeText.slice(0, ++i);
      if (text === devTypeText) return;
      element.innerHTML = text + `<span class='blinker'>&#32;</span>`;
      var char = text.slice(-1);
      if (char === "<") isTag = true;
      if (char === ">") isTag = false;
      if (isTag) return type();
      setTimeout(type, 100);
    })();
   } 
  }

    setTimeout( () => {
      typingFn('diplomTitle', 'Diploma <br/>')
    }, 3000);
    setTimeout( () => {
      typingFn('certificatesTitle', 'Certificados  <br/>')
    }, 6000);
    setTimeout( () => {
      typingFn('techTitle', 'Tecnologias  <br/>')
    }, 8000);
