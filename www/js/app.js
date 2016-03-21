// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers','timer','LocalStorageModule'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  
  });
})
.constant('topicMap', {
    1 : 'data/p1.js',
    2 : 'data/p2.js',
    3 : 'data/p3.js',
    4 : 'data/p4.js',
    5 : 'data/p5.js',
    6 : 'data/p6.js',
    7 : 'data/p7.js',
    8 : 'data/p8.js',
    9 : 'data/p9.js',
    10 : 'data/p10.js',
    11 : 'data/p11.js',
    100 : 'data/exam1.js',
    200 : 'data/exam2.js',
    300: 'data/exam3.js',
    400: 'data/exam4.js',
    500: 'data/exam5.js'
})
.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.ebook', {
      url: '/ebook',
      views: {
        'menuContent': {
          templateUrl: 'templates/ebook.html'
        }
      }
    })
  .state('app.settings', {
      url: '/settings',
      views: {
        'menuContent': {
          templateUrl: 'templates/settings.html'
        }
      }
    })
    .state('app.share', {
      url: '/share',
      views: {
        'menuContent': {
          templateUrl: 'templates/share.html'
        }
      }
    })
    .state('app.topics', {
      url: '/topics',
      views: {
        'menuContent': {
          templateUrl: 'templates/topics.html'
        }
      }
    })
    .state('app.chat', {
				url : '/chat',
				views : {
					'menuContent' : {
						templateUrl : 'templates/chat.html'
					}
				}
			})
	 .state('app.cards', {
				url : '/cards',
				views : {
					'menuContent' : {
						templateUrl : 'templates/cards.html'
					}
				}
			})
			 .state('app.fcards', {
				url : '/fcards',
				views : {
					'menuContent' : {
						templateUrl : 'templates/flashcards.html'
					}
				}
			})
				 .state('app.contactus', {
				url : '/contactus',
				views : {
					'menuContent' : {
						templateUrl : 'templates/contactus.html'
					}
				}
			})

  .state('app.single', {
    url: '/topics/:topicId',
    views: {
      'menuContent': {
        templateUrl: 'templates/topic.html',
        controller: 'AppCtrl'
       }
    }
  });
  // if none of the above states are matched, use this as the fallback
//  $urlRouterProvider.otherwise('/app/topics');
//this is due to the chatUI widget with hyperlinks, so if anytime other than the first login a link is clicked go to chat.
	$urlRouterProvider.otherwise(function($injector, $location){
		   var state = $injector.get('$state');
		   if(state.current.name == '') {
			   state.go('app.topics');
		   }
		   else {
			   state.go('app.topics'); //reverting
		   }
		   return $location.path();
		});
})


;
