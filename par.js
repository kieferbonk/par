Users = new Mongo.Collection('users');
Courses = new Mongo.Collection('courses');

if (Meteor.isClient) {

  Template.list__courses.helpers({
    courses: function () {
      return Courses.find({});
    }
  });

  Template.reg__user.events({
    'submit .user--add': function (event) {
      var name = event.target.user.value;
      
      Users.insert({
        username: name,
        createdAt: new Date()
      });

      event.target.user.value = '';

      return false; 
    }
  });

  Template.reg__course.events({
    'submit .course--add': function (event) {
      var title = event.target.course.value;
      
      Courses.insert({
        title: title,
        createdAt: new Date()
      });

      event.target.course.value = '';

      return false; 
    }
  });

  Template.list__courses.events({
    'click .course--del': function () {
      Courses.remove(this._id);
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
