import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { LoadingOutlined, CheckOutlined, DeleteOutlined } from '@ant-design/icons';
import { List, Space as SpaceANTD, Tooltip, Popconfirm, Spin, Button } from 'antd';

import { useDispatch, useSelector } from 'react-redux';
import { completeTask, deleteTask } from 'task/actions/task';

const Space = styled(SpaceANTD)`
  margin-left: 6px;
`;

const Trash = ({ loading, onConfirm, onCancel }) => (
  <Popconfirm
    okText="Yes"
    cancelText="No"
    title="Are you sure to delete this?"
    placement="topLeft"
    onConfirm={onConfirm}
    onCancel={onCancel}
    okButtonProps={{ loading }}
  >
    <Button
      danger
      type="dashed"
      icon={<DeleteOutlined />}
    />
  </Popconfirm>
);

Trash.propTypes = {
  loading: PropTypes.bool,
  onConfirm: PropTypes.func,
  onCancel: PropTypes.func,
};

Trash.defaultProps = {
  loading: false,
  onConfirm: () => {},
  onCancel: () => {}
};

const TaskItem = ({ data, onRefresh }) => {
  const [isFinished, setIsFinished] = useState(true);

  const dispatch = useDispatch();
  const {
    request,
    deleteTaskLoading,
    completeTaskLoading
  } = useSelector((_) => _.task);

  const onComplete = useCallback(async (id) => {
    try {
      await dispatch(completeTask(id));
      /* Refresh */
      setIsFinished(true);
      // eslint-disable-next-line
    } catch (error) {
    }
  }, [dispatch]);

  const onDelete = useCallback(async (id) => {
    await dispatch(deleteTask(id));
    /* Refresh */
    onRefresh();
  }, [dispatch, onRefresh]);

  useEffect(() => {
    setIsFinished(Boolean(data?.isFinished));
  }, [data]);

  return (
    <List.Item actions={[
      <Trash
        loading={data?.id === request && deleteTaskLoading}
        onConfirm={() => onDelete(data?.id)}
      />
    ]}
    >
      <Space align="center">
        {!isFinished && (
          <Spin
            spinning={data?.id === request && completeTaskLoading}
            indicator={<LoadingOutlined spin style={{ fontSize: 15 }} />}
          />
        )}
        {isFinished && (
          <CheckOutlined style={{ color: 'green' }} />
        )}
        <Tooltip title="Click to complete this task">
          <span
            aria-hidden="true"
            style={{ textDecoration: isFinished ? 'line-through' : 'none' }}
            onClick={() => !isFinished && onComplete(data?.id)}
          >
            {data?.description}
          </span>
        </Tooltip>
      </Space>
    </List.Item>
  );
};

TaskItem.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.string,
    description: PropTypes.string,
    isFinished: PropTypes.bool
  }).isRequired,
  onRefresh: PropTypes.func,
};

TaskItem.defaultProps = {
  onRefresh: () => {}
};

export default TaskItem;
