const pg = require("pg");
const dotenv = require("dotenv");
const { pool } = require("../db/config");

exports.index = function(req, res, next) {
  res.render("index", { title: "Express" });
};

exports.submit_lead = function(req, res, next) {
  console.log("Lead email: ", req.body.lead_email);

  const email = req.body.lead_email;
  return pool.query(
    "insert into leads(createdat, email) values(now(), $1)",
    [email],
    (error, results) => {
      if (error) {
        throw error;
      }
      res.redirect("/leads");
    }
  );
};

exports.show_leads = function(req, res, next) {
  return pool.query("select * from leads", (error, results) => {
    if (error) {
      throw error;
    }
    res.render("index", { title: "Express", leads: results.rows });
  });
};

exports.show_lead = function(req, res, next) {
  const id = req.params.leadId;
  return pool.query(
    "select email from leads where id = $1",
    [id],
    (error, results) => {
      if (error) {
        throw error;
      }
      res.render("lead", { lead: results.rows[0].email });
    }
  );
};
