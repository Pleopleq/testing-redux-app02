import React from "react";
import { useDispatch } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { setNewNotification, clearNotification } from '../reducers/notificationReducer'


const AnecdoteForm = () => {
  const dispatch = useDispatch()

  const addAnecdote = (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ''
    dispatch(createAnecdote(content))
    dispatch(setNewNotification(`You added a new anecdote "${content}"`))
    let timeout = setTimeout(() => {
      clearInterval(timeout)
      dispatch(clearNotification())
    }, 3000);
  }
  return (
    <form onSubmit={addAnecdote}>
      <h2>create new anecdote</h2>
      <div>
        <input name="anecdote" />
      </div>
      <button type="submit">create</button>
    </form>
  );
};

export default AnecdoteForm