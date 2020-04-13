var inputElement = document.querySelector('#username');
var buttonElement = document.querySelector('#addButton');
var ulElement = document.querySelector('#reposList')


function verifyUser(){
    var username = inputElement.value;
    axios.get('https://api.github.com/users/'+ username +'/repos')
        .then(function(response){
            console.log(response);
            ulElement.innerHTML = null;
            for (object of response.data){
                var aElement = document.createElement('a');
                var aText = document.createTextNode(object.name);
                var liElement = document.createElement('li');
                aElement.setAttribute('target','_blank');
                aElement.setAttribute('href',''+ object.svn_url +'');
                aElement.appendChild(aText);
                liElement.appendChild(aElement);
                ulElement.appendChild(liElement);
                inputElement.value = null;
            }
        })
        .catch(function(error){
            ulElement.innerHTML = null;
            var userNotFoundText = document.createTextNode('ERRO: O usuário '+ username +' não existe, verifique se você escreveu o nome dele corretamente');
            var userNotFound = document.createElement('p');
            userNotFound.appendChild(userNotFoundText);
            ulElement.appendChild(userNotFound);
            inputElement.value = null;
        });
}
buttonElement.onclick = verifyUser;