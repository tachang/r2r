Router.configure({
  layoutTemplate: 'layout'
});

Meteor.startup(function () {
  if (Meteor.isClient) {
    var location = Iron.Location.get();
    if (location.queryObject.platformOverride) {
      Session.set('platformOverride', location.queryObject.platformOverride);
    }
  }
});

Router.map(function() {
  this.route('splash', {path: '/'});
  this.route('index');
  this.route('studentList');
  this.route('priorityList');
  this.route('levelList');
  this.route('studentAdd');
  this.route('interview');
  this.route('admin');
  this.route('bridge');
  this.route('metrics');

  this.route('tabs.one', {path: '/tabs/one', layoutTemplate: 'tabsLayout'});
  this.route('tabs.two', {path: '/tabs/two', layoutTemplate: 'tabsLayout'});
  this.route('tabs.three', {path: '/tabs/three', layoutTemplate: 'tabsLayout'});

  this.route('cardList', 
  {
    name: "cardList",
    path: "/cardList/:level?",
    data: function() {
      return {
        cards: Cards.find({
          level: this.params.level
        })
      }
    }
  })

  // this.route('cards', 
  // {
  //   name: "cards",
  //   path: "/cards/:level",
  //   data: function() {
  //     cards = Cards.find({
  //       level: this.params.level
  //     }).fetch();

  //     blob = {
  //       cards: cards
  //     }
  //     console.log("cards", blob);
  //     return(blob);
  //   }
  // })

  // this.route('forms', {
  //   data: function () {
  //     return {
  //       post: Posts.find().fetch()[0]
  //     };
  //   }
  // });
})
