fetch('https://restcountries.com/v2/all')
      .then(response => response.json())
      .then(json => {
        for (let i = 0; i < json.length; i++) {

            var y = document.createElement('li')
            
            var content = `<div class="card" style="width:500px" >
            <img class="card-img-top" src="XXX" alt="Card image">
            <div class="card-body">
              <h4 class="card-title">YYY</h4>
              <p class="card-text">ZZZ</p>
              <a href="#" class="btn btn-primary">See Profile</a>
            </div>
          </div>`;

            var test = content.replace("XXX",json[i].flag)
            
            test = test.replace("YYY",json[i].name)
            test = test.replace("ZZZ",json[i].capital + '  '+' / ' + json[i].population + '  '+ ' / '+ json[i].area + '   '+' /' + json[i].region +' / ' + json[i].timezones )

            
            y.innerHTML = test;
            y.className ='row';
             document.getElementById('my-ul').appendChild(y);

            // var x = document.createElement('img')
            // x.src = json[i].flag ;
            //  document.getElementById('my-ul').appendChild(x);


}
      }
      )