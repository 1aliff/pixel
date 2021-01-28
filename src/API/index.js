const AUTHORIZATION = process.env.REACT_APP_AUTHORIZATION;

const getData = async (query) => {
    const url = `https://api.pexels.com/v1/search?query=${query}`

    try {
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          Authorization : AUTHORIZATION,
          'Content-Type' : 'application/json;charset=UTF-8'
        }
      })
      
      const { photos } = await response.json()
      return photos;

    } catch(error){
      alert(error)
    }
  }

export default getData;