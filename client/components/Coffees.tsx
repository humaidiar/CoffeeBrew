import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../hooks/redux'
import { fetchSetCoffee } from '../actions/getCoffee'
import SingleCoffee from './CoffeeSingle'
import AddMethodForm from './FormCoffee'

export default function AllCoffee() {
  const dispatch = useAppDispatch()
  const coffees = useAppSelector((state) => state.coffeeReducer)

  useEffect(() => {
    dispatch(fetchSetCoffee())
  })

  return (
    <section className="container">
      <div className="card-list">
        <AddMethodForm />
        {coffees
          .slice()
          .reverse()
          .map((coffees) => (
            <SingleCoffee coffeeProp={coffees} key={coffees.id} />
          ))}
      </div>
    </section>
  )
}
