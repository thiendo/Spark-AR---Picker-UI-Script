/**
 * (c) Facebook, Inc. and its affiliates. Confidential and proprietary.
 */

//==============================================================================
// Welcome to scripting in Spark AR Studio! Helpful links:
//
// Scripting Basics - https://fb.me/spark-scripting-basics
// Reactive Programming - https://fb.me/spark-reactive-programming
// Scripting Object Reference - https://fb.me/spark-scripting-reference
// Changelogs - https://fb.me/spark-changelog
//
// For projects created with v87 onwards, JavaScript is always executed in strict mode.
//==============================================================================

// How to load in modules
const Scene = require('Scene');

// Use export keyword to make a symbol available in scripting debug console
export const Diagnostics = require('Diagnostics');

/*** Load Picker UI & Textures library ***/
const NativeUI = require('NativeUI');
const Textures = require('Textures');

// Enables async/await in JS [part 1]
(async function() {

    /*** Define textures and show as pickers ***/
    const button1 = Textures.get('hat1');
    const button2 = Textures.get('hat2');
    const button3 = Textures.get('hat3');
    const button4 = Textures.get('hat4');
    
    /*** Define null objects (Options) ***/
    const option1 = Scene.root.find('Option1');
    const option2 = Scene.root.find('Option2');
    const option3 = Scene.root.find('Option3');
    const option4 = Scene.root.find('Option4');
    
    /*** Define picker module ***/
    const picker = NativeUI.picker;

    /*** Set default index ***/
    const index = 0;

    /*** Start ***/
    const configuration = {

      // Set default selected button
      selectedIndex: index,

      // Define pickers
      items: [
        {image_texture: button1},
        {image_texture: button2},
        {image_texture: button3},
        {image_texture: button4},
      ]

    };

    picker.verticalAlign = 'top';
    picker.configure(configuration);
    picker.visible = true;

    picker.selectedIndex.monitor().subscribe(function(index) {
        
        if ( index.newValue == 0 ) { // Click button 1 and show Option1
            // Show Option1
            option1.hidden = false;
            // Hide other Options
            option2.hidden = true;
            option3.hidden = true;
            option4.hidden = true;
            
            Diagnostics.log(index.newValue);
        } 
        else if ( index.newValue == 1 ) { // Click button 2 and show Option2
            // Show Option2
            option2.hidden = false;
            // Hide other Options
            option1.hidden = true;
            option3.hidden = true;
            option4.hidden = true;
        }
        else if ( index.newValue == 2 ) { // Click button 3 and show Option3
            // Show Option3
            option3.hidden = false;
            // Hide other Options
            option1.hidden = true;
            option2.hidden = true;
            option4.hidden = true;
        }
        else if ( index.newValue == 3 ) { // Click button 4 and show Option4
            // Show Option4
            option4.hidden = false;
            // Hide other Options
            option1.hidden = true;
            option2.hidden = true;
            option3.hidden = true;
        } 
        else {
            // Nothing
        }
    });
})();
