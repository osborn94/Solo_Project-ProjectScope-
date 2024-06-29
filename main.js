// home button
function home() {
    window.location.href = 'index.html';
  }
  
  // menu icon
  document.getElementById("menuIcon").onclick = function() {
    document.getElementById("myDropdown").style.display = 
      document.getElementById("myDropdown").style.display === "none" ? "block" : "none";
  }
  
  // register button
  function regPage() {
    window.location.href = 'becomePartner.html';
  }
  // login button
  function loginPage() {
      window.location.href = 'login.html';
    }
    // create student account
    function studentSignUp() {
      window.location.href = 'studentSignUp.html'
    }
    // create consultant account
    function consultantSignUp() {
      window.location.href = 'consultantSignUp.html'
    }
    // hire a writer
    function hireWriter() {
      window.location.href = 'hireWriter.html'
    }
    function logIn() {
      window.location.href = 'login.html'
    }
  
  
  
  