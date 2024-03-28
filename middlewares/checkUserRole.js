checkUserRoleCoach = (req, res, next) => {
  if (req?.user?.role !== "Public") {
    res.status(403).json({
      message: "Accès refusé",
    });
    return;
  }
  next();
};

checkUserRoleStudents = (req, res, next) => {
  if (req?.user?.role !== "Apprenants") {
    res.status(403).json({
      message: "Accès refusé",
    });
    return;
  }
  next();
};

module.exports = {
  checkUserRoleCoach,
  checkUserRoleStudents,
};
