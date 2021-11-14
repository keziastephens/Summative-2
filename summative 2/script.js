console.log('linked');


// ===================================================================
// start of query selectors
// ===================================================================

const submitByn = document.querySelector('#submitBtn');
// const searchFilter = document.querySelector('#searchFilter');


// ===================================================================
// end of query selectors
// ===================================================================





// ===================================================================
// start of arrays
// ===================================================================

let objectArray = [
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
        imageSix: '',
        longitude: -45.03705503488247, 
        latitude: 168.64221621662745,
        address: '91 Fernhill Road, Queenstown 9300',
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
        longitude: -45.03109706843424, 
        latitude: 168.6607642700365,
        address: '36 Camp Street, Queenstown 9300',
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
        longitude: -45.033658410996054,
        latitude: 168.67620516931336,
        address: '136 Frankton Road, Queenstown 9300',
        tags: ['motel', 'queenstown', 'colonial', 'colonial village', 'colonial village motel', 'village'],
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
        longitude: -45.01925336056335, 
        latitude: 168.70922560639272,
        address: '21 Perkins Road, Frankton, Queenstown 9300',
        info: `This brand new, 2 bedroom property is perfectly nestled on Queenstown Hill. Enjoy uninterrupted views of Lake Wakatipu and The Remarkables mountain range. Located on a quiet street, with floor to ceiling windows this property is ultra private and comfortable.
        
        This property is located conveniently close to Queenstown CBD and the airport. Perfect for couples or small groups who want to enjoy Queenstown in luxury and style - but with the comforts of a well thought out holiday home.        
        
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
        • Ski/snowboard drying room`
    },
    {
        id: 105,
        type: 'Hotel',
        location: 'Wanaka',
        name: 'Edgewater Hotel',
        people: '1-2',
        minPeople: 1,
        maxPeople: 2,
        nights: 'Min 1 - Max 5',
        minNight: 1,
        maxNight: 5,
        price: 157,
        wifi: 'yes',
        image: '../img/hotels/edgewater-01.jpg',
        imageTwo: '../img/hotels/edgewater-02.jpg',
        imageThree: '../img/hotels/edgewater-03.jpg',
        imageFour: '../img/hotels/edgewater-04.jpg',
        imageFive: '../img/hotels/edgewater-05.jpg',
        imageSix: '../img/hotels/edgewater-06.jpg',
        longitude: -44.69409967568055, 
        latitude: 169.11240812698765,
        address: 'Sargood Drive, 9305 Wanaka, New Zealand',
        info: `Edgewater is located on the edge of Lake Wanaka, only 2 km from Wanaka town centre. The property offers picturesque lake views, a day spa, a sauna and a tennis court. Staff are able to converse in English and Chinese.

        The hotel has a restaurant and a café, both offering lake views. Guests can enjoy great New Zealand cuisine and a wide range of regional wines. Chinese options for breakfast are available.
        
        Element Edgewater Day Spa is located on-site with stunning views of Lake Wanaka and the surrounding Mountains. It offers a variety of massage, beauty and spa treatments. Kayaking on the lake can be arranged, as well as mountain biking in the surrounding countryside. There is also an on-site children's playground for entertainment.`
    },
];

// ===================================================================
// end of arrays
// ===================================================================






// ===================================================================
// start of user input function
// ===================================================================


function userSubmit(event){
    event.preventDefault();
    // created an array of months of the year
    let months = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"];
    let msDay = 1000 * 3600 * 24;

    // how to get data from the date input
    const checkInDate = new Date($('#checkInDate').val());
    const checkOutDate = new Date($('#checkOutDate').val());
    console.log(checkInDate);

    // how to get the individual data of day, month and year
    let checkInDay = checkInDate.getDate(),
        checkInMonth = checkInDate.getMonth(),
        checkInYear = checkInDate.getFullYear(),
        checkOutDay = checkOutDate.getDate(),
        checkOutMonth = checkOutDate.getMonth(),
        checkOutYear = checkOutDate.getFullYear();

    // looked at how to join the data - join function turns
    // an array into a string
    let checkInDetails = [checkInDay,checkInMonth,checkInYear].join('/');
    let checkOutDetails = [checkOutDay,checkOutMonth,checkOutYear].join('/');
    console.log(checkInDetails);
    console.log(checkOutDetails);
    console.log(checkInDate, checkOutDate);


    if ( (checkInDate == 'Invalid Date') || (checkOutDate == 'Invalid Date') ){
        alert('Please enter check in and check out dates');
    } else if( checkInDate.getTime() >= checkOutDate.getTime() ){
        alert('check out day cant be before check in date');
    }

   //    calculate the difference
   let difference = checkOutDate.getTime() - checkInDate.getTime();
//    console.log(difference);
   //converts time to a day value from ms
   let dayDifference = difference/msDay;
   console.log(dayDifference);

   let valueOfPeople = ($("#valueOfPeople").val());
   console.log(valueOfPeople);

   displayOptions(dayDifference, valueOfPeople)
    
};

// ===================================================================
// end of user input function
// ===================================================================





// ===================================================================
// start of card displaying function
// ===================================================================

function displayOptions(nights, guests){
    console.log(nights);
    console.log(guests);
    $('#acommodationCardContainer').empty();
    for(let i = 0; i < objectArray.length; i++){
        if( ((nights >= objectArray[i].minNight) && (nights <= objectArray[i].maxNight) && (guests >= objectArray[i].minPeople) && (guests <= objectArray[i].maxPeople)) ){
            generateCard(i)
    }
}

// ===================================================================
// start of card displaying function
// ===================================================================











// ===================================================================
// start of generate card container
// ===================================================================

function generateCard(x){
    $('#acommodationCardContainer').append(
        `
        <div class="card" style="width: 18rem;">
            <img src="${objectArray[i].image}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${objectArray[i].name}</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's contentz.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
        `    
    )
};

// ===================================================================
// end of generate card container
// ===================================================================

};

// submitBtn.addEventListener('click', userSubmit);
