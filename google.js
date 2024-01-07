window.onload = function() {
    document.getElementById('lucky-button').addEventListener('click', function(event) {
      event.preventDefault();
      const form = document.getElementById('search-form');
      form.action = 'https://www.gmail.com';
      form.submit();
    });
  };