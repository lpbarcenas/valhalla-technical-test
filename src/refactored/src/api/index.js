export const api = async(category="Nature", page=1) => {
    const link = `http://localhost:8888/images?category=${category}&page=${page}`
    return  fetch(link)
    .then(function (response) {
      return response.json()
    })
    .then(function (result) {
      return result
    })
    
}