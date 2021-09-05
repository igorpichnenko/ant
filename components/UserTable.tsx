import React, { useState } from 'react';
import { Table, Radio, Divider } from 'antd';

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'Number',
    dataIndex: 'sessionNumber',
  },
  {
    title: 'SessionTime',
    dataIndex: 'sessionTime',
  },
];
const data = [
  {
    key: '1',
    name: 'Adim',
    sessionNumber: 32,
    sessionTime: '34s',
  },
  {
    key: '2',
    name: 'Adim',
    sessionNumber: 33,
    sessionTime: '456s',
  },
  {
    key: '3',
    name: 'Adim',
    sessionNumber: 34,
    sessionTime: '3547s',
  },
  {
    key: '4',
    name: 'Adim',
    sessionNumber: 35,
    sessionTime: '648s',
  },
  {
    key: '4',
    name: 'Adim',
    sessionNumber: 35,
    sessionTime: '648s',
  },
];

export const UserTable = () => {
  return (
    <div>
      <Table columns={columns} dataSource={data} />
    </div>
  );
};
