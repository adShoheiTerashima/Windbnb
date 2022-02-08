import { ComponentMeta, Story } from '@storybook/react'

import Footer from './Footer'

export default {
  title: 'Common/Footer',
  component: Footer,
} as ComponentMeta<typeof Footer>
const Template: Story = () => <Footer />

export const DefaultButton = Template.bind({})
