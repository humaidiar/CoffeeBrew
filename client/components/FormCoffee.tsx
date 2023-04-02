import { ChangeEvent, FormEvent, useState } from 'react'
import { useAppDispatch } from '../hooks/redux'
import { fetchAddCoffee } from '../actions/getCoffee'
import { CoffeeData } from '../models/Coffee'
import LoadingScreen from './LoadingScreen'

function AddMethodForm() {
  const dispatch = useAppDispatch()

  const [coffeeMethod, setMethods] = useState({} as CoffeeData)
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setMethods({ ...coffeeMethod, [e.target.id]: e.target.value })
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
      dispatch(fetchAddCoffee(coffeeMethod))
      window.location.reload()
    }, 3000)
  }

  return (
    <div className="form-add">
      <form onSubmit={handleSubmit}>
        <h1>Share with us a new brewing technique</h1>
        <label htmlFor="name">Method Name</label>
        <input
          name="name"
          id="name"
          type="text"
          onChange={handleChange}
          placeholder="Your favorite brew method"
          required
        />
        <label htmlFor="url">Image Url </label>
        <input
          name="url"
          id="url"
          type="text"
          onChange={handleChange}
          placeholder="ex:'https://images....'"
          required
        />
        <label htmlFor="selftext">Short Description </label>
        <textarea
          name="selftext"
          id="selftext"
          className="text-input"
          onChange={handleChange}
          placeholder="Max 20 words"
          required
        />

        <button type="submit">Submit</button>
      </form>
      {/* Adding animation for loading */}
      {isLoading && (
        <div className="loading-screen">
          <LoadingScreen />
        </div>
      )}
    </div>
  )
}

export default AddMethodForm
