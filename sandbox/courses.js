// courses.js
const aCourse = {
	code: "CSE121b",
	name: "Javascript Language",
	catalogYear: "2018",
	sections:[
		 { sectionNum: 1, roomNum: 'STC 353', enrolled: 26, days: 'TTh', instructor: 'Bro T'},
	{ sectionNum: 2, roomNum: 'STC 347', enrolled: 28, days: 'TTh', instructor: 'Sis A'}
	]
  };

function findSection(section){
	return section.sectionNum == this.toFind;
}

function setCourseName(course){
	document.querySelector('#courseName').textContent = course.name;
	document.querySelector('#courseCode').textContent = course.code;
}

function sectionTemplate(section){
	return `<tr>
				<td>${section.sectionNum}</td>
				<td>${section.roomNum}</td>
				<td>${section.enrolled}</td>
				<td>${section.days}</td>
				<td>${section.instructor}</td>
			</tr>`
}

function renderSections(sections) {
	const html = sections.map(
	  (section) => `<tr>
	  <td>${section.sectionNum}</td>
	  <td>${section.roomNum}</td>
	  <td>${section.enrolled}</td>
	  <td>${section.days}</td>
	  <td>${section.instructor}</td></tr>`
	);
	document.querySelector("#sections").innerHTML = html.join("");
  }

setCourseInfo(aCourse);
renderSections(aCourse.sections);

  aCourse.sections.find(function(item){
	aCourse.findSection(item,1)
  })

