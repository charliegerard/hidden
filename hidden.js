import 'https://cdnjs.cloudflare.com/ajax/libs/axe-core/3.1.2/axe.min.js';

const hidden = (mode = "fullPage", maxNumErrors = 10) => {
  if(!Number.isInteger(maxNumErrors)){
    throw new Error("The maximum number of errors tolerated must be an integer")
  }

  if(Math.sign(maxNumErrors) === -1 || Math.sign(maxNumErrors) === -0){
    throw new Error("The maximum number of errors must be greater than 0");
  }

  switch(mode){
    case "elements":
      opacifyElements();
      break;
    case "fullPage":
      opacifyFullPage(maxNumErrors);
      break;
  }
}

const opacifyFullPage = (maxNumErrors) => {
  return axe.run(function(err, results) {
    let currentErrors = results.violations.length;
    const body = document.getElementsByTagName('body')[0];

    if(maxNumErrors === 0){
      if(currentErrors > 0){
        return body.style.opacity = 0;
      } else if(currentErrors === 0){
        return body.style.opacity = 1;
      }
    }

    let accessibility = currentErrors/maxNumErrors;

    if(accessibility >=0 && accessibility <= 1){
      return body.style.opacity = (1 - accessibility);
    }
  });
}

const opacifyElements = () => {
  return axe.run(function(err, results) {
    results.violations.map( violation => {
      const htmlTarget = violation.nodes[0].target[0];
      const element = document.querySelector(htmlTarget);
      element.style.opacity = 0;
    })
  });
}

export default hidden;
