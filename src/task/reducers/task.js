import { types } from 'task/actions';
import { defaultPaging } from 'app/utils/helpers';

const INITIAL_STATE = {
  request: null,
  taskList: defaultPaging,
  taskData: null,
  getTasksLoading: false,
  getTaskLoading: false,
  createTaskLoading: false,
  updateTaskLoading: false,
  deleteTaskLoading: false,
  completeTaskLoading: false,
};

export default function (state = INITIAL_STATE, action) {
  const { type, payload } = action;

  switch (type) {
    case types.GET_TASKS_REQUEST: {
      return {
        ...state,
        getTasksLoading: true,
      };
    }
    case types.GET_TASKS_SUCCESS: {
      return {
        ...state,
        taskList: payload,
        getTasksLoading: false,
      };
    }
    case types.GET_TASKS_FAILURE: {
      return {
        ...state,
        getTasksLoading: false,
      };
    }
    case types.GET_TASK_REQUEST: {
      return {
        ...state,
        request: payload,
        getTaskLoading: true,
      };
    }
    case types.GET_TASK_SUCCESS: {
      return {
        ...state,
        request: null,
        taskData: payload,
        getTaskLoading: false,
      };
    }
    case types.GET_TASK_FAILURE: {
      return {
        ...state,
        request: null,
        getTaskLoading: false,
      };
    }
    case types.CREATE_TASK_REQUEST: {
      return {
        ...state,
        createTaskLoading: true,
      };
    }
    case types.CREATE_TASK_SUCCESS:
    case types.CREATE_TASK_FAILURE: {
      return {
        ...state,
        createTaskLoading: false,
      };
    }
    case types.UPDATE_TASK_REQUEST: {
      return {
        ...state,
        request: payload,
        updateTaskLoading: true,
      };
    }
    case types.UPDATE_TASK_SUCCESS:
    case types.UPDATE_TASK_FAILURE: {
      return {
        ...state,
        request: null,
        updateTaskLoading: false,
      };
    }
    case types.DELETE_TASK_REQUEST: {
      return {
        ...state,
        request: payload,
        deleteTaskLoading: true,
      };
    }
    case types.DELETE_TASK_SUCCESS:
    case types.DELETE_TASK_FAILURE: {
      return {
        ...state,
        request: null,
        deleteTaskLoading: false,
      };
    }
    case types.COMPLETE_TASK_REQUEST: {
      return {
        ...state,
        request: payload,
        completeTaskLoading: true,
      };
    }
    case types.COMPLETE_TASK_SUCCESS:
    case types.COMPLETE_TASK_FAILURE: {
      return {
        ...state,
        request: null,
        completeTaskLoading: false,
      };
    }
    default:
      return state;
  }
}
