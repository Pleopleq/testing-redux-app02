import React from "react";
import { useSelector, useDispatch } from 'react-redux'
import { voteAnecdote } from '../reducers/anecdoteReducer'
import { setNewNotification } from '../reducers/notificationReducer'
import store from '../store'

const AnecdoteList = () => {
    const anecdotes = useSelector(state => state.anecdotes)
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
  const vote = (id) => {
    const anecdoteVoted = store.getState().anecdotes.find((a) => a.id === id);
    dispatch(voteAnecdote(id))
    dispatch(setNewNotification(`You voted for "${anecdoteVoted.content}"`))
  }

  const anecdotesSortedByVotes = anecdotes.sort(compare)
  return (
    anecdotesSortedByVotes.map(anecdote =>
    <div key={anecdote.id}>
      <div>{anecdote.content}</div>
      <div>
        has {anecdote.votes}
        <button onClick={() => vote(anecdote.id)}>vote</button>
      </div>
    </div>
    )
  );
};

export default AnecdoteList