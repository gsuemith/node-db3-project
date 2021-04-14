/*
  If `scheme_id` does not exist in the database:

  status 404
  {
    "message": "scheme with scheme_id <actual id> not found"
  }
*/
const checkSchemeId = Schemes => (req, res, next) => {
  const id = req.params.scheme_id;
  Schemes.findById(id)
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
  const { scheme_name } = req.body
  if (scheme_name && typeof(scheme_name) === 'string') {
    next()
  } else {
    res.status(400).json({
      "message": "invalid scheme_name"
    })
  }
}

/*
  If `instructions` is missing, empty string or not a string, or
  if `step_number` is not a number or is smaller than one:

  status 400
  {
    "message": "invalid scheme_name"
  }
*/
const validateStep = (req, res, next) => {
  const { instructions, step_number } = req.body
  if (instructions && typeof(instructions) === 'string'
    && typeof(step_number) === 'number' && step_number > 0){
    next()
  } else {
    res.status(400).json({
      "message": "invalid step"
    })
  } 
}

module.exports = {
  checkSchemeId,
  validateScheme,
  validateStep,
}
