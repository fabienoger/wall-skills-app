FlowRouter.route('/', {
  action: function() {
    BlazeLayout.render('layout', { main: 'home', navbar: 'menu' });
  },
  name: 'home'
});

// Login route
FlowRouter.route('/login', {
  action: function() {
    BlazeLayout.render('layout', { main: 'login'});
  },
  name: 'login'
});

// Register route
FlowRouter.route('/register', {
  action: function() {
    BlazeLayout.render('layout', { main: 'register'});
  },
  name: 'register'
});

// Redirect the user if it is not connected

function redirectIfIsNotLogin(context) {
  if (!Meteor.userId()) {
    FlowRouter.go('login');
    return;
  }
}

FlowRouter.triggers.enter([redirectIfIsNotLogin], {except: ["login", "register"]});

// Redirect the user if it is not connected
function redirectIfIsNotLogin(context) {
  if (!Meteor.userId()) {
    FlowRouter.go('login');
    return;
  }
}

//FlowRouter.triggers.enter([redirectIfIsNotLogin], {except: ["login", "register"]});
