
import { actionTypes } from '../actions'
import { combineReducers } from 'redux'

const tasksToCompleteReducer = (tasksToComplete=[], action) => {
  const actionTask = action.payload
  const {id, isComplete} = actionTask
  if(action.type === actionTypes.createTask) {
    return [ ...tasksToComplete, action.payload ]
  }
  if(action.type === actionTypes.deleteTask) {
    return tasksToComplete.filter((task) => {
      if(id !== task.id) {
        return task
      }
    })
  }
  if(action.type === actionTypes.editTask){
    return tasksToComplete.filter((task) => {
      if(id === task.id && isComplete === false) {
        return actionTask
      }
      if(task.isComplete === false) {
        return task
      }
    })
  }
  if(action.type === actionTypes.completeTask){
    return tasksToComplete.filter((task) => {
      if(id !== task.id) {
        return task
      }
    })
  }
  return tasksToComplete
}

const completedTasksReducer = (completedTasks=[], action) => {
  const actionTask = action.payload
  const {id, isComplete} = actionTask
  if(action.type === actionTypes.editTask){
    return completedTasks.filter((task)=>{
      if(id === task.id && isComplete) {
        return actionTask
      }
      if(task.isComplete) {
        return task
      }
    })
  if(action.type === actionTypes.completeTask){
    return [...completedTasks, actionTask]
  }
  return completedTasks
}

export default combineReducers({
  tasksToComplete: tasksToCompleteReducer,
  completedTasks: completedTasksReducer,
})