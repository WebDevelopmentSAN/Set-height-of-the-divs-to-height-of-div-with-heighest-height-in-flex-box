$(document).ready(function() {
  var maxHeight = 0;
  
  // Loop through each div and find the max height
  $('.columns-wrap').each(function() {
    var height = $(this).height();
    if (height > maxHeight) {
      maxHeight = height;
    }
  });
  
  // Set the height of all divs to the max height
  $('.columns-wrap').height(maxHeight);
});
