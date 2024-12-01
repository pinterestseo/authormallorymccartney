// internalLinking.js
import fs from 'fs/promises';
import path from 'path';

const PAGES_DIR = './src/pages/question';

const questions = [
  {
    id: 1733055119716,
    title: "Whispering Short Flirty Emoji Text Messages: Sweet Sparks",
    description: "Comprehensive guide about Whispering Short Flirty Emoji Text Messages: Sweet Sparks",
    slug: "short-flirty-emoji-text-messages",
    category: "Flirty-Message"
  },
  {
    id: 1733055103962,
    title: "Tickle Her Funny Flirty Text Messages for Wife",
    description: "Comprehensive guide about Tickle Her Funny Flirty Text Messages for Wife",
    slug: "funny-flirty-text-messages-for-wife",
    category: "Flirty-Message"
  },
  {
    id: 1733055084724,
    title: "Whispering How To Flirt Flirty Birthday Messages For Him",
    description: "Comprehensive guide about Whispering How To Flirt Flirty Birthday Messages For Him",
    slug: "how-to-flirt-flirty-birthday-messages-for-him",
    category: "Flirty-Message"
  },
  {
    id: 1733055066942,
    title: "Whispering Cute Flirty Birthday Messages for Him",
    description: "Comprehensive guide about Whispering Cute Flirty Birthday Messages for Him",
    slug: "cute-flirty-birthday-messages-for-him",
    category: "Flirty-Message"
  },
  {
    id: 1733055049192,
    title: "Whispering Flirty Birthday Messages for Her Funny",
    description: "Comprehensive guide about Whispering Flirty Birthday Messages for Her Funny",
    slug: "flirty-birthday-messages-for-her-funny",
    category: "Flirty-Message"
  },
  {
    id: 1733055029682,
    title: "Whispering Flirty Text Flirty Flower Card Messages",
    description: "Comprehensive guide about Whispering Flirty Text Flirty Flower Card Messages",
    slug: "flirty-text-flirty-flower-card-messages",
    category: "Flirty-Message"
  },
  {
    id: 1733055013491,
    title: "Whispering Flirty Birthday Messages for Her: Sweetest Charms",
    description: "Comprehensive guide about Whispering Flirty Birthday Messages for Her: Sweetest Charms",
    slug: "flirty-birthday-messages-for-her",
    category: "Flirty-Message"
  },
  {
    id: 1733054995197,
    title: "Sparking Flirty Text Messages for Husband for Her",
    description: "Comprehensive guide about Sparking Flirty Text Messages for Husband for Her",
    slug: "flirty-text-messages-for-husband-for-her",
    category: "Flirty-Message"
  },
  {
    id: 1733054978944,
    title: "Showering Sweetness: Flirty Text Flirty Shower Text Messages",
    description: "Comprehensive guide about Showering Sweetness: Flirty Text Flirty Shower Text Messages",
    slug: "flirty-text-flirty-shower-text-messages",
    category: "Flirty-Message"
  },
  {
    id: 1733054963246,
    title: "Whispering Cute Flirty Text Messages for Wife: Sweet Nothings",
    description: "Comprehensive guide about Whispering Cute Flirty Text Messages for Wife: Sweet Nothings",
    slug: "cute-flirty-text-messages-for-wife",
    category: "Flirty-Message"
  },
  {
    id: 1733054947216,
    title: "Sparking Flirty Response How to Respond to a Flirty Text Message",
    description: "Comprehensive guide about Sparking Flirty Response How to Respond to a Flirty Text Message",
    slug: "flirty-response-how-to-respond-to-a-flirty-text-message",
    category: "Flirty-Message"
  },
  {
    id: 1733054931246,
    title: "Whispering Short Flirty Sexual Text Messages",
    description: "Comprehensive guide about Whispering Short Flirty Sexual Text Messages",
    slug: "short-flirty-sexual-text-messages",
    category: "Flirty-Message"
  },
  {
    id: 1733054915961,
    title: "Whispering Flirty Good Night Messages for Her",
    description: "Comprehensive guide about Whispering Flirty Good Night Messages for Her",
    slug: "flirty-good-night-messages-for-her",
    category: "Flirty-Message"
  },
  {
    id: 1733054897330,
    title: "Sparking Flirty Text Messages to Husband Funny",
    description: "Comprehensive guide about Sparking Flirty Text Messages to Husband Funny",
    slug: "flirty-text-messages-to-husband-funny",
    category: "Flirty-Message"
  },
  {
    id: 1733054880861,
    title: "Igniting Flirty Text Messages for Wife for Him",
    description: "Comprehensive guide about Igniting Flirty Text Messages for Wife for Him",
    slug: "flirty-text-messages-for-wife-for-him",
    category: "Flirty-Message"
  },
  {
    id: 1733054863392,
    title: "Whispering Flirty Good Night Messages of Sweet Dreams",
    description: "Comprehensive guide about Whispering Flirty Good Night Messages of Sweet Dreams",
    slug: "flirty-good-night-messages",
    category: "Flirty-Message"
  },
  {
    id: 1733054845005,
    title: "Whispering Funny Flirty Text Messages for Husband",
    description: "Comprehensive guide about Whispering Funny Flirty Text Messages for Husband",
    slug: "funny-flirty-text-messages-for-husband",
    category: "Flirty-Message"
  },
  {
    id: 1733054828475,
    title: "Whispering How to Flirt Flirty Birthday Messages for Her",
    description: "Comprehensive guide about Whispering How to Flirt Flirty Birthday Messages for Her",
    slug: "how-to-flirt-flirty-birthday-messages-for-her",
    category: "Flirty-Message"
  },
  {
    id: 1733054809383,
    title: "Whispering Short Flirty Birthday Messages: Sweetest Wishes",
    description: "Comprehensive guide about Whispering Short Flirty Birthday Messages: Sweetest Wishes",
    slug: "short-flirty-birthday-messages",
    category: "Flirty-Message"
  },
  {
    id: 1733054790523,
    title: "Sparking Charm: Best How to Respond to a Flirty Text Message",
    description: "Comprehensive guide about Sparking Charm: Best How to Respond to a Flirty Text Message",
    slug: "best-how-to-respond-to-a-flirty-text-message",
    category: "Flirty-Message"
  },
  {
    id: 1733054773122,
    title: "Whispering Funny Flirty Emoji Text Messages: Sweet Spark",
    description: "Comprehensive guide about Whispering Funny Flirty Emoji Text Messages: Sweet Spark",
    slug: "funny-flirty-emoji-text-messages",
    category: "Flirty-Message"
  },
  {
    id: 1733054757159,
    title: "Spark Playful Charm: How to Flirt Flirty Text Messages to Husband",
    description: "Comprehensive guide about Spark Playful Charm: How to Flirt Flirty Text Messages to Husband",
    slug: "how-to-flirt-flirty-text-messages-to-husband",
    category: "Flirty-Message"
  },
  {
    id: 1733054740556,
    title: "Igniting Flirty Text Messages for Husband for Him",
    description: "Comprehensive guide about Igniting Flirty Text Messages for Husband for Him",
    slug: "flirty-text-messages-for-husband-for-him",
    category: "Flirty-Message"
  },
  {
    id: 1733054723573,
    title: "Whispering Cute Flirty Messages to My Husband",
    description: "Comprehensive guide about Whispering Cute Flirty Messages to My Husband",
    slug: "cute-flirty-message-to-husband",
    category: "Flirty-Message"
  },
  {
    id: 1733054707015,
    title: "Funny Cute Flirty Text Messages for Her: Whispering Sweet Nothings",
    description: "Comprehensive guide about Funny Cute Flirty Text Messages for Her: Whispering Sweet Nothings",
    slug: "funny-cute-flirty-text-messages-for-her",
    category: "Flirty-Message"
  },
  {
    id: 1733054687535,
    title: "Igniting Sweet Connections: Flirty Text Naughty Flirty Text Messages for Her",
    description: "Comprehensive guide about Igniting Sweet Connections: Flirty Text Naughty Flirty Text Messages for Her",
    slug: "flirty-text-naughty-flirty-text-messages-for-her",
    category: "Flirty-Message"
  },
  {
    id: 1733054669415,
    title: "Whispering Flirty Messages to Husband:  Igniting Our Spark",
    description: "Comprehensive guide about Whispering Flirty Messages to Husband:  Igniting Our Spark",
    slug: "flirty-messages-to-husband",
    category: "Flirty-Message"
  },
  {
    id: 1733054653415,
    title: "Whispering Funny Flirty Birthday Messages for Him",
    description: "Comprehensive guide about Whispering Funny Flirty Birthday Messages for Him",
    slug: "funny-flirty-birthday-messages-for-him",
    category: "Flirty-Message"
  },
  {
    id: 1733054634276,
    title: "Whispering Flirty Messages to Husband: Sweet Nothings",
    description: "Comprehensive guide about Whispering Flirty Messages to Husband: Sweet Nothings",
    slug: "flirty-message-to-husband",
    category: "Flirty-Message"
  },
  {
    id: 1733054616608,
    title: "Sparking Flirty Text Flirty Messages to Husband",
    description: "Comprehensive guide about Sparking Flirty Text Flirty Messages to Husband",
    slug: "flirty-text-flirty-messages-to-husband",
    category: "Flirty-Message"
  },
  {
    id: 1733054599220,
    title: "Whispering Best Cute Flirty Text Messages for Her",
    description: "Comprehensive guide about Whispering Best Cute Flirty Text Messages for Her",
    slug: "best-cute-flirty-text-messages-for-her",
    category: "Flirty-Message"
  },
  {
    id: 1733054580919,
    title: "Whispering Flirty Response Flirty I Miss You Messages for Him",
    description: "Comprehensive guide about Whispering Flirty Response Flirty I Miss You Messages for Him",
    slug: "flirty-response-flirty-i-miss-you-messages-for-him",
    category: "Flirty-Message"
  },
  {
    id: 1733054564878,
    title: "Whispering Best Flirty I Miss You Messages for Him",
    description: "Comprehensive guide about Whispering Best Flirty I Miss You Messages for Him",
    slug: "best-flirty-i-miss-you-messages-for-him",
    category: "Flirty-Message"
  },
  {
    id: 1733054547022,
    title: "Whispering Flirty Text Flirty Good Night Messages",
    description: "Comprehensive guide about Whispering Flirty Text Flirty Good Night Messages",
    slug: "flirty-text-flirty-good-night-messages",
    category: "Flirty-Message"
  },
  {
    id: 1733054528771,
    title: "Spice Up Your Day: Best Fun Flirty Text Messages to Send to Your Husband",
    description: "Comprehensive guide about Spice Up Your Day: Best Fun Flirty Text Messages to Send to Your Husband",
    slug: "best-fun-flirty-text-messages-to-send-to-your-husband",
    category: "Flirty-Message"
  },
  {
    id: 1733054512582,
    title: "Sparking Funny Flirty Valentine Message for Crush",
    description: "Comprehensive guide about Sparking Funny Flirty Valentine Message for Crush",
    slug: "funny-flirty-valentine-message-for-crush",
    category: "Flirty-Message"
  },
  {
    id: 1733054494390,
    title: "Igniting Flirty Text Messages for Wife:  Sweet Whispers",
    description: "Comprehensive guide about Igniting Flirty Text Messages for Wife:  Sweet Whispers",
    slug: "flirty-text-messages-for-wife",
    category: "Flirty-Message"
  },
  {
    id: 1733054476152,
    title: "Whispering Naughty Flirty Text Messages for Her for Her",
    description: "Comprehensive guide about Whispering Naughty Flirty Text Messages for Her for Her",
    slug: "naughty-flirty-text-messages-for-her-for-her",
    category: "Flirty-Message"
  },
  {
    id: 1733054458058,
    title: "Blooming Flirty Response Flirty Flower Card Messages",
    description: "Comprehensive guide about Blooming Flirty Response Flirty Flower Card Messages",
    slug: "flirty-response-flirty-flower-card-messages",
    category: "Flirty-Message"
  },
  {
    id: 1733054437675,
    title: "Sparking Fun: How to Respond to a Flirty Text Message Funny",
    description: "Comprehensive guide about Sparking Fun: How to Respond to a Flirty Text Message Funny",
    slug: "how-to-respond-to-a-flirty-text-message-funny",
    category: "Flirty-Message"
  },
  {
    id: 1733054419090,
    title: "Showering You With Funny Flirty Shower Text Messages",
    description: "Comprehensive guide about Showering You With Funny Flirty Shower Text Messages",
    slug: "funny-flirty-shower-text-messages",
    category: "Flirty-Message"
  },
  {
    id: 1733054399315,
    title: "Igniting Flirty Messages to Husband for Him",
    description: "Comprehensive guide about Igniting Flirty Messages to Husband for Him",
    slug: "flirty-messages-to-husband-for-him",
    category: "Flirty-Message"
  },
  {
    id: 1733054383575,
    title: "Short Fun Flirty Text Messages to Send to Your Husband:  Sparkling Sweet Nothings",
    description: "Comprehensive guide about Short Fun Flirty Text Messages to Send to Your Husband:  Sparkling Sweet Nothings",
    slug: "short-fun-flirty-text-messages-to-send-to-your-husband",
    category: "Flirty-Message"
  },
  {
    id: 1733054368237,
    title: "Blooming Flirty Flower Card Messages for Her",
    description: "Comprehensive guide about Blooming Flirty Flower Card Messages for Her",
    slug: "flirty-flower-card-messages-for-her",
    category: "Flirty-Message"
  },
  {
    id: 1733054352465,
    title: "Sparking Flirty Text Messages for Him Long Distance",
    description: "Comprehensive guide about Sparking Flirty Text Messages for Him Long Distance",
    slug: "flirty-text-messages-for-him-long-distance",
    category: "Flirty-Message"
  },
  {
    id: 1733054336694,
    title: "Tickle Him Silly: Flirty I Miss You Messages for Him Funny",
    description: "Comprehensive guide about Tickle Him Silly: Flirty I Miss You Messages for Him Funny",
    slug: "flirty-i-miss-you-messages-for-him-funny",
    category: "Flirty-Message"
  },
  {
    id: 1733054316647,
    title: "Whispering Flirty Text Flirty Birthday Messages for Her",
    description: "Comprehensive guide about Whispering Flirty Text Flirty Birthday Messages for Her",
    slug: "flirty-text-flirty-birthday-messages-for-her",
    category: "Flirty-Message"
  },
  {
    id: 1733054298241,
    title: "Sparking Charm: How to Respond to a Flirty Text Message for Her",
    description: "Comprehensive guide about Sparking Charm: How to Respond to a Flirty Text Message for Her",
    slug: "how-to-respond-to-a-flirty-text-message-for-her",
    category: "Flirty-Message"
  },
  {
    id: 1733054281215,
    title: "Sparking Flirty Valentine Message for Crush Funny:  Sweet Notions & Giggles",
    description: "Comprehensive guide about Sparking Flirty Valentine Message for Crush Funny:  Sweet Notions & Giggles",
    slug: "flirty-valentine-message-for-crush-funny",
    category: "Flirty-Message"
  },
  {
    id: 1733054259520,
    title: "Whispering Cute Flirty Birthday Messages of Delight",
    description: "Comprehensive guide about Whispering Cute Flirty Birthday Messages of Delight",
    slug: "cute-flirty-birthday-messages",
    category: "Flirty-Message"
  },
  {
    id: 1733054239618,
    title: "Short How to Respond to a Flirty Text Message:  Spark Sweet Chemistry",
    description: "Comprehensive guide about Short How to Respond to a Flirty Text Message:  Spark Sweet Chemistry",
    slug: "short-how-to-respond-to-a-flirty-text-message",
    category: "Flirty-Message"
  },
  {
    id: 1733054222092,
    title: "Whispering Flirty Birthday Messages: Sweetest Charm",
    description: "Comprehensive guide about Whispering Flirty Birthday Messages: Sweetest Charm",
    slug: "flirty-birthday-messages",
    category: "Flirty-Message"
  },
  {
    id: 1733054203470,
    title: "Whispering Cute Flirty Text Messages for Her",
    description: "Comprehensive guide about Whispering Cute Flirty Text Messages for Her",
    slug: "cute-flirty-text-messages-for-her",
    category: "Flirty-Message"
  },
  {
    id: 1733054186569,
    title: "Whispering Flirty Messages to Husband for Him: Sweet Nothings",
    description: "Comprehensive guide about Whispering Flirty Messages to Husband for Him: Sweet Nothings",
    slug: "flirty-message-to-husband-for-him",
    category: "Flirty-Message"
  },
  {
    id: 1733054170395,
    title: "Whispering Flirty Text Messages to Husband for Him",
    description: "Comprehensive guide about Whispering Flirty Text Messages to Husband for Him",
    slug: "flirty-text-messages-to-husband-for-him",
    category: "Flirty-Message"
  },
  {
    id: 1733054154321,
    title: "Sparking Best Flirty Good Morning Message for Him Long Distance",
    description: "Comprehensive guide about Sparking Best Flirty Good Morning Message for Him Long Distance",
    slug: "best-flirty-good-morning-message-for-him-long-distance",
    category: "Flirty-Message"
  },
  {
    id: 1733054133621,
    title: "Cute How to Respond to a Flirty Text Message: Sparkling Sweet Replies",
    description: "Comprehensive guide about Cute How to Respond to a Flirty Text Message: Sparkling Sweet Replies",
    slug: "cute-how-to-respond-to-a-flirty-text-message",
    category: "Flirty-Message"
  },
  {
    id: 1733054117630,
    title: "Whispering Cute Flirty I Miss You Messages for Him",
    description: "Comprehensive guide about Whispering Cute Flirty I Miss You Messages for Him",
    slug: "cute-flirty-i-miss-you-messages-for-him",
    category: "Flirty-Message"
  },
  {
    id: 1733054098584,
    title: "Sparking Flirty Text Messages for Him Long Distance for Him",
    description: "Comprehensive guide about Sparking Flirty Text Messages for Him Long Distance for Him",
    slug: "flirty-text-messages-for-him-long-distance-for-him",
    category: "Flirty-Message"
  },
  {
    id: 1733054081680,
    title: "Whispering Flirty Response Flirty Valentine Message for Crush",
    description: "Comprehensive guide about Whispering Flirty Response Flirty Valentine Message for Crush",
    slug: "flirty-response-flirty-valentine-message-for-crush",
    category: "Flirty-Message"
  },
  {
    id: 1733054063010,
    title: "Bloom Into Charm: How to Flirt Flirty Flower Card Messages",
    description: "Comprehensive guide about Bloom Into Charm: How to Flirt Flirty Flower Card Messages",
    slug: "how-to-flirt-flirty-flower-card-messages",
    category: "Flirty-Message"
  },
  {
    id: 1733054047386,
    title: "Showering Your Sweetheart With Short Flirty Shower Text Messages",
    description: "Comprehensive guide about Showering Your Sweetheart With Short Flirty Shower Text Messages",
    slug: "short-flirty-shower-text-messages",
    category: "Flirty-Message"
  },
  {
    id: 1733054032087,
    title: "Tickling Your Funny Flirty Message to Husband's Heart",
    description: "Comprehensive guide about Tickling Your Funny Flirty Message to Husband's Heart",
    slug: "funny-flirty-message-to-husband",
    category: "Flirty-Message"
  },
  {
    id: 1733054014679,
    title: "Whispering Flirty Good Morning Messages for Him Long Distance for Him",
    description: "Comprehensive guide about Whispering Flirty Good Morning Messages for Him Long Distance for Him",
    slug: "flirty-good-morning-message-for-him-long-distance-for-him",
    category: "Flirty-Message"
  },
  {
    id: 1733053995954,
    title: "Sparking Flirty Text How To Respond To A Flirty Text Message",
    description: "Comprehensive guide about Sparking Flirty Text How To Respond To A Flirty Text Message",
    slug: "flirty-text-how-to-respond-to-a-flirty-text-message",
    category: "Flirty-Message"
  },
  {
    id: 1733053200365,
    title: "Ignite Passion: How to Flirt Flirty Text Messages for Wife",
    description: "Comprehensive guide about Ignite Passion: How to Flirt Flirty Text Messages for Wife",
    slug: "how-to-flirt-flirty-text-messages-for-wife",
    category: "Flirty-Message"
  },
  {
    id: 1733053184258,
    title: "Sparking Flirty Response Flirty Messages for Husband",
    description: "Comprehensive guide about Sparking Flirty Response Flirty Messages for Husband",
    slug: "flirty-response-flirty-messages-for-husband",
    category: "Flirty-Message"
  },
  {
    id: 1733053168930,
    title: "Whispering Flirty Emoji Text Messages: Sweet Spark",
    description: "Comprehensive guide about Whispering Flirty Emoji Text Messages: Sweet Spark",
    slug: "flirty-emoji-text-messages",
    category: "Flirty-Message"
  },
  {
    id: 1733053150936,
    title: "Whispering Funny Flirty Messages for Husband: Sweet Nothings & Giggles",
    description: "Comprehensive guide about Whispering Funny Flirty Messages for Husband: Sweet Nothings & Giggles",
    slug: "funny-flirty-messages-for-husband",
    category: "Flirty-Message"
  },
  {
    id: 1733053133209,
    title: "Sparking Flirty Emoji Text Messages Funny & Sweet",
    description: "Comprehensive guide about Sparking Flirty Emoji Text Messages Funny & Sweet",
    slug: "flirty-emoji-text-messages-funny",
    category: "Flirty-Message"
  },
  {
    id: 1733053114792,
    title: "Igniting Flirty Response Flirty Sexual Text Messages with Playful Charm",
    description: "Comprehensive guide about Igniting Flirty Response Flirty Sexual Text Messages with Playful Charm",
    slug: "flirty-response-flirty-sexual-text-messages",
    category: "Flirty-Message"
  },
  {
    id: 1733053097735,
    title: "Showering Him With Flirty Text Messages: Sweet & Playful",
    description: "Comprehensive guide about Showering Him With Flirty Text Messages: Sweet & Playful",
    slug: "flirty-shower-text-messages-for-him",
    category: "Flirty-Message"
  },
  {
    id: 1733053081044,
    title: "Sparking How to Flirt Flirty Text Messages for Him Long Distance",
    description: "Comprehensive guide about Sparking How to Flirt Flirty Text Messages for Him Long Distance",
    slug: "how-to-flirt-flirty-text-messages-for-him-long-distance",
    category: "Flirty-Message"
  },
  {
    id: 1733053063285,
    title: "Whispering the Best Flirty Valentine Message for Crush",
    description: "Comprehensive guide about Whispering the Best Flirty Valentine Message for Crush",
    slug: "best-flirty-valentine-message-for-crush",
    category: "Flirty-Message"
  },
  {
    id: 1733053042938,
    title: "Sweet Dreams, Flirty Good Night Messages Funny",
    description: "Comprehensive guide about Sweet Dreams, Flirty Good Night Messages Funny",
    slug: "flirty-good-night-messages-funny",
    category: "Flirty-Message"
  },
  {
    id: 1733053025046,
    title: "Whispering Short Flirty Messages for Husband: Sweet Nothings",
    description: "Comprehensive guide about Whispering Short Flirty Messages for Husband: Sweet Nothings",
    slug: "short-flirty-messages-for-husband",
    category: "Flirty-Message"
  },
  {
    id: 1733053008772,
    title: "How to Respond to a Flirty Text Message:  Sparkling Replies That Ignite Charm",
    description: "Comprehensive guide about How to Respond to a Flirty Text Message:  Sparkling Replies That Ignite Charm",
    slug: "how-to-respond-to-a-flirty-text-message",
    category: "Flirty-Message"
  },
  {
    id: 1733052991978,
    title: "Whispering Flirty Good Morning Messages for Him Long Distance",
    description: "Comprehensive guide about Whispering Flirty Good Morning Messages for Him Long Distance",
    slug: "flirty-good-morning-message-for-him-long-distance",
    category: "Flirty-Message"
  },
  {
    id: 1733052973342,
    title: "Whispering Cute Flirty Messages for Husband: Sweet Nothings",
    description: "Comprehensive guide about Whispering Cute Flirty Messages for Husband: Sweet Nothings",
    slug: "cute-flirty-messages-for-husband",
    category: "Flirty-Message"
  },
  {
    id: 1733052956450,
    title: "Tickling Him Awake: Flirty Good Morning Message for Him Long Distance Funny",
    description: "Comprehensive guide about Tickling Him Awake: Flirty Good Morning Message for Him Long Distance Funny",
    slug: "flirty-good-morning-message-for-him-long-distance-funny",
    category: "Flirty-Message"
  },
  {
    id: 1733052939651,
    title: "Sparking Flirty Response Flirty Message to Husband: Sweetest Charm",
    description: "Comprehensive guide about Sparking Flirty Response Flirty Message to Husband: Sweetest Charm",
    slug: "flirty-response-flirty-message-to-husband",
    category: "Flirty-Message"
  },
  {
    id: 1733052923019,
    title: "Sparking Flirty Valentine Message for Crush: Sweet Notions",
    description: "Comprehensive guide about Sparking Flirty Valentine Message for Crush: Sweet Notions",
    slug: "flirty-valentine-message-for-crush",
    category: "Flirty-Message"
  },
  {
    id: 1733052904698,
    title: "Whispering Short Flirty Birthday Messages for Him",
    description: "Comprehensive guide about Whispering Short Flirty Birthday Messages for Him",
    slug: "short-flirty-birthday-messages-for-him",
    category: "Flirty-Message"
  },
  {
    id: 1733052886508,
    title: "Igniting Flirty Messages for Husband for Him",
    description: "Comprehensive guide about Igniting Flirty Messages for Husband for Him",
    slug: "flirty-messages-for-husband-for-him",
    category: "Flirty-Message"
  },
  {
    id: 1733052870255,
    title: "Igniting Sweetness: Flirty Messages for Husband",
    description: "Comprehensive guide about Igniting Sweetness: Flirty Messages for Husband",
    slug: "flirty-messages-for-husband",
    category: "Flirty-Message"
  },
  {
    id: 1733052852999,
    title: "Short Flirty Text Messages to Husband: Whispering Sweet Nothings",
    description: "Comprehensive guide about Short Flirty Text Messages to Husband: Whispering Sweet Nothings",
    slug: "short-flirty-text-messages-to-husband",
    category: "Flirty-Message"
  },
  {
    id: 1733052836751,
    title: "Sparkling Flirty Response Cute Flirty Text Messages for Her",
    description: "Comprehensive guide about Sparkling Flirty Response Cute Flirty Text Messages for Her",
    slug: "flirty-response-cute-flirty-text-messages-for-her",
    category: "Flirty-Message"
  },
  {
    id: 1733052820147,
    title: "Whispering Flirty Good Morning Messages for Him Long Distance for Her",
    description: "Comprehensive guide about Whispering Flirty Good Morning Messages for Him Long Distance for Her",
    slug: "flirty-good-morning-message-for-him-long-distance-for-her",
    category: "Flirty-Message"
  },
  {
    id: 1733052800181,
    title: "Sparkling Flirty Text Messages for Husband Funny",
    description: "Comprehensive guide about Sparkling Flirty Text Messages for Husband Funny",
    slug: "flirty-text-messages-for-husband-funny",
    category: "Flirty-Message"
  },
  {
    id: 1733052784213,
    title: "Igniting Playful Charm with Flirty Text Flirty Sexual Text Messages",
    description: "Comprehensive guide about Igniting Playful Charm with Flirty Text Flirty Sexual Text Messages",
    slug: "flirty-text-flirty-sexual-text-messages",
    category: "Flirty-Message"
  },
  {
    id: 1733052768696,
    title: "Igniting Flirty Sexual Text Messages for Her with Sweet Charm",
    description: "Comprehensive guide about Igniting Flirty Sexual Text Messages for Her with Sweet Charm",
    slug: "flirty-sexual-text-messages-for-her",
    category: "Flirty-Message"
  },
  {
    id: 1733052752468,
    title: "Sparking Flirty Response Flirty Good Morning Messages for Him Long Distance",
    description: "Comprehensive guide about Sparking Flirty Response Flirty Good Morning Messages for Him Long Distance",
    slug: "flirty-response-flirty-good-morning-message-for-him-long-distance",
    category: "Flirty-Message"
  },
  {
    id: 1733052733465,
    title: "Whispering Flirty Valentine Message for Crush for Her",
    description: "Comprehensive guide about Whispering Flirty Valentine Message for Crush for Her",
    slug: "flirty-valentine-message-for-crush-for-her",
    category: "Flirty-Message"
  },
  {
    id: 1733052713808,
    title: "Whispering How to Flirt Flirty I Miss You Messages for Him",
    description: "Comprehensive guide about Whispering How to Flirt Flirty I Miss You Messages for Him",
    slug: "how-to-flirt-flirty-i-miss-you-messages-for-him",
    category: "Flirty-Message"
  },
  {
    id: 1733052694423,
    title: "Tickling Your Wife's Funny Bone with Flirty Text Messages",
    description: "Comprehensive guide about Tickling Your Wife's Funny Bone with Flirty Text Messages",
    slug: "flirty-text-messages-for-wife-funny",
    category: "Flirty-Message"
  },
  {
    id: 1733052677257,
    title: "Sparking Funny Flirty Text Messages for Him Long Distance",
    description: "Comprehensive guide about Sparking Funny Flirty Text Messages for Him Long Distance",
    slug: "funny-flirty-text-messages-for-him-long-distance",
    category: "Flirty-Message"
  },
  {
    id: 1733052658874,
    title: "Sparking Flirty Response Flirty Emoji Text Messages",
    description: "Comprehensive guide about Sparking Flirty Response Flirty Emoji Text Messages",
    slug: "flirty-response-flirty-emoji-text-messages",
    category: "Flirty-Message"
  },
  {
    id: 1733052641837,
    title: "Cute Flirty Text Messages for Him Long Distance: Whispering Sweet Nothings",
    description: "Comprehensive guide about Cute Flirty Text Messages for Him Long Distance: Whispering Sweet Nothings",
    slug: "cute-flirty-text-messages-for-him-long-distance",
    category: "Flirty-Message"
  },
  {
    id: 1733052624223,
    title: "Sparking Flirty Emoji Text Messages for Her: Sweet Whispers",
    description: "Comprehensive guide about Sparking Flirty Emoji Text Messages for Her: Sweet Whispers",
    slug: "flirty-emoji-text-messages-for-her",
    category: "Flirty-Message"
  },
  {
    id: 1733052592270,
    title: "Showering You With Cute Flirty Text Messages",
    description: "Comprehensive guide about Showering You With Cute Flirty Text Messages",
    slug: "cute-flirty-shower-text-messages",
    category: "Flirty-Message"
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