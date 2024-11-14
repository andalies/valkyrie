function forEachNode(nodeList, func) {
    var i, n = nodeList.length;
    for (i = 0; i < n; i++) {
      func(nodeList[i], i, nodeList);
    }
  }
  
  window.addEventListener('load', mInit, false);
  
  function typeWriter(el) {
    var myDelay = el.getAttribute('keyDelay');
  
    if (el.getAttribute('curIndex') == undefined)
      el.setAttribute('curIndex', 0);
  
    var curIndex = el.getAttribute('curIndex');
    var curStr = el.getAttribute('typewriterdata');
    el.innerHTML += curStr.charAt(curIndex);
    curIndex++;
    el.setAttribute('curIndex', curIndex);
  
    if (curIndex < curStr.length)
      setTimeout(callback, myDelay);
    else {
      if (el.getAttribute('nextline') != undefined) {
        var nextTgt = el.getAttribute('nextline');
        typeWriter(document.getElementById(nextTgt));
      }
    }
  
    function callback() {
      typeWriter(el);
    }
  }
  
  function mInit() {
    typeWriter(document.getElementById('line1'));
  
    var i, n, elementList;
    elementList = document.getElementsByClassName('autoType');
    forEachNode(elementList, typeWriter);
    //	n = elementList.length;
    //	for (i=0; i<n; i++)
    //		typeWriter( elementList[i] );
  }

  //hidden
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      console.log(entry)
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      } else {
        entry.target.classList.remove('visible');
      }
    });
  })
  const hiddenElements = document.querySelectorAll('.hidden');
  hiddenElements.forEach((el) => observer.observe(el));