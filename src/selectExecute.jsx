import React from "react";
import { Dropdown, Button } from "antd";



export function SelectExecute () {
    const items = [
        {
          key: '1',
          label: (
            <span >
              Execute all
            </span>
          ),
        },
        {
          key: '2',
          label: (
            <span >
              Not execute all
            </span>
          ),
        }
        
        
      ];
    return (
        <Dropdown
        menu={{
          items,
        }}
        placement="bottomLeft"
      >
        <Button >Set execution</Button>
      </Dropdown>
    )

}