export default state = {
  username: 'Princewill Iroka',
  mails: [
    {
      headers: {
        subject: 'June Mailing List',
        date: 'June 03',
        from: 'Medium',
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
        from: 'Medium',
        to: 'user@email.com',
        sender: 'user@email.com',
        senderLogo:
          'https://cdn4.iconfinder.com/data/icons/social-media-circle-7/512/Medium_circle-512.png',
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
      body: 'Princewill Iroka here are your most recent notifications',
      status: 'unread',
    },
  ],
};
