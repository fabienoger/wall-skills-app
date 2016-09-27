FlowRouter.route('/', {
  action: function() {
    BlazeLayout.render('layout', { main: 'home', navbar: 'menu' });
  },
  name: 'home'
});

// Redirect the user if it is not connected

function redirectIfIsNotLogin(context) {
  if (!Meteor.userId()) {
    FlowRouter.go('login');
    return;
  }
}

//FlowRouter.triggers.enter([redirectIfIsNotLogin], {except: ["login", "register"]});
