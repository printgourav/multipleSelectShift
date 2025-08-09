      let lastChecked = null;
      let shiftheldChecked = null;
      
      let checkboxes = document.querySelectorAll('ul input[type="checkbox"]');
      let checkedBoxes = Array.from(checkboxes);
     /* checkboxes.forEach((checkbox) => {
      checkbox.addEventListener("change", (e) => {
          lastChecked = e.target; //update lastChecked
        });
      });*/

// Optimized the code with a single forEach to O(n).

      checkboxes.forEach((checkbox) => {  // Check if shift key held with click
        checkbox.addEventListener("click", (e) => {
       if(checkbox.checked && e.shiftKey === true){
          shiftheldChecked = e.target;  //shiftheldChecked update
      let start = checkedBoxes.indexOf(lastChecked);
      let end = checkedBoxes.indexOf(shiftheldChecked);
      
      let begin = Math.min(start,end); 
      let complete = Math.max(start,end);
      
      for(let i = begin; i<=complete; i++){
         checkedBoxes[i].checked = true;
        }  
    }
      else {
        lastChecked = e.target;
      }
  });
});
