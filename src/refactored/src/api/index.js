export const api = async(category="nature", page=1) => {

    const link = `${process.env.API_URL}/images?category=${category}&page=${page}`
    return  fetch(link)
    .then(function (response) {
      return response.json()
    })
    .then(function (result) {
      return result
    })
    
}