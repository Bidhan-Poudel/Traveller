"use client";
import { Input, Menu,  } from "@mantine/core";
import  {useState}  from "react";
import { menu } from "../../mock";

const MenuButtons = () => {
  const [selectedItem, setSelectedItem] = useState(menu[0].name);

  const handleInputClick = (itemName: string) => {
    setSelectedItem(itemName);
  };

  return (
    <Menu>
      <Menu.Target>
        <Input type="button" value={selectedItem} readOnly style={{
            cursor: "pointer",
            minWidth: "160px",
        }}/>
      </Menu.Target>
      <Menu.Dropdown>
        {menu.map((item) => (
          <Menu.Item key={item.id} onClick={() => handleInputClick(item.name)}>
            {item.name}
          </Menu.Item>
        ))}
      </Menu.Dropdown>
    </Menu>
  );
};

export default MenuButtons;
