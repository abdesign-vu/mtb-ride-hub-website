// Pure JS Filter
document.addEventListener('DOMContentLoaded', function () {
  const filterItems = document.querySelectorAll('.filter-item');
  const postBoxes = document.querySelectorAll('.post-box');

  for (let i = 0; i < filterItems.length; i++) {
    filterItems[i].addEventListener('click', function () {
      const value = this.getAttribute('data-filter');
      if (value === 'all') {
        for (let j = 0; j < postBoxes.length; j++) {
          postBoxes[j].style.display = 'block';
        }
      } else {
        for (let j = 0; j < postBoxes.length; j++) {
          if (!postBoxes[j].classList.contains(value)) {
            postBoxes[j].style.display = 'none';
          } else {
            postBoxes[j].style.display = 'block';
          }
        }
      }

      // Add active class to clicked button
      for (let j = 0; j < filterItems.length; j++) {
        filterItems[j].classList.remove('active-filter');
      }
      this.classList.add('active-filter');
    });
  }
});
