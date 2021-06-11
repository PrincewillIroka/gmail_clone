export const getScreenParent = route => {
  let parent;
  let drawerStack = ['Inbox', 'Unread'];

  let singleStack = ['MailDetails', 'Meet'];

  if (drawerStack.includes(route)) {
    parent = 'DrawerStack';
  } else if (singleStack.includes(route)) {
    parent = 'SingleStack';
  }
  return parent;
};
