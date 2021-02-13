import React from 'react';

import Capability from './Capability';

const CapabilityList = () => {
  const CAPABILITIES = [
    {
      heading: 'Responsive Website Design',
      description: 'Simple, streamlined websites built responsively so that your customers can quickly and easily access what they need to know before choosing your company.',
      iconClass: 'fa-code',
    },
    {
      heading: 'Website Hosting Services',
      description: 'We can host your website based on a plan that makes sense for your site\'s specific needs.',
      iconClass: 'fa-desktop',
    },
    {
      heading: 'Website Maintenence',
      description: 'We can provide everything from content-management to analytics on site-traffic and site maintenence.',
      iconClass: 'fa-cog',
    },
    {
      heading: 'SEO Optimization',
      description: 'We can work with you to find the best package to fit your businesses\'s unique needs..',
      iconClass: 'fa-desktop',
    },
    {
      heading: 'Custom Web and Application Services',
      description: 'I can help implement new technology for your business or work with you to create a custom application suited to your needs.',
      iconClass: 'fa-chain',
    },
    {
      heading: 'Logo and Branding Services',
      description: 'We can overhaul your brand with a new logo or streamlined to go with your new site.',
      iconClass: 'fa-diamond',
    },
  ]

  const [capabilities] = React.useState(CAPABILITIES);

  return (
    <>
      {capabilities.map((capability) => <Capability key={capability.heading} {...capability} />)}
    </>
  )
}

export default CapabilityList;
