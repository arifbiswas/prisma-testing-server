const getJsonToken = require("../helpers/getJwtToken");

exports.cookieToken = (user, res) => {
  const token = getJsonToken(user.id);

  const option = {
    expires: new Date(Date.now() + 3 * 1000 * 60 * 60 * 24),
    httpOnly: true,
  };
  user.password = undefined;
  res.status(200).cookie("token", token, option).json({
    success: true,
    token,
    user,
  });
};
