import { Component } from '@angular/core';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent {
  events = [
    { 
      name: 'Book Club', 
      description: 'Join our Book Club to explore new literary works, discuss ideas, and connect with fellow book enthusiasts.', 
      fullDescription: 'Welcome to our Book Club! In this club, we gather once a week to delve into the captivating world of literature. Whether you\'re an avid reader or just starting to explore the joys of reading, our Book Club offers something for everyone. We select a new book each month, covering a wide range of genres and topics. Our discussions are engaging and insightful, providing a platform for members to share their thoughts, interpretations, and recommendations. Join us for an enriching literary journey!',
      image: './assets/book-2178586_1280.jpg', 
      expanded: false 
    },
    
    { 
      name: 'Sponsoring Write Event', 
      description: 'Discover the power of storytelling and creative writing through workshops, author talks, and writing competitions.', 
      fullDescription: 'Unlock your creativity at our Sponsoring Write Event! Writing is a powerful tool for self-expression, storytelling, and advocacy. Whether you\'re an aspiring writer or a seasoned wordsmith, our event offers a variety of opportunities to hone your craft and share your voice with the world. Participate in interactive writing workshops led by published authors, gain insights from panel discussions with industry professionals, and showcase your talent in writing competitions. Our event aims to inspire, educate, and empower writers of all backgrounds and genres. Join us and let your words make a difference!',
      image: './assets/student-849821_1280.jpg', 
      expanded: false 
    },
    { 
      name: 'Sponsoring Coffee Gathering', 
      description: 'Connect with fellow students and industry professionals over coffee, networking, and informative discussions.', 
      fullDescription: 'Join us for our Sponsoring Coffee Gathering, where students and industry professionals come together to network, share insights, and build connections over coffee. Networking is a crucial aspect of personal and professional development, providing opportunities to exchange ideas, seek mentorship, and explore career paths. Whether you\'re a student looking to connect with potential mentors or an industry professional interested in sharing your expertise, our Coffee Gathering offers a relaxed and welcoming environment for meaningful conversations and connections. Grab a cup of coffee, engage in enriching discussions, and expand your network!',
      image: './assets/coffee-2847957_1280.jpg', 
      expanded: false 
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  toggleDescription(event: any) {
    event.expanded = !event.expanded;
  }
}
