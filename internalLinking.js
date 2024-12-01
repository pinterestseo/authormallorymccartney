// internalLinking.js
import fs from 'fs/promises';
import path from 'path';

const PAGES_DIR = './src/pages/question';

const questions = [
  {
    id: 1733041191541,
    title: "Warm December Wishes for the Holidays and Beyond:  Glowing with Festive Cheer",
    description: "Comprehensive guide about Warm December Wishes for the Holidays and Beyond:  Glowing with Festive Cheer",
    slug: "warm-december-wishes-for-the-holidays-and-beyond",
    category: "December-Messages"
  },
  {
    id: 1733041175193,
    title: "December Messages for All the Good Things in Life: Glowing with Holiday Cheer",
    description: "Comprehensive guide about December Messages for All the Good Things in Life: Glowing with Holiday Cheer",
    slug: "december-messages-for-all-the-good-things-in-life",
    category: "December-Messages"
  },
  {
    id: 1733041160701,
    title: "Merry December Greeting for a Wonderful Holiday Season: Warming Hearts with Festive Cheer",
    description: "Comprehensive guide about Merry December Greeting for a Wonderful Holiday Season: Warming Hearts with Festive Cheer",
    slug: "merry-december-greeting-for-a-wonderful-holiday-season",
    category: "December-Messages"
  },
  {
    id: 1733041141689,
    title: "Warmest Peaceful December Wish for All My Family Members",
    description: "Comprehensive guide about Warmest Peaceful December Wish for All My Family Members",
    slug: "peaceful-december-wish-for-all-my-family-members",
    category: "December-Messages"
  },
  {
    id: 1733041124632,
    title: "Sharing Thoughtful December Card Messages Through Winter's Gleam",
    description: "Comprehensive guide about Sharing Thoughtful December Card Messages Through Winter's Gleam",
    slug: "thoughtful-december-card-message-to-spread-joy",
    category: "December-Messages"
  },
  {
    id: 1733041109605,
    title: "December Greetings for a Fresh Start in the Coming Year:  Warmth & New Beginnings",
    description: "Comprehensive guide about December Greetings for a Fresh Start in the Coming Year:  Warmth & New Beginnings",
    slug: "december-greetings-for-a-fresh-start-in-the-coming-year",
    category: "December-Messages"
  },
  {
    id: 1733041093447,
    title: "Sweet December Message to Send to My Boyfriend or Girlfriend:  Glowing Winter Wishes",
    description: "Comprehensive guide about Sweet December Message to Send to My Boyfriend or Girlfriend:  Glowing Winter Wishes",
    slug: "sweet-december-message-to-send-to-my-boyfriend-or-girlfriend",
    category: "December-Messages"
  },
  {
    id: 1733041077025,
    title: "December Wishes for Reflection and Gratitude: Warming Winter Hearts",
    description: "Comprehensive guide about December Wishes for Reflection and Gratitude: Warming Winter Hearts",
    slug: "december-wishes-for-reflection-and-gratitude",
    category: "December-Messages"
  },
  {
    id: 1733041060915,
    title: "December Blessings for a Great Start to the New Year: Glowing With Holiday Cheer",
    description: "Comprehensive guide about December Blessings for a Great Start to the New Year: Glowing With Holiday Cheer",
    slug: "december-blessings-for-a-great-start-to-the-new-year",
    category: "December-Messages"
  },
  {
    id: 1733041041352,
    title: "Warming December Encouragement Messages Through Festive Cheer",
    description: "Comprehensive guide about Warming December Encouragement Messages Through Festive Cheer",
    slug: "december-encouragement-messages-to-help-others",
    category: "December-Messages"
  },
  {
    id: 1733041023769,
    title: "Warm December Message for Appreciating the Year's Gleaming Moments",
    description: "Comprehensive guide about Warm December Message for Appreciating the Year's Gleaming Moments",
    slug: "december-message-for-appreciating-the-good-moments-of-the-year",
    category: "December-Messages"
  },
  {
    id: 1733041006721,
    title: "Sharing Joyful December Messages for All My Relatives:  Warmth Through Winter's Glow",
    description: "Comprehensive guide about Sharing Joyful December Messages for All My Relatives:  Warmth Through Winter's Glow",
    slug: "joyful-december-messages-for-all-my-relatives",
    category: "December-Messages"
  },
  {
    id: 1733040989914,
    title: "December Blessings for a Beautiful Holiday Season:  Glowing Warmth & Festive Cheer",
    description: "Comprehensive guide about December Blessings for a Beautiful Holiday Season:  Glowing Warmth & Festive Cheer",
    slug: "december-blessings-for-a-beautiful-holiday-season",
    category: "December-Messages"
  },
  {
    id: 1733040975370,
    title: "Sharing Fun and Light December Messages Through Winter's Glow",
    description: "Comprehensive guide about Sharing Fun and Light December Messages Through Winter's Glow",
    slug: "fun-and-light-december-messages-for-friends",
    category: "December-Messages"
  },
  {
    id: 1733040959756,
    title: "December Messages to My Partner Filled With Glowing Love",
    description: "Comprehensive guide about December Messages to My Partner Filled With Glowing Love",
    slug: "december-messages-to-my-partner-filled-with-love",
    category: "December-Messages"
  },
  {
    id: 1733040942393,
    title: "December Messages for Sending Warm Hugs to Family:  Glowing Winter Wishes",
    description: "Comprehensive guide about December Messages for Sending Warm Hugs to Family:  Glowing Winter Wishes",
    slug: "december-messages-for-sending-warm-hugs-to-family",
    category: "December-Messages"
  },
  {
    id: 1733040924217,
    title: "Warming Happy December Wishes for the Holiday Season",
    description: "Comprehensive guide about Warming Happy December Wishes for the Holiday Season",
    slug: "happy-december-wishes-for-the-holiday-season",
    category: "December-Messages"
  },
  {
    id: 1733040907526,
    title: "Warming December New Year's Eve Messages for Family and Friends",
    description: "Comprehensive guide about Warming December New Year's Eve Messages for Family and Friends",
    slug: "december-new-year-s-eve-messages-for-family-and-friends",
    category: "December-Messages"
  },
  {
    id: 1733040888400,
    title: "Sharing December message for sending festive cheer to coworkers, warming hearts this holiday season.",
    description: "Comprehensive guide about Sharing December message for sending festive cheer to coworkers, warming hearts this holiday season.",
    slug: "december-message-for-sending-festive-cheer-to-coworkers",
    category: "December-Messages"
  },
  {
    id: 1733040871564,
    title: "Heartfelt December Blessings for the Holidays:  Glowing Warmth and Cheer",
    description: "Comprehensive guide about Heartfelt December Blessings for the Holidays:  Glowing Warmth and Cheer",
    slug: "heartfelt-december-blessings-for-the-holidays",
    category: "December-Messages"
  },
  {
    id: 1733040853507,
    title: "Thoughtful December Messages Warming Winter Hearts",
    description: "Comprehensive guide about Thoughtful December Messages Warming Winter Hearts",
    slug: "thoughtful-december-messages-for-your-partner",
    category: "December-Messages"
  },
  {
    id: 1733040836999,
    title: "Merry December Wishes for Peace and Joy:  Glowing Warmth Through Winter's Embrace",
    description: "Comprehensive guide about Merry December Wishes for Peace and Joy:  Glowing Warmth Through Winter's Embrace",
    slug: "merry-december-wishes-for-peace-and-joy",
    category: "December-Messages"
  },
  {
    id: 1733040819336,
    title: "December Greetings for Hope and Positivity in Life:  Winter's Warm Embrace",
    description: "Comprehensive guide about December Greetings for Hope and Positivity in Life:  Winter's Warm Embrace",
    slug: "december-greetings-for-hope-and-positivity-in-life",
    category: "December-Messages"
  },
  {
    id: 1733040800660,
    title: "Warming December Love Messages to Send to My Partner",
    description: "Comprehensive guide about Warming December Love Messages to Send to My Partner",
    slug: "december-love-messages-to-send-to-my-partner",
    category: "December-Messages"
  },
  {
    id: 1733040785867,
    title: "Warm December Wishes for a Calm Month Ahead, Glowing with Peace",
    description: "Comprehensive guide about Warm December Wishes for a Calm Month Ahead, Glowing with Peace",
    slug: "peaceful-december-wishes-for-a-calm-month-ahead",
    category: "December-Messages"
  },
  {
    id: 1733040769170,
    title: "December Messages to Encourage New Year's Resolutions:  Glowing with Festive Hope",
    description: "Comprehensive guide about December Messages to Encourage New Year's Resolutions:  Glowing with Festive Hope",
    slug: "december-messages-to-encourage-new-year-s-resolutions",
    category: "December-Messages"
  },
  {
    id: 1733040752171,
    title: "Fun December Wishes for my Family and Friends: Sparkling Winter's Joy",
    description: "Comprehensive guide about Fun December Wishes for my Family and Friends: Sparkling Winter's Joy",
    slug: "fun-december-wishes-for-my-family-and-friends",
    category: "December-Messages"
  },
  {
    id: 1733040736627,
    title: "December Messages to Stay Hopeful and Strong:  Glowing With Winter's Cheer",
    description: "Comprehensive guide about December Messages to Stay Hopeful and Strong:  Glowing With Winter's Cheer",
    slug: "december-messages-to-stay-hopeful-and-strong",
    category: "December-Messages"
  },
  {
    id: 1733040718419,
    title: "Cozy December Messages for a Peaceful Month:  Glowing With Festive Cheer",
    description: "Comprehensive guide about Cozy December Messages for a Peaceful Month:  Glowing With Festive Cheer",
    slug: "cozy-december-messages-for-a-peaceful-month",
    category: "December-Messages"
  },
  {
    id: 1733040698597,
    title: "Festive December Messages: Warming Hearts Through Winter's Glow",
    description: "Comprehensive guide about Festive December Messages: Warming Hearts Through Winter's Glow",
    slug: "festive-december-messages-for-the-holiday-spirit",
    category: "December-Messages"
  },
  {
    id: 1733040678928,
    title: "December Wishes to Embrace New Opportunities: Glowing with Festive Hope",
    description: "Comprehensive guide about December Wishes to Embrace New Opportunities: Glowing with Festive Hope",
    slug: "december-wishes-to-embrace-new-opportunities",
    category: "December-Messages"
  },
  {
    id: 1733040660957,
    title: "December Message for Reflecting on the Past Year: Glowing With Festive Cheer",
    description: "Comprehensive guide about December Message for Reflecting on the Past Year: Glowing With Festive Cheer",
    slug: "december-message-for-reflecting-on-the-past-year",
    category: "December-Messages"
  },
  {
    id: 1733040642524,
    title: "Warming Motivational December Greetings to My Team Through Festive Cheer",
    description: "Comprehensive guide about Warming Motivational December Greetings to My Team Through Festive Cheer",
    slug: "motivational-december-greetings-to-my-team",
    category: "December-Messages"
  },
  {
    id: 1733040624147,
    title: "December Wishes for a Magical Holiday Season: Glowing with Festive Cheer",
    description: "Comprehensive guide about December Wishes for a Magical Holiday Season: Glowing with Festive Cheer",
    slug: "december-wishes-for-a-magical-holiday-season",
    category: "December-Messages"
  },
  {
    id: 1733040605011,
    title: "Warm December Prayer Message for a Good Year:  Glowing Hope's Embrace",
    description: "Comprehensive guide about Warm December Prayer Message for a Good Year:  Glowing Hope's Embrace",
    slug: "warm-december-prayer-message-for-a-good-year",
    category: "December-Messages"
  },
  {
    id: 1733040587234,
    title: "Sharing December holiday messages to send via text, warming hearts this season",
    description: "Comprehensive guide about Sharing December holiday messages to send via text, warming hearts this season",
    slug: "december-holiday-messages-to-send-via-text",
    category: "December-Messages"
  },
  {
    id: 1733040570690,
    title: "Meaningful December Wishes for My Closest Friends:  Glowing Warmth and Holiday Cheer",
    description: "Comprehensive guide about Meaningful December Wishes for My Closest Friends:  Glowing Warmth and Holiday Cheer",
    slug: "meaningful-december-wishes-for-my-closest-friends",
    category: "December-Messages"
  },
  {
    id: 1733040555010,
    title: "December Messages Warming Hearts Through Winter's Glow",
    description: "Comprehensive guide about December Messages Warming Hearts Through Winter's Glow",
    slug: "december-messages-for-those-you-care-about",
    category: "December-Messages"
  },
  {
    id: 1733040537728,
    title: "Celebrating a Positive December Message for All Those Who Inspire Me",
    description: "Comprehensive guide about Celebrating a Positive December Message for All Those Who Inspire Me",
    slug: "positive-december-message-for-all-those-who-inspire-me",
    category: "December-Messages"
  },
  {
    id: 1733040518989,
    title: "Joyful December Wishes to My Coworkers:  Glowing Warmth & Festive Cheer",
    description: "Comprehensive guide about Joyful December Wishes to My Coworkers:  Glowing Warmth & Festive Cheer",
    slug: "joyful-december-wishes-to-my-coworkers",
    category: "December-Messages"
  },
  {
    id: 1733040502353,
    title: "Warmest Happy December Message for My Wife or Husband, Glowing with Love",
    description: "Comprehensive guide about Warmest Happy December Message for My Wife or Husband, Glowing with Love",
    slug: "happy-december-message-for-my-wife-or-husband",
    category: "December-Messages"
  },
  {
    id: 1733040485752,
    title: "Sharing December messages to spread kindness and joy through winter's glow",
    description: "Comprehensive guide about Sharing December messages to spread kindness and joy through winter's glow",
    slug: "december-message-to-spread-kindness-and-joy",
    category: "December-Messages"
  },
  {
    id: 1733040467677,
    title: "Inspiring December Greetings for the Upcoming New Year: Warming Hearts with Festive Cheer",
    description: "Comprehensive guide about Inspiring December Greetings for the Upcoming New Year: Warming Hearts with Festive Cheer",
    slug: "inspiring-december-greetings-for-the-upcoming-new-year",
    category: "December-Messages"
  },
  {
    id: 1733040448967,
    title: "A Heartfelt December Message for All My Loved Ones:  Glowing Winter Wishes",
    description: "Comprehensive guide about A Heartfelt December Message for All My Loved Ones:  Glowing Winter Wishes",
    slug: "heartfelt-december-message-for-all-my-loved-ones",
    category: "December-Messages"
  },
  {
    id: 1733040428304,
    title: "Sharing December card messages for sending festive cheer through winter's glow",
    description: "Comprehensive guide about Sharing December card messages for sending festive cheer through winter's glow",
    slug: "december-card-message-for-sending-festive-cheer",
    category: "December-Messages"
  },
  {
    id: 1733040410527,
    title: "December Messages for Sending Love During the Holidays:  Glowing Winter Wishes",
    description: "Comprehensive guide about December Messages for Sending Love During the Holidays:  Glowing Winter Wishes",
    slug: "december-messages-for-sending-love-during-the-holidays",
    category: "December-Messages"
  },
  {
    id: 1733040392971,
    title: "December text message for my spouse: Warming Winter's Heart with Festive Cheer",
    description: "Comprehensive guide about December text message for my spouse: Warming Winter's Heart with Festive Cheer",
    slug: "december-text-message-for-my-spouse",
    category: "December-Messages"
  },
  {
    id: 1733040374162,
    title: "December Gratitude Message for Friends and Family:  Glowing Warmth Through Winter's Joy",
    description: "Comprehensive guide about December Gratitude Message for Friends and Family:  Glowing Warmth Through Winter's Joy",
    slug: "december-gratitude-message-for-friends-and-family",
    category: "December-Messages"
  },
  {
    id: 1733040357812,
    title: "December birthday greetings and wishes for loved ones glowing with winter's warmth",
    description: "Comprehensive guide about December birthday greetings and wishes for loved ones glowing with winter's warmth",
    slug: "december-birthday-greetings-and-wishes-for-loved-ones",
    category: "December-Messages"
  },
  {
    id: 1733040340477,
    title: "Sharing Cheerful December Messages Through Winter's Glow",
    description: "Comprehensive guide about Sharing Cheerful December Messages Through Winter's Glow",
    slug: "cheerful-december-message-for-everyone-i-know",
    category: "December-Messages"
  },
  {
    id: 1733040325532,
    title: "Warm December Wishes for Health and Happiness, Glowing Brightly",
    description: "Comprehensive guide about Warm December Wishes for Health and Happiness, Glowing Brightly",
    slug: "warm-december-wishes-for-health-and-happiness",
    category: "December-Messages"
  },
  {
    id: 1733040307960,
    title: "December Blessing Messages: Warming Hearts This Holiday",
    description: "Comprehensive guide about December Blessing Messages: Warming Hearts This Holiday",
    slug: "december-blessing-messages-to-send-to-family",
    category: "December-Messages"
  },
  {
    id: 1733040291516,
    title: "Festive December Messages: Sharing Winter's Warmth",
    description: "Comprehensive guide about Festive December Messages: Sharing Winter's Warmth",
    slug: "festive-december-messages-for-coworkers-and-friends",
    category: "December-Messages"
  },
  {
    id: 1733040274543,
    title: "Warm Winter's Glow: Positive December Wishes for a Bright Future",
    description: "Comprehensive guide about Warm Winter's Glow: Positive December Wishes for a Bright Future",
    slug: "positive-december-wishes-for-a-bright-future",
    category: "December-Messages"
  },
  {
    id: 1733040257580,
    title: "December Messages to Share Love's Warming Glow",
    description: "Comprehensive guide about December Messages to Share Love's Warming Glow",
    slug: "december-messages-to-share-love-and-warmth",
    category: "December-Messages"
  },
  {
    id: 1733040240509,
    title: "December Well Wishes for a New Beginning: Glowing with Holiday Cheer",
    description: "Comprehensive guide about December Well Wishes for a New Beginning: Glowing with Holiday Cheer",
    slug: "december-well-wishes-for-a-new-beginning",
    category: "December-Messages"
  },
  {
    id: 1733040221475,
    title: "Sweet December Greetings for My Girlfriend:  Glowing with Holiday Cheer",
    description: "Comprehensive guide about Sweet December Greetings for My Girlfriend:  Glowing with Holiday Cheer",
    slug: "sweet-december-greetings-for-my-girlfriend",
    category: "December-Messages"
  },
  {
    id: 1733040202641,
    title: "Glowing Special December Message for My Partner: A Winter's Embrace",
    description: "Comprehensive guide about Glowing Special December Message for My Partner: A Winter's Embrace",
    slug: "special-december-message-for-my-partner",
    category: "December-Messages"
  },
  {
    id: 1733040185434,
    title: "Heartfelt December Holiday Greetings for My Team:  A Season of Sparkling Cheer",
    description: "Comprehensive guide about Heartfelt December Holiday Greetings for My Team:  A Season of Sparkling Cheer",
    slug: "heartfelt-december-holiday-greetings-for-my-team",
    category: "December-Messages"
  },
  {
    id: 1733040169062,
    title: "Joyful December Wishes to my friends and family, glowing with holiday cheer!",
    description: "Comprehensive guide about Joyful December Wishes to my friends and family, glowing with holiday cheer!",
    slug: "joyful-december-wishes-to-my-friends-and-family",
    category: "December-Messages"
  },
  {
    id: 1733040153007,
    title: "December Messages for a Cozy Holiday Season: Warming Hearts with Festive Cheer",
    description: "Comprehensive guide about December Messages for a Cozy Holiday Season: Warming Hearts with Festive Cheer",
    slug: "december-messages-for-a-cozy-holiday-season",
    category: "December-Messages"
  },
  {
    id: 1733040135624,
    title: "Warm December Greetings to Start the Month Right:  A Season of Sparkling Joy",
    description: "Comprehensive guide about Warm December Greetings to Start the Month Right:  A Season of Sparkling Joy",
    slug: "warm-december-greetings-to-start-the-month-right",
    category: "December-Messages"
  },
  {
    id: 1733040118681,
    title: "December Wishes for Peace and Happiness:  Glowing Warmth Through Winter's Grace",
    description: "Comprehensive guide about December Wishes for Peace and Happiness:  Glowing Warmth Through Winter's Grace",
    slug: "december-wishes-for-peace-and-happiness",
    category: "December-Messages"
  },
  {
    id: 1733040100652,
    title: "December Greetings for Sharing Peace and Joy:  Warm Winter Wishes",
    description: "Comprehensive guide about December Greetings for Sharing Peace and Joy:  Warm Winter Wishes",
    slug: "december-greetings-for-sharing-peace-and-joy",
    category: "December-Messages"
  },
  {
    id: 1733040083464,
    title: "Inspiring December Wishes for All the Good Things:  Glowing with Holiday Cheer",
    description: "Comprehensive guide about Inspiring December Wishes for All the Good Things:  Glowing with Holiday Cheer",
    slug: "inspiring-december-wishes-for-all-the-good-things",
    category: "December-Messages"
  },
  {
    id: 1733040066594,
    title: "December Farewell Greetings for a Fresh Start: Glowing With Winter's Promise",
    description: "Comprehensive guide about December Farewell Greetings for a Fresh Start: Glowing With Winter's Promise",
    slug: "december-farewell-greetings-for-a-fresh-start",
    category: "December-Messages"
  },
  {
    id: 1733040049081,
    title: "Warming Hearts with a Special December Message for Those You Love",
    description: "Comprehensive guide about Warming Hearts with a Special December Message for Those You Love",
    slug: "special-december-message-for-those-you-love",
    category: "December-Messages"
  },
  {
    id: 1733040032304,
    title: "Festive December Message for Friends & Family: Glowing Warmth & Cheer",
    description: "Comprehensive guide about Festive December Message for Friends & Family: Glowing Warmth & Cheer",
    slug: "festive-december-message-for-friends-and-family",
    category: "December-Messages"
  },
  {
    id: 1733040016585,
    title: "December Wishes for Hope and Happiness: Glowing with Winter's Warmth",
    description: "Comprehensive guide about December Wishes for Hope and Happiness: Glowing with Winter's Warmth",
    slug: "december-wishes-for-hope-and-happiness",
    category: "December-Messages"
  },
  {
    id: 1733040000830,
    title: "Heartfelt December Wishes for a Happy New Year: Glowing with Festive Cheer",
    description: "Comprehensive guide about Heartfelt December Wishes for a Happy New Year: Glowing with Festive Cheer",
    slug: "heartfelt-december-wishes-for-a-happy-new-year",
    category: "December-Messages"
  },
  {
    id: 1733039984116,
    title: "December Message for Those Near and Far:  Glowing Warmth Through Winter's Embrace",
    description: "Comprehensive guide about December Message for Those Near and Far:  Glowing Warmth Through Winter's Embrace",
    slug: "december-message-for-those-near-and-far",
    category: "December-Messages"
  },
  {
    id: 1733039968569,
    title: "Sharing December joy messages to spread to everyone, glowing with warmth",
    description: "Comprehensive guide about Sharing December joy messages to spread to everyone, glowing with warmth",
    slug: "december-joy-message-to-spread-to-everyone",
    category: "December-Messages"
  },
  {
    id: 1733039951540,
    title: "Sharing Holiday Season December Messages With Festive Cheer",
    description: "Comprehensive guide about Sharing Holiday Season December Messages With Festive Cheer",
    slug: "holiday-season-december-messages-for-coworkers",
    category: "December-Messages"
  },
  {
    id: 1733039933310,
    title: "December Card Message for Sending Love's Warm Glow",
    description: "Comprehensive guide about December Card Message for Sending Love's Warm Glow",
    slug: "december-card-message-for-sending-love",
    category: "December-Messages"
  },
  {
    id: 1733039916812,
    title: "Warmth-Glowing Thoughtful December Message to Your Significant Other",
    description: "Comprehensive guide about Warmth-Glowing Thoughtful December Message to Your Significant Other",
    slug: "thoughtful-december-message-to-your-significant-other",
    category: "December-Messages"
  },
  {
    id: 1733039899829,
    title: "Warmest Positive December Message to My Friends and Family, Glowing with Holiday Cheer",
    description: "Comprehensive guide about Warmest Positive December Message to My Friends and Family, Glowing with Holiday Cheer",
    slug: "positive-december-message-to-my-friends-and-family",
    category: "December-Messages"
  },
  {
    id: 1733039883488,
    title: "Merry December Greetings for All:  Glowing Warmth and Festive Cheer",
    description: "Comprehensive guide about Merry December Greetings for All:  Glowing Warmth and Festive Cheer",
    slug: "merry-december-greetings-for-all",
    category: "December-Messages"
  },
  {
    id: 1733039866432,
    title: "December Wish for Peace and Joy in the Season:  Glowing Hearts, Warming Smiles",
    description: "Comprehensive guide about December Wish for Peace and Joy in the Season:  Glowing Hearts, Warming Smiles",
    slug: "december-wish-for-peace-and-joy-in-the-season",
    category: "December-Messages"
  },
  {
    id: 1733039849550,
    title: "Warming December Quotes and Greetings for Loved Ones",
    description: "Comprehensive guide about Warming December Quotes and Greetings for Loved Ones",
    slug: "december-quotes-and-greetings-for-loved-ones",
    category: "December-Messages"
  },
  {
    id: 1733039832651,
    title: "December message to spread holiday cheer: Warming Hearts with Festive Light",
    description: "Comprehensive guide about December message to spread holiday cheer: Warming Hearts with Festive Light",
    slug: "december-message-to-spread-holiday-cheer",
    category: "December-Messages"
  },
  {
    id: 1733039814356,
    title: "December Wishes for Family Gatherings: Warming Hearts Through Festive Cheer",
    description: "Comprehensive guide about December Wishes for Family Gatherings: Warming Hearts Through Festive Cheer",
    slug: "december-wishes-for-family-gatherings",
    category: "December-Messages"
  },
  {
    id: 1733039797571,
    title: "Sharing Meaningful December Messages Through Winter's Glow",
    description: "Comprehensive guide about Sharing Meaningful December Messages Through Winter's Glow",
    slug: "meaningful-december-messages-for-your-team",
    category: "December-Messages"
  },
  {
    id: 1733039779680,
    title: "December Holiday Greetings to Send to Coworkers:  Sharing Winter's Warmth and Cheer",
    description: "Comprehensive guide about December Holiday Greetings to Send to Coworkers:  Sharing Winter's Warmth and Cheer",
    slug: "december-holiday-greetings-to-send-to-coworkers",
    category: "December-Messages"
  },
  {
    id: 1733039762901,
    title: "Warm and Cheerful December Message to My Boss:  Glowing Holiday Greetings!",
    description: "Comprehensive guide about Warm and Cheerful December Message to My Boss:  Glowing Holiday Greetings!",
    slug: "warm-and-cheerful-december-message-to-my-boss",
    category: "December-Messages"
  },
  {
    id: 1733039745448,
    title: "Loving December Messages Warming Winter's Heart",
    description: "Comprehensive guide about Loving December Messages Warming Winter's Heart",
    slug: "loving-december-messages-to-my-partner",
    category: "December-Messages"
  },
  {
    id: 1733039726385,
    title: "Heartfelt December Wishes for the Holidays: Warming Winter's Heart",
    description: "Comprehensive guide about Heartfelt December Wishes for the Holidays: Warming Winter's Heart",
    slug: "heartfelt-december-wishes-for-the-holidays",
    category: "December-Messages"
  },
  {
    id: 1733039709807,
    title: "Warming Hearts With the Best December Message to Send to Someone Special",
    description: "Comprehensive guide about Warming Hearts With the Best December Message to Send to Someone Special",
    slug: "best-december-message-to-send-to-someone-special",
    category: "December-Messages"
  },
  {
    id: 1733039693803,
    title: "December Greeting to My Wife or Husband:  Winter's Warm Embrace",
    description: "Comprehensive guide about December Greeting to My Wife or Husband:  Winter's Warm Embrace",
    slug: "december-greeting-to-my-wife-or-husband",
    category: "December-Messages"
  },
  {
    id: 1733039676395,
    title: "Funny December Message for Friends: Sparkling Winter Laughs",
    description: "Comprehensive guide about Funny December Message for Friends: Sparkling Winter Laughs",
    slug: "funny-december-message-for-friends",
    category: "December-Messages"
  },
  {
    id: 1733039660475,
    title: "December Love Messages Warming Our Winter Hearts",
    description: "Comprehensive guide about December Love Messages Warming Our Winter Hearts",
    slug: "december-love-messages-for-my-spouse",
    category: "December-Messages"
  },
  {
    id: 1733039644542,
    title: "December Wishes to Start the New Year Right:  Glowing with Festive Cheer",
    description: "Comprehensive guide about December Wishes to Start the New Year Right:  Glowing with Festive Cheer",
    slug: "december-wishes-to-start-the-new-year-right",
    category: "December-Messages"
  },
  {
    id: 1733039628041,
    title: "Warm December Wishes to Send to Loved Ones, Glowing with Holiday Cheer",
    description: "Comprehensive guide about Warm December Wishes to Send to Loved Ones, Glowing with Holiday Cheer",
    slug: "warm-december-wishes-to-send-to-loved-ones",
    category: "December-Messages"
  },
  {
    id: 1733039612713,
    title: "Glowing Inspirational Message for a Fresh Start in December",
    description: "Comprehensive guide about Glowing Inspirational Message for a Fresh Start in December",
    slug: "inspirational-message-for-a-fresh-start-in-december",
    category: "December-Messages"
  },
  {
    id: 1733039596369,
    title: "Warming December Celebration Messages for the Holidays",
    description: "Comprehensive guide about Warming December Celebration Messages for the Holidays",
    slug: "december-celebration-messages-for-the-holidays",
    category: "December-Messages"
  },
  {
    id: 1733039580075,
    title: "Sharing Cheerful December Messages Through Winter's Glow",
    description: "Comprehensive guide about Sharing Cheerful December Messages Through Winter's Glow",
    slug: "cheerful-december-messages-to-share-with-everyone",
    category: "December-Messages"
  },
  {
    id: 1733039562740,
    title: "December Farewell Message for Coworkers:  Glowing Warmth & Holiday Cheer",
    description: "Comprehensive guide about December Farewell Message for Coworkers:  Glowing Warmth & Holiday Cheer",
    slug: "december-farewell-message-for-coworkers",
    category: "December-Messages"
  },
  {
    id: 1733039546787,
    title: "December Greetings and Wishes for Parents:  Warmest Winter Blessings",
    description: "Comprehensive guide about December Greetings and Wishes for Parents:  Warmest Winter Blessings",
    slug: "december-greetings-and-wishes-for-parents",
    category: "December-Messages"
  },
  {
    id: 1733039529768,
    title: "Sweet December Message to My Girlfriend: Warming Winter's Heart",
    description: "Comprehensive guide about Sweet December Message to My Girlfriend: Warming Winter's Heart",
    slug: "sweet-december-message-to-my-girlfriend",
    category: "December-Messages"
  },
  {
    id: 1733039512853,
    title: "Warm December Greetings for Christmas:  Glowing Hearts & Festive Cheer",
    description: "Comprehensive guide about Warm December Greetings for Christmas:  Glowing Hearts & Festive Cheer",
    slug: "warm-december-greetings-for-christmas",
    category: "December-Messages"
  },
  {
    id: 1733039495621,
    title: "Merry December Messages Warming Hearts This Season",
    description: "Comprehensive guide about Merry December Messages Warming Hearts This Season",
    slug: "merry-december-messages-for-your-loved-ones",
    category: "December-Messages"
  },
  {
    id: 1733039478867,
    title: "Warm, Thoughtful December Message for a New Year's Glow",
    description: "Comprehensive guide about Warm, Thoughtful December Message for a New Year's Glow",
    slug: "thoughtful-december-message-for-a-new-year",
    category: "December-Messages"
  },
  {
    id: 1733039459338,
    title: "December Message for Family & Friends:  Glowing Warmth Through Winter's Cheer",
    description: "Comprehensive guide about December Message for Family & Friends:  Glowing Warmth Through Winter's Cheer",
    slug: "december-message-for-family-and-friends",
    category: "December-Messages"
  },
  {
    id: 1733039441778,
    title: "Warming December Holiday Messages for Colleagues: Season's Joy!",
    description: "Comprehensive guide about Warming December Holiday Messages for Colleagues: Season's Joy!",
    slug: "december-holiday-messages-for-colleagues",
    category: "December-Messages"
  },
  {
    id: 1733039422096,
    title: "Best December Greetings for Your Team: Warming Hearts This Holiday Season",
    description: "Comprehensive guide about Best December Greetings for Your Team: Warming Hearts This Holiday Season",
    slug: "best-december-greetings-for-your-team",
    category: "December-Messages"
  },
  {
    id: 1733039404617,
    title: "Joyful December Wishes to Send to Family: Warming Hearts This Holiday",
    description: "Comprehensive guide about Joyful December Wishes to Send to Family: Warming Hearts This Holiday",
    slug: "joyful-december-wishes-to-send-to-family",
    category: "December-Messages"
  },
  {
    id: 1733039388616,
    title: "Festive December Messages:  Glowing Warmth & Cheer",
    description: "Comprehensive guide about Festive December Messages:  Glowing Warmth & Cheer",
    slug: "festive-december-messages-for-the-season",
    category: "December-Messages"
  },
  {
    id: 1733039370906,
    title: "December Birthday Wishes to Send Friends:  Glowing Warmth & Holiday Cheer",
    description: "Comprehensive guide about December Birthday Wishes to Send Friends:  Glowing Warmth & Holiday Cheer",
    slug: "december-birthday-wishes-to-send-to-friends",
    category: "December-Messages"
  },
  {
    id: 1733039354428,
    title: "Warming December Prayer Message for My Loved Ones, Glowing With Holiday Cheer",
    description: "Comprehensive guide about Warming December Prayer Message for My Loved Ones, Glowing With Holiday Cheer",
    slug: "december-prayer-message-for-my-loved-ones",
    category: "December-Messages"
  },
  {
    id: 1733039336877,
    title: "New Month and December Wishes Warming His Heart",
    description: "Comprehensive guide about New Month and December Wishes Warming His Heart",
    slug: "new-month-and-december-wishes-for-my-boyfriend",
    category: "December-Messages"
  },
  {
    id: 1733039320908,
    title: "December Messages for Happy Holidays:  Glowing with Festive Cheer",
    description: "Comprehensive guide about December Messages for Happy Holidays:  Glowing with Festive Cheer",
    slug: "december-messages-for-happy-holidays",
    category: "December-Messages"
  },
  {
    id: 1733039303692,
    title: "A Meaningful December Message for My Best Friend:  Winter's Warmest Glow",
    description: "Comprehensive guide about A Meaningful December Message for My Best Friend:  Winter's Warmest Glow",
    slug: "meaningful-december-message-for-my-best-friend",
    category: "December-Messages"
  },
  {
    id: 1733039284977,
    title: "Warmth Glowing Through Thoughtful December Message for Family",
    description: "Comprehensive guide about Warmth Glowing Through Thoughtful December Message for Family",
    slug: "thoughtful-december-message-for-family",
    category: "December-Messages"
  },
  {
    id: 1733039265856,
    title: "Happy December Messages to my Partner:  Winter's Warm Embrace",
    description: "Comprehensive guide about Happy December Messages to my Partner:  Winter's Warm Embrace",
    slug: "happy-december-messages-to-my-partner",
    category: "December-Messages"
  },
  {
    id: 1733039249534,
    title: "Sharing Positive December Messages Through Winter's Glow",
    description: "Comprehensive guide about Sharing Positive December Messages Through Winter's Glow",
    slug: "positive-december-message-for-friends-and-family",
    category: "December-Messages"
  },
  {
    id: 1733039232069,
    title: "Glowing Motivational December Message for the Year Ahead",
    description: "Comprehensive guide about Glowing Motivational December Message for the Year Ahead",
    slug: "motivational-december-message-for-the-year-ahead",
    category: "December-Messages"
  },
  {
    id: 1733039215984,
    title: "Sharing Christmas and December Messages: Season's Sparkling Cheer",
    description: "Comprehensive guide about Sharing Christmas and December Messages: Season's Sparkling Cheer",
    slug: "christmas-and-december-messages-for-coworkers",
    category: "December-Messages"
  },
  {
    id: 1733039198884,
    title: "Warming December Greeting to Send to Family, Glowing with Holiday Cheer",
    description: "Comprehensive guide about Warming December Greeting to Send to Family, Glowing with Holiday Cheer",
    slug: "warm-december-greeting-to-send-to-family",
    category: "December-Messages"
  },
  {
    id: 1733039181638,
    title: "December Birthday Messages Warming Winter Hearts",
    description: "Comprehensive guide about December Birthday Messages Warming Winter Hearts",
    slug: "december-birthday-messages-for-loved-ones",
    category: "December-Messages"
  },
  {
    id: 1733039163318,
    title: "Warming Inspirational December Messages for Friends",
    description: "Comprehensive guide about Warming Inspirational December Messages for Friends",
    slug: "inspirational-december-messages-for-friends",
    category: "December-Messages"
  },
  {
    id: 1733039145379,
    title: "Heartfelt December Message for My Love:  Winter's Warm Embrace",
    description: "Comprehensive guide about Heartfelt December Message for My Love:  Winter's Warm Embrace",
    slug: "heartfelt-december-message-for-my-love",
    category: "December-Messages"
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