app.run(splashScreenIntro);

function splashScreenIntro () {

  let loadingOverlayEl = document.createElement('div');
  
  loadingOverlayEl.id = 'loadingOverlay';
  loadingOverlayEl.innerHTML = 
`<div class="status-indicator-wrapper">
  <div class="lhs-valign-helper"></div>
  <div class="status-indicator" style="opacity:0;"></div>
  <div class="rhs-valign-helper"></div>
</div>`;
  
  /* move logo in to x.innerHTML */
  let logoEl = document.getElementById('ewaLoaderLogo');
  let statusIndicatorWrapperEl = loadingOverlayEl.children[0];
  let statusIndicatorEl = statusIndicatorWrapperEl.children[1];
  let progressIndicatorEl = statusIndicatorEl.children[0];
  let logoImgEl = document.createElement('img');

  let statusIndicatorTransitionSteps = [
    () => { showStatusIndicator() },
    () => { setTimeout(() => { hideStatusIndicator() }, 2222) },
    () => { hideLogoEl(); hideSplashScreen() },
  ];

  statusIndicatorEl.addEventListener('transitionend', () => {
    stepStatusIndicatorTransition();
  });
 
  logoImgEl.src = 'images/logov7c-dist.png';
  logoImgEl.onload = function () {
    stepStatusIndicatorTransition();
  };
  statusIndicatorEl.appendChild(logoImgEl);

  document.body.appendChild(loadingOverlayEl);

  function stepStatusIndicatorTransition () {
    let fn = statusIndicatorTransitionSteps.shift();
    fn();
  }

  function moveIndicator (toPos) {
    progressIndicatorEl.setAttribute('style', 'transform: translateY(-' + String(toPos) + 'px);');
  }

  function hideSplashScreen () {
    document.body.removeChild(loadingOverlayEl);
  }

  function showStatusIndicator () {
    statusIndicatorEl.setAttribute('style', 'opacity:1;');
  }

  function hideStatusIndicator () {
    statusIndicatorEl.setAttribute('style', 'opacity:0;');
  }

  function hideLogoEl () {
    logoEl.setAttribute('style', 'display:none;');
  }

};
