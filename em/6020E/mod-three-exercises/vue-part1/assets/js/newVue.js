var header = new Vue({
    el: '#header',
    data:{
        yourName: 'Kasi Romo',
        description: 'Masters student in the Grady College of Journalism and Mass Communication',
        link1: 'Introduction',
        link2: 'My Portfolio',
        link3: 'Learn About Me',
        link4: 'Contact Me',
        link5: 'A Very Important List',
        avatar: "images/cat.JPG",
    }
})

var portfolio = new Vue({
    el: '#portfolio',
    data:{
        portfolioTitle: "Photography Portfolio",
        image1: "images/img1.JPG",
        imgText1: "Central Park's fall foliage",
        image2: "images/img2.JPG",
        imgText2: "Christian Dior and Saks' Carousel of Dreams art exhibit",
        image3: "images/img3.JPG",
        imgText3: "Times Square",
        image4: "images/img4.JPG",
        imgText4: "A UniverSoul Circus act during their NYC stop",
        image5: "images/img5.JPG",
        imgText5: "A UniverSoul Circus act during their NYC stop",
        image6: "images/img6.JPG",
        imgText6: "A UniverSoul Circus act during their NYC stop",
        portfolioText: "A brief, photo-based journey through my trip to New York City in 2023."
    }
})

var intro = new Vue({
    el: '#top',
    data: {
        introTitle: "Hi! I'm Kasi, a masters student at UGA.", 
        introText: "Feel free to browse at your leisure. It's nice to meet you!",
    }
})

var about = new Vue({
    el: '#about',
    data: {
        aboutTitle: "About Me",
        aboutImage: "images/me.JPG",
        aboutText: "I am a 22 year old masters student at the University of Georgia's New Media Institute at the Grady College of Journalism and Mass Communication. I graduated from UGA in May 2025 with my Bachelor of Science in Agriculture degree in Agricultural Communications from UGA's College of Agricultural and Environmental Sciences. I am enganged to my high school sweetheart, DeMarcus (pictured above), and have three cats (Lily, Sophie, Isha) and my 11-month-old puppo Teddy. In my spare time, I love to read fantasy books, game with my friends, play Dungeons and Dragons, and listen to scary and loud heavy metal music. Fun fact about me: this past spring, I competed in a low-stakes tournament for the asymmetrical horror game, Dead by Daylight. We placed 2nd!"
    }
})

var contact = new Vue({
    el: '#contact',
    data: {
        contactTitle: "Let's get in touch!",
        contactText: "Fill out the form below to reach out. Please note that all input boxes (Name, Email, and Message) must be completed in order to send your message. I hope to hear from you soon!"
    }
})

var list = new Vue({
    el: '#list',
    data: {
        favorites: [
            'Pappadeaux - a midly-pricey, but extravagently yummy seafood kitchen (their crab & spinach dip is to DIE for).',
            'Olive Garden - a yummy, maybe-not-so-authentic Italian classic.',
            'Pho Dai Loi - an excellent Vietnamese restaurant, and my favorite pho spot.',
            'Chick-fil-a - maybe not a "restaurant", but it is too good to not add to the list.'
        ]
    }
})

var conditional = new Vue({
    el: '#conditional',
    data: {
        teacherName: '',
        photoCity: ''
    }
})

var getColor = new Vue({
    el: '#function',
    data: {
        bgColor: '',
        colors: ['red', 'green', 'blue', 'purple', 'gold']
    }, 
    methods: {
        changeColor(color) {
            this.bgColor = color;
        }
    }
})