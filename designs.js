// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

/// Wrapped it into an IIFE(Immediately Invoked Function Expression) to protect namespacing.
(function(document){
    'use strict';

    /// Cache selectors to avoid redundant DOM lookups.
    const elements = {
        colorPicker: document.getElementById('colorPicker'),
        gridCanvas: document.getElementById('pixel_canvas'),
        widthInput: document.getElementById('input_width'),
        heightInput: document.getElementById('input_height')
    };

    /*This is done binding the event handlers.*/
    const init = function() {

        // Build the grid event listener.
        document.getElementById('sizePicker').addEventListener('submit', makeGrid, false);

        // Set the grid color listener.
        elements.gridCanvas.addEventListener('click', setGridColor);
    };

    /*Event object*/
    function makeGrid(event) {
        /// Prevent the form from submitting to a non-existent back-end, to avoid page refreshment.
        event.preventDefault();

        /// Make it out into a separate function.
        const gridSize = getGridSize();

        /// Clear the HTML to reset the canvas.
        clearCanvas();

        /// Build up each row.
        for (let row = 0; row < gridSize.numberOfRows; row++) {
            let tr = elements.gridCanvas.insertRow(row);

            // For this row, insert each td.
            for (let col = 0; col < gridSize.numberOfColumns; col++) {
                
                tr.insertCell(col);
            }
        }
    }


    /*Description Set the selected grid's background color.*/
    function setGridColor(event) {
        let color = elements.colorPicker.value;

        event.target.setAttribute('style', 'background-color: ' + color);
    }

    /// I like to break out separate tasks
    /// into helper functions. Why?
    /// 1. To make the code more readable and reusable.
    /// 2. Separate out separate tasks for Single Responsibility.


    /*Description Clear the grid canvas' HTML.*/
    function clearCanvas() {
        elements.gridCanvas.innerHTML = '';
    }

    /*Get selected grid size.Returns an object*/
    function getGridSize() {
        let numberOfRows = elements.heightInput.value;
        let numberOfColumns = elements.widthInput.value;

        return {
            numberOfColumns: parseInt(numberOfColumns),
            numberOfRows: parseInt(numberOfRows)
        }
    }

    init();

}(document));
