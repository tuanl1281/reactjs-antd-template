import { types } from 'task/actions';
import { httpClient, apiLinks } from 'app/utils';

const getTasksRequest = () => ({ type: types.GET_TASKS_REQUEST });
const getTasksSuccess = (response) => ({
  type: types.GET_TASKS_SUCCESS,
  payload: response,
});
const getTasksFailure = (error) => ({
  type: types.GET_TASKS_FAILURE,
  payload: error,
});

const getTasks = ({
  pageIndex = 0,
  pageSize = 500,
}) => (dispatch) =>
  new Promise((resolve, reject) => {
    dispatch(getTasksRequest());
    httpClient
      .callApi({
        method: 'GET',
        url: apiLinks.task.get(),
        params: {
          pageIndex,
          pageSize
        }
      })
      .then((response) => {
        // eslint-disable-next-line
        const data = response?.data ?? null;
        dispatch(getTasksSuccess(data));
        resolve(data);
      })
      .catch((response) => {
        dispatch(getTasksFailure(response));
        reject(response);
      });
  });

const getTaskRequest = (payload) => ({ type: types.GET_TASK_REQUEST, payload });
const getTaskSuccess = (response) => ({
  type: types.GET_TASK_SUCCESS,
  payload: response,
});
const getTaskFailure = (error) => ({
  type: types.GET_TASK_FAILURE,
  payload: error,
});

const getTask = (id) => (dispatch) =>
  new Promise((resolve, reject) => {
    dispatch(getTaskRequest(id));
    httpClient
      .callApi({
        method: 'GET',
        url: apiLinks.task.get(id),
      })
      .then((response) => {
        // eslint-disable-next-line
        const data = response?.data?.data ?? null;
        dispatch(getTaskSuccess(data));
        resolve(data);
      })
      .catch((response) => {
        dispatch(getTaskFailure(response));
        reject(response);
      });
  });

const createTaskRequest = () => ({ type: types.CREATE_TASK_REQUEST });
const createTaskSuccess = (response) => ({
  type: types.CREATE_TASK_SUCCESS,
  payload: response,
});
const createTaskFailure = (error) => ({
  type: types.CREATE_TASK_FAILURE,
  payload: error,
});

const createTask = (data) => (dispatch) =>
  new Promise((resolve, reject) => {
    dispatch(createTaskRequest());
    httpClient
      .callApi({
        method: 'POST',
        url: apiLinks.task.create(),
        data
      })
      .then((response) => {
        // eslint-disable-next-line
        const data = response?.data?.data ?? null;
        dispatch(createTaskSuccess(data));
        resolve(data);
      })
      .catch((response) => {
        dispatch(createTaskFailure(response));
        reject(response);
      });
  });

const updateTaskRequest = (payload) => ({ type: types.UPDATE_TASK_REQUEST, payload });
const updateTaskSuccess = (response) => ({
  type: types.UPDATE_TASK_SUCCESS,
  payload: response,
});
const updateTaskFailure = (error) => ({
  type: types.UPDATE_TASK_FAILURE,
  payload: error,
});

const updateTask = (data, id) => (dispatch) =>
  new Promise((resolve, reject) => {
    dispatch(updateTaskRequest());
    httpClient
      .callApi({
        method: 'PUT',
        url: apiLinks.task.update(id),
        data
      })
      .then((response) => {
        // eslint-disable-next-line
        const data = response?.data?.data ?? null;
        dispatch(updateTaskSuccess(data));
        resolve(data);
      })
      .catch((response) => {
        dispatch(updateTaskFailure(response));
        reject(response);
      });
  });

const deleteTaskRequest = (payload) => ({ type: types.DELETE_TASK_REQUEST, payload });
const deleteTaskSuccess = (response) => ({
  type: types.DELETE_TASK_SUCCESS,
  payload: response,
});
const deleteTaskFailure = (error) => ({
  type: types.DELETE_TASK_FAILURE,
  payload: error,
});

const deleteTask = (id) => (dispatch) =>
  new Promise((resolve, reject) => {
    dispatch(deleteTaskRequest(id));
    httpClient
      .callApi({
        method: 'DELETE',
        url: apiLinks.task.delete(id)
      })
      .then((response) => {
        // eslint-disable-next-line
        const data = response?.data?.data ?? null;
        dispatch(deleteTaskSuccess(data));
        resolve(data);
      })
      .catch((response) => {
        dispatch(deleteTaskFailure(response));
        reject(response);
      });
  });

const completeTaskRequest = (payload) => ({ type: types.COMPLETE_TASK_REQUEST, payload });
const completeTaskSuccess = (response) => ({
  type: types.COMPLETE_TASK_SUCCESS,
  payload: response,
});
const completeTaskFailure = (error) => ({
  type: types.COMPLETE_TASK_FAILURE,
  payload: error,
});

const completeTask = (id) => (dispatch) =>
  new Promise((resolve, reject) => {
    dispatch(completeTaskRequest(id));
    httpClient
      .callApi({
        method: 'PUT',
        url: apiLinks.task.complete(id)
      })
      .then((response) => {
        // eslint-disable-next-line
        const data = response?.data?.data ?? null;
        dispatch(completeTaskSuccess(data));
        resolve(data);
      })
      .catch((response) => {
        dispatch(completeTaskFailure(response));
        reject(response);
      });
  });

export {
  getTasks,
  getTasksRequest,
  getTasksSuccess,
  getTasksFailure,
  getTask,
  getTaskRequest,
  getTaskSuccess,
  getTaskFailure,
  createTask,
  createTaskRequest,
  createTaskSuccess,
  createTaskFailure,
  updateTask,
  updateTaskRequest,
  updateTaskSuccess,
  updateTaskFailure,
  deleteTask,
  deleteTaskRequest,
  deleteTaskSuccess,
  deleteTaskFailure,
  completeTask,
  completeTaskRequest,
  completeTaskSuccess,
  completeTaskFailure
};

export default {
  getTasks,
  getTasksRequest,
  getTasksSuccess,
  getTasksFailure,
  getTask,
  getTaskRequest,
  getTaskSuccess,
  getTaskFailure,
  createTask,
  createTaskRequest,
  createTaskSuccess,
  createTaskFailure,
  updateTask,
  updateTaskRequest,
  updateTaskSuccess,
  updateTaskFailure,
  deleteTask,
  deleteTaskRequest,
  deleteTaskSuccess,
  deleteTaskFailure,
  completeTask,
  completeTaskRequest,
  completeTaskSuccess,
  completeTaskFailure
};
