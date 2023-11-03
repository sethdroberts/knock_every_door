"use client";
import React, { useState } from 'react';
import { Drawer, Button} from 'antd';

export default function DrawerForm() {
    const [open, setOpen] = useState(false);
  
    const showDrawer = () => {
      setOpen(true);
    };
  
    const onClose = () => {
      setOpen(false);
    };
  
    return (
      <>
      <Button type="default" size="large" onClick={showDrawer}>
        Finished a Map? Update the Live Tracker
      </Button>
      <Drawer
  title="Mark a Map as Complete"
  placement="right"
  onClose={() => setOpen(false)}
  open={open}
  size="large"
>
<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSd5dqAnDztaIuOVj_D3otmFsjhUbUPGrtnKEwZfFlAijqAC5Q/viewform?embedded=true" width="640" height="1107" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
</Drawer>
      </>
    );
  };

