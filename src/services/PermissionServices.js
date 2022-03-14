const checkUserLoginStatus = (req) => {
  if (!req.user) {
    throw new Error("User is not logged in");
  }
  return;
};

const checkIfAdmin = (req) => {
  checkUserLoginStatus(req);

  if (!req.user.isAdmin) {
    throw new Error("User is not an admin");
  }
  return;
};

const PermissionServices = {
  checkUserLoginStatus,
  checkIfAdmin,
};

module.exports = PermissionServices;
