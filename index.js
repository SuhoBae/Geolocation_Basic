document.querySelector("body").innerHTML = `
<h1>Geolocation 2000.</h1>
<button class="js-locationMeBtn">Locate me!</button>
<div class="js-output"></div>
`;

const locationMeBtn = document.querySelector(".js-locationMeBtn"),
  output = document.querySelector(".js-output");

const createMapImage = (lat, lng) => {
  const imageURL = `https://maps.googleapis.com/maps/api/staticmap?center=&{lat},&{lng}&size=800x800&zoom=15&marker=color:purple|label:U|&{lat},&{lng}&maptype=hybrid&key=AIzaSyD--5zZ9gn1490OAplEo9yyZczMCXjifFw`;
  const image = new Image();
  image.src = imageURL;
  output.appendChild(image);
};

const locationError = () => {
  output.innerHTML = "<h2>Can't locate you</h2>";
};

const locationSucces = position => {
  output.innerHTML = "<h2>Get you!</h2>";
  const {
    coords: { latitude, longitude }
  } = position;
  console.log(position);
  createMapImage(latitude, longitude);
  //https://maps.googleapis.com/maps/api/staticmap?center=37.544146999999995,126.83578220000001&size=600x600&zoom=12
  //const latitude = position.coords.latitude
};

const getLocation = () => {
  output.innerHTML = "<h2>Locating you...</h2>";
  const geoOptions = {
    enableHighAccuracy: true
  };
  navigator.geolocation.getCurrentPosition(
    locationSucces,
    locationError,
    geoOptions
  );
};

locationMeBtn.addEventListener("click", getLocation);
