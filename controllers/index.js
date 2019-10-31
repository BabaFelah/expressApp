exports.index = function(req, res, next) {
  res.render("index", { title: "Express" });
};

exports.submit_lead = function(req, res, next) {
  console.log("Lead email: ", req.body.lead_email);

  //after submitting the form, go back to the landing page
  res.redirect("/");
};
