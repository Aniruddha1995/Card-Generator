var submitButton = document.getElementById("submit_btn");
const imageURLs = [
	"https://5.imimg.com/data5/KQ/DR/MY-10256359/thermal-imagers-500x500.jpg",

	"https://media.istockphoto.com/photos/colored-powder-explosion-on-black-background-picture-id1057506940?k=6&m=1057506940&s=612x612&w=0&h=C11yA-ESqeuCX63QkRpPyWmAMXJJvZw0niQluGnATlI=",
	"https://image.shutterstock.com/image-photo/sunset-coast-lake-nature-landscape-260nw-1960131820.jpg",
];
var cardContainer = document.getElementById("card_container");

/*const cardHTML = `<div class="card" style="width: 18rem">
					<img class="card-img-top" src="" alt="Card image cap" />
					<div class="card-body">
						<h5 class="card-title">Card title</h5>
						<p class="card-text">
							Some quick example text to build on the card title
							and make up the bulk of the card's content.
						</p>
						<a href="#" class="btn btn-primary">Go somewhere</a>
					</div>
				</div>
			</div>`;*/

const generateCard = (name, course_name, author_name) => {
	var imageURL = imageURLs[Math.floor(Math.random() * imageURLs.length)];

	var card = `	<div class="card" style="width: 18rem">
					<img
						class="card-img-top"
						src="${imageURL}"
						alt="Card image cap"
					/>
					<div class="card-body">
						<p class="card-text">
							<button type="button" class="btn btn-warning">
								Name
								<span class="badge">${name}</span>
							</button>
							<button type="button" class="btn btn-success">
								Course Name
								<span class="badge">${course_name}</span>
							</button>
							<button type="button" class="btn btn-danger">
								Author
								<span class="badge">${author_name}</span>
							</button>
						</p>
					</div>
				</div>`;
	return card;
};

const handleSubmit = () => {
	const loadingBanner = document.getElementById("loading_text");
	loadingBanner.style.display = "block";

	setTimeout(() => {
		// Hide the loading banner after 3 seconds(3000 miliseconds)
		loadingBanner.style.display = "none";
	}, 3000);

	const name = document.getElementById("user_name");
	const course_name = document.getElementById("course_name");
	const author_name = document.getElementById("author_name");

	let doc = document
		.createRange()
		.createContextualFragment(
			generateCard(name.value, course_name.value, author_name.value)
		);
	cardContainer.append(doc);
};

submitButton.onclick = handleSubmit;
