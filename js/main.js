var myRequest = new XMLHttpRequest();
myRequest.open('GET', 'https://jsonplaceholder.typicode.com/users');
myRequest.onload = function() {
  console.log(myRequest.responseText);
};
myRequest.send();
