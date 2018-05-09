/*public checkLoginState() {
   console.log('checking login status');
    FB.getLoginStatus((response)=> {
      this.statusChangeCallback(response);
    });
  }
  public statusChangeCallback(response) {
    console.log('statusChangeCallback');
    console.log(response);
    if (response.status === 'connected') {
      console.log('status was already connected. will test api.');
     this.testAPI();
    } else if(response.status ==='not_authorized'){
      console.log('status was not authorised. will call login');

      FB.login((response)=> {
        if (response.status === 'connected') {
          console.log('status is now connected. will test api.');

          this.testAPI();
        } else {
          console.log('fatal.');

          document.getElementById('fb-status-login').innerHTML = 'something serious happened'; 
        }
      });

    } else{
      document.getElementById('fb-status-login').innerHTML = 'Please log ' +
        'into this app.';
    }
  }
  public  testAPI() {
    console.log('Welcome!  Fetching your information.... ');
    FB.api('/me', function(response) {
      console.log('Successful login for: ' + response.name);
      document.getElementById('fb-status-login').innerHTML =
        'Thanks for logging in, ' + response.name + '!';
    });
  }