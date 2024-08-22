document.addEventListener('DOMContentLoaded', function () {
    const dropdownBtn = document.getElementById('dropdown-btn');
    const dropdownContent = document.querySelector('.dropdown-content');
    const dropdownItems = document.querySelectorAll('.dropdown-content a');
    const searchInput = document.getElementById('search-input');
    dropdownBtn.addEventListener('click', function () {
        dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
        dropdownBtn.classList.toggle('active');
    });
    dropdownItems.forEach(item => {
        item.addEventListener('click', function (e) {
            e.preventDefault();
            const selectedValue = this.getAttribute('data-value');
            dropdownBtn.innerHTML = selectedValue + ' <span class="arrow">&#x25BC;</span>';
            searchInput.placeholder = `Search Anything in ${selectedValue}...`;
            dropdownContent.style.display = 'none';
            dropdownBtn.classList.remove('active');
        });
    });
    window.addEventListener('click', function (e) {
        if (!dropdownBtn.contains(e.target) && !dropdownContent.contains(e.target)) {
            dropdownContent.style.display = 'none';
            dropdownBtn.classList.remove('active');
        }
    });
});
