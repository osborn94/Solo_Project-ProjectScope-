// home button
function home() {
    window.location.href = 'index.html';
  }
  // register button
function regPage() {
    window.location.href = 'becomePartner.html';
  }
  // login button
  function loginPage() {
      window.location.href = 'login.html';
    }
   // hire a writer
  function hireWriter() {
    window.location.href = 'hireWriter.html'
  }
  // menu icon
document.getElementById("menuIcon").onclick = function() {
    document.getElementById("myDropdown").style.display = 
      document.getElementById("myDropdown").style.display === "none" ? "block" : "none";
  }

// pagination of department page
// let items = Array.from(document.getElementById('items').children);
// let grandChildren = Array.from(document.getElementById('items').children)
//     .map(child => Array.from(child.getElementsByTagName('td')));
let items = Array.from(document.querySelectorAll('#items tr'));
        let currentPage = 1;
        let itemsPerPage = 10;

        function showItems() {
            // Hide all items
            items.forEach(item => item.style.display = 'none');

            let start = (currentPage - 1) * itemsPerPage;
            let end = start + itemsPerPage;

            // Show items for the current page
            for (let i = start; i < end; i++) {
                if (items[i]) {
                    items[i].style.display = '';
                }
            }
        }

        document.getElementById('prev').addEventListener('click', () => {
            if (currentPage > 1) {
                currentPage--;
                showItems();
            }
        });

        document.getElementById('next').addEventListener('click', () => {
            if (currentPage < Math.ceil(items.length / itemsPerPage)) {
                currentPage++;
                showItems();
            }
        });

        // Initial display
        showItems();