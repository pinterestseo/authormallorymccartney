// internalLinking.js
import fs from 'fs/promises';
import path from 'path';

const PAGES_DIR = './src/pages/question';

const questions = [
  {
    id: 1732944576959,
    title: "Sharing Festive Cheer: Boss Holiday Card Message for Friends",
    description: "Comprehensive guide about Sharing Festive Cheer: Boss Holiday Card Message for Friends",
    slug: "boss-holiday-card-message-for-friends",
    category: "Holiday-Card-Messages"
  },
  {
    id: 1732944557176,
    title: "Bright Holiday Card Messages Corporate 2024: Sharing Cheer!",
    description: "Comprehensive guide about Bright Holiday Card Messages Corporate 2024: Sharing Cheer!",
    slug: "holiday-card-messages-corporate-2024",
    category: "Holiday-Card-Messages"
  },
  {
    id: 1732944539462,
    title: "Merry Creative Work Holiday Card Messages: Spreading Cheer!",
    description: "Comprehensive guide about Merry Creative Work Holiday Card Messages: Spreading Cheer!",
    slug: "creative-work-holiday-card-messages",
    category: "Holiday-Card-Messages"
  },
  {
    id: 1732944520837,
    title: "Share Joyful Laughter: Best Funny Holiday Card Messages",
    description: "Comprehensive guide about Share Joyful Laughter: Best Funny Holiday Card Messages",
    slug: "best-funny-holiday-card-messages",
    category: "Holiday-Card-Messages"
  },
  {
    id: 1732944502235,
    title: "Sparkling Creative Business Holiday Card Messages for Employees",
    description: "Comprehensive guide about Sparkling Creative Business Holiday Card Messages for Employees",
    slug: "creative-business-holiday-card-messages-for-employees",
    category: "Holiday-Card-Messages"
  },
  {
    id: 1732944484155,
    title: "Merry Holidays Messages Greeting Cards 2024: Spreading Festive Cheer",
    description: "Comprehensive guide about Merry Holidays Messages Greeting Cards 2024: Spreading Festive Cheer",
    slug: "holidays-messages-greeting-cards-2024",
    category: "Holiday-Card-Messages"
  },
  {
    id: 1732944465486,
    title: "Bright Holiday Card Corporate Messages 2024: Sharing Cheer!",
    description: "Comprehensive guide about Bright Holiday Card Corporate Messages 2024: Sharing Cheer!",
    slug: "holiday-card-corporate-messages-2024",
    category: "Holiday-Card-Messages"
  },
  {
    id: 1732944446771,
    title: "Merry Holiday Card Message to Employees 2024: Joyful Season's Greetings",
    description: "Comprehensive guide about Merry Holiday Card Message to Employees 2024: Joyful Season's Greetings",
    slug: "holiday-card-message-to-employees-2024",
    category: "Holiday-Card-Messages"
  },
  {
    id: 1732944428864,
    title: "Bright Boss Holiday Card Message Ideas: Spreading Cheer This Season",
    description: "Comprehensive guide about Bright Boss Holiday Card Message Ideas: Spreading Cheer This Season",
    slug: "boss-holiday-card-message-ideas",
    category: "Holiday-Card-Messages"
  },
  {
    id: 1732944410240,
    title: "Sparkling Creative Holiday Messages for Cards to Employees",
    description: "Comprehensive guide about Sparkling Creative Holiday Messages for Cards to Employees",
    slug: "creative-holiday-messages-for-cards-to-employees",
    category: "Holiday-Card-Messages"
  },
  {
    id: 1732944392111,
    title: "Sharing Merry Messages on Some Holiday Cards Crossword Clue for Family",
    description: "Comprehensive guide about Sharing Merry Messages on Some Holiday Cards Crossword Clue for Family",
    slug: "message-on-some-holiday-cards-crossword-clue-for-family",
    category: "Holiday-Card-Messages"
  },
  {
    id: 1732944372414,
    title: "Merry, Funny Best Holiday Card Messages: Spreading Cheer!",
    description: "Comprehensive guide about Merry, Funny Best Holiday Card Messages: Spreading Cheer!",
    slug: "funny-best-holiday-card-messages",
    category: "Holiday-Card-Messages"
  },
  {
    id: 1732944353584,
    title: "Merry Cheers! Funny Holiday Card Messages Corporate Bring Festive Joy",
    description: "Comprehensive guide about Merry Cheers! Funny Holiday Card Messages Corporate Bring Festive Joy",
    slug: "funny-holiday-card-messages-corporate",
    category: "Holiday-Card-Messages"
  },
  {
    id: 1732944335796,
    title: "Merry Cheerful Funny Holiday Card Messages for Teachers",
    description: "Comprehensive guide about Merry Cheerful Funny Holiday Card Messages for Teachers",
    slug: "funny-holiday-card-messages-for-teachers",
    category: "Holiday-Card-Messages"
  },
  {
    id: 1732944316867,
    title: "Share Joyful Unique Funny Holiday Card Messages This Season",
    description: "Comprehensive guide about Share Joyful Unique Funny Holiday Card Messages This Season",
    slug: "unique-funny-holiday-card-messages",
    category: "Holiday-Card-Messages"
  },
  {
    id: 1732944297025,
    title: "Spread Merry Cheer with Holiday Card Funny Messages Ideas",
    description: "Comprehensive guide about Spread Merry Cheer with Holiday Card Funny Messages Ideas",
    slug: "holiday-card-funny-messages-ideas",
    category: "Holiday-Card-Messages"
  },
  {
    id: 1732944276337,
    title: "Sharing Joyful Holiday Card Messages to Employees for Work This Season",
    description: "Comprehensive guide about Sharing Joyful Holiday Card Messages to Employees for Work This Season",
    slug: "holiday-card-messages-to-employees-for-work",
    category: "Holiday-Card-Messages"
  },
  {
    id: 1732944258935,
    title: "Spread Merry Cheer with the Best Holiday Card Funny Messages",
    description: "Comprehensive guide about Spread Merry Cheer with the Best Holiday Card Funny Messages",
    slug: "best-holiday-card-funny-messages",
    category: "Holiday-Card-Messages"
  },
  {
    id: 1732944241056,
    title: "Bright Holiday Card Message for Boss Ideas: Sharing Festive Cheer",
    description: "Comprehensive guide about Bright Holiday Card Message for Boss Ideas: Sharing Festive Cheer",
    slug: "holiday-card-message-for-boss-ideas",
    category: "Holiday-Card-Messages"
  },
  {
    id: 1732944223287,
    title: "Merry Creative Funny Business Holiday Card Messages for Clients!",
    description: "Comprehensive guide about Merry Creative Funny Business Holiday Card Messages for Clients!",
    slug: "creative-funny-business-holiday-card-messages-for-clients",
    category: "Holiday-Card-Messages"
  },
  {
    id: 1732944203924,
    title: "Spread Joyful Cheer: Best Holiday Messages for Cards for Work",
    description: "Comprehensive guide about Spread Joyful Cheer: Best Holiday Messages for Cards for Work",
    slug: "best-holiday-messages-for-cards-for-work",
    category: "Holiday-Card-Messages"
  },
  {
    id: 1732944186697,
    title: "Sharing Joyful Holiday Card Messages to Employees This Season",
    description: "Comprehensive guide about Sharing Joyful Holiday Card Messages to Employees This Season",
    slug: "holiday-card-messages-to-employees-ideas",
    category: "Holiday-Card-Messages"
  },
  {
    id: 1732944169584,
    title: "Share Joyful Unique Holiday Card Messages This Season!",
    description: "Comprehensive guide about Share Joyful Unique Holiday Card Messages This Season!",
    slug: "unique-holiday-card-messages-funny",
    category: "Holiday-Card-Messages"
  },
  {
    id: 1732944149834,
    title: "Brightest Best Best Holiday Messages for Cards: Sharing Festive Cheer",
    description: "Comprehensive guide about Brightest Best Best Holiday Messages for Cards: Sharing Festive Cheer",
    slug: "best-best-holiday-messages-for-cards",
    category: "Holiday-Card-Messages"
  },
  {
    id: 1732944130978,
    title: "Merry Holiday Card Messages for Boss for Family:  Bright Wishes & Cheer!",
    description: "Comprehensive guide about Merry Holiday Card Messages for Boss for Family:  Bright Wishes & Cheer!",
    slug: "holiday-card-messages-for-boss-for-family",
    category: "Holiday-Card-Messages"
  },
  {
    id: 1732944111882,
    title: "Brighten Your Season: Best Business Holiday Card Messages for Employees",
    description: "Comprehensive guide about Brighten Your Season: Best Business Holiday Card Messages for Employees",
    slug: "best-business-holiday-card-messages-for-employees",
    category: "Holiday-Card-Messages"
  },
  {
    id: 1732944093105,
    title: "Joyful Unique Holiday Card Messages for Staff This Season",
    description: "Comprehensive guide about Joyful Unique Holiday Card Messages for Staff This Season",
    slug: "unique-holiday-card-messages-for-staff",
    category: "Holiday-Card-Messages"
  },
  {
    id: 1732944073028,
    title: "Brighten Holidays With Best Holidays Messages Greeting Cards",
    description: "Comprehensive guide about Brighten Holidays With Best Holidays Messages Greeting Cards",
    slug: "best-holidays-messages-greeting-cards",
    category: "Holiday-Card-Messages"
  },
  {
    id: 1732944053683,
    title: "Bright Business Holiday Card Messages for Employees Ideas, Spreading Festive Cheer!",
    description: "Comprehensive guide about Bright Business Holiday Card Messages for Employees Ideas, Spreading Festive Cheer!",
    slug: "business-holiday-card-messages-for-employees-ideas",
    category: "Holiday-Card-Messages"
  },
  {
    id: 1732944034452,
    title: "Brightest Best Holiday Greeting Card Messages for Family, Filled With Love",
    description: "Comprehensive guide about Brightest Best Holiday Greeting Card Messages for Family, Filled With Love",
    slug: "best-holiday-greeting-card-messages-for-family",
    category: "Holiday-Card-Messages"
  },
  {
    id: 1732944015888,
    title: "Sharing Joyful Holiday Card Messages for Customers for Family This Season",
    description: "Comprehensive guide about Sharing Joyful Holiday Card Messages for Customers for Family This Season",
    slug: "holiday-card-messages-for-customers-for-family",
    category: "Holiday-Card-Messages"
  },
  {
    id: 1732943997499,
    title: "Best Holiday Card Message to Teacher: Spreading Festive Cheer",
    description: "Comprehensive guide about Best Holiday Card Message to Teacher: Spreading Festive Cheer",
    slug: "best-holiday-card-message-to-teacher",
    category: "Holiday-Card-Messages"
  },
  {
    id: 1732943979674,
    title: "Sharing Joyful Holiday Card Messages for Staff for Family This Season",
    description: "Comprehensive guide about Sharing Joyful Holiday Card Messages for Staff for Family This Season",
    slug: "holiday-card-messages-for-staff-for-family",
    category: "Holiday-Card-Messages"
  },
  {
    id: 1732943961623,
    title: "Joyful Holiday Messages for Cards to Employees for Friends This Season",
    description: "Comprehensive guide about Joyful Holiday Messages for Cards to Employees for Friends This Season",
    slug: "holiday-messages-for-cards-to-employees-for-friends",
    category: "Holiday-Card-Messages"
  },
  {
    id: 1732943942883,
    title: "Joyful Holidays Messages Greeting Cards for Family, Spreading Cheer",
    description: "Comprehensive guide about Joyful Holidays Messages Greeting Cards for Family, Spreading Cheer",
    slug: "holidays-messages-greeting-cards-for-family",
    category: "Holiday-Card-Messages"
  },
  {
    id: 1732943924050,
    title: "Sharing Joyful Holiday Card Messages Corporate for Family This Season",
    description: "Comprehensive guide about Sharing Joyful Holiday Card Messages Corporate for Family This Season",
    slug: "holiday-card-messages-corporate-for-family",
    category: "Holiday-Card-Messages"
  },
  {
    id: 1732943904310,
    title: "Sharing Joyful Unique Holiday Card Messages This Season",
    description: "Comprehensive guide about Sharing Joyful Unique Holiday Card Messages This Season",
    slug: "unique-holiday-card-message-to-employees",
    category: "Holiday-Card-Messages"
  },
  {
    id: 1732943885934,
    title: "Unique Holiday Messages for Cards to Employees:  Brighten Their Season With Cheer",
    description: "Comprehensive guide about Unique Holiday Messages for Cards to Employees:  Brighten Their Season With Cheer",
    slug: "unique-holiday-messages-for-cards-to-employees",
    category: "Holiday-Card-Messages"
  },
  {
    id: 1732943866720,
    title: "Sharing Joyful Business Holiday Card Messages to Clients 2024",
    description: "Comprehensive guide about Sharing Joyful Business Holiday Card Messages to Clients 2024",
    slug: "business-holiday-card-messages-to-clients-2024",
    category: "Holiday-Card-Messages"
  },
  {
    id: 1732943848363,
    title: "Sending Best Business Holiday Card Messages Filled With Cheer",
    description: "Comprehensive guide about Sending Best Business Holiday Card Messages Filled With Cheer",
    slug: "best-business-holiday-card-messages-to-clients",
    category: "Holiday-Card-Messages"
  },
  {
    id: 1732943828877,
    title: "Merry Message on Some Holiday Cards Crossword Clue 2024: Sharing Festive Cheer",
    description: "Comprehensive guide about Merry Message on Some Holiday Cards Crossword Clue 2024: Sharing Festive Cheer",
    slug: "message-on-some-holiday-cards-crossword-clue-2024",
    category: "Holiday-Card-Messages"
  },
  {
    id: 1732943811558,
    title: "Sending Joyful Holiday Card Messages for Customers & Friends This Season",
    description: "Comprehensive guide about Sending Joyful Holiday Card Messages for Customers & Friends This Season",
    slug: "holiday-card-messages-for-customers-for-friends",
    category: "Holiday-Card-Messages"
  },
  {
    id: 1732943794550,
    title: "Merry Happy Holidays Message Card 2024: Joyful Wishes!",
    description: "Comprehensive guide about Merry Happy Holidays Message Card 2024: Joyful Wishes!",
    slug: "happy-holidays-message-card-2024",
    category: "Holiday-Card-Messages"
  },
  {
    id: 1732943775561,
    title: "Bright Holiday Cheer: Creative Holiday Card Message for Boss",
    description: "Comprehensive guide about Bright Holiday Cheer: Creative Holiday Card Message for Boss",
    slug: "creative-holiday-card-message-for-boss",
    category: "Holiday-Card-Messages"
  },
  {
    id: 1732943755897,
    title: "Spread Merry Cheer With Best Holiday Card Messages Funny",
    description: "Comprehensive guide about Spread Merry Cheer With Best Holiday Card Messages Funny",
    slug: "best-holiday-card-messages-funny",
    category: "Holiday-Card-Messages"
  },
  {
    id: 1732943738127,
    title: "Joyful Holiday Card Messages for Teachers for Friends This Season",
    description: "Comprehensive guide about Joyful Holiday Card Messages for Teachers for Friends This Season",
    slug: "holiday-card-messages-for-teachers-for-friends",
    category: "Holiday-Card-Messages"
  },
  {
    id: 1732943720368,
    title: "Bright Holiday Messages for Cards for Family: Spreading Cheer",
    description: "Comprehensive guide about Bright Holiday Messages for Cards for Family: Spreading Cheer",
    slug: "best-holiday-messages-for-cards-for-family",
    category: "Holiday-Card-Messages"
  },
  {
    id: 1732943700402,
    title: "Merry Best Boss Holiday Card Message:  Joyful Wishes This Season!",
    description: "Comprehensive guide about Merry Best Boss Holiday Card Message:  Joyful Wishes This Season!",
    slug: "best-boss-holiday-card-message",
    category: "Holiday-Card-Messages"
  },
  {
    id: 1732943681451,
    title: "Share Joyful Cheer: Best Funny Business Holiday Card Messages for Clients",
    description: "Comprehensive guide about Share Joyful Cheer: Best Funny Business Holiday Card Messages for Clients",
    slug: "best-funny-business-holiday-card-messages-for-clients",
    category: "Holiday-Card-Messages"
  },
  {
    id: 1732943662103,
    title: "Merry Holiday Card Messages for Boss 2024: Season's Joy!",
    description: "Comprehensive guide about Merry Holiday Card Messages for Boss 2024: Season's Joy!",
    slug: "holiday-card-messages-for-boss-2024",
    category: "Holiday-Card-Messages"
  },
  {
    id: 1732943643255,
    title: "Merry Business Holiday Card Messages for Employees 2024:  Joyful Wishes!",
    description: "Comprehensive guide about Merry Business Holiday Card Messages for Employees 2024:  Joyful Wishes!",
    slug: "business-holiday-card-messages-for-employees-2024",
    category: "Holiday-Card-Messages"
  },
  {
    id: 1732943624249,
    title: "Merry Holiday Card Funny Messages for Family:  Joyful Cheers!",
    description: "Comprehensive guide about Merry Holiday Card Funny Messages for Family:  Joyful Cheers!",
    slug: "holiday-card-funny-messages-for-family",
    category: "Holiday-Card-Messages"
  },
  {
    id: 1732943605708,
    title: "Share Joyful Unique Business Holiday Thank You Card Messages",
    description: "Comprehensive guide about Share Joyful Unique Business Holiday Thank You Card Messages",
    slug: "unique-business-holiday-thank-you-card-messages",
    category: "Holiday-Card-Messages"
  },
  {
    id: 1732943587350,
    title: "Merry Holiday Card Messages for Staff 2024: Spreading Cheer!",
    description: "Comprehensive guide about Merry Holiday Card Messages for Staff 2024: Spreading Cheer!",
    slug: "holiday-card-messages-for-staff-2024",
    category: "Holiday-Card-Messages"
  },
  {
    id: 1732943568703,
    title: "Share Merry Best Holiday Messages for Cards for Friends",
    description: "Comprehensive guide about Share Merry Best Holiday Messages for Cards for Friends",
    slug: "best-holiday-messages-for-cards-for-friends",
    category: "Holiday-Card-Messages"
  },
  {
    id: 1732943549776,
    title: "Sharing Joyful Holiday Card Messages for Boss & Friends This Season",
    description: "Comprehensive guide about Sharing Joyful Holiday Card Messages for Boss & Friends This Season",
    slug: "holiday-card-messages-for-boss-for-friends",
    category: "Holiday-Card-Messages"
  },
  {
    id: 1732943532056,
    title: "Spread Joyful Cheer: Best Holiday Card Messages for Customers",
    description: "Comprehensive guide about Spread Joyful Cheer: Best Holiday Card Messages for Customers",
    slug: "best-holiday-card-messages-for-customers",
    category: "Holiday-Card-Messages"
  },
  {
    id: 1732943514052,
    title: "Merry, Bright Funny Funny Business Holiday Card Messages for Clients!",
    description: "Comprehensive guide about Merry, Bright Funny Funny Business Holiday Card Messages for Clients!",
    slug: "funny-funny-business-holiday-card-messages-for-clients",
    category: "Holiday-Card-Messages"
  },
  {
    id: 1732943493830,
    title: "Bright Holiday Card Messages for Teachers Ideas: Spreading Festive Cheer",
    description: "Comprehensive guide about Bright Holiday Card Messages for Teachers Ideas: Spreading Festive Cheer",
    slug: "holiday-card-messages-for-teachers-ideas",
    category: "Holiday-Card-Messages"
  },
  {
    id: 1732943475539,
    title: "Sharing Joyful Unique Holiday Card Messages for Boss This Season",
    description: "Comprehensive guide about Sharing Joyful Unique Holiday Card Messages for Boss This Season",
    slug: "unique-holiday-card-message-for-boss",
    category: "Holiday-Card-Messages"
  },
  {
    id: 1732943457096,
    title: "Joyful Work Holiday Card Messages for Family, Spreading Festive Cheer",
    description: "Comprehensive guide about Joyful Work Holiday Card Messages for Family, Spreading Festive Cheer",
    slug: "work-holiday-card-messages-for-family",
    category: "Holiday-Card-Messages"
  },
  {
    id: 1732943439487,
    title: "Merry Holiday Card Messages Funny for Family:  Joyful Laughter This Season!",
    description: "Comprehensive guide about Merry Holiday Card Messages Funny for Family:  Joyful Laughter This Season!",
    slug: "holiday-card-messages-funny-for-family",
    category: "Holiday-Card-Messages"
  },
  {
    id: 1732943421568,
    title: "Merry Messages on Some Holiday Cards Crossword Clue Ideas",
    description: "Comprehensive guide about Merry Messages on Some Holiday Cards Crossword Clue Ideas",
    slug: "message-on-some-holiday-cards-crossword-clue-ideas",
    category: "Holiday-Card-Messages"
  },
  {
    id: 1732943403750,
    title: "Brighten Your Season: Best Holiday Greeting Card Messages for Work",
    description: "Comprehensive guide about Brighten Your Season: Best Holiday Greeting Card Messages for Work",
    slug: "best-holiday-greeting-card-messages-for-work",
    category: "Holiday-Card-Messages"
  },
  {
    id: 1732943383698,
    title: "Merry Funny Holiday Messages for Cards to Employees!",
    description: "Comprehensive guide about Merry Funny Holiday Messages for Cards to Employees!",
    slug: "funny-holiday-messages-for-cards-to-employees",
    category: "Holiday-Card-Messages"
  },
  {
    id: 1732943365088,
    title: "Brightest Holiday Messages for Cards to Employees, Spreading Festive Cheer!",
    description: "Comprehensive guide about Brightest Holiday Messages for Cards to Employees, Spreading Festive Cheer!",
    slug: "best-holiday-messages-for-cards-to-employees",
    category: "Holiday-Card-Messages"
  },
  {
    id: 1732943345942,
    title: "Sharing Joyful Holiday Card Corporate Messages for Family This Season",
    description: "Comprehensive guide about Sharing Joyful Holiday Card Corporate Messages for Family This Season",
    slug: "holiday-card-corporate-messages-for-family",
    category: "Holiday-Card-Messages"
  },
  {
    id: 1732943328372,
    title: "Sharing Joyful Happy Holidays Message Card for Work This Season",
    description: "Comprehensive guide about Sharing Joyful Happy Holidays Message Card for Work This Season",
    slug: "happy-holidays-message-card-for-work",
    category: "Holiday-Card-Messages"
  },
  {
    id: 1732943309644,
    title: "Share Joyful Cheer This Season: Unique Happy Holidays Message Card",
    description: "Comprehensive guide about Share Joyful Cheer This Season: Unique Happy Holidays Message Card",
    slug: "unique-happy-holidays-message-card",
    category: "Holiday-Card-Messages"
  },
  {
    id: 1732943288854,
    title: "Creative Holiday Card Messages:  Merry Wishes & Joyful Cheer",
    description: "Comprehensive guide about Creative Holiday Card Messages:  Merry Wishes & Joyful Cheer",
    slug: "creative-holiday-card-messages-corporate",
    category: "Holiday-Card-Messages"
  },
  {
    id: 1732943270980,
    title: "Joyful Employee Holiday Card Messages for Friends This Season",
    description: "Comprehensive guide about Joyful Employee Holiday Card Messages for Friends This Season",
    slug: "employee-holiday-card-messages-for-friends",
    category: "Holiday-Card-Messages"
  },
  {
    id: 1732943252717,
    title: "Spread Merry Cheer: Work Holiday Card Messages for Work",
    description: "Comprehensive guide about Spread Merry Cheer: Work Holiday Card Messages for Work",
    slug: "work-holiday-card-messages-for-work",
    category: "Holiday-Card-Messages"
  },
  {
    id: 1732943233389,
    title: "Sharing Joyful Best Holiday Card Messages Corporate This Season",
    description: "Comprehensive guide about Sharing Joyful Best Holiday Card Messages Corporate This Season",
    slug: "best-holiday-card-messages-corporate",
    category: "Holiday-Card-Messages"
  },
  {
    id: 1732943215164,
    title: "Merry Funny Business Holiday Card Messages for Clients for Work!",
    description: "Comprehensive guide about Merry Funny Business Holiday Card Messages for Clients for Work!",
    slug: "funny-business-holiday-card-messages-for-clients-for-work",
    category: "Holiday-Card-Messages"
  },
  {
    id: 1732943196696,
    title: "Brighten Your Holidays With Unique Best Holiday Greeting Card Messages",
    description: "Comprehensive guide about Brighten Your Holidays With Unique Best Holiday Greeting Card Messages",
    slug: "unique-best-holiday-greeting-card-messages",
    category: "Holiday-Card-Messages"
  },
  {
    id: 1732943178567,
    title: "Sharing Unique Business Holiday Card Messages: Bright Cheer for You!",
    description: "Comprehensive guide about Sharing Unique Business Holiday Card Messages: Bright Cheer for You!",
    slug: "unique-business-holiday-card-messages-for-employees",
    category: "Holiday-Card-Messages"
  },
  {
    id: 1732943158911,
    title: "Spread Joyful Cheer with Creative Best Holiday Card Messages",
    description: "Comprehensive guide about Spread Joyful Cheer with Creative Best Holiday Card Messages",
    slug: "creative-best-holiday-card-messages",
    category: "Holiday-Card-Messages"
  },
  {
    id: 1732943141083,
    title: "Merry Funny Holiday Card Messages for Boss: Spreading Cheer!",
    description: "Comprehensive guide about Merry Funny Holiday Card Messages for Boss: Spreading Cheer!",
    slug: "funny-holiday-card-messages-for-boss",
    category: "Holiday-Card-Messages"
  },
  {
    id: 1732943120399,
    title: "Sharing Joyful Best Message on Some Holiday Cards Crossword This Season",
    description: "Comprehensive guide about Sharing Joyful Best Message on Some Holiday Cards Crossword This Season",
    slug: "best-message-on-some-holiday-cards-crossword",
    category: "Holiday-Card-Messages"
  },
  {
    id: 1732943101896,
    title: "Joyful Holiday Card Messages for Teachers for Family This Season",
    description: "Comprehensive guide about Joyful Holiday Card Messages for Teachers for Family This Season",
    slug: "holiday-card-messages-for-teachers-for-family",
    category: "Holiday-Card-Messages"
  },
  {
    id: 1732943083750,
    title: "Merry Holiday Card Messages for Boss for Work: Bright Wishes!",
    description: "Comprehensive guide about Merry Holiday Card Messages for Boss for Work: Bright Wishes!",
    slug: "holiday-card-messages-for-boss-for-work",
    category: "Holiday-Card-Messages"
  },
  {
    id: 1732943062534,
    title: "Bright Holiday Card Messages for Boss Ideas:  Season's Joy!",
    description: "Comprehensive guide about Bright Holiday Card Messages for Boss Ideas:  Season's Joy!",
    slug: "holiday-card-messages-for-boss-ideas",
    category: "Holiday-Card-Messages"
  },
  {
    id: 1732943042931,
    title: "Merry Message on Some Holiday Cards Crossword Clue for Work!",
    description: "Comprehensive guide about Merry Message on Some Holiday Cards Crossword Clue for Work!",
    slug: "message-on-some-holiday-cards-crossword-clue-for-work",
    category: "Holiday-Card-Messages"
  },
  {
    id: 1732943025149,
    title: "Merry Message on Some Holiday Cards Crossword for Family",
    description: "Comprehensive guide about Merry Message on Some Holiday Cards Crossword for Family",
    slug: "message-on-some-holiday-cards-crossword-for-family",
    category: "Holiday-Card-Messages"
  },
  {
    id: 1732943007048,
    title: "Share Joyful Holiday Card Funny Messages for Work This Season",
    description: "Comprehensive guide about Share Joyful Holiday Card Funny Messages for Work This Season",
    slug: "holiday-card-funny-messages-for-work",
    category: "Holiday-Card-Messages"
  },
  {
    id: 1732942989816,
    title: "Merry Funny Holiday Card Messages to Employees: Spreading Cheer This Season",
    description: "Comprehensive guide about Merry Funny Holiday Card Messages to Employees: Spreading Cheer This Season",
    slug: "funny-holiday-card-messages-to-employees",
    category: "Holiday-Card-Messages"
  },
  {
    id: 1732942971171,
    title: "Merry Funny Business Holiday Card Messages: Spreading Cheer!",
    description: "Comprehensive guide about Merry Funny Business Holiday Card Messages: Spreading Cheer!",
    slug: "funny-business-holiday-card-messages-to-clients",
    category: "Holiday-Card-Messages"
  },
  {
    id: 1732942952123,
    title: "Merry Creative Message on Some Holiday Cards Crossword: Spreading Festive Cheer",
    description: "Comprehensive guide about Merry Creative Message on Some Holiday Cards Crossword: Spreading Festive Cheer",
    slug: "creative-message-on-some-holiday-cards-crossword",
    category: "Holiday-Card-Messages"
  },
  {
    id: 1732942934913,
    title: "Sharing Joyful Holiday Card Messages to Our Wonderful Teacher This Season",
    description: "Comprehensive guide about Sharing Joyful Holiday Card Messages to Our Wonderful Teacher This Season",
    slug: "holiday-card-message-to-teacher-for-family",
    category: "Holiday-Card-Messages"
  },
  {
    id: 1732942914582,
    title: "Merry Messages on Some Holiday Cards Crossword for Friends!",
    description: "Comprehensive guide about Merry Messages on Some Holiday Cards Crossword for Friends!",
    slug: "message-on-some-holiday-cards-crossword-for-friends",
    category: "Holiday-Card-Messages"
  },
  {
    id: 1732942896183,
    title: "Brighten Your Holidays: Best Holiday Card Messages for Family",
    description: "Comprehensive guide about Brighten Your Holidays: Best Holiday Card Messages for Family",
    slug: "best-holiday-card-messages-for-family",
    category: "Holiday-Card-Messages"
  },
  {
    id: 1732942876755,
    title: "Brightest Best Happy Holidays Message Card: Spreading Festive Cheer!",
    description: "Comprehensive guide about Brightest Best Happy Holidays Message Card: Spreading Festive Cheer!",
    slug: "best-happy-holidays-message-card",
    category: "Holiday-Card-Messages"
  },
  {
    id: 1732942857930,
    title: "Share Joyful Unique Holiday Card Funny Messages This Season",
    description: "Comprehensive guide about Share Joyful Unique Holiday Card Funny Messages This Season",
    slug: "unique-holiday-card-funny-messages",
    category: "Holiday-Card-Messages"
  },
  {
    id: 1732942838781,
    title: "Merry Employee Holiday Card Messages 2024: Spreading Cheer!",
    description: "Comprehensive guide about Merry Employee Holiday Card Messages 2024: Spreading Cheer!",
    slug: "employee-holiday-card-messages-2024",
    category: "Holiday-Card-Messages"
  },
  {
    id: 1732942819324,
    title: "Merry Best Holiday Card Messages 2024: Spreading Joyful Cheer",
    description: "Comprehensive guide about Merry Best Holiday Card Messages 2024: Spreading Joyful Cheer",
    slug: "best-holiday-card-messages-2024",
    category: "Holiday-Card-Messages"
  },
  {
    id: 1732942800370,
    title: "Merry Funny Business Holiday Card Messages for Employees!",
    description: "Comprehensive guide about Merry Funny Business Holiday Card Messages for Employees!",
    slug: "funny-business-holiday-card-messages-for-employees",
    category: "Holiday-Card-Messages"
  },
  {
    id: 1732942781055,
    title: "Creative Best Holiday Messages for Cards:  Merry Wishes & Cheerful Greetings",
    description: "Comprehensive guide about Creative Best Holiday Messages for Cards:  Merry Wishes & Cheerful Greetings",
    slug: "creative-best-holiday-messages-for-cards",
    category: "Holiday-Card-Messages"
  },
  {
    id: 1732942761805,
    title: "Sparkling Creative Happy Holidays Message Card: Joyful Wishes!",
    description: "Comprehensive guide about Sparkling Creative Happy Holidays Message Card: Joyful Wishes!",
    slug: "creative-happy-holidays-message-card",
    category: "Holiday-Card-Messages"
  },
  {
    id: 1732942743203,
    title: "Share Joyful Unique Work Holiday Card Messages This Season",
    description: "Comprehensive guide about Share Joyful Unique Work Holiday Card Messages This Season",
    slug: "unique-work-holiday-card-messages",
    category: "Holiday-Card-Messages"
  },
  {
    id: 1732942725016,
    title: "Bright Holiday Card Message to Employees Ideas:  Joyful Season's Greetings!",
    description: "Comprehensive guide about Bright Holiday Card Message to Employees Ideas:  Joyful Season's Greetings!",
    slug: "holiday-card-message-to-employees-ideas",
    category: "Holiday-Card-Messages"
  },
  {
    id: 1732942706995,
    title: "Merry Holiday Card Messages Funny for Work:  Spreading Cheer!",
    description: "Comprehensive guide about Merry Holiday Card Messages Funny for Work:  Spreading Cheer!",
    slug: "holiday-card-messages-funny-for-work",
    category: "Holiday-Card-Messages"
  },
  {
    id: 1732942688255,
    title: "Joyful Holiday Card Messages for Teachers: Spreading Festive Cheer",
    description: "Comprehensive guide about Joyful Holiday Card Messages for Teachers: Spreading Festive Cheer",
    slug: "holiday-card-messages-for-teachers",
    category: "Holiday-Card-Messages"
  },
  {
    id: 1732942671479,
    title: "Bright Business Holiday Card Messages for Employees: Sharing Festive Cheer",
    description: "Comprehensive guide about Bright Business Holiday Card Messages for Employees: Sharing Festive Cheer",
    slug: "business-holiday-card-messages-for-employees",
    category: "Holiday-Card-Messages"
  },
  {
    id: 1732942652820,
    title: "Merry Holiday Card Messages:  Joyful Laughter This Season!",
    description: "Comprehensive guide about Merry Holiday Card Messages:  Joyful Laughter This Season!",
    slug: "holiday-card-messages-funny",
    category: "Holiday-Card-Messages"
  },
  {
    id: 1732942632455,
    title: "Bright Holiday Card Messages to Employees: Festive Cheer!",
    description: "Comprehensive guide about Bright Holiday Card Messages to Employees: Festive Cheer!",
    slug: "holiday-card-messages-to-employees",
    category: "Holiday-Card-Messages"
  },
  {
    id: 1732942614220,
    title: "Bright Holiday Card Messages for Staff:  Joyful Season's Greetings!",
    description: "Comprehensive guide about Bright Holiday Card Messages for Staff:  Joyful Season's Greetings!",
    slug: "holiday-card-messages-for-staff",
    category: "Holiday-Card-Messages"
  },
  {
    id: 1732942596198,
    title: "Merry Happy Holidays Message Card: Joyful Wishes This Season",
    description: "Comprehensive guide about Merry Happy Holidays Message Card: Joyful Wishes This Season",
    slug: "happy-holidays-message-card",
    category: "Holiday-Card-Messages"
  },
  {
    id: 1732942577254,
    title: "Sharing Joyful Business Holiday Thank You Card Messages",
    description: "Comprehensive guide about Sharing Joyful Business Holiday Thank You Card Messages",
    slug: "business-holiday-thank-you-card-messages",
    category: "Holiday-Card-Messages"
  },
  {
    id: 1732942558207,
    title: "Bright Holiday Card Messages for Boss:  Season's Joyful Cheer!",
    description: "Comprehensive guide about Bright Holiday Card Messages for Boss:  Season's Joyful Cheer!",
    slug: "holiday-card-messages-for-boss",
    category: "Holiday-Card-Messages"
  },
  {
    id: 1732942539307,
    title: "Sharing Merry Message on Some Holiday Cards Crossword Clue This Season",
    description: "Comprehensive guide about Sharing Merry Message on Some Holiday Cards Crossword Clue This Season",
    slug: "message-on-some-holiday-cards-crossword-clue",
    category: "Holiday-Card-Messages"
  },
  {
    id: 1732942520364,
    title: "Sparkle Bright: Best Holiday Card Messages for Joyful Greetings",
    description: "Comprehensive guide about Sparkle Bright: Best Holiday Card Messages for Joyful Greetings",
    slug: "best-holiday-card-messages",
    category: "Holiday-Card-Messages"
  },
  {
    id: 1732942501816,
    title: "Merry Messages on Some Holiday Cards Crossword: Spreading Festive Cheer",
    description: "Comprehensive guide about Merry Messages on Some Holiday Cards Crossword: Spreading Festive Cheer",
    slug: "message-on-some-holiday-cards-crossword",
    category: "Holiday-Card-Messages"
  },
  {
    id: 1732942483520,
    title: "Bright Holidays Messages Greeting Cards: Sharing Festive Cheer",
    description: "Comprehensive guide about Bright Holidays Messages Greeting Cards: Sharing Festive Cheer",
    slug: "holidays-messages-greeting-cards",
    category: "Holiday-Card-Messages"
  },
  {
    id: 1732942463393,
    title: "Merry Holiday Card Message to Teacher:  Joyful Wishes This Season",
    description: "Comprehensive guide about Merry Holiday Card Message to Teacher:  Joyful Wishes This Season",
    slug: "holiday-card-message-to-teacher",
    category: "Holiday-Card-Messages"
  },
  {
    id: 1732942445062,
    title: "Sharing Festive Cheer: Holiday Card Message to Employees",
    description: "Comprehensive guide about Sharing Festive Cheer: Holiday Card Message to Employees",
    slug: "holiday-card-message-to-employees",
    category: "Holiday-Card-Messages"
  },
  {
    id: 1732942427440,
    title: "Merry Holiday Card Funny Messages: Spreading Cheer This Season!",
    description: "Comprehensive guide about Merry Holiday Card Funny Messages: Spreading Cheer This Season!",
    slug: "holiday-card-funny-messages",
    category: "Holiday-Card-Messages"
  },
  {
    id: 1732942409113,
    title: "Sharing Joyful Employee Holiday Card Messages This Season",
    description: "Comprehensive guide about Sharing Joyful Employee Holiday Card Messages This Season",
    slug: "employee-holiday-card-messages",
    category: "Holiday-Card-Messages"
  },
  {
    id: 1732942390235,
    title: "Bright Business Holiday Card Messages for Joyful Seasons",
    description: "Comprehensive guide about Bright Business Holiday Card Messages for Joyful Seasons",
    slug: "business-holiday-card-messages-to-clients",
    category: "Holiday-Card-Messages"
  },
  {
    id: 1732942371841,
    title: "Sharing Joyful Boss Holiday Card Messages This Bright Season",
    description: "Comprehensive guide about Sharing Joyful Boss Holiday Card Messages This Bright Season",
    slug: "boss-holiday-card-message",
    category: "Holiday-Card-Messages"
  },
  {
    id: 1732942355148,
    title: "Bright Work Holiday Card Messages: Sharing Festive Cheer",
    description: "Comprehensive guide about Bright Work Holiday Card Messages: Sharing Festive Cheer",
    slug: "work-holiday-card-messages",
    category: "Holiday-Card-Messages"
  },
  {
    id: 1732942337278,
    title: "Sending Joyful Holiday Card Messages for a Merry Season",
    description: "Comprehensive guide about Sending Joyful Holiday Card Messages for a Merry Season",
    slug: "holiday-card-message-for-boss",
    category: "Holiday-Card-Messages"
  },
  {
    id: 1732942318780,
    title: "Merry Funny Business Holiday Card Messages for Clients: Spreading Cheer!",
    description: "Comprehensive guide about Merry Funny Business Holiday Card Messages for Clients: Spreading Cheer!",
    slug: "funny-business-holiday-card-messages-for-clients",
    category: "Holiday-Card-Messages"
  },
  {
    id: 1732942299394,
    title: "Brightest Best Holiday Messages for Cards: Spreading Festive Cheer",
    description: "Comprehensive guide about Brightest Best Holiday Messages for Cards: Spreading Festive Cheer",
    slug: "best-holiday-messages-for-cards",
    category: "Holiday-Card-Messages"
  },
  {
    id: 1732942281130,
    title: "Brightest Best Holiday Greeting Card Messages: Sharing Festive Cheer",
    description: "Comprehensive guide about Brightest Best Holiday Greeting Card Messages: Sharing Festive Cheer",
    slug: "best-holiday-greeting-card-messages",
    category: "Holiday-Card-Messages"
  },
  {
    id: 1732942262861,
    title: "Sending Joyful Holiday Card Messages This Season",
    description: "Comprehensive guide about Sending Joyful Holiday Card Messages This Season",
    slug: "holiday-card-messages-for-customers",
    category: "Holiday-Card-Messages"
  },
  {
    id: 1732942245037,
    title: "Share Merry Holiday Card Corporate Messages With Joy",
    description: "Comprehensive guide about Share Merry Holiday Card Corporate Messages With Joy",
    slug: "holiday-card-corporate-messages",
    category: "Holiday-Card-Messages"
  },
  {
    id: 1732942223782,
    title: "Bright Holiday Messages for Cards to Employees:  Season's Joy!",
    description: "Comprehensive guide about Bright Holiday Messages for Cards to Employees:  Season's Joy!",
    slug: "holiday-messages-for-cards-to-employees",
    category: "Holiday-Card-Messages"
  },
  {
    id: 1732942205546,
    title: "Bright Holiday Card Messages: Sharing Festive Cheer",
    description: "Comprehensive guide about Bright Holiday Card Messages: Sharing Festive Cheer",
    slug: "holiday-card-messages-corporate",
    category: "Holiday-Card-Messages"
  },
  {
    id: 1732942186495,
    title: "Share Merry Funny Holiday Card Messages!",
    description: "Comprehensive guide about Share Merry Funny Holiday Card Messages!",
    slug: "funny-holiday-card-messages",
    category: "Holiday-Card-Messages"
  }
  // ... data dari questions.ts
];

async function addInternalLinks() {
  try {
    // Dapatkan semua kategori yang unik dari data
    const categories = [...new Set(questions.map(q => q.category))];
    
    // Kelompokkan artikel berdasarkan kategori secara dinamis
    const categorizedArticles = categories.reduce((acc, category) => {
      acc[category] = questions.filter(q => q.category === category);
      return acc;
    }, {});

    // Baca semua file .astro di direktori
    const files = await fs.readdir(PAGES_DIR);
    const astroFiles = files.filter(f => f.endsWith('.astro'));

    for (const file of astroFiles) {
      const filePath = path.join(PAGES_DIR, file);
      const currentSlug = file.replace('.astro', '');
      
      const currentArticle = questions.find(q => q.slug === currentSlug);
      if (!currentArticle) continue;

      let content = await fs.readFile(filePath, 'utf-8');
      
      const relatedArticles = getRelatedArticles(
        currentArticle,
        categorizedArticles[currentArticle.category]
      );
      
      const linkingParagraph = createLinkingParagraph(currentArticle.category, relatedArticles);
      content = insertAfterFirstParagraph(content, linkingParagraph);
      
      await fs.writeFile(filePath, content);
      console.log(`Updated: ${file} with ${relatedArticles.length} links from ${currentArticle.category} category`);
    }
  } catch (error) {
    console.error('Error:', error);
  }
}

function getRelatedArticles(currentArticle, categoryArticles) {
  return categoryArticles
    .filter(article => article.slug !== currentArticle.slug)
    .sort(() => Math.random() - 0.5)
    .slice(0, 3);
}

function createLinkingParagraph(category, relatedArticles) {
  const linkTexts = relatedArticles.map(article => 
    `<a href="/question/${article.slug}">${article.title}</a>`
  );

  // Template paragraf berdasarkan kategori
  const templates = {
    Sympathy: `
<p>
  For more ways to express your sympathy, you might find these guides helpful: 
  ${linkTexts[0]}, ${linkTexts[1]}, and ${linkTexts[2]}.
</p>`,
    
    Thanksgiving: `
<p>
  Looking for more Thanksgiving message ideas? Check out our guides for 
  ${linkTexts[0]}, ${linkTexts[1]}, and ${linkTexts[2]} 
  for more inspiration.
</p>`,

    // Template default untuk kategori baru
    default: `
<p>
  You might also be interested in these related articles: 
  ${linkTexts[0]}, ${linkTexts[1]}, and ${linkTexts[2]}.
</p>`
  };

  // Gunakan template sesuai kategori atau template default jika tidak ada
  return templates[category] || templates.default;
}

function insertAfterFirstParagraph(content, newContent) {
  const firstParagraphEnd = content.indexOf('</p>') + 4;
  return content.slice(0, firstParagraphEnd) + '\n' + newContent + content.slice(firstParagraphEnd);
}

// Jalankan script
addInternalLinks();