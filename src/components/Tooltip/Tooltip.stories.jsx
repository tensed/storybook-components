import React from 'react';

import { Tooltip } from './Tooltip';
import { Button } from '../Button/Button';

export default {
    title: 'Components/Tooltip',
    component: Tooltip,
  };


export const TooltipComponent = (args) =><> <Tooltip text="Simple tooltip"> <Button variant="primary" label="Hover Me!" {...args} /> </Tooltip> </>

export const TooltipComponentWithShortcut = (args) => <> <Tooltip text="Group ⌘ + G"> <Button variant="primary" label="Hover Me!" {...args} /> </Tooltip></>