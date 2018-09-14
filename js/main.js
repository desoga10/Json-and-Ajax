var btn = document.getElementById('button');

btn.addEventListener('click', function() {
  var myRequest = new XMLHttpRequest();
  myRequest.open('GET', 'https://jsonplaceholder.typicode.com/users');
  myRequest.onload = function() {
    var myData = JSON.parse(myRequest.responseText);
    console.log(myData[0]);
  };
  myRequest.send();
});
