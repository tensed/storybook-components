import React from 'react';

import { Button } from './Button';

export default {
  title: 'Components/Button',
  component: Button,
};


export const SandboxButton = (args) => <> <Button variant="primary" label='Button' size='medium' {...args} /> </>

export const PrimaryButton = (args) => <> <Button variant="primary" label='Button' size='large' {...args} />  <Button variant="primary" label='Button' size='medium' {...args} /> <Button variant="primary" label='Button' size='small' {...args} /> <Button variant="primary" label='Button' size='small' disabled {...args} />  </>

export const SecondaryButton = (args) => <> <Button variant="secondary" label='Button' size='large' {...args} /> <Button variant="secondary" label='Button' size='medium' {...args} /> <Button variant="secondary" label='Button' size='small' {...args} /> <Button variant="secondary" label='Button' size='small' disabled {...args} /></>

export const TertiaryButton = (args) => <> <Button variant="tertiary" label='Button' size='large' {...args} /> <Button variant="tertiary" label='Button' size='medium' {...args} /> <Button variant="tertiary" label='Button' size='small' {...args} /></>

export const UpgradeButton = (args) => <> <Button variant="upgrade" label='Button' size='large' {...args} /> <Button variant="upgrade" label='Button' size='medium' {...args} /> <Button variant="upgrade" label='Button' size='small' {...args} /></>

export const WarningButton = (args) => <> <Button variant="warning" label='Button' size='large' {...args} /> <Button variant="warning" label='Button' size='medium' {...args} /> <Button variant="warning" label='Button' size='small' {...args} /></>

export const LogoButton = (args) => <> <Button variant="logo" label='Button' size='large' {...args} /> <Button variant="logo" label='Button' size='medium' {...args} /> <Button variant="logo" label='Button' size='small' {...args} /></>


