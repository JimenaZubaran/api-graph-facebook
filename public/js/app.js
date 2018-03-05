let $input =  $("#input-text");
let $container = $("#api-container");
let $btn = $("#submit-btn");



function paintPage(data){
let template = " ";
console.log(data);
let name = data.name;
let likes = data.likes;
let about = data.about;
let picture = data.picture.data.url;
console.log(picture);
template +=`

<div class="row">
        <div class="col s12 m7">
          <div class="card">
          <img src="${picture}">
            <div class="card-content">
            <h3"> Nombre: ${name}</h3>
              <p> Likes: ${likes}</p>
              <p> About: ${about}</p>
            </div>
          </div>
        </div>
      </div>
 `
 $("#api-container").append(template);
}

function loadPage(){
    $("#submit-btn").on("click", function(e){
     e.preventDefault(); 
     let inputValue = $input.val(); 
     console.log(inputValue);
     $.ajax({
        type : "GET",
        datatype : "json",
        url: "https://graph.facebook.com/"+inputValue+"?fields=id,name,likes,picture,about&access_token=EAACEdEose0cBACmvRzvbJdEFEYh4AXEWZAv79yDNsaZCCpkcnZAPpjj7MoDvhitpCI6lDfqNGdrauZBshTfPTVxnPbZBFZC2J1WHRRqQdSMDucTXgtW7U10k05x6ip0T5Lou9Vd2IVQZC1xA87XnI9oXHz3jqZA6XQGQo3jRLdMTp4hZCAWWRcXsPg3qBOVW9hP4ZD",
    }).done(paintPage)

})
}


$(document).ready(loadPage);