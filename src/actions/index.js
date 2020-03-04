//action creator
/*
to-do data model 

TASK:
id
description 
isComplete
*/

export const actionTypes = {
  createTask: "CREATE_TASK",
  editTask: "EDIT_TASK",
  completeTask: "COMPLETE_TASK",
  deleteTask: "DELETE_TASK"
};

export const createTask = task => {
  return {
    type: actionTypes.createTask,
    payload: task
  };
};

export const editTask = task => {
  return {
    type: actionTypes.editTask,
    payload: task
  };
};

export const completeTask = task => {
  return {
    type: actionTypes.completeTask,
    payload: task
  };
};

export const deleteTask = task => {
  return {
    type: actionTypes.deleteTask,
    payload: task
  };
};
