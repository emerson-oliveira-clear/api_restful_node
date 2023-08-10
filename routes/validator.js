//alteração na syntax atualização do express-validator
module.exports = app => {
let route = app.route('/users');
route.post(
    (req, res) => {
      
      
      db.insert(req.body, (err, user) => {
        if (err) {
          app.utils.error.send(err, req, res);
        } else {
          res.status(200).json(user);
        }
      });
    }
  );
}