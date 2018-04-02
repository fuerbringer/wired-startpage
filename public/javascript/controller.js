var wiredStartpage = angular.module('wired-startpage', [])

wiredStartpage.controller('repeatController', function ($scope) {
  $scope.askApiLogin = function (title, type) {
    var authUrl = 'http://localhost:1337/auth/local'
    swal.setDefaults({
      input: 'text',
      confirmButtonText: 'Next &rarr;',
      showCancelButton: true,
      progressSteps: ['1', '2']
    })

    var steps = [
      {
        title: title,
        type: type,
        text: 'Enter your email address'
      },
      'Enter your password'
    ]

    swal.queue(steps).then(function (result) {
      swal.resetDefaults()
      if (result.value) {
        fetch(authUrl, {
          body: JSON.stringify({
            'identifier': result.value[0],
            'password': result.value[1]
          }),
          method: 'POST',
          headers: {'Content-Type': 'application/json'}
        }).then(function (response) {
          return response.json()
        }).then(function (data) {
          if (data.jwt) {
            localStorage.setItem('wired-startpage-auth-jwt', data.jwt)
            localStorage.setItem('wired-startpage-auth-username', data.user.username)
            localStorage.setItem('wired-startpage-auth-email', data.user.email)
          } else {
            $scope.askApiLogin('Try again...', 'error')
          }
        })
      }
    })
  }

  $scope.init = function () {
    var auth = {
      jwt: localStorage.getItem('wired-startpage-auth-jwt'),
      username: localStorage.getItem('wired-startpage-auth-username'),
      email: localStorage.getItem('wired-startpage-auth-email')
    }
    console.log(auth)
    if (auth.jwt) {
      console.log('logged in...')
    } else {
      $scope.askApiLogin('API Login', 'info')
    }
  }

  $scope.init()
})
