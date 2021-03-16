// Manipulates responseField to render a formatted and appropriate message
const renderResponse = (res) => {
  // Displays either message depending on results
  if(res.errors){
    responseField.innerHTML = "<p>Sorry, couldn't format your URL.</p><p>Try again.</p>";
  } else {  
    responseField.innerHTML = `<p>Your shortened url is: </p><p> ${res.shortUrl} </p>`;
  }
}

const displayShortUrl = (event) => {
  event.preventDefault();
  while (responseField.firstChild) {
    responseField.removeChild(responseField.firstChild);
  }
  shortenUrl();
};


const inputField =document.getElementById('input');
const button = document.getElementById('shorten')
button.addEventListener('click',displayShortUrl)


const  shortenUrl =()=>{
  const urlToShorten = inputField.value;
  const data = JSON.stringify({destination: urlToShorten});
  const xhr = new XMLHttpRequest;
  xhr.responseType ='json';
  xhr.onreadystatechange = () => {
    if (xhr.readyState === XMLHttpRequest.DONE){
      renderResponse(xhr.response);
    }
  }
  xhr.open('POST', url);
  xhr.setRequestHeader('Content-type', 'application/json');
  xhr.setRequestHeader('apikey', apiKey);
  xhr.send(data);

}

