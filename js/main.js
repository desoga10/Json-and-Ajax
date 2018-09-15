var userInfo = document.getElementById('users-info');
var btn = document.getElementById('button');

btn.addEventListener('click', function() {
  var myRequest = new XMLHttpRequest();
  myRequest.open('GET', 'https://jsonplaceholder.typicode.com/users');
  myRequest.onload = function() {
    var myData = JSON.parse(myRequest.responseText);
    renderHTML(myData);
  };
  myRequest.send();
});

function renderHTML(data) {
  var htmlString = '';

  for (i = 0; i < data.length; i++) {
    htmlString +=
      '<p>' + data[i].name + ' is number ' + data[i].id + ' .</p>' + '<br>';
  }

  userInfo.insertAdjacentHTML('beforeend', htmlString);
}
