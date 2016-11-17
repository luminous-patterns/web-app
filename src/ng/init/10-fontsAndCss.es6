app.run(initStyleSheets);

function initStyleSheets () {

  let styleSheets = [
    'ewa.min.css',
    // 'vendor.css',
    'https://fonts.googleapis.com/icon?family=Material+Icons',
  ];

  let linkEls = [];
  let linkElsByHref = {};

  loadStyleSheets();

  function loadStyleSheets () {

    styleSheets.forEach(href => {
      let linkEl = newLinkEl(href);
      linkEls.push(linkEl);
      linkElsByHref[href] = linkEl;
      document.body.appendChild(linkEl);
    });

  }
  
  function newLinkEl (href, rel, type) {
    
    let linkEl = document.createElement('link');

    rel = rel || 'stylesheet';
    type = type || 'text/css';

    linkEl.setAttribute('href', href);
    
    if (undefined !== rel) {
      linkEl.setAttribute('rel', rel);
    }
    
    if (undefined !== type) {
      linkEl.setAttribute('type', type);
    }

    return linkEl;

  }

};
