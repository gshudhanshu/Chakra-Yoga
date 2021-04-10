//Top header carousel auto slide JS code
function indexCarousel(){
  //Counter specified 2 as setInterval timout is 5000 and
  //current slide is already 1 so, after 5 sec it will be second slide.
  var counter = 2;
  var labels = document.querySelectorAll('.manual-btn');
  function intervalFunc(){
    for(let i=0; i<labels.length; i++){
      labels[i].classList.remove('active')
      if(counter == (i+1)){labels[i].classList.add('active')}
    }
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if(counter > 3){
      counter = 1;
    }
  }
  var carouselInterval = setInterval(intervalFunc, 5000);

  //This event lister allow us to switch the slides manually.
  carouselBtnArr = document.querySelectorAll('.manual-btn');
  carouselBtnArr.forEach(function(item, index){
    item.addEventListener("click", function(){
      clearInterval(carouselInterval);
      counter = Array.prototype.indexOf.call(this.parentNode.children, this)+1;
      intervalFunc();
      carouselInterval = setInterval(intervalFunc, 5000);
    });
  });
}

//Glider JS plugin is lightweight, fast alternative for carousel
function gliderIndexPage(){
  // Init Popular Classes Glider JS
  new Glider(document.querySelector('#popular-class-sliderView'),{
    slidesToShow: 1, //'auto',
    slidesToScroll: 1,
    draggable: true,
    scrollLock: false,
    rewind: 1,
    duration: 1,
    dragVelocity: 2,
    arrows: {
      prev: '.popular-classes.glider-prev',
      next: '.popular-classes.glider-next'
    },
    responsive: [
      {
        // screens greater than >= 600px
        breakpoint: 600,
        settings: {
          slidesToShow: 2, //'auto',
        }
      },{
        // screens greater than >= 900px
        breakpoint: 900,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        // screens greater than >= 1200px
        breakpoint: 1200,
        settings: {
          slidesToShow: 4, //'auto',
        }
      }
    ]
  });
}

function gliderPricingPage() {
// Init Yoga Packages Glider JS
  new Glider(document.querySelector('#yoga-packages-sliderView'), {
    slidesToShow: 1, //'auto',
    slidesToScroll: 1,
    draggable: true,
    scrollLock: false,
    rewind: 1,
    duration: 1,
    dragVelocity: 2,
    rewind: true,
    arrows: {
      prev: '.yoga-packages.glider-prev',
      next: '.yoga-packages.glider-next'
    },
  });
}


// Font accessibility AAA (resize all the text sizes)
function accessibility(){
  var src = document.querySelector('html');
  var small = document.querySelector('#small-font')
  var normal = document.querySelector('#normal-font')
  var large = document.querySelector('#large-font')

  small.addEventListener('click', function(){
    console.log("Hi");
    src.style.fontSize = '0.8em'
  });

  normal.addEventListener('click', function(){
    console.log("Hi");
    src.style.fontSize = '1em'
  });

  large.addEventListener('click', function(){
    console.log("Hi");
    src.style.fontSize = '1.2em'
  });
}


// Classes and article pagination & search results
function searchResults(filteredData, fullData){
  var state = {
    'querySet': filteredData || fullData,
    'page': 1,
    'rows': 6,
    'window': 5,
  }

  buildTable()

  function pagination(querySet, page, rows) {

    var trimStart = (page - 1) * rows
    var trimEnd = trimStart + rows
    var trimmedData = querySet.slice(trimStart, trimEnd)

    var pages = Math.ceil(querySet.length / rows);

    return {
      'querySet': trimmedData,
      'pages': pages,
      'trimStart' : trimStart,
      'trimEnd' : trimEnd,
    }
  }

//pageButtons allows to generate pagination buttons as per the content
  function pageButtons(pages) {
    var wrapper = document.getElementById('pagination-wrapper')

    wrapper.innerHTML = ``

    var maxLeft = (state.page - Math.floor(state.window / 2))
    var maxRight = (state.page + Math.floor(state.window / 2))

    if (maxLeft < 1) {
      maxLeft = 1
      maxRight = state.window
    }

    if (maxRight > pages) {
      maxLeft = pages - (state.window - 1)

      if (maxLeft < 1){
        maxLeft = 1
      }
      maxRight = pages
    }

    for (var page = maxLeft; page <= maxRight; page++) {
      wrapper.innerHTML += `<button value=${page} class="page btn btn-black-cyan">${page}</button>`
    }

    if (state.page != 1) {
      wrapper.innerHTML = `<button value=${1} class="page btn btn-black-cyan">&#171; First</button>` + wrapper.innerHTML
    }

    if (state.page != pages) {
      wrapper.innerHTML += `<button value=${pages} class="page btn btn-black-cyan">Last &#187;</button>`
    }

    //Event listener for pagination
    $('.page').on('click', function() {
      //This will remove previous search result content
      document.querySelector('#search-result').innerHTML = ``
      state.page = Number($(this).val())
      buildTable()
    })
  }

//buildTable will generate the current page search results
  function buildTable() {
    var table = document.querySelector('#search-result')

    var data = pagination(state.querySet, state.page, state.rows)
    var currentResult = data.querySet
    document.getElementById('search-result-status').innerHTML =
      "Showing results "+(data.trimStart+1)+" to "+
      (state.querySet.length>data.trimEnd ? data.trimEnd: state.querySet.length)+" of total "+
      (state.querySet.length);

    var src = document.getElementById('search-template').innerHTML;
    var resultTemplate = Handlebars.compile(src);
    document.getElementById('search-result').innerHTML += resultTemplate({currentResult});

    pageButtons(data.pages)
  }
}

//Filter classes function
function filterClassesForm(){
  document.querySelector('#filterForm').addEventListener('submit', searchClassesFilter);
  function searchClassesFilter(e){
    e.preventDefault();
    var formData = new FormData(document.forms.filterForm);
    var weekday = formData.get( 'weekday')
    if(weekday){weekday = weekday.slice(0, 3)}
    var trainer = formData.get( 'trainer')
    var level = formData.get('level')

    function filerData(data){
      var one,two,three
      if(!weekday){one=true}else{one=data.schedule.includes(weekday)}
      if(!level || level=="All"){two=true}else{two=data.level ==level}
      if(!trainer || trainer=="All"){three=true}else{three=data.trainer == trainer}

      return one && two && three;
    }

    //This will remove previous search result content
    document.querySelector('#search-result').innerHTML = ``
    searchResults(yogaClassesData.filter(filerData, yogaClassesData))
  }
}

//Search articles function
function searchArticlesForm(){
  document.querySelector('#filterForm').addEventListener('submit', searchArticleFilter);
  function searchArticleFilter(e){
    e.preventDefault();
    var formData = new FormData(document.forms.filterForm);
    var textField = formData.get('searchField').toLowerCase()

    function filerData(data){
      var articleName = data.articleName.toLowerCase()
      return articleName.includes(textField);
    }

    document.querySelector('#search-result').innerHTML = ``
    searchResults(articleData.filter(filerData, articleData))
  }
}


//Load open street map on contact page
function loadOpenStreetMap(){
  var mymap = L.map('mapid').setView([51.5235821, -0.1226894], 16);

  var marker = L.marker([51.5235821, -0.1226894]).addTo(mymap);
  marker.bindPopup("<b>Chakra Yoga</b><br>Senate House <br> Malet Street <br>London <br>WC1E 7HU").openPopup();

  L.tileLayer('https://stamen-tiles.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}.png', {
    attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, under <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>. Data by <a href="http://openstreetmap.org">OpenStreetMap</a>, under <a href="http://creativecommons.org/licenses/by-sa/3.0">CC BY SA</a>.',
  }).addTo(mymap);
}


//Onpage load switch statements, only specific functions will for specific pages
switch(location.pathname.substring(location.pathname.lastIndexOf("/") + 1)) {
  case "classes.html":
    onClassesLoad();
    searchResults(null, yogaClassesData);
    filterClassesForm();
    break;
  case "articles.html":
    onArticlesLoad();
    searchResults(null, articleData);
    searchArticlesForm();
    break;
  case "pricing.html":
    gliderPricingPage();
    break;
  case "contact.html":
    onContactLoad();
    loadOpenStreetMap();
    break;
  case "report.html":
    onReportLoad();
    break;
  case "index.html":
  case "":
  default:
    onIndexLoad();
    gliderIndexPage();
    indexCarousel()
    break;
}

//Onload functions for all pages
accessibility();
