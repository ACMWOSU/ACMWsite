  document.getElementById('nav-title').addEventListener('click', 
function() {
    if(this.className !== 'expanded') {
      this.classList.add('expanded');
      this.getElementsByTagName('i')[0].className = 'fa fa-angle-up';
      document.querySelectorAll('nav ul')[0].classList.add('expanded');
    } else {
      this.classList.remove('expanded');
      this.getElementsByTagName('i')[0].className = 'fa fa-angle-down';
      document.querySelectorAll('nav 
ul')[0].classList.remove('expanded');
    }
  });
