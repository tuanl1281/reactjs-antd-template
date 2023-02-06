import React, { useState, useCallback } from 'react';
import styled from 'styled-components';

import { PlusOutlined } from '@ant-design/icons';
import { Card, Input, Button } from 'antd';
import TaskTable from 'task/components/TaskTable';
import TaskUser from 'task/components/TaskUser';

import { useDispatch, useSelector } from 'react-redux';
import { getTasks, createTask } from 'task/actions/task';

const Container = styled.div`
  width: 600px;
  margin: 250px auto;
`;

const Header = styled.div`
  display: flex;
  margin-bottom: 24px;

  & .title {
    font-size: 26px;
    font-weight: 700;
  }

  & .profile {
    margin-left: auto;
  }
`;

const Form = styled.div`
  margin-bottom: 12px;
`;

const TaskMenu = () => {
  const [description, setDescription] = useState(undefined);

  const dispatch = useDispatch();
  const { createTaskLoading } = useSelector((_) => _.task);

  const onCreate = useCallback(async () => {
    if (!description) {
      return;
    }

    const payload = { description };
    await dispatch(createTask(payload));
    await dispatch(getTasks({}));

    setDescription(undefined);
  }, [dispatch, description]);

  return (
    <Container>
      <Card>
        <Header>
          <div className="title">Todo List</div>
          <div className="profile">
            <TaskUser />
          </div>
        </Header>
        <Form>
          <Input.Group compact>
            <Input
              style={{ width: 'calc(100% - 31px)' }}
              value={description}
              onChange={(event) => setDescription(event.target.value)}
              onKeyDown={(event) => {
                if (event.key === 'Enter') {
                  // eslint-disable-next-line
                  !createTaskLoading && onCreate();
                }
              }}
            />
            <Button
              type="primary"
              icon={<PlusOutlined />}
              onClick={() => !createTaskLoading && onCreate()}
            />
          </Input.Group>
        </Form>
        <TaskTable />
      </Card>

    </Container>
  );
};

export default TaskMenu;
