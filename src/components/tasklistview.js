import { useState } from "react";
import { connect } from "react-redux";

const Task = props => {};

const TaskListView = props => {
  console.log(props);
  return <div></div>;
};

const mapToDoStateToProps = state => {
  return { tasksToComplete: state.tasksToComplete };
};

const mapCompletedStateToProps = state => {
  return { completedTasks: state.completedTasks };
};

const TasksToDoList = connect(mapToDoStateToProps)(TaskListView);

export default connect(mapStateToProps)(TaskListView);
