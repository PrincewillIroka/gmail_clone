export default state = {
  username: 'Princewill Iroka',
  mails: [
    {
      headers: {
        subject: 'What You Need to Know About React 18 | Sheeraz Shaikh in JavaScript in Plain English',
        date: 'June 14',
        from: 'Medium Daily Digest',
        to: 'user@email.com',
        sender: 'user@email.com',
        senderLogo:
          'https://cdn4.iconfinder.com/data/icons/social-media-circle-7/512/Medium_circle-512.png',
      },
      body: 'Here is a round-up of our stories for the month of June',
      status: 'read',
    },
    {
      headers: {
        subject: 'John Doe commented on your post',
        date: 'May 15',
        from: 'LinkedIn',
        to: 'user@email.com',
        sender: 'user@email.com',
        senderLogo:
          'https://cdn4.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2-free/128/social-linkedin-circle-512.png',
      },
      body: 'Princewill Iroka here are your most recent notifications',
      status: 'read',
    },
    {
      headers: {
        subject: 'Your Cloud Firestore database rules need to be updated',
        date: 'May 10',
        from: 'firebase-noreply',
        to: 'user@email.com',
        sender: 'user@email.com',
        senderLogo: '',
      },
      body: `Analysis is run daily. If you've modified your rules in the last 24 hours that may not be accounted for.`,
      status: 'unread',
    },
    {
      headers: {
        subject: `One week until Vercel's Next.js Conf`,
        date: 'May 8',
        from: 'Vercel',
        to: 'user@email.com',
        sender: 'user@email.com',
        senderLogo: '' },
      body: `Join the Next.js Conf on June 15th for a special edition, presented by Vercel and Google Chrome, and including some incredible announcements and new features!`,
      status: 'unread',
    },
    {
      headers: {
        subject: `New jobs that match your saved search on Stack Overflow`,
        date: 'May 8',
        from: 'Stack Overflow',
        to: 'user@email.com',
        sender: 'user@email.com',
        senderLogo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Stack_Overflow_icon.svg/768px-Stack_Overflow_icon.svg.png',
      },
      body: `New jobs that match your saved search on Stack Overflow`,
      status: 'read',
    },
    {
      headers: {
        subject: `New jobs that match your saved search on Stack Overflow`,
        date: 'May 7',
        from: 'Udacity',
        to: 'user@email.com',
        sender: 'user@email.com',
        senderLogo: 'https://upload.wikimedia.org/wikipedia/commons/3/3b/Udacity_logo.png',
      },
      body: `New jobs that match your saved search on Stack Overflow`,
      status: 'unread',
    },
    {
      headers: {
        subject: `Learn Mobile UI/UX from Nike & Adobe Designer Jesse Showalter`,
        date: 'May 3',
        from: 'Dribbble',
        to: 'user@email.com',
        sender: 'user@email.com',
        senderLogo: ''},
      body: `Level-up your mobile app & interface skills in our new Dribbble Workshop`,
      status: 'read',
    },
    {
      headers: {
        subject: `The Ultimate Guide to MERN Stack" + 5 more trending DEV Community posts`,
        date: 'May 3',
        from: 'DEV Community Digest',
        to: 'user@email.com',
        sender: 'user@email.com',
        senderLogo: 'https://d2fltix0v2e0sb.cloudfront.net/dev-black.png',
      },
      body: `Recent posts you might find valuable based on your interests ❤️`,
      status: 'unread',
    },
  ],
  activeTab: 'Mail',
};
