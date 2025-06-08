const items = document.querySelectorAll('.category-item');

items.forEach(item => {
  item.addEventListener('click', () => {
    // Remove 'selected' from all
    items.forEach(i => i.classList.remove('selected'));

    // Add 'selected' to clicked
    item.classList.add('selected');

    console.log('Selected:', item.textContent.trim());
  });
});
