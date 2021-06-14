export const getScreenParent = route => {
  let parent;
  let drawerStack = [
    'Inbox',
    'Unread',
    'Starred',
    'Snoozed',
    'Important',
    'Sent',
    'Scheduled',
    'Outbox',
    'Drafts',
    'All mail',
    'Spam',
    'Trash',
  ];

  let singleStack = ['MailDetails', 'Meet', 'Compose'];

  if (drawerStack.includes(route)) {
    parent = 'DrawerStack';
  } else if (singleStack.includes(route)) {
    parent = 'SingleStack';
  }
  return parent;
};
