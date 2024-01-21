import { type } from '@testing-library/user-event/dist/type';
import mockEvent1Image from '../../assets/mock-images/mock-event1.png';
import mockEvent2Image from '../../assets/mock-images/mock-event2.png';
import mockEvent3Image from '../../assets/mock-images/mock-event3.png';
import mockEvent4Image from '../../assets/mock-images/mock-event4.png';
import mockEvent5Image from '../../assets/mock-images/mock-event5.png';
import mockEvent6Image from '../../assets/mock-images/mock-event6.png';
import mockEvent7Image from '../../assets/mock-images/mock-event7.png';
import mockEvent8Image from '../../assets/mock-images/mock-event8.png';
import mockEvent9Image from '../../assets/mock-images/mock-event9.png';

const mockEvents = [
  {
    id: 'e1',
    name: 'Pride Parade',
    date: '2024-07-14',
    startTime: '10:00 AM',
    endTime: '4:00 PM',
    location: 'Hillcrest',
    address: 'The Pride Flag, 1500 University Ave, San Diego, CA 92103', 
    description: 'Join thousands in a march for equality and celebrate with music, dancing, and performances.',
    organizer: 'City Pride Organization',
    contact: 'contact@citypride.org', 
    price: 'Free',
    tags: ['parade', 'pride', 'equality', 'celebration'],
    image: mockEvent1Image,
    ticketTypes: [
      { type: 'General Admission', price: 25 },
      { type: 'VIP', price: 50 },
    ],
    capacity: 100000, 
    attendees: 0, 
    isOnline: false, 
    website: 'https://www.citypride.org', 
    category: 'parade',
    ageRestriction: 'All ages',
    accessibilityOptions: ['Wheelchair accessible', 'Sign language interpretation'],
    sponsors: ['City of San Diego', 'San Diego Pride'],
    reviews: [
      {
        reviewer: 'Emily Brown',
        rating: 5,
        comment: 'I really enjoyed the parade! It was a lot of fun. I will definitely be back next year.'
      },
      {
        reviewer: 'Hannah Young',
        rating: 4,
        comment: 'I had a great time. The parade was very well organized. Even though it was crowded, I felt safe.'
      }
    ]
  },
    {
      id: 'e2',
      name: 'Charity Concert',
      date: '2024-08-22',
      startTime: '8:00 PM',
      endTime: '11:00 PM',
      location: 'Conrad Prebys Open Air Theatre',
      address: '456 Main St, City, State, Zip', 
      description: 'Experience an unforgettable night of music and support a good cause at the same time.',
      organizer: 'Global Aid Foundation',
      contact: 'ticketing@charityconcert.org',
      price: 'Starting at $40',
      tags: ['concert', 'charity', 'music'],
      image: mockEvent2Image,
      ticketTypes: [
        { type: 'General Admission', price: 40 },
        { type: 'VIP', price: 80 },
        { type: 'Backstage Pass', price: 150 },
      ],
      capacity: 10000,
      attendees: 2654,
      isOnline: false,
      website: 'https://www.charityconcert.org',
      category: 'concert',
      ageRestriction: 'All ages', 
      accessibilityOptions: ['Wheelchair accessible', 'Assistive listening devices'], 
      sponsors: ['Flicks San Diego', 'Richs San Diego'], 
      reviews: [ 
        {
          reviewer: 'Sarah Marshall',
          rating: 5,
          comment: 'Great event!'
        },
        {
          reviewer: 'John Smith',
          rating: 4,
          comment: 'Had a fun time.'
        }
      ]
    },
    {
      id: 'e3',
      name: 'Outdoor Movie Night',
      date: '2024-09-05',
      startTime: '7:00 PM',
      endTime: '10:00 PM',
      location: 'Balboa Park',
      address: '789 Main St, City, State, Zip',
      description: 'Bring a blanket and enjoy a classic film under the stars with your local community.',
      organizer: 'Park District Movies',
      contact: 'support@movienightsd.org',
      price: 'Free',
      tags: ['movie', 'outdoor', 'family', 'night'],
      image: mockEvent3Image,
      ticketTypes: [
        { type: 'Standard', price: 15 },
        { type: 'Premium', price: 30 },
      ],
      capacity: 500,
      attendees: 279,
      isOnline: false,
      website: 'https://www.movienightsd.org',
      category: 'movie',
      ageRestriction: '13+',
      accessibilityOptions: ['Wheelchair accessible', 'Closed captioning'],
      sponsors: ['Park District', 'City of San Diego'],
      reviews: [
        {
          reviewer: 'Jane Doe',
          rating: 5,
          comment: 'The movie was great!'
        },
        {
          reviewer: 'John Smith',
          rating: 4,
          comment: 'My son loved it.'
        }
       ]
    },
    {
      id: 'e4',
      name: 'Food Festival',
      date: '2024-10-12',
      startTime: '11:00 AM',
      endTime: '9:00 PM',
      location: 'Exhibition Grounds',
      address: '101 Main St, City, State, Zip',
      description: 'Taste your way around the world with a wide selection of foods and drinks from local vendors.',
      organizer: 'Taste of the World Club',
      contact: 'foodies@yummy.com',
      price: 'Entry $5, dishes vary',
      tags: ['food', 'festival', 'cuisine', 'family'],
      image: mockEvent4Image,
      ticketTypes: [
        { type: 'One-Day Pass', price: 20 },
        { type: 'Weekend Pass', price: 35 },
      ],
      capacity: 10000,
      attendees: 850,
      isOnline: false,
      website: 'https://www.yummy.com',
      category: 'food',
      ageRestriction: 'All ages',
      accessibilityOptions: 'Wheelchair accessible',
      sponsors: ['City of San Diego', 'San Diego Tourism Authority'],
      reviews: [
        {
          reviewer: 'Becky Lee',
          rating: 5,
          comment: 'The food was amazing! I got to try so many new things. My favorite was the sushi.'
        },
        {
          reviewer: 'Peter Wright',
          rating: 4,
          comment: 'OMG, so much food! I was stuffed by the end of the day. You definitely get your money\'s worth.'
        }
      ]
    },
    {
      id: 'e5',
      name: 'Tech Conference',
      date: '2024-11-15',
      startTime: '9:00 AM',
      endTime: '5:00 PM',
      location: 'Convention Center',
      address: '111 Main St, City, State, Zip',
      description: 'Discover the latest in tech innovation, attend workshops, and network with industry leaders.',
      organizer: 'Innovate Tech',
      contact: 'support@sdtech.org',
      price: 'Starting at $99',
      tags: ['technology', 'conference', 'workshops', 'networking'],
      image: mockEvent5Image,
      ticketTypes: [
        { type: 'Expo Pass', price: 100 },
        { type: 'Full Access', price: 200 },
        { type: 'VIP', price: 300 },
      ],
      capacity: 7000,
      attendees: 4788,
      isOnline: false,
      website: 'https://www.sdtech.org',
      category: 'conference',
      ageRestriction: '18+',
      accessibilityOptions: ['Wheelchair accessible', 'Assistive listening devices', 'Sign language interpretation'],
      sponsors: ['Qualcomm', 'San Diego Tourism Authority'],
      reviews: [
        {
          reviewer: 'Franki Quinn',
          rating: 5,
          comment: 'This was a great event. I learned a lot and made some great connections. Shout out to the organizers for putting on such a great conference.'
        },
        {
          reviewer: 'Chelsea Carter',
          rating: 4,
          comment: 'Wow! I had a great time. I\'m already looking forward to next year. I will be bringing my whole team with me.'
        }
      ]
    },
    {
      id: 'e6',
      name: 'San Diego Marathon',
      date: '2024-06-01',
      startTime: '6:00 AM',
      endTime: '12:00 PM',
      location: 'Balboa Park',
      address: '1549 El Prado, San Diego, CA 92101',
      description: 'Challenge yourself at the annual San Diego Marathon featuring a scenic route through the heart of the city.',
      organizer: 'Run San Diego',
      contact: 'info@sandiegomarathon.com',
      price: '$120 registration fee',
      tags: ['sports', 'marathon', 'running', 'fitness'],
      image: mockEvent6Image, 
      ticketTypes: [
        { type: 'Individual Entry', price: 120 },
        { type: 'Group Entry', price: 100 }
      ],
      capacity: 20000,
      attendees: 5000,
      isOnline: false,
      website: 'https://www.sandiegomarathon.com',
      category: 'sports',
      ageRestriction: '16+',
      accessibilityOptions: ['Wheelchair accessible', 'Medical stations'],
      sponsors: ['San Diego Health', 'Fitness World'],
      reviews: [
        {
          reviewer: 'Mark Taylor',
          rating: 5,
          comment: 'Very well organized and a beautiful course. Will run again next year!'
        },
        {
          reviewer: 'Jill Harper',
          rating: 4,
          comment: 'Great experience for my first marathon. The support along the route was fantastic.'
        }
      ]
    },
    {
      id: 'e7',
      name: 'Annual Book Fair',
      date: '2024-08-15',
      startTime: '9:00 AM',
      endTime: '7:00 PM',
      location: 'City Library',
      address: '330 Park Blvd, San Diego, CA 92101',
      description: 'A paradise for book lovers, the Annual Book Fair presents the latest bestsellers, author signings, and literary panels.',
      organizer: 'Readers Unite',
      contact: 'contact@readersunite.org',
      price: 'Free entry, books for purchase',
      tags: ['books', 'literature', 'fair', 'authors'],
      image: mockEvent7Image,
      ticketTypes: [{ type: 'General Admission', price: 0}],
      capacity: 3000,
      attendees: 1500,
      isOnline: false,
      website: 'https://www.readersunitebookfair.com',
      category: 'literature',
      ageRestriction: 'All ages',
      accessibilityOptions: ['Wheelchair accessible', 'Large print books'],
      sponsors: ['Local Bookstores', 'Publishing Houses'],
      reviews: [
        {
          reviewer: 'Alice Johnson',
          rating: 5,
          comment: 'Fantastic selection of books and the author talks were enlightening!'
        },
        {
          reviewer: 'Tim Lee',
          rating: 4,
          comment: 'Loved the children’s section. My kids had a great time at the storytelling booth.'
        }
      ]
    },
    {
      id: 'e8',
      name: 'International Film Festival',
      date: '2024-10-20',
      startTime: '1:00 PM',
      endTime: '11:00 PM',
      location: 'Downtown Cinema',
      address: '555 Cinema Dr, San Diego, CA 92101',
      description: 'Celebrate the art of filmmaking with screenings of international indie films, documentaries, and discussions with directors.',
      organizer: 'CineWorld San Diego',
      contact: 'info@cinesd.org',
      price: 'Tickets start at $15',
      tags: ['film', 'festival', 'cinema', 'international'],
      image: mockEvent8Image,
      ticketTypes: [
        { type: 'Single Screening', price: 15 },
        { type: 'Day Pass', price: 45 },
        { type: 'Festival Pass', price: 120 }
      ],
      capacity: 500,
      attendees: 300,
      isOnline: false,
      website: 'https://www.sandiegofilmfest.org',
      category: 'film',
      ageRestriction: 'Varies by film',
      accessibilityOptions: ['Wheelchair accessible', 'Headphone jacks for audio description'],
      sponsors: ['Indie Film Makers', 'SD Arts Council'],
      reviews: [
        {
          reviewer: 'Oscar Wilde',
          rating: 5,
          comment: 'An outstanding selection of films that provoke thought and inspire the soul.'
        }
      ]
    },
    {
      id: 'e9',
      name: 'Downtown Art & Craft Festival',
      date: '2024-05-20',
      startTime: '10:00 AM',
      endTime: '6:00 PM',
      location: 'City Plaza',
      address: '234 Plaza St, City, State, Zip',
      description: 'Explore a diverse array of local artistry and craftsmanship at the Downtown Art & Craft Festival. Engage with local artists and craftspeople, enjoy live demonstrations, and take part in interactive workshops suitable for all ages.',
      organizer: 'Creative City Collective',
      contact: 'info@creativecityfest.org',
      price: 'Free',
      tags: ['art', 'crafts', 'festival', 'workshops', 'family'],
      image: mockEvent9Image,
      ticketTypes: [{ type: 'General Admission', price: 0}],
      capacity: 3000,
      attendees: 500,
      isOnline: false,
      website: 'https://www.creativecityfest.org',
      category: 'arts and crafts',
      ageRestriction: 'All ages',
      accessibilityOptions: ['Wheelchair accessible', 'Guide dogs welcome'],
      sponsors: ['Arts & Crafts Society', 'City Cultural Fund'],
      reviews: [
        {
          reviewer: 'Carlos Diaz',
          rating: 5,
          comment: 'A beautiful day surrounded by amazing artwork and fantastic people. The workshops were fun and engaging!'
        },
        {
          reviewer: 'Mia Wallace',
          rating: 4,
          comment: 'I loved the variety of crafts on display. The kids had a great time at the pottery booth!'
        }
      ]
    }    
  ];
  
  export default mockEvents;
  