import axios from 'axios'

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  headers: {
    Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMWU2YzliMzBmNWExY2E0ZjE4YmY4MWNlZWVjYTkxOCIsInN1YiI6IjY0ZmYxNThhZTBjYTdmMDBjYmU5ZmYzNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.gluuaCnX0wj315_271pWskUZg2J7cF7LOZIf61XLU8c`
  }
})

export default api