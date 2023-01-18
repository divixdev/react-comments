export const getComments = async () => {
    return [
      {
        id: "1",
        body: "First comment I didn't buy this microphone to capture my songbird-like vocals so I'm not going to remark on it's sound quality. Suffice it to say that it's good enough for Slack or Zoom, but not for pod casts. If you want a microphone for those purposes, spend a little $ you cheap @$&!. I'm just psyched that it actually installed when I plugged it in and worked. Also, being able to easily see that the mic is on or off and easily toggle that is important.",
        username: "Jack",
        userId: "1",
        parentId: null,
        createdAt: "2021-08-16T23:00:33.010+02:00",
      },
      {
        id: "2",
        body: "Second comment - ought this for my son to improve his gaming communication capabilities and experience. He loves them, the sound quality is great and very clear. If he's happy, I'm happy with this purchase.",
        username: "John",
        userId: "2",
        parentId: null,
        createdAt: "2021-08-16T23:00:33.010+02:00",
      },
      {
        id: "3",
        body: "First comment first child - Used for language learning. Worked well. Unfortunate feature is fact that red 'sound is off' light remains on as long as unit remains plugged into computer. Good to know when mike not actively out-putting, but aggravating to have to unplug unit to get rid of light.",
        username: "John",
        userId: "2",
        parentId: "1",
        createdAt: "2021-08-16T23:00:33.010+02:00",
      },
      {
        id: "4",
        body: "Second comment second child - This is an excellent external microphone at a reasonable price. I needed something to help with company Teams meetings and this works perfectly.",
        username: "John",
        userId: "2",
        parentId: "2",
        createdAt: "2021-08-16T23:00:33.010+02:00",
      },
    ];
  };
  
  export const createComment = async (text, parentId = null) => {
    return {
      id: Math.random().toString(36).substr(2, 9),
      body: text,
      parentId,
      userId: "1",
      username: "John",
      createdAt: new Date().toISOString(),
    };
  };
  
  export const updateComment = async (text) => {
    return { text };
  };
  
  export const deleteComment = async () => {
    return {};
  };
  