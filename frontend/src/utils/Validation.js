export function findInputError(errors, name) {
    const filtered = Object.keys(errors)
      .filter(key => key.includes(name))
      .reduce((cur, key) => {
        return Object.assign(cur, { error: errors[key] })
      }, {})
    return filtered
}

export const isFormInvalid = err => {
    if (Object.keys(err).length > 0) return true
    return false
}

export const validation = (rq, mxl, mnl) => {
   return {
    required: {
        value: rq,
        message: 'required',
      },
      maxLength: {
        value: mxl,
        message: `${mxl} characters max`,
      },
      minLength: {
        value: mnl,
        message: `${mnl} characters min`,
      },
      pattern: {
        value: /[0-9]/,
        message: 'must numeric',
      },
   }
}