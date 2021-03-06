
 if (Meteor.isClient) {

	Template.voice.onRendered(() => {
	Meteor.setTimeout( function() {
	Goodbye();	
	}, 10000);	
    var commands = {
      'Wake up': {'regexp':/^(Wake up|Wakeup|Wake-up)$/, 'callback':function() {
        console.log('Hello world!');
		document.getElementById('cover').style.width = "0";
		document.getElementById('cover').style.height = "0";     
		var handle = Meteor.setTimeout(function() {Goodbye();},30000);
		Session.set("handleid",handle);
	  }},

      'Go to sleep': {'regexp':/^(Go to sleep|Gotosleep|Go tosleep|Goto sleep|Go-to-sleep)$/, 'callback':Goodbye},
	  
	  'Stay awake': {'regexp':/^(Stay awake|Stayawake|Stay-awake)$/,'callback':function() {
		  var handle = Session.get("handleid");
		  Meteor.clearTimeout(handle);
	  }},
	  
	  'reload': function() {
		  location.reload(true);
	  }
    };
	
	
    
	annyang.addCommands(commands);

    annyang.start();
  });
  
  var Goodbye = function() {
        console.log('Goodbye World!');
		document.getElementById('cover').style.position = "absolute";
		document.getElementById('cover').style.padding = "0";
		document.getElementById('cover').style.margin = "0";
		document.getElementById('cover').style.top = "0";
		document.getElementById('cover').style.left = "0";
		document.getElementById('cover').style.width = "100%";
		document.getElementById('cover').style.height = "100%";
		document.getElementById('cover').style.background = "black";
		
	  }

}