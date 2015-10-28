/* function that starts when the buttom in the HTML code is clicked */
function startquiz(){ 
    var statusSwitch;
    
    var counter;
    
    /* Gets Users Name */
    var name = prompt( "Before we start the quiz, can you please " +
		       "tell me your name?" ) 
    
    if( isNaN (name) ) {
	statusSwitch = 1;
	counter = 0;
    } else if ( name === "" ) { 
	statusSwitch = 5;
	counter = 5;
    } else {
	statusSwitch = 6;
	counter = 6;
    }
    
    
    function question1() {
	var alertString;
	var paragraph;
	
	var answer1 = prompt("Question 1: Have I ever worked at Jamba Juice?");
	console.log(answer1)
	if (answer1.toLowerCase() === "yes" || answer1.toLowerCase() === "y"){
	    statusSwitch++;
	    counter++;
	    alertString = "Correct, I was a pro at making smoothies.";
	    paragraph = document.getElementById('alert1');
	    paragraph.innerHTML = alertString;
	} else if ( answer1.toLowerCase() === "no" ||
		    answer1.toLowerCase() === "n" ) {
	    statusSwitch++;
	    alertString = "Sorry the correct answer was yes. " +
		          "I am a pro when it comes to making smoothies."
	    paragraph = document.getElementById('alert1');
	    paragraph.innerHTML = alertString;
	} else if ( answer1 === "" ) {
	    statusSwitch = 5;
	    counter = 5;
	} else {
	    alert("That is not a valid answer. Please enter yes or no");
	    statusSwitch = 1;
	}
	return true;
    }
    
    function question2() {
	var alertString;
	var paragraph;
	var answer2 = prompt( "Do I know the extension of pi to 50 " +
			      "decimal places?" );
	console.log(answer2)
	if (answer2.toLowerCase() === "yes" || answer2.toLowerCase() === "y"){
	    statusSwitch++;
	    alertString = "Unfortunately no, but that would be really cool " +
		          "if I did. 3.1415 is about as far as I can get.";
	    paragraph = document.getElementById('alert2');
	    paragraph.innerHTML = alertString;
	} else if ( answer2.toLowerCase() === "no" ||
		    answer2.toLowerCase() === "n") {
	    statusSwitch++;
	    counter++;
	    alertString = "Correct, 3.1415 is about as far as I can get. ";
	    paragraph = document.getElementById('alert2');
	    paragraph.innerHTML = alertString;
	} else if (answer2 === "") {
	    statusSwitch = 5;
	    counter = 5;
	} else {
	    alert("That is not a valid answer. Please enter yes or no");
	    statusSwitch = 2;
	}
	return true;
    }
    
    function question3() {
	var alertString;
	var paragraph;
	var answer3 = prompt("Is there a video of me falling on my face " +
			     "while dunking a basketball on YouTube?" );
	console.log(answer3)
	if (answer3.toLowerCase() === "yes" || answer3.toLowerCase() === "y" ) {
	    statusSwitch++;
	    counter++;
	    alertString = "Correct, if you click on the image below you can " +
		          "watch the video. Don't worry I was okay.";
	    paragraph = document.getElementById('alert3');
	    paragraph.innerHTML = alertString;
	} else if ( answer3.toLowerCase() === "no" ||
		    answer3.toLowerCase() === "n") {
	    statusSwitch++;
	    alertString = "Unfortunately the answer is yes. If you click on " +
		          "the image below you can watch the video. Don't " +
		          "worry I was okay.";
	    paragraph = document.getElementById('alert3');
	    paragraph.innerHTML = alertString;
	} else if (answer3 === "") {
	    statusSwitch = 5;
	    counter = 5;
	} else {
	    alert("That is not a valid answer. Please enter yes or no");
	    statusSwitch = 3;
	}
	return true;
    }
    
    
    /* The below while loop stays in while loop until all questions have 
       been answered or user presses cancel. */
    while(statusSwitch < 4){
	
	/* The below code does the same if else statement for the 3 questions. 
	   Asks a question, logs it to the console and tells the user if they 
	   got the answer correct or not. If they did get it correct, add 1 to 
	   counter. If the user enters something that is not a string, it will 
	   ask the question again. If the user presses cancel or enters a empty 
	   string then it will break out of the while loop.  */
	if(statusSwitch === 1) {
	    question1();
	}
	
	if (statusSwitch === 2){
	    question2();
	}
	
	if (statusSwitch === 3){
	    question3();
	}
    }
    
    /*The below if-else statements thanks for user for playing and displays 
      their name along with saying how many answers they got correct out of 
      the 3 questions. */

    // I would change these IF statements to a CASE statement -john
    if(counter === 0 ) {
	alert("Thanks for playing the quiz " + name + ", you got " +
	      counter + " out of 3 questions correct.")
    }
    else if (counter === 1){
	alert("Thanks for playing the quiz " + name + ", you got " +
	      counter + " out of 3 questions correct.")
    }
    else if (counter === 2) {
	alert("Thanks for playing the quiz " + name + ", you got " +
	      counter + " out of 3 questions correct.")
    }
    else if (counter === 3) {
	alert("Thanks for playing the quiz " + name + ", you got " +
	      counter + " out of 3 questions correct.")
    }
    
    else if(counter === 5){
	alert( "Looks like you have entered a empty string or hit cancel " +
	       "during the quiz. If you would like to start the quiz over " +
	       "please hit the start quiz button again." )
    }
    else if(counter === 6) {
	alert("That is not a valid name, please hit the start " +
	      "quiz button again.")
	
    }
    else{
	alert("Something is wrong with program. Please Try Again.")
    }
    
    
}
