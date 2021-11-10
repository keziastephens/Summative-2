console.log('linked');
// const searchFilter = document.querySelector('#searchFilter');

let locationArray = [
    {
        id: 101,
        type: 'Hotel',
        location: 'Queenstown',
        name: 'Heritage Hotel',
        people: '1-2',
        minPeople: 1,
        maxPeople: 2,
        nights: 'Min 1 - Max 5',
        minNight: 1,
        maxNight: 5,
        price: 157,
        wifi: 'yes', 
        image: '../img/hotels/heritage-01.jpg',
        imageTwo: '../img/hotels/heritage-02.jpg',
        imageThree: '../img/hotels/heritage-03.jpg',
        imageFour: '../img/hotels/heritage-04.jpg',
        imageFive: '../img/hotels/heritage-05.jpg',
        info: `You can enjoy soaking in the view of the Remarkables mountain range, rising from the waters of Lake Wakatipu, from the comfort of Heritage Queenstown. Crafted from centuries-old stone and cedar, this sophisticated hotel is suitable for business and leisure stays and boasts stunning views over Lake Wakatipu and Queenstown. It is located within a 5-minute drive from the town centre.

        It features an outdoor swimming pool, spa pool, fitness centre and sauna, and an elegant restaurant. Guests enjoy unlimited complimentary WiFi.
        
        Heritage Queenstown offers modern, alpine-style accommodation in peaceful, scenic surroundings. Accommodation choices include Deluxe hotel rooms with options for families, 2-bedroom apartments and large open-plan studio suites.
        
        The property is a 10-minute drive from Shotover River. It is 13 minutes' drive from Queenstown International Airport.`
    },
    {
        id: 102,
        type: 'Hostel',
        location: 'Queenstown',
        name: 'Adventure Hostel',
        people: '1',
        minPeople: 1,
        maxPeople: 1,
        nights: 'Min 1 - Max 10',
        minNight: 1,
        maxNight: 10,
        price: 30,
        wifi: 'no',
        image: '../img/hostels/adventure-01.jpeg',
        imageTwo: '../img/hostels/adventure-02.jpeg',
        imageThree: '../img/hostels/adventure-03.jpeg',
        imageFour: '../img/hostels/adventure-04.jpeg',
        imageFive: '../img/hostels/adventure-05.jpeg',
        imageSix: '../img/hostels/adventure-06.jpeg',
        info: `Situated in Queenstown and with Skyline Gondola and Luge reachable within less than 1 km, Adventure Queenstown Hostel features a tour desk, non-smoking rooms, free bikes, free WiFi throughout the property and a shared lounge. Boasting barbecue facilities, the hostel is close to several noted attractions, around 500 m from Fear Factory Queenstown, 800 m from Queenstown Chamber Of Commerce and less than 1 km from Queenstown Lakes District Library. The accommodation provides evening entertainment and a shared kitchen.

        The hostel offers a sun terrace.
        
        Queenstown Event Centre is 7 km from Adventure Queenstown Hostel, while Lake Wakatipu is 250 m from the property. The nearest airport is Queenstown Airport, 8 km from the accommodation.`
    },
    {
        id: 103,
        type: 'Motel',
        location: 'Queenstown',
        name: 'Colonial Village Motel',
        people: '2-4',
        minPeople: 2,
        maxPeople: 4,
        nights: 'Min 3 - Max 10',
        minNight: 3,
        maxNight: 10,
        price: 90,
        wifi: 'yes',
        image: '../img/motels/colonial-01.jpg',
        imageTwo: '../img/motels/colonial-02.jpg',
        imageThree: '../img/motels/colonial-03.jpg',
        imageFour: '../img/motels/colonial-04.jpg',
        imageFive: '../img/motels/colonial-05.jpg',
        imageSix: '../img/motels/colonial-06.jpg',
        info: `Boasting rooms with stunning mountain and lake views, Colonial Village Motel is just a 5-minute walk from Lake Wakatipu. Free parking is available.

        A fully equipped kitchenette with a stove, microwave and fridge is standard in all rooms apart from the Two Bedroom which includes a full kitchen and oven. After a day out you can relax on the terrace or watch TV.
        
        Central Queenstown is just a 10-minute walk and Skycity Casino is a 20-minute walk away. Bring your bicycle and enjoy a ride around Lake Wakatipu where you can stop for a coffee at the Frankston Marina.
        
        The tour desk can help organise activities such as skydiving, bungee jumping and jet boating. Colonial Village Motel has a bus stop right outside.`
    },
    {
        id: 104,
        type: 'House',
        location: 'Queenstown',
        name: 'Modbox Rua',
        people: '1-4',
        minPeople: 1,
        maxPeople: 4,
        nights: 'Min 2 - Max 15',
        minNight: 2,
        maxNight: 15,
        price: 240,
        wifi: 'yes',
        image: '../img/houses/modbox-01.jpg',
        imageTwo: '../img/houses/modbox-02.jpg',
        imageThree: '../img/houses/modbox-03.jpg',
        imageFour: '../img/houses/modbox-04.jpg',
        imageFive: '../img/houses/modbox-05.jpg',
        imageSix: '../img/houses/modbox-06.jpg',
        info: `This brand new, 2 bedroom property is perfectly nestled on Queenstown Hill. Enjoy uninterrupted views of Lake Wakatipu and The Remarkables mountain range. Located on a quiet street, with floor to ceiling windows this property is ultra private and comfortable.
        
        
        FEATURES
        • 2 bedrooms
        • 1 bathroom
        • Fully functional modern kitchen
        • Open plan living area
        • Breakfast bench with 4 seats
        • Freeview TV in the living area and master bedroom
        • Apple TV with Netflix account
        • Ultra fast, unlimited Fibre internet
        • Heat pump and bedroom heaters
        • Off street parking (plenty)
        • Washing machine and dryer
        • Ski/snowboard drying room
        
        
        BEDDING CONFIGURATIONS
        • Bedroom 1 - King bed
        • Bedroom 2 - King bed that can split into 2 singles
        
        
        WHY STAY HERE
        This property is located conveniently close to Queenstown CBD and the airport. Perfect for couples or small groups who want to enjoy Queenstown in luxury and style - but with the comforts of a well thought out holiday home.`
    },
];


// function filterSearchWord(){



// };

// searchFilter.addEventListener("click", filterSearchWord)