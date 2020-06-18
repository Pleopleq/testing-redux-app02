import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { createAnecdote } from './reducers/anecdoteReducer'

const App = () => {
  const anecdotes = useSelector(state => state)
  const dispatch = useDispatch()

  const compare = (a, b) => {
    const anecdoteA = a.votes
    const anecdoteB = b.votes

    let comparison = 0
    if (anecdoteA < anecdoteB){
      comparison = 1
    } else if (anecdoteA > anecdoteB){
      comparison = -1
    }
    return comparison
  }

  const anecdotesSortedByVotes = anecdotes.sort(compare)

  const addAnecdote = (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ''
    dispatch(createAnecdote(content))
  }

  const vote = (id) => {
    dispatch({type: 'VOTE', data: { id }})
  }

  return (
    <div>
      <h2>Anecdotes</h2>
      {anecdotesSortedByVotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      )}
      <h2>create new</h2>
      <form onSubmit={addAnecdote}>
        <div><input name="anecdote" /></div>
        <button type="submit">create</button>
      </form>
    </div>
  )
}

export default App