function JSONparse (value) {
    try{
      return JSON.parse(value);    
    }catch(error) {
      alert(`Parse error: ${error.message}`)
    }
  }

  export {JSONparse}