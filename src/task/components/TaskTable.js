import React, { useEffect, useCallback } from 'react';
import styled from 'styled-components';

import { List } from 'antd';
import TaskItem from 'task/components/TaskItem';

import { useDispatch, useSelector } from 'react-redux';
import { getTasks } from 'task/actions/task';
import { defaultPaging } from 'app/utils/helpers';

const Wrapper = styled.div`
  & .ant-list-item-action {
    > li {
      padding: 0;
    }
  }
`;

const TaskTable = () => {
  const dispatch = useDispatch();
  const { taskList, getTasksLoading } = useSelector((_) => _.task);

  const loading = getTasksLoading;
  const { data } = taskList || defaultPaging;

  const handleRefresh = useCallback(() => {
    dispatch(getTasks({}));
  }, [dispatch]);
  useEffect(handleRefresh, [handleRefresh]);

  return (
    <Wrapper>
      <List
        loading={loading}
        dataSource={data}
        renderItem={(item) => (
          <TaskItem
            data={item}
            onRefresh={handleRefresh}
          />
        )}
      />
    </Wrapper>
  );
};

export default TaskTable;
