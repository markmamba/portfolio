import React, { useState } from 'react';
import { Drawer, List } from 'antd';

import '../styles/components-styles/MenuDrawer.css'; // Import the CSS file where you defined the styles
import { MenuOutlined } from '@ant-design/icons';

interface MenuDrawerProps {
  onItemClick: (href: string) => void;
}

const MenuDrawer: React.FC<MenuDrawerProps> = ({ onItemClick }) => {
  const [menuDrawerVisible, setMenuDrawerVisible] = useState(false);

  const menuItems = [
    { href: '#Home', title: 'Home' },
    { href: '#About', title: 'About Me' },
    { href: '#Skills', title: 'My Skills' },
    { href: '#Experience', title: 'Work Experience' },
    { href: '#Services', title: 'My Work' },
    { href: '#Projects', title: 'Projects' },
    { href: '#Contact', title: 'Contact' },
  ];

  return (
    <>
      {/* Add a button to open the drawer */}
      <button className='menu-button' onClick={() => setMenuDrawerVisible(true)}><MenuOutlined className='menu-button-icon' /></button>

      {/* The Drawer component with custom CSS classes */}
      <Drawer
        title={<div className="menu-drawer-title">Mark Henson Bautista</div>}
        placement="left"
        closable={true}
        onClose={() => setMenuDrawerVisible(false)}
        visible={menuDrawerVisible}
        className="menu-drawer"
      >
        <List
          dataSource={menuItems}
          renderItem={(item) => (
            <List.Item className="menu-item">
              <a
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  onItemClick(item.href);
                  setMenuDrawerVisible(false);
                }}
              >
                {item.title}
              </a>
            </List.Item>
          )}
        />
      </Drawer>
    </>
  );
};

export default MenuDrawer;

