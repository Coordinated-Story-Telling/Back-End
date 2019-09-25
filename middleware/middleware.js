module.exports = {
  validatePost,
  validateEdit,
  validateUserRegistration,
  validateUserLogin
};


function validatePost(request, response, next) {
  if (!request.body) {
    response.status(400).json({ message: "story data not found" });
  } else if (!request.body.title) {
    response.status(400).json({ message: "title is required" });
  } else if (!request.body.description) {
    response.status(400).json({ message: "description is required" });
  } else if (!request.body.user_id) {
    response.status(400).json({ message: "user id is required" });
  } else if (!request.body.country_id) {
    response.status(400).json({ message: "country id is required" });
  }
  next();
}

function validateEdit(request, response, next) {
  if (!request.body) {
    response.status(400).json({ message: "story data not found" });
  } else if (!request.body.id) {
    response.status(400).json({ message: "story id is required" });
  }
  next();
}

function validateUserRegistration(request, response, next) {
  if (!request.body) {
    response.status(400).json({ message: "user data not found" });
  } else if (!request.body.username) {
    response.status(400).json({ message: "username is required" });
  } else if (!request.body.password) {
    response.status(400).json({ message: "password is required" });
  } else if (!request.body.lastName) {
    response.status(400).json({ message: "last name is required" });
  } else if (!request.body.firstName) {
    response.status(400).json({ message: "first name is required" });
  } else if (!request.body.email) {
    response.status(400).json({ message: "email is required" });
  }
  next();
}

function validateUserLogin(request, response, next) {
  if (!request.body) {
    response.status(400).json({ message: "user data not found" });
  } else if (!request.body.username) {
    response.status(400).json({ message: "username is required" });
  } else if (!request.body.password) {
    response.status(400).json({ message: "password is required" });
  }
  next();
}
