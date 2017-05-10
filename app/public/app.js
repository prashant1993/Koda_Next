/**
 * @ngdoc module
 * @name koda
 * @description
 *   this module contain ui-router and ngDraggable dependencies
 */
var app = angular.module("koda",["ui.router",'ngDraggable']);
/** configure existing services */
/**
 * @ngdoc method
 * @name config
 * @description
 *   defines state routes by defining different states for each different views
 */

app.config(function($stateProvider,$urlRouterProvider,$qProvider) {
$qProvider.errorOnUnhandledRejections(false);
$urlRouterProvider.otherwise('welcome');
$stateProvider
// .state("login", {
//    url: '/login',
//     templateUrl : './templates/login.html',
//     controller: 'loginController'
// })
.state('welcomeUser',{
  url:'/welcomeUser',
  templateUrl : './templates/welcomeUser.html',
  controller: 'welcomeUserCtrl'
})
.state('lionDanceDashboard',{
  url:'/lionDanceDashboard',
  templateUrl:'./templates/lionDanceDashboard.html',
  controller:'lionDanceDashboardCtrl'
})
.state("welcome", {
   url: '/welcome',
    templateUrl : './templates/junglepage.html',
    controller: 'junglepageCtrl'
})
.state("helpLion", {
   url: '/helpLion',
    templateUrl : './templates/helpLion.html',
    controller: 'helpLionCtrl'
})
    .state("learndance", {
       url: '/learndance',
        templateUrl : './templates/lion_dance_goal.html',
        controller: 'lionDanceGoalCtrl'
    })

    .state("flipbook", {
       url: '/flipbook',
        templateUrl : './templates/flipbook.html',
        controller: 'flipbookController'
    })
    .state("stepShown", {
       url: '/stepShown',
        templateUrl : './templates/stepShown.html',
        controller: 'stepShownCtrl'
    })
    .state("wrongMoves", {
       url: '/wrongMoves',
        templateUrl : './templates/wrongMoves.html',
        controller: 'wrongMovesCtrl'
    })
    .state("flipeffect", {
       url: '/flipeffect',
        templateUrl : './templates/flipbookeffect.html',
        controller: 'flipeffectCtrl'
    })
    .state("fulldance", {
       url: '/fulldance',
        templateUrl : './templates/fulldance.html',
        controller: 'fulldanceController'
    })
    .state("thankyou", {
       url: '/thankyou',
        templateUrl : './templates/thankyouPage.html',
        controller: 'thankyouPageCtrl'
    })
    .state("ninjaBadge", {
       url: '/ninjaBadge',
        templateUrl : './templates/ninjaBadge.html',
        controller: 'ninjaBadgeCtrl'
    })
    .state("badgePopup1",{
      URL:'/badgepopup1',
      templateUrl : './templates/ninjaBadgePopup1.html',
      controller:'ninjaBadgePopup1Ctrl'
    })
    .state("badgePopup2",{
      URL:'/badgepopup2',
      templateUrl : './templates/ninjaBadgePopup2.html',
      controller:'ninjaBadgePopup2Ctrl'
    })
    .state("animationExplain", {
       url: '/animationExplain',
        templateUrl : './templates/animationExplain.html',
        controller: 'animationExplainCtrl'
    })
    .state("welcomeGiraffe",{
      url:'/welcomeGiraffe',
      templateUrl:'./templates/welcomeGiraffe.html',
      controller:'welcomeGiraffeCtrl'
    })
    .state("giraffeIntro_1",{
      url:'/giraffeIntro_1',
      templateUrl:'./templates/giraffeIntro.html',
      controller:'giraffeIntroCtrl'
    })
    .state("giraffeIntro_2",{
      url:'/giraffeIntro_2',
      templateUrl:'./templates/giraffeIntro1.html',
      controller:'giraffeIntro1Ctrl'
    })
    .state('giraffeGame',{
      url:'/springKing',
      templateUrl:'./templates/giraffeGame.html',
      controller:'giraffeGameCtrl'
    })
    .state("giraffeGame_1",{
      url:'/giraffeGame_1',
      templateUrl:'./templates/giraffeGame1.html',
      controller:'giraffeGame1Ctrl'
    })
    .state('giraffevoteofthanx',{
      url:'/thankyounote',
      templateUrl:'./templates/giraffeThnxNote.html',
      controller:'giraffeVoteOfThnxCtrl'
    })
    .state("chartypes", {
     url: '/types_of_char'
   })
  .state("typesOfChar1", {
     url: '/types_of_char_p1',
      templateUrl : './templates/types_of_char_p1.html',
      controller: 'typesOfCharp1Ctrl'
  })
  .state("typesOfChar2", {
     url: '/types_of_char_p2',
      templateUrl : './templates/types_of_char_p2.html',
      controller: 'typesOfCharp2Ctrl'
  })
  .state("typesOfChar3", {
     url: '/types_of_char_p3',
      templateUrl : './templates/types_of_char_p3.html',
      controller: 'typesOfCharp3Ctrl'
  })
  .state("selectingCharacter", {
     url: '/selectchar',
      templateUrl : './templates/selectchar.html',
      controller: 'selectcharController'
  })
  .state('playInstruction',{
    url:'/gameInstruction',
    templateUrl:'./templates/giraffePlayInstruction.html',
    controller: 'giraffePlayInstructionCtrl'
  })
  .state("algorithm", {
     url: '/algorithm',
      templateUrl : './templates/algorithm.html',
      controller: 'algorithmCtrl'
  })
  .state("postAlgo",{
    url:'/postAlgo',
    templateUrl:'./templates/postAlgo.html',
    controller:'postAlgoCtrl'
  })
  .state("giraffePlay",{
    url:'/giraffePlay',
    templateUrl:'./templates/giraffePlay.html',
    controller:'giraffePlayCtrl'
  })
  .state("giraffePlay1",{
    url:'/giraffePlay1',
    templateUrl:'./templates/giraffePlay1.html',
    controller:'giraffePlay1Ctrl'
  })
  .state("game2elements", {
     url: '/game_2_elements',
      templateUrl : './templates/game_2_elements.html',
      controller: 'game2elementsCtrl'
  })
  .state("game2elementsNext", {
     url: '/game_2_elements',
      templateUrl : './templates/game_2_element_next.html',
      controller: 'game2elementsCtrl'
  })
  .state("game2algorithm", {
     url: '/game_2_algorithm',
      templateUrl : './templates/game_2_algorithm.html',
      controller: 'game2algorithmCtrl'
  })
  .state("giraffeBadge",{
    url:'/giraffeBadge',
    templateUrl:'./templates/giraffeBadge.html',
    controller:'giraffeBadgeCtrl'
  })
  // .state("giraffeGameIntro", {
  //    url: '/giraffeGameIntro',
  //     templateUrl : './templates/giraffeGameIntro.html',
  //     controller: 'giraffeGameIntroCtrl'
  // });
});
