let bagItems;
onLoad();

function onLoad() {
  let bagItemsStr = localStorage.getItem('bagItems');
  bagItems = bagItemsStr ? JSON.parse(bagItemsStr) : [];
  displayItemsOnHomePage();
  displayBagIcon();
}

function addToBag(itemId) {
  bagItems.push(itemId);
  localStorage.setItem('bagItems', JSON.stringify(bagItems));
  displayBagIcon();
}

function displayBagIcon() {
  let bagItemCountElement = document.querySelector('.bag-item-count');
  if (bagItems.length > 0) {
    console.log('I am here');
    bagItemCountElement.style.visibility = 'visible';
    bagItemCountElement.innerText = bagItems.length;
  } else {
    bagItemCountElement.style.visibility = 'hidden';
  }
}

function displayItemsOnHomePage() {
  let itemsContainerElement = document.querySelector('.items-container');
  if (!itemsContainerElement) {
    return;
  }
  let innerHtml = '';
  items.forEach(item => {
    let ratingClass = '';
    if (item.rating.stars >= 3.5) {
      ratingClass = 'green';
    } else if (item.rating.stars >= 2.5) {
      ratingClass = 'yellow';
    } else {
      ratingClass = 'red';
    }
    innerHtml += `
    <div class="item-container">
      <img class="item-image" src="${item.image}" alt="item image">
      <div class="rating ${ratingClass}">
          ${item.rating.stars} ⭐ | ${item.rating.count}
      </div>
      
      <div class="company-name">${item.company}</div>
      <div class="item-name">${item.item_name}</div>
      <div class="price">
          <span class="current-price">₹ ${item.current_price}</span>
          <span class="original-price">₹ ${item.original_price}</span>
          <span class="discount">(${item.discount_percentage}% OFF)</span>
      </div>
      <button class="btn-add-bag" onclick="addToBag(${item.id})">Add to Bag</button>
    </div>`
  });
  itemsContainerElement.innerHTML = innerHtml;
}
document.querySelectorAll('.item-image').forEach(img => {
  img.addEventListener('click', function() {
    this.classList.toggle('big');
  });
});
// JavaScript for toggling the mobile navigation
function toggleNav() {
  const navLinks = document.querySelector('.nav-links');
  navLinks.classList.toggle('show');
}
window.addEventListener('resize', function() {
  const navToggle = document.querySelector('.nav-icon');
  const navLinks = document.querySelector('.nav-links');
  const screenWidth = window.innerWidth;

  if (screenWidth <= 768) {
      navToggle.style.display = 'block'; // Show the button for smaller screens
      navLinks.style.display = 'none'; // Hide the navbar for smaller screens
  } else if (screenWidth > 768 && screenWidth <= 992) {
      navToggle.style.display = 'none'; 
      navLinks.style.display = 'flex'; 
  } else {
      navToggle.style.display = 'none'; 
      navLinks.style.display = 'flex'; 
  }
});

window.dispatchEvent(new Event('resize'));

function toggleNav() {
  const navLinks = document.querySelector('.nav-links');
  if (navLinks.style.display === 'block') {
      navLinks.style.display = 'none';
  } else {
      navLinks.style.display = 'block';
  }
}




