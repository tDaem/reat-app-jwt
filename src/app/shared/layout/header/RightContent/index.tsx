import React from 'react';
import { Space } from 'antd';
import Avatar from './AvatarDropdown';

const HeaderRight = () => {


  return (
    <Space className='right'>
      <Avatar menu={true} />
    </Space>
  );

};

export default HeaderRight;
