const validate = {
  email (email) {
    const res = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/
    return res.test(email)
  }
}

export default validate
