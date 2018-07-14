const $students = $('.student-item'); //grabs all student items in list
const pageNumbers = Math.ceil($students.length/10); //generates pageNumbers based off student list divided by 10
const pageLinks = document.getElementsByClassName('pagination')[0]; //grabs created Div element for page links
const ul = document.createElement('ul'); //creates unordered list for page links

//creates showPage function that hides all but current page's students list
function showPage(pageNumber) {
  $students.hide();
  for ( i = 0; i < $students.length; i+= 1) {
    if ( i >= pageNumber * 10 && i <= (pageNumber * 10) + 9 ) {
      $students.eq(i).show();
    }
  }
}

//appends the page links to the website and shows page that is clicked
function appendPageLinks() {
  pageLinks.appendChild(ul);
  for ( i = 0; i < pageNumbers; i += 1) {
    let li = document.createElement('li');
    let a = document.createElement('a');
    a.setAttribute('href', '#');
    a.textContent = i + 1;
    li.appendChild(a);
    ul.appendChild(li);
    a.addEventListener('click', function () {
      let linkClicked = a.textContent - 1;
      a.setAttribute('class', 'active');
      showPage(linkClicked);
    });
  }
}

//calls functions to activate
showPage(0);
appendPageLinks();
