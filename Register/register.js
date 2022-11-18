const addParticipant = document.getElementById("add")
addParticipant.addEventListener("click", newParticipant)

const addFees = document.getElementById("submitButton")
addFees.addEventListener("click", submitHandler)
let number = 1



function newParticipant(){
	number++
	const html = participantTemplate(number)
	document.querySelector("#add").insertAdjacentHTML("beforebegin",html)
	
}


function participantTemplate(numParticipants){
	

	return `<section class="participant${numParticipants}">
	<p>Participant ${numParticipants}</p>
	<div class="item">
	  <label for="fname"> First Name<span>*</span></label>
	  <input id="fname${numParticipants}" type="text" name="fname" value="" required />
	</div>
	<div class="item activities">
	  <label for="activity">Activity #<span>*</span></label>
	  <input id="activity${numParticipants}" type="text" name="activity" />
	</div>
	<div class="item">
	  <label for="fee">Fee ($)<span>*</span></label>
	  <input id="fee${numParticipants}" type="number" name="fee" />
	</div>
	<div class="item">
	  <label for="date">Desired Date <span>*</span></label>
	  <input id="date${numParticipants}" type="date" name="date" />
	</div>
	<div class="item">
	  <p>Grade</p>
	  <select>
		<option selected value="" disabled selected></option>
		<option value="1">1st</option>
		<option value="2">2nd</option>
		<option value="3">3rd</option>
		<option value="4">4th</option>
		<option value="5">5th</option>
		<option value="6">6th</option>
		<option value="7">7th</option>
		<option value="8">8th</option>
		<option value="9">9th</option>
		<option value="10">10th</option>
		<option value="11">11th</option>
		<option value="12">12th</option>
	  </select>
	</div> 
	</section>`
}
function totalfees(){
	let feeElements = document.querySelectorAll("[id^=fee]");
	console.log(feeElements);

	feeElements = [...feeElements];
	const feetotal = feeElements.reduce((total, item)=> total + parseFloat(item.value),0);
	return feetotal;
}

function submitHandler(event){
	event.preventDefault();
	const newTotal = totalfees()
	const outputElement = document.querySelector("#summary")
	const adultName = document.getElementById("adult_name").value
	const data = {name:adultName, number:number, total:newTotal}
	outputElement.insertAdjacentHTML("afterbegin", summary(data))
	document.querySelector(".registerForm").classList.add('hide')

	
}
function summary(data){
	
	return `Thanks ${data.name} for registering. You have registered ${data.number} participants and owe $${data.total} in Fees.`

}


