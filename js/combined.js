alert("BEEP. This website is STILL IN DEVELOPMENT. PLEASE DO REPORT ANY ERRORS AS AN ISSUE (other than JavaScript CDN not loading) IN THE GITHUB REPOSITORY. Thanks!")
let count = 0;

 const addS = (script, cb) => {
  const el = document.createElement('script')
  el.src = script
  if(count < scripts.length) {
    count++;
    document.head.appendChild(el)
    el.onload = addS(scripts[count])
  }
}

const scripts = ["https://code.jquery.com/jquery-3.5.1.min.js", "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js",  "https://cdnjs.cloudflare.com/ajax/libs/js-cookie/2.2.1/js.cookie.min.js", "https://cdnjs.cloudflare.com/ajax/libs/tippy.js/2.5.4/tippy.all.min.js", "https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js", "https://cdn.jsdelivr.net/npm/uikit@3.5.9/dist/js/uikit.min.js", "https://cdn.jsdelivr.net/npm/uikit@3.5.9/dist/js/uikit-icons.min.js", "https://cdnjs.cloudflare.com/ajax/libs/foundation/6.6.3/js/foundation.min.js"]

window.addEventListener("load", addS(scripts[count]))