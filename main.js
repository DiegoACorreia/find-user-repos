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
                console.log('entrei no then');
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
            console.log('entrei no catch')
            console.warn('Usuário não encontrado');
        });
}
buttonElement.onclick = verifyUser;