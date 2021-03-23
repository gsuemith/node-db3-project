/*
  If `scheme_id` does not exist in the database:

  status 404
  {
    "message": "scheme with scheme_id <actual id> not found"
  }
*/
const checkSchemeId = Schemes => (req, res, next) => {
  const id = req.params.id;
  Schemes.findbyId(id)
  .then(scheme => {
    if (scheme) {
      next();
    } else {
      res.status(404).json({
        message: `scheme with scheme_id ${id} not found`
      })
    }
  })
  .catch(err => next(err))
}

/*
  If `scheme_name` is missing, empty string or not a string:

  status 400
  {
    "message": "invalid scheme_name"
  }
*/
const validateScheme = (req, res, next) => {

}

/*
  If `instructions` is missing, empty string or not a string, or
  if `step_number` is not a number or is smaller than one:

  status 400
  {
    "message": "invalid step"
  }
*/
const validateStep = (req, res, next) => {

}

module.exports = {
  checkSchemeId,
  validateScheme,
  validateStep,
}
